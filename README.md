# Bulmalite
A wip unofficial Vue implementation of the Bulma CSS framework.

Some wishes that lead to the creation of this project:
* Modular component registration
* Leveraging typescript functionality
* Scoped slots in stead of child components
* Bulma style modifier props
* Add modifiers to add functionality not to remove them
* Use native bulma css classes when possible

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

Component names are prefixed with 'vb-';

You can also register them locally
```javascript
import Dropdown from 'bulmalite/lib/components/dropdown/dropdown.vue';

new Vue({
  el: '#app'
  components: {
    'vb-dropdown': Dropdown,
  }
})
```
## Development
Bulmalite is developed using typescript. View models are class style and contained in a seperate .ts file.

Compile the typescript files with either `tsc -d`, `tsc -d -w` or `npm run dev`. To transfer the .vue template files from /src to /lib you can use the included script by running `npm run collect`.