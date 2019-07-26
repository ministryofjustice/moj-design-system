Use the filter layout in tandem with the [filter component](/components/filter/).

## Exploded view

{{ dsExample({
  name: 'filter-layout',
  example: 'default',
  height: 300,
  section: 'styles'
}) }}

## How it works

Place the filter inside `.moj-filter-layout__filter` and the list inside `.moj-filter-layout__content`.

The list will expand to fill the available space.

In large screens, the filter will be shown by default on the left handside.

On small screens (and when JavaScript is enabled), the filter will show as an overlay which is triggered using the [filter menu button](/patterns/filter-menu-button/) pattern. See the [filter component](/components/filter/) for a full example.