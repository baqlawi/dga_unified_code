import { h, Host } from "@stencil/core";
import { SxStyleManager } from "../../utils/sx-style-manager";
export class NdsAccordion {
    constructor() {
        this.title = '';
        this.content = '';
        this.size = 'lg';
        this.iconAlignment = 'leading';
        this.flush = false;
        this.disabled = false;
        this.defaultExpanded = false;
        this.isOpen = false;
        this.bodyElement = null;
        // Generate a unique ID if not provided
        this.componentId = `dga-button-${Math.random().toString(36).substring(2, 9)}`;
        // Computed inline styles
        this.rootStyles = {};
    }
    handleAccordionClick(e) {
        e.preventDefault();
        if (this.disabled)
            return;
        this.isOpen ? this.collapseAccordion() : this.openAccordion();
    }
    openAccordion() {
        this.isOpen = true;
        if (this.bodyElement) {
            this.bodyElement.style.maxHeight = this.bodyElement.scrollHeight + 'px';
        }
    }
    collapseAccordion() {
        this.isOpen = false;
        if (this.bodyElement) {
            this.bodyElement.style.maxHeight = null;
        }
    }
    componentDidRender() {
        if (this.isOpen && this.bodyElement) {
            this.bodyElement.style.maxHeight = this.bodyElement.scrollHeight + 24 + 'px';
        }
        else if (this.bodyElement) {
            this.bodyElement.style.maxHeight = null;
        }
        if (this.defaultExpanded) {
            this.isOpen = this.defaultExpanded;
        }
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
        return (h(Host, { key: '1265c0dc6aa43ad5a3e1fe6694408ad6a6ff2bd2', id: this.componentId, style: this.rootStyles }, h("div", { key: '90bc4a22a0cf3cec23e92f6809258921d181012b', class: `dga-accordion-item dga-accordion-item--${this.size} 
          ${this.iconAlignment === 'leading' ? 'dga-accordion-item--icon-leading' : ''}
          ${this.flush ? 'dga-accordion-item--flush' : ''} 
          ${this.disabled ? 'disabled' : ''} ${this.isOpen ? 'active' : ''}` }, h("a", { key: 'cf0d4ec4e9bb56567aff8f538f3375238f3c0cea', href: "#", onClick: e => this.handleAccordionClick(e), onKeyDown: e => (e.code === 'Space' ? this.handleAccordionClick(e) : null), class: "dga-accordion-item__header" }, this.iconAlignment === 'leading' && (h("div", { key: '7cca38e86dc9fb4c133d93f0405e9322a240da9e', class: "dga-accordion-item__arrow" }, h("dga-icon-v2", { key: '8ae30d79ad18709a017611741e4a611109f15407', name: "arrow-down-01", variant: "stroke", size: 16 }))), h("div", { key: '6064ffbb8d7a9c5d673bdd420fd12db583edb13e', class: "dga-accordion-item__title" }, h("slot", { key: '6323b0ae5eac89c53f9469387edd128fcc986f67', name: 'title' }, this.title)), this.iconAlignment === 'trailing' && (h("div", { key: 'c7e99fe4acf97f7c31aa96397553cc3b6ad0acce', class: "dga-accordion-item__arrow" }, h("dga-icon-v2", { key: '41ae36429fa96e93aa93ef3da22f0090790051b4', name: "arrow-down-01", variant: "stroke", size: 16 })))), h("div", { key: '2b6e3f28bfc23c66957dd7704e379413a26746ae', ref: el => (this.bodyElement = el), class: "dga-accordion-item__body" }, h("slot", { key: 'afd4ced0bce12e6288bf8f2c6593e595ecacc6c7', name: 'content' }, this.content)))));
    }
    static get is() { return "nds-accordion"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["nds-accordion.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["nds-accordion.css"]
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
                "reflect": false,
                "defaultValue": "''"
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
                "reflect": false,
                "defaultValue": "''"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'lg' | 'md' | 'sm'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
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
            "iconAlignment": {
                "type": "string",
                "attribute": "icon-alignment",
                "mutable": false,
                "complexType": {
                    "original": "'leading' | 'trailing'",
                    "resolved": "\"leading\" | \"trailing\"",
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
                "defaultValue": "'leading'"
            },
            "flush": {
                "type": "boolean",
                "attribute": "flush",
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
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
            "defaultExpanded": {
                "type": "boolean",
                "attribute": "default-expanded",
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
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string",
                    "resolved": "CSSProperties & NestedSelector | string",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-system",
                            "id": "src/utils/sx-system.ts::SxProps"
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
    static get states() {
        return {
            "isOpen": {}
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
