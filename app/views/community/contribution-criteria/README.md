The MOJ follows the [GOV.UK Design System contribution criteria](https://design-system.service.gov.uk/community/contribution-criteria/). The only difference is that contributions will be reviewed by the MOJ's [Design System Working Group](/community/design-system-working-group/).

The contents of the Design System must be of a high quality and meet user needs. To guarantee this, all components and patterns need to meet certain criteria.

## New proposals

To be successful, proposals need to show that the component or pattern being suggested would be useful and unique.

{{ govukTable({
  caption: "New proposals criteria",
  captionClasses: "govuk-visually-hidden",
  firstCellIsHeader: true,
  classes: "app-table--constrained",
  head: [
    {
      text: "Criteria"
    },
    {
      text: "Description"
    }
  ],
  rows: [
    [
      {
        text: "Useful"
      },
      {
        html: "<p> There is evidence that this component or pattern would be useful for many teams or services.</p>
        <p class='govuk-!-margin-bottom-0'>Evidence could be screenshots or links to versions of it being used in different services.</p>"
      }
    ],
    [
      {
        text: "Unique"
      },
      {
        html: "<p> It does not replicate something already in the Design System. </p>
        <p class='govuk-!-margin-bottom-0'>If it’s intended to replace an existing component or pattern, there is evidence to show that it’s better than the existing version.</p>"
      }
    ]
  ]
}) }}


The [Design System Working Group](/community/design-system-working-group/) reviews proposals in the [community backlog](/community/backlog/) to check they meet these criteria. Proposals that meet the criteria will then be marked 'to do', ready to be worked on.

## Before a component or pattern is published

The working group reviews the implementation to make sure it is usable, consistent and versatile.

{{ govukTable({
  caption: "Before publication criteria",
  captionClasses: "govuk-visually-hidden",
  firstCellIsHeader: true,
  classes: "app-table--constrained",
  head: [
    {
      text: "Criteria"
    },
    {
      text: "Description"
    }
  ],
  rows: [
    [
      {
        text: "Usable"
      },
      {
        html: "<p>It has been tested  in user research and shown to work with a representative sample of users, including those with disabilities.</p>

        <p class='govuk-!-margin-bottom-0'>Components and patterns which are not proven usable can be published as experimental. But they must be clearly based on relevant user research from other organisations and best practice, and meet the other criteria.</p>"
      }
    ],
    [
      {
        text: "Consistent"
      },
      {
        html: "<p>It reuses existing styles and components in the Design System where relevant.</p>

        <p>Both the guidance and any content included in examples must follow the <a href='https://www.gov.uk/guidance/style-guide/a-to-z-of-gov-uk-style'>GOV.UK content style guide</a>.</p>

        <p class='govuk-!-margin-bottom-0'>If there is code, it follows the <a href='https://github.com/ministryofjustice/moj-frontend/blob/main/CONTRIBUTING.md#conventions-to-follow'>MOJ Frontend coding standards</a> and is ready to merge in <a href='https://www.npmjs.com/package/@ministryofjustice/frontend'>MOJ Frontend</a>.</p>"
      }
    ],
    [
      {
        text: "Versatile"
      },
      {
        html: "<p>The implementation is versatile enough that the component or pattern can be used in a range of different services that may need it.</p>

        <p>For example, a versatile date input component could be set up to ask for a year only, a month and year only, a precise date, or any other combination you may need.</p>

        <p class='govuk-!-margin-bottom-0'>The component or pattern must also have been tested and shown to work with a range of <a href='https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices'>browsers, assistive technologies and devices</a>.</p>"
      }
    ]
  ]
}) }}
