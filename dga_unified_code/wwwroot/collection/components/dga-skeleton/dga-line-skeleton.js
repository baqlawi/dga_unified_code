import { h } from "@stencil/core";
export class LineSkeleton {
    constructor() {
        this.size = 'lg';
        this.type = '1';
    }
    render() {
        return (h("div", { key: 'f81c9091cc5ff82ee2461eaffec46a4f6fe31c4b', class: `line_text ${this.size} type${this.type}` }));
    }
    static get is() { return "dga-line-skeleton"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./style.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["style.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'lg' | 'sm'",
                    "resolved": "\"lg\" | \"sm\"",
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
                "defaultValue": "'lg'"
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'1' | '2'",
                    "resolved": "\"1\" | \"2\"",
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
                "defaultValue": "'1'"
            }
        };
    }
}
