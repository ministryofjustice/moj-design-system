Use the Primary Navigation component to let users navigate top level locations in your service. Optionally, you can also enable a globally accessible search feature.

{{ dsExample({
  name: 'primary-navigation',
  example: 'default',
  height: 150
}) }}

## When to use this component

Use this together with the [header](/components/header/) component for non-citizen facing services. This component comes directly after the header.

### With inline search

You can configure this component to show an inline search form. Use this type of search when users can search everything within a service.

{{ dsExample({
  name: 'primary-navigation',
  example: 'inline-search',
  height: 180
}) }}

<!-- #### With toggle search

You can configure this component to show a toggleable search form. Use this type of search when users can only search for certain things in a certain way. For example, searching for cases via case reference number or party.

{{ dsExample({
  name: 'primary-navigation',
  example: 'toggle-search',
  height: 250
}) }} -->

### Navigation links

The primary navigation should contain top level links for locations within your service. So if your service contains cases and appointments, they should be primary navigation items.

Don't put calls to action in the primary navigation area. For example, "Create case" should belong within the "cases" section and not within the primary navigation bar.

## When not to use this component

Don't use this for citizen facing services as they should use the GOV.UK Design System's [header and navigation](https://design-system.service.gov.uk/components/header/) component.

## How it works

There are 2 ways to use the primary navigation component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/), you can use the Nunjucks macro.

## Research on this component

We need more research. If you have used the primary navigation component, get in touch to share your research findings.

## Contribute to this component

You can contribute to this component via the [design system backlog](https://github.com/ministryofjustice/mojdt-design-system-backlog/)