import { h, Fragment } from "@stencil/core";
import { guid } from "../../utils";
export class DgaInlineAlert {
    constructor() {
        this.type = 'neutral';
        this.isactionButtons = true;
        this.isCloseButton = true;
        this.colored = false;
        this.buttonsList = [];
        this.icons = {
            error: 'hgi-stroke hgi-help-circle',
            warning: 'hgi-stroke hgi-alert-02',
            success: 'hgi-stroke hgi-tick-02',
            info: 'hgi-stroke hgi-help-circle',
            neutral: 'hgi-stroke hgi-help-circle',
        };
    }
    render() {
        return (h("div", { key: 'd93df65988da7a4649844ffd7a8d3972c9b1863a', class: `alert alert--${this.type} ${this.colored ? `alert--${this.type}-bg` : ''}` }, h("div", { key: 'dbdf8595d3af5e0e53bd20104e73d34bcd93c380', class: `alert__header ${this.helperText ? '' : 'dga-flex-center-y'}` }, h("div", { key: 'e6b7e51e131ef33bf23629556ec17dce3eba8dc8', class: `featured-icon featured-icon--circle featured-icon--md featured-icon--light-${this.type === 'neutral' ? 'gray' : this.type}` }, h("i", { key: '1694062e026c86b68eb88acd7a442e5f1efad24f', class: this.icons[this.type], style: { fontSize: '20px' } })), h("div", { key: '6b8867c75da5a6d9d3f49000bb450990b95a57e5', class: "alert__body" }, h("h4", { key: '36ef936576e851bd43079919acee97b156dfe0c4', class: "alert__title text-md-semibold" }, this.leadText), this.helperText && h("p", { key: '48bd61bffaf9b90709c1863fbb2a2be215238dcb', class: "alert__content text-sm-regular" }, this.helperText)), this.isCloseButton && (h("div", { key: '7e5ecd3efa246b952f2ff46fe741a861a8358991', class: "alert__close-btn" }, h("button", { key: 'c6532a5c9b87d770a9af9887f3302b54df278233', class: "dga-btn dga-btn--close dga-btn--icon dga-btn--md", onClick: e => this.onClose && this.onClose(e) }, h("span", { key: '4b632d8b363440284b1468ad3c80e0bcf6ad4e89', class: "dga-btn-icon" }, h("i", { key: '3171c51b44ce6197911659e428b890f784f743ae', class: "hgi-stroke hgi-multiplication-sign", style: { fontSize: '20px' } })))))), this.isactionButtons && this.buttonsList.length > 0 && (h(Fragment, { key: '2edf884e222845a9292881ae2e9b3697912ebb14' }, h("div", { key: '13b0e4b3ed69cfb40ad06055f8d6c33342c556db', class: "alert__action" }, this.buttonsList.map(({ id, onClick, exraClasses, title, label }) => {
            return (h("button", Object.assign({ key: id ? id : guid(), id: id ? id : guid(), onClick: e => onClick(e), class: `dga-btn dga-btn--subtle dga-btn--md ${exraClasses}` }, (title && { title: title })), label));
        })), h("div", { key: 'fbaf2d0ce67029091f6b1a8a90f09892a5716701', class: "alert__action-mobile" }, this.buttonsList.map(({ id, onClick, exraClasses, title, label }) => {
            return (h("button", Object.assign({ key: id ? id : guid(), id: id ? id : guid(), onClick: e => onClick(e), class: `btn btn--secondary btn--lg ${exraClasses}` }, (title && { title: title })), label));
        }))))));
    }
    static get is() { return "dga-inline-alert"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-inline-alert.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-inline-alert.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'neutral' | 'info' | 'error' | 'success' | 'warning'",
                    "resolved": "\"error\" | \"info\" | \"neutral\" | \"success\" | \"warning\"",
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
                "defaultValue": "'neutral'"
            },
            "leadText": {
                "type": "string",
                "attribute": "lead-text",
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
            "helperText": {
                "type": "string",
                "attribute": "helper-text",
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
                "reflect": false
            },
            "isactionButtons": {
                "type": "boolean",
                "attribute": "isaction-buttons",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "defaultValue": "true"
            },
            "isCloseButton": {
                "type": "boolean",
                "attribute": "is-close-button",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "defaultValue": "true"
            },
            "onClose": {
                "type": "unknown",
                "attribute": "on-close",
                "mutable": false,
                "complexType": {
                    "original": "(event: any) => void",
                    "resolved": "(event: any) => void",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "colored": {
                "type": "boolean",
                "attribute": "colored",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "defaultValue": "false"
            },
            "buttonsList": {
                "type": "unknown",
                "attribute": "buttons-list",
                "mutable": false,
                "complexType": {
                    "original": "{\n    id?: string;\n    label: string;\n    onClick: (event?: any) => void;\n    exraClasses?: string;\n    title?: string;\n  }[]",
                    "resolved": "{ id?: string; label: string; onClick: (event?: any) => void; exraClasses?: string; title?: string; }[]",
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
                "defaultValue": "[]"
            }
        };
    }
}
