import { Host, h } from "@stencil/core";
import { SxHandler } from "../../utils/sx-handler";
export class DgaTooltip {
    constructor() {
        this.beakPlacement = 'none';
        this.beakAlignment = 'center';
        this.direction = 'top';
        this.icon = false;
        this.theme = 'light';
        this.isHovered = false;
        this.icons = {
            'success-check': {
                icon: 'hgi-checkmark-circle-02',
                color: '#067647',
            },
            'blue-info': {
                icon: 'hgi-information-circle',
                color: '#175CD3',
            },
            'neutral-info': {
                icon: 'hgi-information-circle',
                color: '#384250',
            },
            'neutral-?': {
                icon: 'hgi-help-circle',
                color: '#384250',
            },
            'warning-!-circle': {
                icon: 'hgi-alert-circle',
                color: '#B54708',
            },
            'warning-!-triangle': {
                icon: 'hgi-sharp hgi-alert-02',
                color: '#B54708',
            },
            'error-!': {
                icon: 'hgi-alert-circle',
                color: '#B42318',
            },
            'error-x': {
                icon: 'hgi-cancel-circle',
                color: '#B42318',
            },
        };
        this.handleMouseEnter = () => {
            this.isHovered = true;
        };
        this.handleMouseLeave = () => {
            this.isHovered = false;
        };
    }
    sxChanged() {
        this.sxHandler.processSx(this.sx);
    }
    componentWillLoad() {
        this.sxHandler = new SxHandler(this.el, 'dga-tooltip');
    }
    componentDidLoad() {
        this.sxHandler.processSx(this.sx);
    }
    disconnectedCallback() {
        this.sxHandler.cleanup();
    }
    render() {
        return (h(Host, { key: 'e29a4d738bd9c43f6aa896abf80ccba62581610b', id: this.sxHandler.getId(), style: this.sxHandler.getStyles() }, h("div", { key: 'ca911edf359a03f46303195ed36268534be32c18', class: "dga-tooltip", "data-theme": this.theme, "data-beak-direction": `${this.beakPlacement}-${this.beakAlignment}` }, this.isHovered && (h("div", { key: '9faebf82e1b7af0f34764763fae6e4c91caf6c1e', class: "dga-tooltip-main", "data-direction": this.direction }, h("div", { key: '8f187c76d39bcbc5b21dc38bee07c10bca330317', class: "dga-tooltip-main__wrapper" }, this.beakPlacement !== 'none' && h("span", { key: '66ba75c47827d991b2588ec5f5ca99344e2075d9', class: "dga-tooltip-main__beak", "data-beak-direction": `${this.beakPlacement}-${this.beakAlignment}` }), this.icon && (h("span", { key: '27c7cd47b525e0acec5542be3996aea319b6fb97', class: "dga-tooltip-main__icon" }, h("i", { key: '6778c5aa44731a3e6f771300ac2c68d0b7294e6e', class: `${this.feedbackIcon.style === 'icon-only' ? 'hgi-stroke' : 'hgi-solid'} ${this.icons[this.feedbackIcon.type].icon}`, style: { color: this.icons[this.feedbackIcon.type].color, fontSize: `${this.feedbackIcon.size}px` } }))), h("div", { key: '624a40ea6733e01fe1f615856e36e5335b7d289c', class: "dga-tooltip-main__content" }, this.tooltipTitle && h("span", { key: '1e9c4685764bce7e99160f7f2773e714ce257533', class: "dga-tooltip-main__content__title" }, this.tooltipTitle), this.helperText && h("span", { key: '54179ff7e6eba94304f8f311d7e3f959ad40e4aa', class: "dga-tooltip-main__content__helper-text" }, this.helperText))))), h("div", { key: '652b3c1eaee1be7617c51b724f779cca14ab01d9', class: "dga-tooltip-item", onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("slot", { key: '33eec2e23b084c16f5bf1845c9fd624048b7c592' })))));
    }
    static get is() { return "dga-tooltip"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-tooltip.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-tooltip.css"]
        };
    }
    static get properties() {
        return {
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string | undefined",
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
            },
            "beakPlacement": {
                "type": "string",
                "attribute": "beak-placement",
                "mutable": false,
                "complexType": {
                    "original": "BeakPlacement",
                    "resolved": "\"bottom\" | \"left\" | \"none\" | \"right\" | \"top\"",
                    "references": {
                        "BeakPlacement": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-tooltip/dga-tooltip.tsx",
                            "id": "src/components/dga-tooltip/dga-tooltip.tsx::BeakPlacement"
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
                "defaultValue": "'none'"
            },
            "beakAlignment": {
                "type": "string",
                "attribute": "beak-alignment",
                "mutable": false,
                "complexType": {
                    "original": "BeakAlignment",
                    "resolved": "\"center\" | \"end\" | \"start\"",
                    "references": {
                        "BeakAlignment": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-tooltip/dga-tooltip.tsx",
                            "id": "src/components/dga-tooltip/dga-tooltip.tsx::BeakAlignment"
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
                "defaultValue": "'center'"
            },
            "direction": {
                "type": "string",
                "attribute": "direction",
                "mutable": false,
                "complexType": {
                    "original": "Direction",
                    "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
                    "references": {
                        "Direction": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-tooltip/dga-tooltip.tsx",
                            "id": "src/components/dga-tooltip/dga-tooltip.tsx::Direction"
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
                "defaultValue": "'top'"
            },
            "tooltipTitle": {
                "type": "string",
                "attribute": "title",
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
            "icon": {
                "type": "boolean",
                "attribute": "icon",
                "mutable": true,
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
                "reflect": true,
                "defaultValue": "false"
            },
            "feedbackIcon": {
                "type": "unknown",
                "attribute": "feedback-icon",
                "mutable": false,
                "complexType": {
                    "original": "FeedbackIcon",
                    "resolved": "FeedbackIcon",
                    "references": {
                        "FeedbackIcon": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-tooltip/dga-tooltip.tsx",
                            "id": "src/components/dga-tooltip/dga-tooltip.tsx::FeedbackIcon"
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
                "setter": false
            },
            "theme": {
                "type": "string",
                "attribute": "theme",
                "mutable": false,
                "complexType": {
                    "original": "Theme",
                    "resolved": "\"dark\" | \"light\"",
                    "references": {
                        "Theme": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-tooltip/dga-tooltip.tsx",
                            "id": "src/components/dga-tooltip/dga-tooltip.tsx::Theme"
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
                "defaultValue": "'light'"
            }
        };
    }
    static get states() {
        return {
            "isHovered": {}
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
