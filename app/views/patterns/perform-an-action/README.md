Help users perform an action.

## Identity bar

<!-- <video role="region" aria-label="Identity action buttons, this video has no audio." controls muted>
  <source src="/public/videos/identity-bar-actions.mp4" type="video/mp4">
</video> -->

### When to use the identity bar

Use the [Identity Bar](/components/identity-bar/) component for action buttons when the user may need to take action from any page within the particular entity.

### When not to use the identity bar

Some actions should only be shown for the specific page like linking one case to another. In these cases you should use a different approach explained next.

## Page heading with actions

<!-- <video role="region" aria-label="Page header action buttons, this video has no audio." controls muted>
  <source src="/public/videos/page-header-actions.mp4" type="video/mp4">
</video> -->

### When to use the page header actions component

Use the [Page Header Actions](/components/page-header-actions/) component when the user needs to perform an action relating to a specific section of a system but doesn't specifically relate to anything within the page.

### When not to use the page header actions component

Don't use the Page Header Actions component if you:

- need to help users perform the same action across sub sections. Use the [Identity Bar](/components/identity-bar/) component instead.
- users are performing actions against a specific component within the page. See information below.

## Buttons within the body

<!-- <video role="region" aria-label="In-page action buttons, this video has no audio." controls muted>
  <source src="/public/videos/in-page-actions.mp4" type="video/mp4">
</video> -->

### When to use the buttons within the page

Use buttons within the page when the action relates to a component within the page.

## Button placement

You should first left align buttons underneath the component they relate to. When adding items to a long list place it [above the list](/patterns/filter-a-list/) so that users don't have to scroll past the list.

## Removing distraction when within a flow

When taking an action, users should be taken to a new page with as much of the screen paraphernalia removed as possible including the original list of items.

A back link should be placed at the top left of each page of the flow.

You can include a cancel link below the continue button to help users leave a multi-page flow more easily.

## Repeat use actions

If the user has to perform the same action many times within a single session, adding an item should end by taking the user back to where they started with a [success message](/components/banner/) at the top of the page.

## Infrequent or dangerous actions

If the user is performing an important action or if that action is taken infrequently, show users a [check answers](https://design-system.service.gov.uk/patterns/check-answers) page followed by a [confirmation page](https://design-system.service.gov.uk/patterns/confirmation-pages).

## Actions versus navigation items

Don't put actions inside the [primary navigation](/components/primary-navigation/) or [sub navigation](/components/sub-navigation/) components.

## Research on this pattern

More research is needed on this pattern.

## Contribute to this pattern

You can contribute to this pattern via the [design system backlog](https://github.com/ministryofjustice/mojdt-design-system-backlog/)
