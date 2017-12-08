# Sample Fable JavaScript Library

Sample project describing the use of Fable and F# to develop a JavaScript library

## Requirements

* [dotnet SDK](https://www.microsoft.com/net/download/core) 2.0 or higher
* [node.js](https://nodejs.org) 6.11 or higher
* A JS package manager: [`yarn`](https://yarnpkg.com) or [`npm`](http://npmjs.com/)

> `npm` comes bundled with node.js, but we recommend to use at least `npm` 5. If you have `npm` installed, you can upgrade it by running `npm install -g npm`.

Although is not a Fable requirement, on macOS and Linux you'll need [Mono](http://www.mono-project.com/) for other F# tooling like Paket or editor support.

## Editor

The project can be used by editors compatible with the new .fsproj format, like VS Code + [Ionide](http://ionide.io/), Emacs with [fsharp-mode](https://github.com/fsharp/emacs-fsharp-mode) or [Rider](https://www.jetbrains.com/rider/). **Visual Studio for Mac** is also compatible but in the current version the package auto-restore function conflicts with Paket so you need to disable it: `Preferences > Nuget > General`.

## Building the library

> In the commands below, `yarn` is the tool of choice. If you want to use npm, just replace `yarn` by `npm` in the commands.

1. Install JS dependencies: `yarn install`
2. Install F# dependencies: `dotnet restore`
3. Start Fable daemon, and run [`fable-splitter`](https://www.npmjs.com/package/fable-splitter): `cd src && dotnet fable yarn-build`

> `dotnet fable yarn-build` (or `npm-build`) is used to start the Fable daemon and run a script in `package.json` concurrently. It's a shortcut of `yarn-run [SCRIPT_NAME]`, e.g. `dotnet fable yarn-run build`.

When you want to output the JS code to disk, run `dotnet fable yarn-build` in `./src`, and you'll get a JS bundle in the `dist` folder.

As a convenience, `cd src && dotnet` is exposed as a script within `package.json`, allowing the use of `dotnet` tools from the project root, e.g. `yarn dotnet fable yarn-build`.

## Publishing the library

Since this is meant to be consumed by other JavaScript libraries, the project is setup to be published to the npm package registry. Once you have an account with npm, publishing is as simple as

```
npm publish
```

Read more on [publishing npm packages](https://docs.npmjs.com/getting-started/publishing-npm-packages).

## Consuming the library

Once your library is published to a package registry, your users will be able to consume it in their code:

```javascript
const {printPairsPadded} = require('sample-fable-javascript-library');

console.log(printPairsPadded(' ', ' ', [
  ['foo', 'bar'],
]));
```

## Project structure

### Paket

[Paket](https://fsprojects.github.io/Paket/) is the package manager used for F# dependencies. It doesn't need a global installation, the binary is included in the `.paket` folder. Other Paket related files are:

- **`paket.dependencies`**: contains all the dependencies in the repository.
- **`paket.references`**: there should be one such a file next to each `.fsproj` file.
- **`paket.lock`**: automatically generated, but should be committed to source control, [see why](https://fsprojects.github.io/Paket/faq.html#Why-should-I-commit-the-lock-file).
- **`Nuget.Config`**: prevents conflicts with Paket in machines with some Nuget configuration.

> Paket dependencies will be installed in the `packages` directory. See [Paket website](https://fsprojects.github.io/Paket/) for more info.

### `yarn`/`npm`

- **`package.json`**: contains the JS dependencies together with other info, like development scripts.
- **`yarn.lock`**: is the lock file created by `yarn`, if you use it instead of `npm`.
- **`package-lock.json`**: is the lock file understood by `npm` 5, if you use it instead of `yarn`.

> JS dependencies will be installed in `node_modules`. See [`yarn`](https://yarnpkg.com) and/or [`npm`](http://npmjs.com/) websites for more info.

### `fable-splitter`

[`fable-splitter`](https://www.npmjs.com/package/fable-splitter) is a JS client for Fable that compiles F# files to individual JS files.

- **`splitter.config.js`**: is the configuration file for `fable-splitter`. It allows you to set a few configurable things, like the path of the bundle or [Babel](https://babeljs.io/) options.

### F# source files

The template only contains two F# source files: the project (`.fsproj`) and a source file (`.fs`) in `src` folder.

### Test project

In `./test`, a small Fable app is present to test the project using [Mocha](https://mochajs.org), a JavaScript testing framework capable of testing against Node.js and browsers. Mocha only needs to know where the built test files are in order to ru,n but if you're interested in changing some of the default behavior (e.g. changing the reporter to `dot` or the test interface to `tdd`), be sure to visit [Mocha's documentation](https://mochajs.org/#table-of-contents) for more information.

## License

This sample project is licensed under the MIT License. Your project should define its own license, updating the `license` property in `package.json` and the `LICENSE` file with the appropriate information.
