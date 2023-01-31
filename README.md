# Sharon Vue UI components
This repository contains libraries of Vue Single File Components (SFCs) which can be used in other projects.

This repo uses TypeScript, [pnpm](https://pnpm.io) for package management, and [Vite](https://vitejs.dev) for building/bundling the libraries.

## Requirements
1. [Node.js](https://nodejs.org/en/download/) (recommend most recent LTS)
2. [pnpm](https://pnpm.io/installation)


## Getting started
After cloning the repo: `cd vue-ui-components`

To run dev server, enter: `pnpm dev`

To build, enter: `pnpm build`

To preview build code in the `dist` folder, enter: `pnpm preview`

## Adding repo as a submodule
To add this repo as a subfolder of an existing git repository use the `git submodule add` command.

For example, the below command was used to add this repo to the Sharon Dashboard repository:
```
git submodule add git@bitbucket.org:karsten/vue-ui-components.git ./Sharon.Dash/Content/vue`
```

Once a submodule has been added to a branch, other can checkout and pull the submodule by running the update command:
```
git submodule update
```