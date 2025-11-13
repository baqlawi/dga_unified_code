import { h } from "@stencil/core";
export class DgaSlideoutMenuHeader {
    constructor() {
        // @Prop() onClose?: () => void;
        this.handleClose = () => {
            // Find parent slideout menu
            const slideoutMenu = this.el.closest('dga-slideout-menu');
            if (slideoutMenu) {
                // Access parent's onClose
                const parentClose = slideoutMenu['onClose'];
                if (typeof parentClose === 'function') {
                    parentClose();
                }
            }
        };
    }
    render() {
        return (
        // <div class="dga-slideout-menu">
        h("div", { key: 'e0741293c73ec6975329fd72173d1373562d443f', class: "dga-slideout-menu__header" }, h("dga-featured-icon", { key: 'd853b104f6dc819177e40e786740025c9627db22', icon: {
                name: 'add-circle',
                variant: 'stroke',
                type: 'standard',
            }, size: 'sm', color: 'brand', variant: 'light' }), h("dga-flex", { key: 'a34b9f701f2afc40a19f2b6625dac598ec5b351f', direction: "column", spacing: 4, class: "dga-slideout-menu__header-content" }, h("h3", { key: '97b8bc458ba78f41196c379adbdbd8f7fe66e4b7', class: "dga-slideout-menu__header-title" }, this.title), h("p", { key: 'ec7b44dbdcec036ed144a747f6c44aca4d9bbfad', class: "dga-slideout-menu__header-description" }, this.description)), h("dga-button-v2", { key: 'bd0f660548b76000dc1f8941c6bb2e18f8e6cb1e', iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'multiplication-sign',
                variant: 'stroke',
                type: 'standard',
                color: "#161616"
            }, variant: "transparent", onClick: this.handleClose }))
        // </div>
        );
    }
    static get is() { return "dga-slideout-menu-header"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-slideout-menu-header.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-slideout-menu-header.css"]
        };
    }
    static get properties() {
        return {
            "title": {
                "type": "string",
                "attribute": "title",
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
                "reflect": false
            },
            "description": {
                "type": "string",
                "attribute": "description",
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
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
}
