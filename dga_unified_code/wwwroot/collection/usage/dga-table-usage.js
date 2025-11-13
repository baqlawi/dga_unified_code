import { h } from "@stencil/core";
export class DgaTableUsage {
    render() {
        return (h("div", { key: '819cadc331ac42624b945ffc5b1282d564400804' }, h("h1", { key: 'd261eaabc040da00d9eb658c75b7b6828b053536' }, "Table Example"), h("div", { key: '95242a92ff1cd32da55ba739bc6574bb0b6e9c47', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '83364a6bc6a996094f21bfa3b57dc2e996dadea0', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-data-table", { key: 'a46783e05848187304aad4f188e2e1d79cc2a455', columns: [
                {
                    label: 'Header',
                },
            ], cells: [
                {
                    title: 'city',
                    sort: 'up',
                    isSort: true,
                    isFilter: true,
                    type: 'propertyName',
                    propertyName: 'city',
                    colSpan: 1, // Set colSpan to 1 (default is 1)
                },
                {
                    title: 'price',
                    sort: 'down',
                    isSort: true,
                    isFilter: true,
                    type: 'propertyName',
                    propertyName: 'price',
                    colSpan: 1,
                },
                {
                    title: 'state',
                    isSort: true,
                    isFilter: true,
                    type: 'propertyName',
                    propertyName: 'state',
                    colSpan: 1,
                },
            ], data: [
                {
                    h_id: '3',
                    city: 'Dallas',
                    state: 'TX',
                    zip: '75201',
                    price: '162500',
                    selected: false, // Add selected property for checkbox functionality
                },
                {
                    h_id: '4',
                    city: 'Bevery Hills',
                    state: 'CA',
                    zip: '90210',
                    price: '319250',
                    selected: false,
                },
                {
                    h_id: '5',
                    city: 'New York',
                    state: 'NY',
                    zip: '00010',
                    price: '962500',
                    selected: false,
                },
            ] })), h("div", { key: 'f243d2bb528720ec58a3380ee54bf389bd58d684', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-table-usage"; }
}
