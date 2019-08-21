Use the banner component to display a prominent message and related actions to take.

{{ dsExample({
  name: 'banner',
  example: 'default',
  height: 225
}) }}

## When to use this component

Use this component when users might be performing an action repeatedly. For example, when a judge creates a batch of questions for sending to the citizen.

## When not to use this component

For rarely performed or important actions, you should use the [Confirmation Page](https://design-system.service.gov.uk/patterns/confirmation-pages/) pattern.

## How it works

There are 2 ways to use the banner component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/), you can use the Nunjucks macro.

The banner should be displayed at the top of the page above the main heading and below the back link if there is one.

It can be configured with and without icons and in different colours for success, warning and information message types.

### Success

This is the default style and should be used when the user performs an action successfully.

{{ dsExample({
  name: 'banner',
  example: 'success',
  height: 175
}) }}

### Warning

Use this variant when you want to warn the user that something went wrong.

{{ dsExample({
  name: 'banner',
  example: 'warning',
  height: 175
}) }}

### Information

Use this variant when you want to tell users some information.

{{ dsExample({
  name: 'banner',
  example: 'information',
  height: 175
}) }}

## Research on this component

This component is marked as experimental because it needs more research.

If you have used the banner component, get in touch to share your research findings.

## Contribute to this component

You can contribute to this component via the [design system backlog](https://github.com/ministryofjustice/moj-design-system-backlog/issues/36)