import { Host, h } from "@stencil/core";
import { SxHandler } from "../../utils/sx-handler";
export class DgaAvatarGroup {
    constructor() {
        this.stacked = false;
    }
    componentWillLoad() {
        this.sxHandler = new SxHandler(this.el, 'dga-slider');
    }
    componentDidLoad() {
        this.sxHandler.processSx(this.sx);
    }
    sxChanged() {
        this.sxHandler.processSx(this.sx);
    }
    disconnectedCallback() {
        this.sxHandler.cleanup();
    }
    render() {
        return (h(Host, { key: '7b1d993133eeb8dafaf4b047119bb7f41204e322', id: this.sxHandler.getId(), style: this.sxHandler.getStyles() }, h("div", { key: '2cde79186beb2593f3597b6e0401e367216c9f00', class: {
                'dga-avatar-group': true,
                'dga-avatar-group--stacked': this.stacked,
            } }, h("slot", { key: '72cdfe846f77dbf0104e9738d1f59a954d014e73' }))));
    }
    static get is() { return "dga-avatar-group"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-avatar-group.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-avatar-group.css"]
        };
    }
    static get properties() {
        return {
            "stacked": {
                "type": "boolean",
                "attribute": "stacked",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "false"
            },
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string",
                    "resolved": "SxProps | string",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-handler",
                            "id": "src/utils/sx-handler.ts::SxProps"
                        }
                    }
                },
                "required": false,
                "optional": true,
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
    static get watchers() {
        return [{
                "propName": "sx",
                "methodName": "sxChanged"
            }];
    }
}
