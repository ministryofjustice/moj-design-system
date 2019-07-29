Help users upload one or more files.

## Flows

### Single file

<img src="/public/images/patterns/upload-file-single.png">

### Multiple files

<img src="/public/images/patterns/upload-file-multiple.png">

## Screens

### 1. Upload screen

{{ dsExample({
  name: 'upload-files',
  example: 'default',
  section: 'patterns',
  height: 700
}) }}

### 2. Check screen

{{ dsExample({
  name: 'upload-files',
  example: 'check',
  section: 'patterns',
  height: 1300
}) }}

### 3. Add another (if applicable)

{{ dsExample({
  name: 'upload-files',
  example: 'add-another',
  section: 'patterns',
  height: 1000
}) }}

## How it works

Avoid asking users to upload a file as it's a difficult interaction.

You can change the content to suit your needs.

The check screen can be changed based on what the user uploads. If the user uploads a spreadsheet, you can display it in a table. If the user uploads an image, you can give users a preview of it. You can make the image full width to let users see as much detail as possible.

For errors, use the GOV.UK Design System [file error templates](https://design-system.service.gov.uk/components/file-upload/#error-messages).

## Additional fields

There are times when you might want to ask users for additional information alongside the file itself.

For example, when uploading a receipt, a comment about what the receipt relates to might help you validate a claim or help users explain what part of the receipt is applicable.

Files often have long, meaningless complex file names. This makes it difficult to find the file later. In this case you can let users provide a human friendly file name too.

If you add additional fields, then you can also show the answers on the check screen alongside the file.

## Reducing file sizes

Large files can slow users down which is especially the case in repeat-use, frequently used services like a case working system.

It can be helpful to automatically reduce the file size of the upload files.

## Bulk file uploading

Bulk file uploading lets users upload files quickly which might be more appropriate in repeat use interfaces like case working systems.

Only use this pattern if you have evidence that the above patterns are not working well enough.

### Without JavaScript

{{ dsExample({
  name: 'upload-files',
  example: 'bulk-no-js',
  section: 'patterns',
  height: 580
}) }}

## Known gaps

These patterns are useful for infrequently used services or for users with low digital literacy.

We're working on an accessible bulk file upload pattern with drag and drop capability.

## Research on this pattern

The basis of these patterns have been used successfully at the Home Office. We have adopted and tweaked the patterns.

If you have used these patterns, get in touch to share your research findings.

## Contribute to this pattern

You can contribute to this pattern via the [design system backlog](https://github.com/ministryofjustice/mojdt-design-system-backlog/)
