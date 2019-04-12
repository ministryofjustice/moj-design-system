# MOJ Design System

The MOJ Design System is one place for service teams to find styles, components and patterns for designing Ministry of Justice services.

## Contact the team

The MOJ Design System is maintained by a team at the Ministry of Justice. If you want to know more, please email the [Design System
team](mailto:design-system@digital.justice.gov.uk).

## Installing the design system

The design system runs on Mac, Windows and Linux. At a minimum you’ll need `node.js` (install instructions below) and a web browser.

This guide recommends additional software which will be used later.

You'll need a terminal application to install, start and stop the kit. Using a terminal is sometimes called ‘using the command line’.

### Node.js

Check if you have `node.js`:

```
node --version
```

If it says `command not found` or `Error 0x2 starting node.exe --version` you don’t have node and will need to download and install it.

#### Download and install node.js

**Mac or Windows users**

Download version 10 from [nodejs.org](https://nodejs.org/en/).

Run the installer with all default options.

**Linux users**

Follow the instructions on the [Node.js](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions) site. Make sure you get version 10.

#### Once Node is installed

You’ll need to quit and restart the terminal to be able to use Node for the first time.

To check it is installed correctly you can again run:

```
node --version
```

If it’s installed correctly it should show a number starting with 10.

### Atom (text editor)

You’ll need a text editor to edit and make changes to the design system. We recommend [Atom](https://atom.io/), [Sublime Text](https://www.sublimetext.com/) or [VS Code](https://code.visualstudio.com/).

### Command line tools (Mac)

Mac users will need the OSx Command line tools.

In terminal:

```
xcode-select --install
```

If you already have command line tools, this will display `xcode-select: error: command line tools are already installed, use "Software Update" to install updates`.

If you don’t have command line tools, it will open an installer. Follow the instructions to install the command line tools.

### Install the kit

The simplest way to get the design system is to download it as a zip.

We recommend keeping all your code in one folder called `Projects`.

**Mac users**

Create a folder called `Projects` in your home folder. You can open your home folder by opening a new finder window, and selecting `Go > Home` from the top menu.

**Windows users**

Create a folder called `Projects` in your `Documents` folder.

#### Unzip the design system and move it

Unzip the design system you downloaded - you should end up with a folder called `mojdt-design-system-master`.

Rename the folder to something descriptive for your local version. For this guide, we’ll use `mojdt-design-system`.

Move the folder into your `Projects` folder.

### Terminal basics

The terminal (on mac and linux, git bash on windows) lets you type in commands and run programs on your computer. You can also use it to browse your file system - to open folders, etc.

Learning a few basic terminal commands can make using the kit much easier.

- [Tutorial on using terminal (mac)](http://mac.appstorm.net/how-to/utilities-how-to/how-to-use-terminal-the-basics/)
- [Tutorial on using git bash (windows)](https://openhatch.org/missions/windows-setup/open-git-bash-prompt)

#### Navigating to your local instance

You need to navigate to your local instance in the terminal. Most commands for the kit need to be run in the mojdt-design-system folder.

**Mac users:**

```
cd ~/Projects/mojdt-design-system
```

**Windows users:**

```
cd ~/Documents/Projects/mojdt-design-system
```

### Install the kit

**Install modules**

You need to download extra code used by the design system before it can run. You can get this by running:

```
npm install
```

he install may take up to a minute. Whilst installing it may `WARN` about some items, this is okay. As long as there are no `ERROR`s you can continue.

### Running the kit

In terminal:

```
npm start
```

After the design system has started, you should see a message telling you that the design system is running:

```
Listening on port 3000 url: http://localhost:3000
```

In your web browser, visit [http://localhost:3000](http://localhost:3000). You should see a local, working copy of the design system.

_NB. if port 3000 is already in use, the design system will try and find the next available port, for example 3001._

## Support
This repository is maintained by a team at the Ministry of Justice. If you’ve got a question or need support you can:

- Email design-system@digital.justice.gov.uk.
- [View known issues on GitHub](https://github.com/ministryofjustice/mojdt-design-system/issues).

## Contributing
If you’ve got an idea or suggestion you can:

- Email design-system@digital.justice.gov.uk.
- [Create a GitHub issue](https://github.com/ministryofjustice/mojdt-design-system/issues).

## Licence

Unless otherwise stated, this codebase is released under the [MIT License](https://github.com/ministryofjustice/mojdt-design-system/blob/master/LICENSE). This covers both the codebase and any sample code in the documentation.
