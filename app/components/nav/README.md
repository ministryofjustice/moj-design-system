# Navigation

## Introduction

Use the navigation component to display primary navigation.

## Guidance



## Examples

### Example 1

#### Macro
```
{{ appNavigation({
    items: [
      {
        text: 'Get started',
        href: '/get-started',
        selected: sectionId == 'get-started'
      },
      {
        text: 'Principles',
        href: '/principles',
        selected: sectionId == 'principles'
      },
      {
        text: 'Styles',
        href: '/styles',
        selected: sectionId == 'styles'
      },
      {
        text: 'Components',
        href: '/components',
        selected: sectionId == 'components'
      },
      {
        text: 'Patterns',
        href: '/patterns',
        selected: sectionId == 'patterns'
      },

      {
        text: 'Content',
        href: '/content',
        selected: sectionId == 'content'
      }
    ]
  }) }}
```

#### Markup
```
<nav class="app-nav">
  <ul class="app-nav__list">
    <li class="app-nav__list-item">
    <a href="/get-started">Get started</a>
    </li>
    <li class="app-nav__list-item">
      <a href="/principles">Principles</a>
    </li>
    <li class="app-nav__list-item">
      <a href="/styles">Styles</a>
    </li>
    <li class="app-nav__list-item">
      <a href="/components">Components</a>
    </li>
    <li class="app-nav__list-item">
      <a href="/patterns">Patterns</a>
    </li>
    <li class="app-nav__list-item">
      <a href="/content">Content</a>
    </li>
  </ul>
</nav>
```

## Arguments

This component accepts the following arguments.

### Container
|Name|Type|Required|Description|
|---|---|---|---|
|items|array|Yes|Array of navigation item objects. See [items](#items)|
|classes|string|No|Classes to add to the navigation container.|
|attributes|object|No|HTML attributes (for example data attributes) to add to the navigation container.|

### Items
|Name|Type|Required|Description|
|---|---|---|---|
|href|string|No|Link for the navigation item. If not specified, the navigation item is a normal list item.|
|text|string|Yes|If `html` is set, this is not required. Text to use within the navigation item. If `html` is provided, the `text` argument will be ignored.|
|html|string|Yes|If `text` is set, this is not required. HTML to use within the navigation item. If `html` is provided, the `text` argument will be ignored.|
|selected|boolean|no| |


*Warning: If you’re using Nunjucks macros in production be aware that using HTML arguments, or ones ending with `.html` can be at risk from [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. More information about security vulnerabilities can be found in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).*

## Licence

Unless otherwise stated, this codebase is released under the [MIT License](https://github.com/whatterz/moj-design-system/blob/master/LICENSE). This covers both the codebase and any sample code in the documentation.