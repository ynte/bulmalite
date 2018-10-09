import { Component, Vue, Prop } from 'vue-property-decorator';

import sortHelper from '../../utils/sort';

export interface IHeaderItem {
    name: string;
    property?: string;
}

@Component
export default class Table extends Vue {
    @Prop()
    headers: IHeaderItem[] | string[];

    @Prop()
    items: any[];

    @Prop(Boolean)
    isSortable: boolean;

    @Prop()
    sortOn: string;

    parsedSort: string | null = null;

    desc = false;

    created() {
        if (this.sortOn) {
            this.parsedSort = this.sortOn;
        }
    }

    /**
     * The header list we'll use in the view always takes the form of IHeaderItem[]
     */
    get parsedHeaders(): IHeaderItem[] {
        if (this.isHeaderItemList(this.headers)) {
            return this.headers;
        } else {
            const headers: IHeaderItem[] = [];

            for (const item of this.headers) {
                headers.push({
                    name: item,
                });
            }

            return headers;
        }
    }

    /**
     * Re-order the items when we're sorting
     */
    get parsedItems() {
        if (this.parsedSort && this.items) {
            return this.items.sort(sortHelper(this.parsedSort, this.desc));
        } else {
            return this.items;
        }
    }

    /**
     * Check if the input headers prop contains objects or strings
     * @param headers
     */
    isHeaderItemList(headers: IHeaderItem[] | string[]): headers is IHeaderItem[] {
        return headers.length === 0 || (headers as IHeaderItem[])[0].name !== undefined;
    }

    setSort(property: string) {
        this.parsedSort = property;
        this.desc = false;
    }
}
