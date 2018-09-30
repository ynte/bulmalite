# Bulmalite
A wip unofficial Vue implementation of the Bulma CSS framework.

The principles behind this project:
* Modular component registration
* Leverage typescript functionality
* Usage of Scoped slots instead of child components
* Bulma style modifier props
* Modifiers exist to add functionality, not for removing them
* Prefer native bulma css classes when possible

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
Register all components with
```javascript
import 'bulmalite'
```

Or register individual components with
```javascript
import 'bulmalite/lib/components/icon';
```

Component names are prefixed with 'bl-';

You can also register them locally, under any name you like
```javascript
import Dropdown from 'bulmalite/lib/components/dropdown/dropdown.vue';

new Vue({
  el: '#app'
  components: {
    'bl-dropdown': Dropdown,
  }
})
```
## Development
Bulmalite is developed using typescript. View models are class style and contained in a seperate .ts file.

Compile the typescript files with either `tsc -d`, `tsc -d -w` or `npm run dev`. To transfer the .vue template files from /src to /lib you can use the included script by running `npm run collect`.