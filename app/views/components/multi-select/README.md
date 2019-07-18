Use this component to allow users to select multiple items in a list or table.

{{ dsExample({
  name: 'multi-select',
  example: 'default',
  height: 650
}) }}

## Guidance

### When to use this component

Use this component to allow users to select multiple items in a list or table.

### How it works

There are 2 ways to use the multi select component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/), you can use the Nunjucks [table macro](https://design-system.service.gov.uk/components/table/).

The component uses JavaScript to progressively enhance the table component:

{% code %}
<script>
  new MOJFrontend.MultiSelect({
    container: $('.moj-multi-select__select-all-container'),
    checkboxes: $('.govuk-checkboxes__input')
  });
</script>
{% endcode %}

### Research on this component

We need more research. If you have used the multi select component, get in touch to share your research findings.

## Contribute to this component

You can contribute to this component via the [design system backlog](https://github.com/ministryofjustice/mojdt-design-system-backlog/)