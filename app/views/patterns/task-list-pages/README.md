This MOJ pattern is different from the standard GDS one in two ways:
- it adds a grey 'Incomplete' marker to tasks not completed
- it changes the final 'check and submit' link into a button

These changes solve issues we have seen in testing where people do not complete all sections, or do not realise they need to hit the final link to submit their response.

Task list pages help users understand:
- the tasks involved in completing a transaction
- the order they should complete tasks in
- when they have completed tasks

<img src="/public/images/patterns/task-list.png" alt="A screenshot of the task list pattern in use. It is placed directly above the H1." />

## When to use this component

Only use a task list page for longer transactions involving multiple tasks that users may need to complete over a number of sessions.

Try to simplify the transaction before you use a task list page. If you’re able to reduce the number of tasks or steps involved, you may not need one.

## How it works

You should show a task list page:
- at the start of the transaction
- at the start of each returning session

When using a task list page in your service you need to:
- group related actions into tasks
- show the status of each task

If there are lots of tasks to complete, you might also need to group them into sub-sections.

### Show the status of the task

Whenever you show a task list page, make it clear to users which tasks they’ve completed by labelling them ‘Completed’.

If the user has not completed the task, use the ‘Incomplete’ label.

<!-- IMAGE -->

### Group related actions into tasks

Group related activities and questions into tasks, for example, ‘Provide financial evidence’ and ‘Give medical information’. This will help users understand and plan what they need to do.

Where possible, task names should:
- describe what the task or activity will involve
- start with verbs, for example, ‘check’, ‘declare’, ‘report’
- not be phrased as questions as people think they can skip these if the answer is ‘no’

### Group tasks into sections

If your transaction involves lots of tasks, make it manageable by splitting it up into sections that represent stages in the process.

Avoid a ‘Before you start’ section, as users will skip this because it implies they actually start at the next section.

Where possible, allow users to complete tasks in any order. This will help them plan their time and complete sections as and when they can.

## Research on this pattern

We need more research. If you have used the support, get in touch to share your research findings.

The Civil Money Claims team have been testing this variation of the task list pattern.

It has mostly solved issues where people skip tasks, or do not realise they need to click the final link (now a button) to submit their response.

The only issue we have seen is that one person thought ‘incomplete’ meant the task had been started but not finished.

## Contribute to this pattern

You can contribute to this pattern via the [design system backlog](https://github.com/ministryofjustice/moj-design-system-backlog/)

