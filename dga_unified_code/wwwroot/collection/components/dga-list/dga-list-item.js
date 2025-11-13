import { h } from "@stencil/core";
export class DgaListItem {
    componentWillLoad() {
        const parentElement = this.el.closest('[type]');
        if (parentElement) {
            this.inheritedType = parentElement.getAttribute('type');
        }
    }
    // componentWillLoad() {
    //   if (this.type === 'with-icon' && !this.icon) {
    //     throw new Error('Icon prop is required when type is "with-icon"');
    //   }
    // }
    getListClass() {
        return {
            'list-item': true,
            [`list-item--level-${this.level}`]: true,
            [`list-item--${this.type}`]: true
        };
    }
    renderMarker() {
        if (this.type === 'ordered') {
            return (h("span", { class: "list-item__marker" }, this.level === 'one' ? this.itemNumber : this.itemLetter));
        }
        return null;
    }
    render() {
        return (h("li", { key: 'd1f686d206dd7b5e014d08355e0e7a2743503ef9', class: this.getListClass() }, this.type === 'with-icon' && (h("span", { key: '8242586effdbd85f642e4dc49a974bce30a034ac', class: "list-item__icon", innerHTML: this.icon })), this.renderMarker(), h("span", { key: 'bfea282ebef220622ce73b6ccf8db7f5d7bbbc66', class: "list-item__text" }, this.itemText)));
    }
    static get is() { return "dga-list-item"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-list-item.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-list-item.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "ListItemProps['type']",
                    "resolved": "\"ordered\" | \"unordered\" | \"with-icon\"",
                    "references": {
                        "ListItemProps": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-list/dga-list-item.tsx",
                            "id": "src/components/dga-list/dga-list-item.tsx::ListItemProps"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "level": {
                "type": "string",
                "attribute": "level",
                "mutable": false,
                "complexType": {
                    "original": "ListItemProps['level']",
                    "resolved": "\"one\" | \"two\"",
                    "references": {
                        "ListItemProps": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-list/dga-list-item.tsx",
                            "id": "src/components/dga-list/dga-list-item.tsx::ListItemProps"
                        }
                    }
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "itemText": {
                "type": "string",
                "attribute": "item-text",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "itemNumber": {
                "type": "string",
                "attribute": "item-number",
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
            "itemLetter": {
                "type": "string",
                "attribute": "item-letter",
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
            "icon": {
                "type": "string",
                "attribute": "icon",
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
            }
        };
    }
    static get states() {
        return {
            "inheritedType": {}
        };
    }
    static get elementRef() { return "el"; }
}
