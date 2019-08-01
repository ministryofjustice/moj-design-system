Help users upload:

- a single file
- multiple files, one at a time
- multiple files at the same time

## A single file

<img src="/public/images/patterns/upload-file-single.png">

### When to use this

Use this pattern when you're asking users to upload just one file.

### When not to use this

Don't use this pattern if you're asking users to upload multiple files, or if users need to upload single files repeatedly like they might have to do in a case working system.

### How it works

Use the [file upload](https://design-system.service.gov.uk/components/file-upload/) component to let users select a file.

You can also let users enter additional information about the file:

- files often have long, meaningless names which makes them difficult to find later. You can let users enter a friendly name, to help them find it easily later.
- files come with very little meta data, so you can let users provide a comment to associate with the file.

If you add additional fields, then you must show the answers on the check screen. If the file is an image, then you can show a preview. If the file is a spreadsheet, then you can show the values in a table.

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

## Multiple files, one at a time

<img src="/public/images/patterns/upload-file-multiple.png">

### When to use this

Use this pattern when users need to upload multiple files.

### When not to use this

If you need to let users upload multiple files, you should start by using this pattern.

It's possible that this approach is too slow for users that are required to upload a lot of files on a frequent basis. In this case you can let users upload multiple files at the same time which is shown later.

### How it works

This pattern uses the first two steps of the stepped single file upload pattern. It has an additional screen to let users choose to add another file if they need to.

You can also let users enter additional information about the file:

- files often have long, meaningless names which makes them difficult to find later. You can let users enter a friendly name, to help them find it easily later.
- files come with very little meta data, so you can let users provide a comment to associate with the file.

If you add additional fields, then you must show the answers on the check screen. If the file is an image, then you can show a preview. If the file is a spreadsheet, then you can show the values in a table.

### 1. Upload screen

{{ dsExample({
  name: 'upload-files',
  example: 'default',
  section: 'patterns',
  height: 700,
  id: '2'
}) }}

### 2. Check screen

{{ dsExample({
  name: 'upload-files',
  example: 'check',
  section: 'patterns',
  height: 1300,
  id: '2'
}) }}

### 3. Add another

{{ dsExample({
  name: 'upload-files',
  example: 'add-another',
  section: 'patterns',
  height: 1000,
  id: '2'
}) }}

## Multiple files at the same time

<img src="/public/images/patterns/upload-file-bulk.png">

### When to use this

Before using this pattern, you should try letting users upload multiple files, one at a time. See guidance above for this.

If research shows it's not working fast enough, use this pattern to let users upload multiple files at the same time. This can be useful in repeat-use services like case working systems.

### When not to use this

Don't use this pattern if your users have low digital literacy. Let users upload multiple files, one at a time instead.

### How it works

This pattern works by letting users select multiple files at a time—either with the native file picker or by dragging and dropping them onto the dropzone.

Once files are added, they're uploaded immediately using AJAX. For each dropped file, upload progress is shown in real time underneath the dropzone.

Once the files are uploaded, they're either marked as successfully uploaded or unsuccessfully uploaded (as an error). No error summary is shown at the top of the page. Errors are associated to the file input using the `aria-describedby` attribute.

You can use this pattern on its own or as part of a larger form with multiple questions.

### When JavaScript is unavailable

The component works differently when JavaScript is unavailable.

1. there's no dropzone.
2. a separate upload button appears underneath the file input. Pressing this should submit the entire form and show errors as normal as well as successfully uploaded files just underneath the file input. Users can upload additional files if they wish.
3. an error summary appears at the top. If there are multiple errors, both errors focus the same file input.
4. inline errors are shown just above the file input.
5. if the user selects the continue button, the entire form is validated. If all fields are valid, the user proceeds to the next step—even if they wanted to upload more files. You can add a check file page afterwards to let users review the files they've added. See the stepped multi-file pattern for an example.

#### 1. Initial state

{{ dsExample({
  name: 'upload-files',
  example: 'bulk-no-js-1',
  section: 'patterns',
  height: 350
}) }}

#### 2. Uploaded state

{{ dsExample({
  name: 'upload-files',
  example: 'bulk-no-js-2',
  section: 'patterns',
  height: 800
}) }}

## Avoid asking users to upload files

Uploading files involves a number of challenging interactions like:

- such as scanning or taking a photo
- transfering it onto a device
- selecting it from the file system
- waiting for it to be uploaded

For these reasons, try not to ask users to upload files whereever possible.

## Accept multiple file types

Let users upload as many different file types as possible. You can convert them automatically if needed. If you must limit file types, then let users know by using hint text.

## Reduce file size automatically

Where ever possible, let users upload large file sizes. But, large files can slow systems down.

If you don't have to show the original file then you should automatically reduce the size of the file and show that instead. You can always store the original file behind the scenes and provide it on request.

## Use the file upload error templates

Use the GOV.UK Design System [file error templates](https://design-system.service.gov.uk/components/file-upload/#error-messages).

## Research on this pattern

If you have used these patterns, get in touch to share your research findings.

## Contribute to this pattern

You can contribute to this pattern via the [design system backlog](https://github.com/ministryofjustice/mojdt-design-system-backlog/)