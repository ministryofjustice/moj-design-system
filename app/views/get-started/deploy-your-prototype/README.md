This guide explains how to deploy prototypes to MoJ's Heroku account.

After following this guide your prototype will automatically deploy any changes that you push to GitHub.

## Before you start

You'll need to be a member of the [moj-design](https://dashboard.heroku.com/teams/moj-design/apps) Heroku team and have your prototype in [MoJ's GitHub account](https://github.com/ministryofjustice).

If you don't have access to these, ask in the Slack channel [#prototyping](https://mojdt.slack.com/messages/C9DSD7NA0) and whoever is managing support that day should be able to add you.

If you don't know how to setup GitHub read the [version your prototype](#) guide.

## Setting up Heroku

We use pipelines in Heroku. Pipelines let you have multiple apps and keep things together in one place.

1. go to the homepage for [moj-design](https://dashboard.heroku.com/teams/moj-design/apps) in Heroku
2. click new in the top right corner of the screen and select `pipeline`
3. name the pipeline `{organisation-abbreviation}-{service-name}`
4. leave the pipeline owner set to `moj-design`
5. in the connect to GitHub section select `ministryofjustice` and type the name of your repo which is normally `{service-name}-prototype` and click search
6. find the correct GitHub repo and click connect
7. click `create pipeline`

If everything has worked you should be taken to the pipeline view. You then need to create an app to deploy your prototype to.

## Creating an app

From the pipeline view.

1. click `Add app` in the production column
2. click `Create new app`
3. give the app a name, normally in the format `{organisation-abbreviation}-{service-name}` this can be the same name as the pipeline (Heroku limit app names to 30 characters and they must be lowercase)
4. set the region to `Europe`
5. click `Create app`

If everything has worked you should see the name of the app in the production column.

You can check that the app has been deployed by selecting `Open app in browser`.

You should see a screen saying 'Error: Username or password not set. See guidance for setting these.' instead of your prototype. Now follow the guidance on setting a username and password for your app.

## Setting a username and password

Prototypes require a username and password when published online. This stops members of the public coming across your prototype by accident.

There are a few different ways you can do this. Here are the instructions for setting this via the Heroku web interface.

1. from your pipeline view click the app name in the production column, this will take you to the overview of the app
2. click the setting tab at the top of the page
3. in the section titled `Config Vars` click the button `Reveal Config Vars`
4. in the `KEY` field type `USERNAME` (all uppercase), in the corresponding `VALUE` field type your chosen username and click `Add`
5. a new set of empty fields will appear, in the `KEY` field type `PASSWORD` (all uppercase), in the corresponding `VALUE` field type your chosen password and click `Add`

You can now navigate back to the pipeline and open the app in a browser to test the username and password.

If this has worked you should see a modal dialogue asking for a username and password.

## Deploying your prototype

1. from the pipeline view app in production click the small dropdown icon within the tile
2. select `Deploy a branch` the default branch is `master` you'll normally want to retain this default
3. click the `Deploy` button

If everything is working you should see a `building app` message.

## Configure automatic deploys

Automatic deploys mean that every push to the `master` branch will deploy a new version of this app.

1. from the pipeline view app in production click the small dropdown icon within the tile
2. select `Configure automatic deploys...`
3. you'll see a dialogue asking you to choose a branch to deploy the default branch is `master` you'll normally want to retain this default
4. click the `Enable Automatic Deploys` button

## Enable review apps

Review apps make it easy for your team to collaborate on design work by easily deploying pull requests. Meaning that the entire team can comment and review design work before you add it to your main prototype.

1. in the review apps column click the `Enable review apps...` button.
2. tick `Create new review apps for new pull requests automatically`
3. tick `Destroy stale review apps` and select an appropriate value (normally after 2 days)
4. click the `Enable` button

From now on every pull request on your repo will create a review app where you and your team can see the changes. Merging pull requests should stop and destroy the review app.

Just like your production app review apps will be protected with the same username and password.
