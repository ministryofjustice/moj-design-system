'use strict';

const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');
const matter = require('gray-matter');
const beautifyHTML = require('js-beautify').html;
const beautifyCSS = require('js-beautify').css;
const beautifyJS = require('js-beautify').js;

// This helper function takes a path of a file and
// returns the contents as string
exports.getFileContents = path => {
  let fileContents;
  try {
    fileContents = fs.readFileSync(path, 'utf8');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.log(err.message);
    } else {
      throw err;
    }
  }
  return fileContents.toString();
}

// This helper function takes a path of a *.md.njk file and
// returns the Nunjucks syntax inside that file without markdown data and imports
exports.getNunjucksCode = path => {
  let fileContents = this.getFileContents(path);
  let parsedFile = matter(fileContents);
  return parsedFile.content;
}

// This helper function takes a path of a *.md.njk file and
// returns the frontmatter as an object
// exports.getFrontmatter = path => {
//   let fileContents = this.getFileContents(path);
//   let parsedFile = matter(fileContents);
//   return parsedFile.data;
// }

// This helper function takes a path of a *.md.njk file and
// returns the HTML rendered by Nunjucks without markdown data
exports.getHTMLCode = path => {
  let fileContents = this.getFileContents(path);
  let parsedFile = matter(fileContents);
  let content = parsedFile.content;
  let html;
  try {
    html = nunjucks.renderString(content);
  } catch (err) {
    if (err) {
      console.log('Could not get HTML code from ' + path);
    }
  }
  return beautifyHTML(html.trim(), {
    indent_size: 2,
    end_with_newline: true,
    // If there are multiple blank lines, reduce down to one blank new line.
    max_preserve_newlines: 1,
    // set unformatted to a small group of elements, not all inline (the default)
    // otherwise tags like label aren't indented properly
    unformatted: ['code', 'pre', 'em', 'strong']
  });
}

exports.getCSSCode = path => {
  let fileContents = this.getFileContents(path);
  let parsedFile = matter(fileContents);
  let content = parsedFile.content;

  return beautifyCSS(content.trim(), {
    indent_size: 2,
    indent_char: ' ',
    end_with_newline: true,
    // If there are multiple blank lines, reduce down to one blank new line.
    max_preserve_newlines: 1
  });
}

exports.getJSCode = path => {
  let fileContents
  try {
    fileContents = this.getFileContents(path);
  } catch (e) {
    return '';
  }

  let parsedFile = matter(fileContents);
  let content = parsedFile.content.replace(/<\/?script[^>]*>/gi, "");

  return beautifyJS(content.trim(), {
    indent_size: 2,
    end_with_newline: true,
    // If there are multiple blank lines, reduce down to one blank new line.
    max_preserve_newlines: 1
  });
}
