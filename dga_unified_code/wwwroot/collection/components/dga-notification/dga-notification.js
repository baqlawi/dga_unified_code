import { Host, h } from "@stencil/core";
import { SxStyleManager } from "../../utils/sx-style-manager";
export class DgaNotification {
    constructor() {
        this.icon = true;
        this.link = false;
        this.dismissable = false;
        this.icons = {
            success: {
                name: "checkmark-circle-02",
                variant: "solid",
                type: "sharp",
            },
            info: {
                name: "information-circle",
                variant: "solid",
                type: "sharp",
            },
            neutral: {
                name: "information-circle",
                variant: "solid",
                type: "sharp",
            },
            warning: {
                name: "alert-02",
                variant: "solid",
                type: "sharp",
            },
            critical: {
                name: "alert-circle",
                variant: "solid",
                type: "sharp",
            },
        };
        // Generate a unique ID if not provided
        this.componentId = `dga-notification-${Math.random().toString(36).substring(2, 9)}`;
        // Computed inline styles
        this.rootStyles = {};
    }
    handleSxChange() {
        this.processStyling();
    }
    componentWillLoad() {
        // Initialize style manager with element reference
        this.sxStyleManager = new SxStyleManager(this.componentId, this.el);
    }
    componentDidLoad() {
        // Process styling after the component is fully loaded and shadow DOM is ready
        this.processStyling();
    }
    componentDidUpdate() {
        // Re-process styling after updates
        this.processStyling();
    }
    processStyling() {
        if (!this.sx)
            return;
        // Handle both string and object formats
        const sxValue = typeof this.sx === 'string' ? JSON.parse(this.sx) : this.sx;
        this.rootStyles = this.sxStyleManager.processSxProp(sxValue);
    }
    disconnectedCallback() {
        var _a;
        // Clean up styles when component is removed
        (_a = this.sxStyleManager) === null || _a === void 0 ? void 0 : _a.cleanup();
    }
    render() {
        return (h(Host, { key: 'c5df38cd0e0b487cfdec2aa723798f484ad0bf9b', id: this.componentId, style: this.rootStyles }, h("div", { key: '98ee5aff4ba045741a385779affef9891e2f3b26', class: `notification notification--${this.variant}`, role: "alert" }, h("div", { key: '7595599a852baf4a09cdc3b5ea54a0bdd44811ed', class: "notification__content" }, this.icon && h("div", { key: 'ea54d17491402a3261e934b50f9ee32b1a9f9771', class: "notification__icon" }, h("dga-icon-v2", { key: '72db0526e963cbbc01bda00cafbe05bcfb94490f', name: this.icons[this.variant].name, variant: this.icons[this.variant].variant, type: this.icons[this.variant].type, size: 24 })), this.leadText && h("strong", { key: 'b459cacf8b34b2a45d200a5bb9156a7570043712', class: "notification__lead-text" }, this.leadText, ": "), h("p", { key: '8e3c51cc430a0d2f2825d0f876a2c0b019ca117d' }, this.content), this.link && (h("a", { key: 'db7154c0138d2366641e04b5f44f0e9ed58a07e8', onClick: () => {
                this.navigateTo && this.navigateTo(this.setNavigateTo);
            }, class: "notification__link link link--md link--neutral link--inline" }, h("span", { key: '4bbb707a159de830d633b4efef9d9a0de00c0343', class: "link__label" }, this.textLink)))), this.dismissable && (h("div", { key: 'f4f75e78077492b852f5ca5878488028dcfd4e92', class: "notification__dismiss" }, h("button", { key: 'e0fbf6afe05ec25f69285bbc0ff46dfb042494d2', class: "dga-btn dga-btn--close dga-btn--icon dga-btn--md", onClick: () => {
                this.dismmissed && this.dismmissed();
            } }, h("span", { key: '5c61c1763a0ec3d9b31910b5700a12245ae6e694', class: "dga-btn-icon" }, h("dga-icon-v2", { key: 'f07266a23ab886b1676839e73e44c1d7949c1ad8', name: "multiplication-sign", variant: 'stroke', size: 20 }))))))));
    }
    static get is() { return "dga-notification"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-notification.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-notification.css"]
        };
    }
    static get properties() {
        return {
            "icon": {
                "type": "boolean",
                "attribute": "icon",
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
            "content": {
                "type": "string",
                "attribute": "content",
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
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'critical' | 'warning' | 'success' | 'info' | 'neutral'",
                    "resolved": "\"critical\" | \"info\" | \"neutral\" | \"success\" | \"warning\"",
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
            "link": {
                "type": "boolean",
                "attribute": "link",
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
            "textLink": {
                "type": "string",
                "attribute": "text-link",
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
            "dismissable": {
                "type": "boolean",
                "attribute": "dismissable",
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
            "setNavigateTo": {
                "type": "string",
                "attribute": "set-navigate-to",
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
            "navigateTo": {
                "type": "unknown",
                "attribute": "navigate-to",
                "mutable": false,
                "complexType": {
                    "original": "(link?: string) => void",
                    "resolved": "(link?: string) => void",
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
            "dismmissed": {
                "type": "unknown",
                "attribute": "dismmissed",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
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
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string",
                    "resolved": "string | { [x: string]: any; }",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-style-manager",
                            "id": "src/utils/sx-style-manager.ts::SxProps"
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
                "methodName": "handleSxChange"
            }];
    }
}
