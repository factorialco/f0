# Development

## Install nodejs

The recommended approach is to use the `asdf` dependency manager. On MacOS +
Homebrew:

```bash
$ brew install asdf
$ echo -e "\n. $(brew --prefix asdf)/libexec/asdf.sh" >> ${
```

Then open a new terminal:

```bash
$ asdf plugin add nodejs
```

Then, `cd` into the project's directory and:

```bash
$ asdf install
```

This should leave you with a fully working nodejs version.

### Start the project

First, install the dependencies:

```bash
$ npm install
```

Then run the storybook server:

```bash
$ npm start
```

## How to use local version of `f0` in your repo (ex. `factorial`'s monorepo)

- Go to the `f0` folder: `cd f0`
- Run `pnpm link --global` to add the package to the local links
- Go to your package: `cd factorial/frontend`
- Run `pnpm link --global @factorialco/f0` to use the local version of the
  package
- NOTE: Remember to run `pnpm i` to install the dependencies
