import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Dropdown extends Vue {
    dropdownState = false;

    clickableDropdownState = false;
}
