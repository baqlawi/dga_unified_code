import { h, Fragment } from "@stencil/core";
import { guid } from "../../utils";
export class DgaNotificationToast {
    constructor() {
        this.type = 'neutral'; // Default to "neutral" if not provided
        this.hasHelperText = false; // Default to false if not provided
        this.vPostion = 'top';
        this.hPostion = 'right';
        this.buttonsList = [];
        this.open = true;
        this.icons = {
            success: {
                name: 'checkmark-circle-02',
                variant: 'stroke',
                type: 'rounded',
            },
            info: {
                name: 'information-circle',
                variant: 'stroke',
                type: 'rounded',
            },
            neutral: {
                name: 'information-circle',
                variant: 'stroke',
                type: 'rounded',
            },
            warning: {
                name: 'alert-02',
                variant: 'stroke',
                type: 'rounded',
            },
            error: {
                name: 'alert-circle',
                variant: 'stroke',
                type: 'rounded',
            },
        };
    }
    render() {
        return (h("div", { key: '3b838ec4a9c4e9db92f6771795333e11218c645a', class: `notification-toast notification-toast--${this.type} dga-vpostion-${this.vPostion} dga-hpostion-${this.hPostion} ${this.open ? 'active' : ''}` }, h("div", { key: 'c7e22f02450538250bca75ee7b79ed326d1079aa', class: `notification-toast__header ${this.hasHelperText ? '' : 'dga-flex-center-y'}` }, h("dga-featured-icon", { key: '87078311718ceee7fcba0d4acfde988b757a45d8', icon: Object.assign(Object.assign({}, this.icons[this.type]), { size: 20 }), color: this.type, size: "lg" }), h("div", { key: '9be8f0fdba9b593221f4a41fed7298f62d232d54', class: "notification-toast__body" }, h("h4", { key: '43bbabdc3eb4c22ca6998b1d9a342ece4a846c60', class: "notification-toast__title text-md-semibold" }, this.leadText), this.hasHelperText && this.helperText && h("p", { key: 'ecd684c5731d4a27392ffe98c7b37fcd870cf385', class: "notification-toast__content text-sm-regular" }, this.helperText)), this.closeButton && (h("div", { key: '54cf33585674b09909595c60ff2f8b8e655ce575', class: "notification-toast__close-btn" }, h("button", { key: '557224282f1df150b371abfaeb40f39f4c7921f0', class: "dga-btn dga-btn--close dga-btn--icon dga-btn--md", onClick: e => { var _a; return (_a = this.onClose) === null || _a === void 0 ? void 0 : _a.call(this, e); } }, h("span", { key: 'abf8c5b259f833236fcdd5057a8c2a1845338f1c', class: "dga-btn-icon" }, h("dga-icon-v2", { key: '9c023c12fef82ea2222595ff0c15d9b801461d85', name: "multiplication-sign", variant: "stroke", type: "sharp", size: 20 })))))), this.action && (h(Fragment, { key: '5126ca46db0f023696e03d84285a08ffe10c6873' }, h("div", { key: '52472e32b8c853ec2f8bfbf05e1dcf48fbc5ea1f', class: "notification-toast__action" }, this.buttonsList.length > 0 &&
            this.buttonsList.map(({ id, onClick, extraClasses, title, label }) => (h("button", Object.assign({ key: id ? id : guid(), id: id ? id : guid(), onClick: e => onClick(e), class: `dga-btn dga-btn--subtle dga-btn--md ${extraClasses}` }, (title && { title: title })), label)))), h("div", { key: '5a8a9cf8696f95c9ee3ed0e14c03c925cad8f3c1', class: "notification-toast__action-mobile" }, this.buttonsList.length > 0 &&
            this.buttonsList.map(({ id, onClick, extraClasses, title, label }) => (h("button", Object.assign({ key: id ? id : guid(), id: id ? id : guid(), onClick: e => onClick(e), class: `dga-btn dga-btn--secondary dga-btn--lg ${extraClasses}` }, (title && { title: title })), label))))))));
    }
    static get is() { return "dga-notification-toast"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-notification-toast.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-notification-toast.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'error' | 'warning' | 'success' | 'info' | 'neutral'",
                    "resolved": "\"error\" | \"info\" | \"neutral\" | \"success\" | \"warning\"",
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "hasHelperText": {
                "type": "boolean",
                "attribute": "has-helper-text",
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
            "action": {
                "type": "boolean",
                "attribute": "action",
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
                "reflect": false
            },
            "closeButton": {
                "type": "boolean",
                "attribute": "close-button",
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
                "reflect": false
            },
            "vPostion": {
                "type": "string",
                "attribute": "v-postion",
                "mutable": false,
                "complexType": {
                    "original": "'top' | 'bottom'",
                    "resolved": "\"bottom\" | \"top\"",
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
                "defaultValue": "'top'"
            },
            "hPostion": {
                "type": "string",
                "attribute": "h-postion",
                "mutable": false,
                "complexType": {
                    "original": "'left' | 'right'",
                    "resolved": "\"left\" | \"right\"",
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
                "defaultValue": "'right'"
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
            "buttonsList": {
                "type": "unknown",
                "attribute": "buttons-list",
                "mutable": false,
                "complexType": {
                    "original": "{\n    id?: string;\n    label: string;\n    onClick: (event?: any) => void;\n    extraClasses?: string;\n    title?: string;\n  }[]",
                    "resolved": "{ id?: string; label: string; onClick: (event?: any) => void; extraClasses?: string; title?: string; }[]",
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
                "defaultValue": "[]"
            },
            "open": {
                "type": "boolean",
                "attribute": "open",
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
                "defaultValue": "true"
            }
        };
    }
}
