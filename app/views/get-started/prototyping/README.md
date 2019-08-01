This guide explains how to create prototypes using the MoJ Design System and GOV.UK Prototype Kit.

## Before you start

First you must have followed the [GOV.UK Design System prototype setup guide](https://design-system.service.gov.uk/get-started/prototyping/).

## Installing MoJ Frontend

The MoJ Design System uses MoJ Frontend. To install it run these steps:

1. Open Terminal
2. Change the directory to your prototype. For example, `cd path/to/prototype`
3. Run `npm install @ministryofjustice/frontend --save`

## Updating MOJ Frontend

The current version of MOJ Frontend is **0.0.9-alpha**.

You can check which version your prototype is running by opening `package.json` in the root folder of your prototype. Look for `"@ministryofjustice/frontend"` under `"dependencies"`.

To update your prototype to the latest version of MOJ Frontend:

1. Open `package.json` in the root folder of your prototype in a text editor
2. Under `dependencies`, update the reference to MOJ Frontend to  `"@ministryofjustice/frontend": "0.0.9-alpha”,`
3. Save `package.json`
4. Open Terminal/command line
5. Change the directory to your prototype's directory. For example, `cd path/to/prototype`
6. Run `npm install`
