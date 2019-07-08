Use the rich text editor component to let users format their input in a text area.

{{ dsExample({
  name: 'rich-text-editor',
  example: 'default',
  height: 450
}) }}

## Guidance

### When to use this component

Use this when a user needs to format a message with HTML.

### When not to use this component

Don't use this if the user only needs to send a basic message.

### How it works

There are 2 ways to use the badge component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/), you can use the Nunjucks macro.

### Configuration

By default, the toolbar has bullet and numbered list buttons. You can turn these off if you don't need them.

You can also add bold, underline and italic buttons but these styles should be used with caution because:

- underlined text can be confused with links
- bold and italic should be used sparingly

### Research on this component

This component has been used successfully in the following services:

- Judicial case manager (Her Majesty’s Courts and Tribunals Service)

## Contribute to this component

You can contribute to this component via the [design system backlog](https://github.com/ministryofjustice/mojdt-design-system-backlog/)
