import { h } from "@stencil/core";
export class SquareSkeleton {
    constructor() {
        this.type = '1';
        this.width = '80px';
    }
    getBorderRadius() {
        const borderRadiusMapper = {
            '24px': 'rounded-[2px]',
            '64px': 'rounded-[4px]',
            '48px': 'rounded-[2px]',
            '80px': 'rounded-[4px]',
            '120px': 'rounded-[8px]',
            '170px': 'rounded-[8px]',
            '240px': 'rounded-[16px]',
        };
        return borderRadiusMapper[this.width] || '';
    }
    render() {
        return (h("div", { key: 'd19cc65a06fb699ba2429d6db6c8c212f4a324f2' }, h("div", { key: '4c6fb1ede1a043245eb773b257d30593fde22e80', style: { width: this.width, height: this.width }, class: `square_skeleton type${this.type} ${this.getBorderRadius()}` })));
    }
    static get is() { return "dga-square-skeleton"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./style.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["style.css"]
        };
    }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'1' | '2'",
                    "resolved": "\"1\" | \"2\"",
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
                "defaultValue": "'1'"
            },
            "width": {
                "type": "string",
                "attribute": "width",
                "mutable": false,
                "complexType": {
                    "original": "'24px' | '64px' | '48px' | '80px' | '120px' | '170px' | '240px'",
                    "resolved": "\"120px\" | \"170px\" | \"240px\" | \"24px\" | \"48px\" | \"64px\" | \"80px\"",
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
                "defaultValue": "'80px'"
            }
        };
    }
}
