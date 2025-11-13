import { h, Host } from "@stencil/core";
export class DgaLogoPlaceholder {
    constructor() {
        this.src = "https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg";
        /** Layout direction (LTR or RTL) */
        this.layout = 'side';
        /** Logo size (sm, md, lg) */
        this.size = 'md';
    }
    // private getSize(): string {
    //   const sizes = {
    //     sm: '60px',
    //     md: '80px',
    //     lg: '100px',
    //   };
    //   return sizes[this.size] || '80px';
    // }
    render() {
        // const logoSize = this.getSize();
        return (h(Host, { key: '23f18dfc563b64287516a855e06432eb718cb5d7' }, h("div", { key: '9a725d70e126e603f68dbb1de86c2d7d684a8748', class: `logo-wrapper logo-placeholder--${this.size} logo-placeholder--${this.layout}` }, h("img", { key: '9061873655bbb95ec75d6d7679ec714cd45e06fd', src: this.src, alt: "Platform Logo",
            // style={{ width: logoSize, height: logoSize }}
            class: "logo-image" }), h("span", { key: '0cf6714fbbd276def7c5cabcc32e0352c56e662b', class: "logo-text" }, this.text))));
    }
    static get is() { return "dga-logo-placeholder"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-logo-placeholder.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-logo-placeholder.css"]
        };
    }
    static get properties() {
        return {
            "src": {
                "type": "string",
                "attribute": "src",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "\"https://dga-nds-fbhtx.ondigitalocean.app/mobile-logo.svg\""
            },
            "text": {
                "type": "string",
                "attribute": "text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Text to display next to the logo"
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "layout": {
                "type": "string",
                "attribute": "layout",
                "mutable": false,
                "complexType": {
                    "original": "'top' | 'side'",
                    "resolved": "\"side\" | \"top\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Layout direction (LTR or RTL)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'side'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Logo size (sm, md, lg)"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'md'"
            }
        };
    }
}
