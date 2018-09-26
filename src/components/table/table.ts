import { Component, Vue, Prop } from 'vue-property-decorator';

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
     * Check if the input headers prop contains objects or strings
     * @param headers 
     */
    isHeaderItemList(headers: IHeaderItem[] | string[]): headers is IHeaderItem[] {
        return headers.length === 0 || (headers as IHeaderItem[])[0].name !== undefined;
    }
}
