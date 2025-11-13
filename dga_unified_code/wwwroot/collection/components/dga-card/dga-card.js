import { h, Host } from "@stencil/core";
import { SxStyleManager } from "../../utils/sx-style-manager";
export class DgaCard {
    constructor() {
        this.type = 'default';
        this.showTitle = true;
        this.showDescription = true;
        this.showFeaturedIcon = true;
        this.image = '';
        this.disabled = false;
        this.effect = 'with-shadow';
        this.cardTitle = 'Card Title';
        this.description = 'Card content placeholder text goes here';
        this.featuredIcon = {
            name: 'checkmark-circle-02',
            variant: 'stroke',
            type: 'sharp',
            size: 24,
        }; // Default icon
        this.showPrimaryAction = true;
        this.primaryActionLabel = 'Primary Action';
        this.showSecondaryAction = true;
        this.isSelected = false;
        this.secondaryActionLabel = 'Secondary Action';
        this.onCheckboxChange = () => { };
        this.onPrimaryAction = () => { };
        this.onSecondaryAction = () => { };
        this.onExpandAction = () => { };
        this.isFocused = false;
        this.expanded = false;
        // Generate a unique ID if not provided
        this.componentId = `dga-button-${Math.random().toString(36).substring(2, 9)}`;
        // Computed inline styles
        this.rootStyles = {};
    }
    toggleExpand() {
        this.expanded = !this.expanded;
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
        const sxValue = typeof this.sx === 'string'
            ? JSON.parse(this.sx)
            : this.sx;
        this.rootStyles = this.sxStyleManager.processSxProp(sxValue);
    }
    disconnectedCallback() {
        var _a;
        // Clean up styles when component is removed
        (_a = this.sxStyleManager) === null || _a === void 0 ? void 0 : _a.cleanup();
    }
    render() {
        return (h(Host, { key: '86d33361aafcc6abc3869b700543dfab22e73b5f', id: this.componentId, style: this.rootStyles }, h("div", Object.assign({ key: 'f4b971d65fe31a8d6b4a70557aab317e75684fae', class: `card dga-flex-column ${this.disabled ? 'disabled' : ''} ${this.isFocused ? 'focused' : ''} card--${this.effect}` }, (this.type === 'selectable' ? { onClick: this.onCheckboxChange } : {}), { tabIndex: 0 }), this.image && (h("div", { key: 'f2fefe942384e3f0796bdfc8e731dd9173f6831b', class: "card__image-container" }, h("img", { key: 'd5df6adfe1fe0a5ce769d88b13d1bf8e2376930b', src: this.image, alt: "Card" }))), this.showFeaturedIcon && (h("dga-featured-icon", { key: '1e51a66c5c186cbf100380afb84db428f657ae72', icon: this.featuredIcon, size: 'lg' })), this.type === 'selectable' && (h("div", { key: '88c8bd657deea79a9815baa4c37910c1a081ad38', class: "card__checkbox-container" }, h("dga-checkbox", { key: '3d254fc95831e9ca5a364f2121b4e2c9fa3cc1f4', checked: this.isSelected, color: "brand", onChange: this.onCheckboxChange }))), (this.showTitle || this.showDescription) && (h("div", { key: '821a3824fa6bc457e6a53de9789b75787adf9028', class: "card__content-text dga-flex-column" }, this.showTitle && h("h4", { key: 'ac3b4ca163aaf1669f5d1d8b390adc0b67d3815b', class: "text-lg-bold" }, this.cardTitle, " "), this.showDescription && h("p", { key: '1bb6fce224d80803b0dd4599e0f431f4f75548e9', class: "text-md-regular" }, this.description))), h("slot", { key: 'b5039ab01d3107d25957dbbe6c64f216d9cc0241' }), this.type === 'default' && (this.showPrimaryAction || this.showSecondaryAction) && (h("div", { key: 'e6e13528af3e49a02234cc343fd79fb9e5de22d1', class: "card__action card__action--default" }, this.showSecondaryAction && h("dga-button", { key: '49cb7f3e7df45e2ff60b9eccd3e6d933a8e68cbb', label: this.secondaryActionLabel, onClick: this.onSecondaryAction, size: "lg", variant: "secondary-outline" }), this.showPrimaryAction && h("dga-button-v2", { key: '720933d2acabcc2afc14efdea31ca5cded01f36e', label: this.primaryActionLabel, onClick: this.onPrimaryAction, size: "lg", variant: "primary" }))), this.type === 'expanded' && (h("div", { key: '90809bc4ced8b4b071ee55ca6fcf56121892c7d6', class: "card__action card__action--expanded" }, h("dga-button-v2", { key: this.expanded ? 'expanded' : 'collapsed', iconOnly: true, onClick: () => this.toggleExpand(), size: "lg", variant: "subtle", leadIcon: true, leadIconProps: {
                name: this.expanded ? 'arrow-up-01' : 'arrow-down-01',
                variant: 'stroke',
                type: 'rounded',
            } }))), h("div", { key: 'a3007799c91bf737d771da07331900028b26ad96', class: `collapse-content ${this.expanded ? 'expanded' : ''}` }, h("slot", { key: 'bb1f24b1c21c79624209d55f1f01ad035e06818e', name: "collapse-content" })))));
    }
    static get is() { return "dga-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-card.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-card.css"]
        };
    }
    static get properties() {
        return {
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
            },
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'expanded' | 'selectable'",
                    "resolved": "\"default\" | \"expanded\" | \"selectable\"",
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
                "defaultValue": "'default'"
            },
            "showTitle": {
                "type": "boolean",
                "attribute": "show-title",
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
            "showDescription": {
                "type": "boolean",
                "attribute": "show-description",
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
            "showFeaturedIcon": {
                "type": "boolean",
                "attribute": "show-featured-icon",
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
            "image": {
                "type": "string",
                "attribute": "image",
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
            "effect": {
                "type": "string",
                "attribute": "effect",
                "mutable": false,
                "complexType": {
                    "original": "'with-shadow' | 'no-shadow' | 'stroke'",
                    "resolved": "\"no-shadow\" | \"stroke\" | \"with-shadow\"",
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
                "defaultValue": "'with-shadow'"
            },
            "cardTitle": {
                "type": "string",
                "attribute": "card-title",
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
                "defaultValue": "'Card Title'"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'Card content placeholder text goes here'"
            },
            "featuredIcon": {
                "type": "unknown",
                "attribute": "featured-icon",
                "mutable": false,
                "complexType": {
                    "original": "Icon",
                    "resolved": "Icon",
                    "references": {
                        "Icon": {
                            "location": "import",
                            "path": "../dga-featured-icon/dga-featured-icon",
                            "id": "src/components/dga-featured-icon/dga-featured-icon.tsx::Icon"
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
                "defaultValue": "{\n    name: 'checkmark-circle-02',\n    variant: 'stroke',\n    type: 'sharp',\n    size: 24,\n  }"
            },
            "showPrimaryAction": {
                "type": "boolean",
                "attribute": "show-primary-action",
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
            "primaryActionLabel": {
                "type": "string",
                "attribute": "primary-action-label",
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
                "defaultValue": "'Primary Action'"
            },
            "showSecondaryAction": {
                "type": "boolean",
                "attribute": "show-secondary-action",
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
            "isSelected": {
                "type": "boolean",
                "attribute": "is-selected",
                "mutable": true,
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
                "reflect": true,
                "defaultValue": "false"
            },
            "secondaryActionLabel": {
                "type": "string",
                "attribute": "secondary-action-label",
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
                "defaultValue": "'Secondary Action'"
            },
            "onCheckboxChange": {
                "type": "unknown",
                "attribute": "on-checkbox-change",
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
                "setter": false,
                "defaultValue": "() => {}"
            },
            "onPrimaryAction": {
                "type": "unknown",
                "attribute": "on-primary-action",
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
                "setter": false,
                "defaultValue": "() => {}"
            },
            "onSecondaryAction": {
                "type": "unknown",
                "attribute": "on-secondary-action",
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
                "setter": false,
                "defaultValue": "() => {}"
            },
            "onExpandAction": {
                "type": "unknown",
                "attribute": "on-expand-action",
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
                "setter": false,
                "defaultValue": "() => {}"
            }
        };
    }
    static get states() {
        return {
            "isFocused": {},
            "expanded": {}
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
