# ASAB WebUI Components

This is a simple library used for importing the ASAB WebUI components to various applications via package.json

## Usage

In your application, install the library with following command

```
yarn add -D https://github.com/Pe5h4/asab-webui-components
```
## Dependencies

- reactstrap

## TODO

- Remove custom sample `MyButton` component
- Remove duplications in webpack configurations (webpack.commonjs.build.js and webpack.esm.build.js shares very same code except some small differencies - use webpack.common for that)
- Implement all reusable components from ASAB WebUI + ASAB WebUI styling components
- Remove/update `cil` dependencies (styles, components)
