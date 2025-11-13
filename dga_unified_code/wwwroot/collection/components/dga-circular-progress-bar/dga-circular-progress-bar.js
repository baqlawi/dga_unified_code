import { h } from "@stencil/core";
export class DgaCircularProgressBar {
    constructor() {
        this.RTL = false;
        this.size = '64px';
        this.variant = 'primary';
        this.percentage = 0;
        this.sizes = {
            '200px': 200,
            '160px': 160,
            '120px': 120,
            '80px': 80,
            '64px': 64,
        };
    }
    render() {
        const strokeWidth = this.sizes[this.size] / 10;
        const radius = (this.sizes[this.size] - strokeWidth) / 2;
        const dashArray = 2 * Math.PI * radius;
        const dashOffset = dashArray * (1 - this.percentage / 100);
        return (h("div", { key: 'e37e0ea67750fef5535663a11ea279db7fa26454', class: "circular-progress-bar", "aria-size": this.size, dir: this.RTL ? 'rtl' : 'ltr' }, h("div", { key: '026b717cfa4615502652e44fd2ac505ad73aefef', class: "circular-progress-bar__label" }, this.variant === 'success' && h("i", { key: '1289b6da9fa31ae8ed619440ba9fb59c8378cf70', class: `circular-progress-bar__label--icon hgi-solid hgi-checkmark-circle-02` }), this.variant === 'error' && h("i", { key: '3679e7f57f24acd750bd223a2f94024bff84681a', class: `circular-progress-bar__label--icon hgi-solid hgi-multiplication-sign-circle` }), this.variant !== 'success' && this.variant !== 'error' && h("h4", { key: 'c9b84689865dd2e9615b33a188b91b99820e7765', class: "circular-progress-bar__label--percentage" }, this.percentage, "%"), this.text && h("h5", { key: '08875600b01761795259c2f3bbb9e29db132470b', class: `circular-progress-bar__label--text ${this.variant}` }, this.text)), h("svg", { key: 'edabbdf6d994972ddf4b4efa9c21b716bd18d9ab', width: this.sizes[this.size], height: this.sizes[this.size], viewBox: `0 0 ${this.sizes[this.size]} ${this.sizes[this.size]}` }, h("circle", { key: 'd1bfefecf856ce90501a63e6f94d5f429f648b02', class: "track", fill: "none", stroke: "#e6e6e6", r: radius, cx: this.sizes[this.size] / 2, cy: this.sizes[this.size] / 2, "stroke-width": strokeWidth }), h("circle", { key: '5fcb3119155ad02cf5e094cd443058a096f81497', class: `tail tail--${this.variant}`, fill: "none", stroke: "currentColor", r: radius, cx: this.sizes[this.size] / 2, cy: this.sizes[this.size] / 2, "stroke-width": strokeWidth, "stroke-linecap": 'round', "stroke-dasharray": dashArray, "stroke-dashoffset": dashOffset, transform: `rotate(-180 ${this.sizes[this.size] / 2} ${this.sizes[this.size] / 2})`, style: {
                transition: 'stroke-dashoffset 0.5s ease',
            } }))));
    }
    static get is() { return "dga-circular-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-circular-progress-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-circular-progress-bar.css"]
        };
    }
    static get properties() {
        return {
            "RTL": {
                "type": "boolean",
                "attribute": "r-t-l",
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
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'200px' | '160px' | '120px' | '80px' | '64px'",
                    "resolved": "\"120px\" | \"160px\" | \"200px\" | \"64px\" | \"80px\"",
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
                "defaultValue": "'64px'"
            },
            "text": {
                "type": "string",
                "attribute": "text",
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
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'neutral' | 'success' | 'error'",
                    "resolved": "\"error\" | \"neutral\" | \"primary\" | \"success\"",
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
                "defaultValue": "'primary'"
            },
            "percentage": {
                "type": "number",
                "attribute": "percentage",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "0"
            }
        };
    }
}
