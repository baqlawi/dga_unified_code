import { h } from "@stencil/core";
export class DgaDateFieldUsage {
    constructor() {
        this.value = '';
    }
    render() {
        return (h("div", { key: '4a966af0678e0aeae7ca40589118f49d2104dff7' }, h("h1", { key: '827019410828d74f2b637573baaa82b5333df531' }, "Date Field Example"), h("div", { key: '748a2518c18cb0bf5d1b6f88eca3b7f3fd7e996c', style: { padding: '50px' } }, h("div", { key: 'b6b94257b16fd991b83ab83a70635a13514606ec', style: { display: 'flex', flexDirection: 'column', gap: '16px' } }, h("dga-data-table", { key: '88c3f44778987104bee445643c1331aec4a86c84', cells: [
                {
                    colSpan: 1,
                    isFilter: true,
                    isSort: true,
                    propertyName: 'city',
                    sort: 'up',
                    title: 'city',
                    type: 'propertyName',
                },
                {
                    colSpan: 1,
                    isFilter: true,
                    isSort: true,
                    propertyName: 'price',
                    sort: 'down',
                    title: 'price',
                    type: 'propertyName',
                },
                {
                    colSpan: 1,
                    isFilter: true,
                    isSort: true,
                    propertyName: 'state',
                    title: 'state',
                    type: 'element', // <-- change this
                    El: row => h("dga-button", { label: row.state }, console.log(row, 'roooooow')), // <-- use a functional component
                },
            ], contained: true, data: [
                {
                    city: 'Dallas',
                    h_id: '3',
                    price: '162500',
                    selected: false,
                    state: 'TX',
                    zip: '75201',
                },
                {
                    city: 'Bevery Hills',
                    h_id: '4',
                    price: '319250',
                    selected: false,
                    state: 'CA',
                    zip: '90210',
                },
                {
                    city: 'New York',
                    h_id: '5',
                    price: '962500',
                    selected: false,
                    state: 'NY',
                    zip: '00010',
                },
            ], getSelectedRows: function vu() { }, pressOnFilter: function vu() { }, rowDivider: true, showSelectCheckBox: true })))));
    }
    static get is() { return "dga-data-table-usage"; }
    static get states() {
        return {
            "value": {}
        };
    }
}
