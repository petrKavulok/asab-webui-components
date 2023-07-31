## Usage

Import the style library as

```
@import "~asab-webui-components/src/styles/index.scss";

span {
	background-color: $primary;
}
```

or using the CSS import (**note: using this approach we can't use the predefined color constants**)

```
@import "~asab-webui-components/dist/styles/index.css";

span {
	background-color: var(--dark-blue);
}
```
