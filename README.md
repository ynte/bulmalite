# vue-bulma
A wip unofficial vue implementation of the Bulma CSS framework

## Install
`npm install vue-bulma`

## Usage
Register all components with
```javascript
import 'vue-bulma'
```

Or register individual components with
```javascript
import 'vue-bulma/lib/components/icon';
```

Component names are prefixed with 'vb-';

You can also register them locally
```javascript
import Dropdown from 'vue-bulma/lib/components/dropdown/dropdown.vue';

new Vue({
  el: '#app'
  components: {
    'vb-dropdown': Dropdown,
  }
})
```
