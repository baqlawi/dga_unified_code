import { h } from "@stencil/core";
export class DgaButtonUsage {
    render() {
        return (h("div", { key: '462f9d37f3b5dbeafbf0e3b43a1b2da89d157a4c', style: {
                margin: "10px"
            } }, h("floating-button", { key: 'ce3045f264ff2b14cad456129c0a438fc08ad3ca', variant: "secondary-solid" }), h("div", { key: 'bb50c7a7e0f58fdba87a59981af84bfe0d13f43b', style: {
                marginTop: "10px",
            } }, h("floating-button", { key: '7f1add5af65b70afde4deb84141ebca7e8c627c1', variant: "primary-neutral", iconOnly: true }))));
    }
    static get is() { return "dga-floating-button-usage"; }
}
