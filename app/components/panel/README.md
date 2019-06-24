# Panel

## Introduction

Use the panel component to display important information.

In most cases, the panel component is used on confirmation pages, to tell the user they have successfully completed the transaction.

## Guidance



## Examples

### Example 1

#### Macro
```
{{ appPanel({
    titleText: "Get in touch",
    html: "If you’ve got a question, idea or suggestion share it in #design-system channel on Slack or email the Design System team on <a class='app-panel__link' href='mailto:design-system@digital.justice.gov.uk'>design-system@digital.justice.gov.uk</a>"
  })
}}
```

#### Markup
```
<div class="app-panel">
  <h2 class="app-panel__heading">
    Get in touch
  </h2>
  <p class="app-panel__body">
    If you’ve got a question, idea or suggestion share it in #design-system channel on Slack or email the Design System team on <a class="app-panel__link" href="mailto:design-system@digital.justice.gov.uk">design-system@digital.justice.gov.uk</a>
  </p>
</div>
```

## Arguments

This component accepts the following arguments.

|Name|Type|Required|Description|
|---|---|---|---|
|titleText|string|Yes|If `titleHtml` is set, this is not required. Text to use within the panel. If `titleHtml` is provided, `titleText` will be ignored.|
|titleHtml|string|Yes|If `titleText` is set, this is not required. HTML to use within the panel. If `titleHtml` is provided, `titleText` will be ignored.|
|text|string|Yes|If `html` is set, this is not required. Text to use within the panel content. If `html` is provided, `text` will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the panel content. If `html` is provided, `text` will be ignored.|
|headingLevel|integer|No|Heading level, from 1 to 6. Default is 2.|
|classes|string|No|Classes to add to the panel container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the panel container.|

*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*

## Licence

Unless otherwise stated, this codebase is released under the [MIT License](https://github.com/ministryofjustice/mojdt-design-system/blob/master/LICENSE). This covers both the codebase and any sample code in the documentation.