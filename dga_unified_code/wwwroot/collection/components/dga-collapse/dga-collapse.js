import { h } from "@stencil/core";
export class DgaCollapse {
    constructor() {
        this.transitionDuration = '0.3s';
        this.transitionType = 'ease-in';
        this.height = 0;
    }
    componentDidLoad() {
        if (this.open && this.containerRef) {
            this.setHeight(this.containerRef.clientHeight);
            setTimeout(() => {
                this.setHeight('auto');
            }, parseFloat(this.transitionDuration) * 1000);
        }
    }
    watchOpen(newValue, oldValue) {
        if (newValue !== oldValue && this.containerRef) {
            if (newValue) {
                this.setHeight(this.containerRef.scrollHeight);
                setTimeout(() => {
                    this.setHeight('auto');
                }, 200);
            }
            else {
                // Handle closing animation
                this.setHeight(this.containerRef.clientHeight);
                setTimeout(() => {
                    this.setHeight(0);
                }, 20);
            }
        }
    }
    setHeight(value) {
        this.height = value;
    }
    render() {
        const styles = Object.assign(Object.assign({ overflow: 'hidden', transition: `height ${this.transitionDuration} ${this.transitionType}`, height: `${this.height}px` }, (this.height === 'auto' ? { height: 'auto' } : {})), this.customStyle);
        return (h("div", { key: '9715bed0f6b0c892fc33ea1264b010a47e8876c3', ref: (el) => this.containerRef = el, "aria-hidden": !this.open, style: styles }, h("slot", { key: '2b7465b46183841607468dd39d13ec3d4b356ca6' })));
    }
    static get is() { return "dga-collapse"; }
    static get encapsulation() { return "shadow"; }
    static get properties() {
        return {
            "open": {
                "type": "boolean",
                "attribute": "open",
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
                "reflect": false
            },
            "customStyle": {
                "type": "unknown",
                "attribute": "custom-style",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: string }",
                    "resolved": "{ [key: string]: string; }",
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
            "transitionDuration": {
                "type": "string",
                "attribute": "transition-duration",
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
                "defaultValue": "'0.3s'"
            },
            "transitionType": {
                "type": "string",
                "attribute": "transition-type",
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
                "defaultValue": "'ease-in'"
            }
        };
    }
    static get states() {
        return {
            "height": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "open",
                "methodName": "watchOpen"
            }];
    }
}
