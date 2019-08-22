Use the task list component to show help users understand:

- the tasks involved in completing a transaction
- the order they should complete tasks in
- when they have completed tasks

The [task list pattern](https://design-system.service.gov.uk/patterns/task-list-pages/) is published in the GOV.UK Design System and there is a [coded example of a task list page](https://govuk-prototype-kit.herokuapp.com/docs/templates/task-list) in the GOV.UK Prototype Kit.

{{ dsExample({
  name: 'task-list',
  example: 'default',
  height: 600
}) }}

## When to use this component

Only use a task list page for longer transactions involving multiple tasks that users may need to complete over a number of sessions.

Try to simplify the transaction before you use a task list page. If you're able to reduce the number of tasks or steps involved, you may not need one.

## How it works

You should show a task list page:

- at the start of the transaction
- at the start of each returning session

When using a task list page in your service you need to:

- group related actions into tasks
- show the status of each task

If there are lots of tasks to complete, you might also need to group them into sub-sections.

### Show the status of the task

Whenever you show a task list page, make it clear to users which tasks they've completed by labelling them 'Completed'.

### Group related actions into tasks

Group related activities and questions into tasks, for example, 'Provide financial evidence' and 'Give medical information'. This will help users understand and plan what they need to do.

Where possible, task names should:

- describe what the task or activity will involve
- start with verbs, for example, 'check', 'declare', 'report'

### Group tasks into sections

If your transaction involves lots of tasks, make it manageable by splitting it up into sections that represent stages in the process.

For example, you could group all tasks which help users find out if your service is right for them in a section called 'Check before you start'.

Where possible, allow users to complete tasks in any order. This will help them plan their time and complete sections as and when they can.

### How to use this component

There are 2 ways to use the task list component. You can use HTML or, if you are using [Nunjucks](https://mozilla.github.io/nunjucks/) or the [GOV.UK Prototype Kit](https://govuk-prototype-kit.herokuapp.com/), you can use the Nunjucks macro.


## Research on this component

This pattern was originally developed and tested by a team at the Government Digital Service (GDS).

The team built prototypes of task lists for 3 services, Register as a childminder, Learn to drive and Transport goods and tested them with 34 users over 5 rounds of research.

The pattern was iterated after each round of testing.

### Known issues and gaps

There is evidence that the completed tag might be misleading to some users.

In one instance, [a user saw a task marked 'completed' and thought this meant they had submitted their response](https://github.com/alphagov/govuk-design-system-backlog/issues/72#issuecomment-413159884). As a result, they did not continue to the 'Check and submit your response' task, and were later issued with a court order for not responding.

In addition, user research and feedback on this pattern has shown that:

- some screen reader users are frustrated by having to tab through every section each time they return to the task list after completing a task
- some services need users to complete tasks in a particular order, for example, a user must fill in an application before they can pay
- once a few tasks have been completed it becomes harder to scan the page and spot incomplete tasks
- some users do not realise they have to complete all the tasks before they can continue

### Services using this pattern

This pattern has been used in a number of services, including the following.

- Apply for probate
- Money claims

### Next steps

Work is needed to ensure that users can understand the difference between completing a task and completing the whole service.

In addition, more user research is needed to find out:

- how to help screen reader users to get an overview of the progress they have made through the task list
- whether to return users to the task list after each task or take them straight to the next task in the sequence
- the best way to show when tasks must be completed in a fixed order
- how to ensure users can see which tasks have been completed and which they still need to do

If you have used the task list component, get in touch to share your research findings.

## Contribute to this component

You can contribute to this component via the [design system backlog](https://github.com/ministryofjustice/moj-design-system-backlog/issues/54)
