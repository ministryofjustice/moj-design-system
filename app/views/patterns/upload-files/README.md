Help users upload one or more files using one of the following:

- stepped single file upload
- stepped multi-file upload
- bulk file upload

## Stepped single file upload

<img src="/public/images/patterns/upload-file-single.png">

### When to use the stepped single file upload pattern

Use this pattern when you're asking users to upload one file.

### When not use the stepped single file upload pattern

Don't use this pattern if you're asking users to upload multiple files, or if users need to upload single files repeatedly like they might have to do in a case working system. Use the stepped multi-file upload or a bulk file upload pattern instead.

### How the stepped single file upload pattern works

A single file upload works by using the native file input to let users select a file one at a time.

You can also let users enter additional information along with the file itself. Here's two examples:

- files often have long, meaningless names which makes them difficult to find later. You can let users enter a friendly name, to help them find it easily later.
- files come with very little meta data, so you can let users provide a comment to associate with the file.

If you add additional fields, then you should show the answers on the check screen with the file. If the file is an image, then show users a preview. If the file is a spreadsheet, then show the values in a table.

### Single file upload steps

#### 1. Upload screen

{{ dsExample({
  name: 'upload-files',
  example: 'default',
  section: 'patterns',
  height: 700
}) }}

#### 2. Check screen

{{ dsExample({
  name: 'upload-files',
  example: 'check',
  section: 'patterns',
  height: 1300
}) }}

## Stepped multi-file upload

<img src="/public/images/patterns/upload-file-multiple.png">

### When to use the stepped multi-file upload pattern

Use this pattern when you're asking users to upload multiple files.

### When not use the stepped multi-file upload pattern

You should try using this pattern, even for repeat-use interfaces like case working systems. But if your research shows this pattern isn't efficient enough, you should use the bulk file upload pattern.

### How the stepped multi-file upload pattern works

This pattern uses the first two steps of the stepped single file upload pattern. It has an additional screen to let users choose to add another file if they need to.

Like the stepped single file upload pattern you can also let users enter additional information along with the file itself. Here's two examples:

- files often have long, meaningless names which makes them difficult to find later. You can let users enter a friendly name, to help them find it easily later.
- files come with very little meta data, so you can let users provide a comment to associate with the file.

If you add additional fields, then you should show the answers on the check screen with the file. If the file is an image, then show users a preview. If the file is a spreadsheet, then show the values in a table.

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

## Bulk file upload

<img src="/public/images/patterns/upload-file-bulk.png">

### When to use the bulk file upload pattern

The bulk file upload patterns lets users upload files quickly which can be better for frequently used interfaces like case working systems.

### When not to use the bulk file upload pattern

Do not use this pattern for citizen facing services or users with low digital literacy. You should use the stepped single file (or multi-file) upload pattern in these cases.

### How the bulk file upload pattern works

The bulk file upload pattern works by letting users select multiple files at a time—either with the native file picker or by dragging and dropping them onto the dropzone.

Once files are selected or dropped, files are uploaded immediately using AJAX. For each dropped file, upload progress is shown in real time underneath the dropzone.

Once the files are uploaded, they're either marked as successfully uploaded or unsuccessfully uploaded (as an error). No error summary is shown at the top of the page. Error are associated to the file input using the `aria-describedby` attribute.

You can use this pattern on its own or as part of a larger form with multiple questions.

### When JavaScript is unavailable

The component works differently when JavaScript is unavailable.

1. There's no dropzone.
2. A separate upload button appears underneath the file input. Pressing this should submit the entire form and show errors as normal as well as successfully uploaded files just underneath the file input. Users can upload additional files if they wish.
3. An error summary appears at the top. If there are multiple errors, both errors focus the same file input.
4. Inline errors are shown just above the file input.
5. If the user selects the continue button, the entire form is validated. If all fields are valid, the user proceeds to the next step—even if they wanted to upload more files. You can add a check file page afterwards to let users review the files they've added. See the stepped multi-file pattern for an example.

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

Uploading files involves a tricky number of interactions such as scanning or taking a photo, putting it on the computer, selecting it from the file system and waiting for it to be uploaded. For these reasons, try not to ask users to upload files where ever possible.

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