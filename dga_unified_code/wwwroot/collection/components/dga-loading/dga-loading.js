import { Host, h } from "@stencil/core";
import { SxStyleManager } from "../../utils/sx-style-manager";
export class DgaLoading {
    constructor() {
        this.size = 'md';
        this.variant = 'neutral';
        // Generate a unique ID if not provided
        this.componentId = `dga-button-${Math.random().toString(36).substring(2, 9)}`;
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
        const classes = `dga-loading dga-loading--${this.size} dga-loading--${this.variant} ${this.extraClass ? this.extraClass : ''}`;
        return (h(Host, { key: '4acb1b3b17f5e246ffeb456d8db4458731a372f6', id: this.componentId, style: this.rootStyles }, h("div", { key: 'b5b6924a6f447a9f84c24caa7bea2acdfd78b884', class: classes }, h("div", { key: '999d0a684a68dfb1b7fc2a61f774f0683ad7b9f9', class: "dga-loading__circle" }))));
    }
    static get is() { return "dga-loading"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-loading.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-loading.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "LoadingSize",
                    "resolved": "\"huge\" | \"lg\" | \"md\" | \"sm\" | \"tiny\" | \"xl\" | \"xs\"",
                    "references": {
                        "LoadingSize": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-loading/dga-loading.tsx",
                            "id": "src/components/dga-loading/dga-loading.tsx::LoadingSize"
                        }
                    }
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
                "defaultValue": "'md'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "LoadingStyle",
                    "resolved": "\"brand\" | \"neutral\" | \"on-color\"",
                    "references": {
                        "LoadingStyle": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-loading/dga-loading.tsx",
                            "id": "src/components/dga-loading/dga-loading.tsx::LoadingStyle"
                        }
                    }
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
            "extraClass": {
                "type": "string",
                "attribute": "extra-class",
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
