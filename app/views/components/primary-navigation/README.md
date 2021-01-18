Use the primary navigation component to let users navigate and search your service.

{{ dsExample({
  name: 'primary-navigation',
  example: 'default',
  height: 150
}) }}

You must use this component with the [header](/components/header) component.

### Links

You must only include links to top level sections within your service.

Do not put calls to action in the primary navigation. For example, ‘Create case’ should be an action from within the ‘cases’ section and not a link inside the primary navigation.

### Inline search

If your service can search anything, use an inline search form.

{{ dsExample({
  name: 'primary-navigation',
  example: 'inline-search',
  height: 180
}) }}

### Toggle search

If your service can only search for certain things, use a toggle search form.

You must tell users what they are searching for in the form hint text, and how they can search using the `data-moj-search-toggle-text` attribute.

{{ dsExample({
  name: 'primary-navigation',
  example: 'toggle-search',
  height: 250
}) }}

## Research on this component

We need more research. If you have used the primary navigation component, get in touch to share your research findings.

## Contribute to this component

You can contribute to this component via the [design system backlog](https://github.com/ministryofjustice/moj-design-system-backlog/issues/46)
