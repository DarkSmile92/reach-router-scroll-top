# reach-router-scroll-top

Want to have the accessibility features of [Reach Router](https://reach.tech/) and scroll to top after navigating? Get it working with just this one component!

## Install

```sh
npm install --save reach-router-scroll-top
```

## Quickstart

```js
// in your App.js / entry point
import { OnRouteChange } from "reach-router-scroll-top";
// ...
function App() {
	return (
		<div>
			<Router>
				<HomePage path="/" />
			</Router>
			{/* add it after the router! */}
			<OnRouteChange />
		</div>
	);
}
// ...
```

## What it solves

When using [Reach Router](https://reach.tech/), the accessibility features are turned on by default. After scrolling to the bottom at one page and navigating to another page, the newly loaded page will be scrolled to the same distance as the previous.
This can be disabled by setting `primary={false}` at the `Router` component of Reach, but this would also disable the accessibility features.

## What it does

It watches the current location path and if it changed, it will scroll the view to the top.

## Usage

Just add the `<OnRouteChange />` component of this package to your `App.js` component.
**Important:** The component must be rendered outside and after of the `<Router>` component! Otherwise the Reach Router will call `focus()` on the matched route afterwards and will undo the action.

```js
// App.js - main entry point of react application
import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import { OnRouteChange } from "reach-router-scroll-top";
// ...
import HomePage from "./pages/index";

function App() {
	return (
		<div>
			<Router>
				<HomePage path="/" />
			</Router>
			<OnRouteChange />
		</div>
	);
}

export default App;
```

You can also provide a custom action instead:

```js
<OnRouteChange
	action={() => {
		window.scrollTo(0, 0);
	}}
/>
```

## Example

Checkout the [Example code](https://github.com/DarkSmile92/reach-router-scroll-top/tree/main/example) for a working example with create-react-app.

## Documentation

**Component: OnRouteChange**
Parameters:
| Parameter | Default | Description |
| --- | --- | --- |
| action | `() => window.scrollTo(0, 0)` | The action that should be executed after the location changed. |
