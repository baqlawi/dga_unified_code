import { h } from "@stencil/core";
import { SxHandler } from "../../utils/sx-handler";
export class DgaQuote {
    constructor() {
        this.size = 'sm';
        this.whiteBackground = false;
        this.showQuoteTitle = true;
        this.quoteTitle = '';
        this.showQuoteDescription = true;
        this.quoteDescription = '';
        this.showAuthorDetails = true;
        this.authorName = '';
        this.authorDescription = '';
        this.showAvatar = false;
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
        return (h("div", { key: 'db41b1c99264f6c94e62102b2149236e6e5aa8f7', class: { 'dga-quote': true, 'dga-quote--white-bg': this.whiteBackground } }, h("div", { key: '18ba901087a87b25c3a6e1ed292501b0e1112609', class: "dga-quote__body" }, h("dga-flex", { key: 'd12c22fe82a2b310f6bf18c5e8c2d4cbee8420ff', spacing: 9 }, h("span", { key: 'c3dc37befd849bc9801c4a4bbd55d23098406676', class: "quote-icon" }, "\u201D"), h("dga-flex", { key: '47f1b667b642a8f6ab586c2cf344d0ae12053ac7', direction: "column", spacing: 16 }, this.showQuoteTitle && h("h2", { key: '7e0cb2f9955d4c4eb8adff9ecd7940a2f0a6810f', class: "dga-quote__body-title" }, this.quoteTitle), this.showQuoteDescription && h("p", { key: 'f0117edd7c617f675c43432f1b211f59793f1040', class: "dga-quote__body-desc" }, this.quoteDescription)))), this.showAuthorDetails && (h("div", { key: '5e3829cd7d2b29ccb40218c9d225412ff9f01ab6', class: "dga-quote__auther-details" }, h("dga-flex", { key: '2e5daf0ab46c90219118e209043d2a4d913fe45d', direction: "row", spacing: 16, align: "center" }, this.showAvatar && h("dga-avatar", { key: '0d52604792aeb5c5853ae3d16ca996447beb5e09', size: 80, type: "image", border: false }), h("dga-flex", { key: '8b95245603a27c5493e76cb610f5a8281f327a3b', direction: "column", spacing: 8 }, h("h3", { key: '684c79736aace10d6c2558c3e8191c996297cc30', class: "auther-title" }, this.authorName), h("p", { key: '2e109dced594126d107c0627a7409b5be5378e88', class: "auther-desc" }, this.authorDescription))), h("span", { key: '48a21e46c22541b073966f9f58e597a8943ae28b', class: "quote-icon" }, "\u201C")))));
    }
    static get is() { return "dga-quote"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-quote.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-quote.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'lg'",
                    "resolved": "\"lg\" | \"sm\"",
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
                "defaultValue": "'sm'"
            },
            "whiteBackground": {
                "type": "boolean",
                "attribute": "white-background",
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
            "showQuoteTitle": {
                "type": "boolean",
                "attribute": "show-quote-title",
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
                "defaultValue": "true"
            },
            "quoteTitle": {
                "type": "string",
                "attribute": "quote-title",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "defaultValue": "''"
            },
            "showQuoteDescription": {
                "type": "boolean",
                "attribute": "show-quote-description",
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
                "defaultValue": "true"
            },
            "quoteDescription": {
                "type": "string",
                "attribute": "quote-description",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "defaultValue": "''"
            },
            "showAuthorDetails": {
                "type": "boolean",
                "attribute": "show-author-details",
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
                "defaultValue": "true"
            },
            "authorName": {
                "type": "string",
                "attribute": "author-name",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "defaultValue": "''"
            },
            "authorDescription": {
                "type": "string",
                "attribute": "author-description",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "defaultValue": "''"
            },
            "showAvatar": {
                "type": "boolean",
                "attribute": "show-avatar",
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
