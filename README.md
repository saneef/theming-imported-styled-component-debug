# theming-imported-styled-components

## Problem

Our aim to create a collection of UI components, `sample-components`, and use them in other projects, currently for this case `sample-app`.

We should be able to theme the components from `sample-components` in other apps. 

Ref: `packages/sample-app/src/App.js`

The problem we are facing is, with current setup we are not able to theme. The theme provided to `<ThemeProvider>` used in the `App.js` is ignored by the `<Button>` component.

## Running

```bash
$ yarn # Install dependencies
$ yarn start # To start CRA app
```

