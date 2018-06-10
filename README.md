# Cross-platform shop (Web, iOs, Android) using ReactXP

CAUTION: This is an experimental code. Now it isn't stable, isn't production ready and sometimes is ugly

## Concept "Write once, render anywhere"

* Render on platforms
    * WEB (React)
    * Mobile: OS, Android (React Native)
    * Desktop: Windows, MacOS, Linux (React + Electron)
* UI
    * common Universal components
    * and platform-specific where you want
        * navigation: drawer, tabs
        * UI: buttons, tabs, switches ...
    * adaptive for devices: phones | tablets | desktop
    * adaptive for width and rotation changes
* platform-spicific navigation
    * WEB - react-router
    * Mobile - react-navigation
* WEB
    * Server side rendering support
* Tools
    * IntelliSense due to TypeScript typings
    * Hot reloading

## Live demo https://react-cross-platform.github.io/ 

Smells like future front-end!

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/-5VkI0dpHek/0.jpg)](https://www.youtube.com/watch?v=-5VkI0dpHek)

## Current tech stack

### Front-end

* [TypeScript](https://www.typescriptlang.org/)
* [ReactXP](https://facebook.github.io/react-native/) for reusable UI
* Navigation
    * WEB - [React Router](https://reacttraining.com/react-router/)
    * Mobile - [React Navigation](https://reactnavigation.org/)
* [Redux](http://redux.js.org/) to manage app's state
* [Apollo Client](http://dev.apollodata.com/) to manage data from GraphQL API

### Back-end

* [GraphQL](http://graphql.org/) server using [Python Graphene](http://graphene-python.org/) ([Live demo](http://shop.serga.name/graphiql))

## How to install

The commands in the instructions below assume you are in the root of this repo.

### Initial Setup

* run `yarn`. This fetches the dependencies

### Building for Web

* run `yarn run web-watch`. This compiles the TypeScript code and recompiles it whenever any files are changed
* open `index.html` in your browser to view the result

### Building for React Native

* if you work with React Native for first time - try "Building Projects with Native Code" from [Rect Native Getting Started docs](https://facebook.github.io/react-native/docs/getting-started.html) to configure iOS / Android enviroments
* run `yarn run rn-watch`. This compiles the TypeScript code and recompiles it whenever any files are changed.
* in another command prompt run `yarn start`. This starts the React Native Packager
* build and run project
    * for iOS run `react-native run-ios`
    * for Android run `react-native run-android`

Help wanted! https://github.com/react-cross-platform/reactxp-shop/issues