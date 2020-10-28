# Bulmalite
A wip unofficial Vue 3 implementation of the Bulma CSS framework.

The principles behind this project:
* Modularity
* Leveraging of typescript functionality
* Usage of slots in stead of child components
* Bulma style modifier props
* Props add functionality
* Passing of native bulma classes is preferred above custom props

Bulmalite >= 0.6 is only compatible with Vue 3.x

## Comparisons
These comparisons demonstrate some of the effects the principles outlined above.

### Icons
Buefy:
```html
<b-icon pack="fas" icon="user" size="is-small"></b-icon>
```

Bulmalite:
```html
<bl-icon class="is-small" icon="fas fa-user"></bl-icon>
```

`class` is used to pass the native `.is-small` to the icon. The icon itself can be specified in a single prop.

### Modals
Buefy
```html
<b-modal :active.sync="isModalActive" :canCancel="false"></b-modal>
```

Bulmalite
```html
<bl-modal v-model="isModalActive"></bl-modal>
```

Two way binding with bulmalite components uses `v-model` by default. There is no need to disable modal close behavoir options, props can only add functionality.

For example:

```html
<bl-modal v-model="isModalActive" has-modal-close has-background-close></bl-modal>
```
Props use a bulma-like syntax.

## Install
`npm install bulmalite`

## Usage
### Javascript
Register all components as a plugin
```javascript
import { createApp } from 'vue';

import bulmalite from 'bulmalite';

// Create a Vue 3 app the normal way
const myApp = createApp(App);

// Register bulmalite 
myApp.use(bulmalite);

```

Default component names are prefixed with 'bl-';

You can also include individual components from the dist directory
```javascript
import BlDropdown from 'bulmalite/dist/components/dropdown/Dropdown.vue';

// Add the bulmalite component to the vue component options
export default {
  components: {
    BlDropdown,  
  },
  ...
} 
```

### Sass
Bulmalite assumes your dev environment is set up to support .scss files

You can import all stylesheets directly in Javascript or Sass-files
```javascript
import 'node_modules/bulmalite/sass/bulmalite.scss';
```

```scss
@import 'node_modules/bulmalite/sass/bulmalite';
```

Or load individual styles
```javascript
import 'node_modules/bulmalite/sass/components/dropdown.scss';
```

```scss
@import 'node_modules/bulmalite/sass/components/dropdown';
```

## Docs
Documentation is under development in the `/docs/` folder.

## Development
Bulmalite is developed using typescript. View models use the composition API and contained in a seperate .ts file.

Compile the typescript files with either `tsc -d`. To transfer the .vue template files from /src to /lib you can use the included script by running `npm run collect`. `npm run build` takes care of both steps.
