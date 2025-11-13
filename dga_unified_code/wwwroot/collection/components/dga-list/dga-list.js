import { h } from "@stencil/core";
export class DgaList {
    constructor() {
        this.type = 'unordered';
        this.color = 'primary';
        //   @Prop() id: string = guid();
        this.title = "";
        this.items = [];
        this.renderIcon = (type) => {
            if (type === "with-icon") {
                return h("span", { class: "list-icon" }, "\u2713"); // Using checkmark icon for "with-icon" type
            }
            return null;
        };
    }
    render() {
        const Tag = this.type === 'ordered' ? 'ol' : 'ul';
        return (h("div", { key: '78839ee834cadddc56cec370866e76e41f77f429', class: `list list--${this.type} list--${this.color}` }, this.title && h("h3", { key: 'b47bc1bdd3ae32796149e9ea1691211c7fca12e0', class: "list-title" }, this.title), h(Tag, { key: 'ba0e1b8f17c3b6f9cc59f2bfb70f571b67ac16aa' }, this.items.map((item, index) => (h("li", { key: index, class: "list-item" }, this.type === "with-icon" && this.renderIcon(this.type), item))))));
    }
    static get is() { return "dga-list"; }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'ordered' | 'unordered' | 'with-icon'",
                    "resolved": "\"ordered\" | \"unordered\" | \"with-icon\"",
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
                "defaultValue": "'unordered'"
            },
            "color": {
                "type": "string",
                "attribute": "color",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'neutral' | 'on-color'",
                    "resolved": "\"neutral\" | \"on-color\" | \"primary\"",
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
                "defaultValue": "'primary'"
            },
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
                "reflect": false,
                "defaultValue": "\"\""
            },
            "items": {
                "type": "unknown",
                "attribute": "items",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
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
