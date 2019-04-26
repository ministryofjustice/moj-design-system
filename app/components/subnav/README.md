# Sub-navigation

## Introduction

Use the sub-navigation component to display secondary navigation.

## Guidance



## Examples

### Example 1

#### Macro
```
{{ appSubNavigation({
  sections: [{
    heading: {
      text: 'Section 1'
    },
    items: [{
      text: 'Content 1',
      href: '/content/content-1',
      selected: pageId == 'content-1'
    },
    {
      text: 'Content 2',
      href: '/content/content-2',
      selected: pageId == 'content-2'
    },
    {
      text: 'Content 3',
      href: '/content/content-3',
      selected: pageId == 'content-3'
    }]
  },
  {
    heading: {
      text: 'Section 2'
    },
    items: [{
      text: 'Content 4',
      href: '/content/content-4',
      selected: pageId == 'content-4'
    },
    {
      text: 'Content 5',
      href: '/content/content-5',
      selected: pageId == 'content-5'
    }]
  }
  ]
}) }}
```

#### Markup
```
<nav class="app-subnav">
  <h4 class="app-subnav__title">Section 1</h4>
  <ul class="app-subnav__list">
    <li class="app-subnav__list-item">
      <a href="/get-started/content-1">Content 1</a>
    </li>
    <li class="app-subnav__list-item">
    <a href="/get-started/content-2">Content 2</a>
    </li>
    <li class="app-subnav__list-item">
      <a href="/get-started/content-3">Content 3</a>
    </li>
  </ul>
  <h4 class="app-subnav__title">Section 2</h4>
  <ul class="app-subnav__list">
    <li class="app-subnav__list-item">
      <a href="/get-started/content-4">Content 4</a>
    </li>
    <li class="app-subnav__list-item">
      <a href="/get-started/content-5">Content 5</a>
    </li>
  </ul>
  <h4 class="app-subnav__title">Section 3</h4>
  <ul class="app-subnav__list">
    <li class="app-subnav__list-item">
      <a href="/get-started/content-6">Content 6</a>
    </li>
  </ul>
</nav>
```

## Arguments

This component accepts the following arguments.

### Container
|Name|Type|Required|Description|
|---|---|---|---|
|sections|array|Yes|Array of navigation section objects. See [sections](#sections)|
|classes|string|No|Classes to add to the navigation container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the navigation container.|

### Sections
|Name|Type|Required|Description|
|---|---|---|---|
|items|array|Yes|Array of navigation item objects. See [items](#items)|
|heading|object|Yes|See [heading](#heading)|

### Heading
|Name|Type|Required|Description|
|---|---|---|---|
|text|string|Yes|If `html` is set, this is not required. Text to use within the section heading. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the section heading. If `html` is provided, the `text` argument will be ignored.|
|headingLevel|integer|No|Heading level, from 1 to 6. Default is 4.|
|classes|string|No|Classes to add to the section heading.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the section heading.|

### Items
|Name|Type|Required|Description|
|---|---|---|---|
|href|string|No|Link for the navigation item. If not specified, the navigation item is a normal list item.|
|text|string|Yes|If `html` is set, this is not required. Text to use within the navigation item. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the navigation item. If `html` is provided, the `text` argument will be ignored.|
|selected|boolean|No| |


*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*

## Licence

Unless otherwise stated, this codebase is released under the [MIT License](https://github.com/whatterz/moj-design-system/blob/master/LICENSE). This covers both the codebase and any sample code in the documentation.