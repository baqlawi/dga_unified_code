import { h } from "@stencil/core";
export class DgaStructuredListUsage {
    render() {
        return (h("div", { key: '8f7f791c3555c82a02e04903876a7781f106fd1d' }, h("h1", { key: 'b9a2842637815079c66b9fd4da32f9ff5cdf1cbd' }, "Structured List Example"), h("div", { key: '1a646c541de6f59b9200ae7e09785a91f0c999d8', style: { padding: "50px" } }, h("dga-structured-list", { key: '5eda7ca87405605c39a70e3790cfe51905b9ba02', cells: [
                {
                    title: "ID",
                    propertyName: "id",
                    type: "propertyName",
                },
                {
                    title: "Name",
                    propertyName: "name",
                    type: "propertyName",
                },
            ], data: [
                { id: 1, name: "Alice", selected: false },
                { id: 2, name: "Bob", selected: false },
                { id: 3, name: "Charlie", selected: false },
            ], rowDivider: true, colDivider: false, selectable: true, getSelectedRows: selectedRows => console.log(selectedRows) }), h("dga-structured-list", { key: 'eb2b88c7e1b64a21d120c0ae1f288ffbc1be36e3', compact: true, cells: [
                {
                    title: "ID",
                    propertyName: "id",
                    type: "propertyName",
                },
                {
                    title: "Name",
                    propertyName: "name",
                    type: "propertyName",
                },
            ], data: [
                { id: 1, name: "Alice", selected: false },
                { id: 2, name: "Bob", selected: false },
                { id: 3, name: "Charlie", selected: false },
            ], rowDivider: true, selectable: true, getSelectedRows: selectedRows => console.log(selectedRows) }))));
    }
    static get is() { return "dga-structured-list-usage"; }
}
