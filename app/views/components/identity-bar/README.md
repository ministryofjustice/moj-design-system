Use the identity bar component to give users context of where they are within a service such as viewing a case, user or fee account.

{{ dsExample({
  name: 'identity-bar',
  example: 'default',
  height: 150
}) }}

## Guidance

### When to use this component

This component is helpful when an entity consists of additional [sub sections](/components/sub-navigation/).

### When not to use this component

Don't use this component if there's only one details page. For example, clicking a case in a case list and seeing a single page of information about the case.

### How it works

There are 2 ways to use the identity bar component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/), you can use the Nunjucks macro.

#### Action menu

You can optionally configure the component to display actions that the user can take from within any sub section.

{{ dsExample({
  name: 'identity-bar',
  example: 'menu',
  height: 150
}) }}

#### Drop down action menu

The action menu uses the [menu](/components/menu/) component which can be configured to show as a drop down menu.

{{ dsExample({
  name: 'identity-bar',
  example: 'toggle-menu',
  height: 275
}) }}

#### Primary button plus secondary action menu

This [menu](/components/menu/) is made up of multiple menus. The first consists of just one button and is exposed because it's a primary action. The second menu consists of two secondary options, which are placed within a drop down menu.

{{ dsExample({
  name: 'identity-bar',
  example: 'secondary-action-menu',
  height: 225
}) }}

### Research on this component

This component has been used in:

- Fees and payments (Her Majesty’s Courts and Tribunals Service)
- Judicial case manager (Her Majesty’s Courts and Tribunals Service)
- Professional case manager (Her Majesty’s Courts and Tribunals Service)

## Contribute to this component

You can contribute to this component via the [design system backlog](https://github.com/ministryofjustice/mojdt-design-system-backlog/)