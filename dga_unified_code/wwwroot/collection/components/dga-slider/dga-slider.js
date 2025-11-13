import { h, Host } from "@stencil/core";
import { SxHandler } from "../../utils/sx-handler";
export class DgaSlider {
    constructor() {
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.range = true;
        this.showLabel = true;
        this.showHelperText = true;
        // @Prop() rangeValues?: [number,number]=[this.min,this.max];
        this.size = 'small';
    }
    // private minPos: number;
    // private maxPos: number;
    // private railColorStyle: { left: string; width: string };
    calculatePositions() {
        const minPos = ((this.minValue - this.min) / (this.max - this.min)) * 100;
        const maxPos = ((this.maxValue - this.min) / (this.max - this.min)) * 100;
        this.minPos = minPos;
        this.maxPos = maxPos;
        this.railColorStyle = !this.range ? { left: '0%', width: `${minPos}%` } : { left: `${minPos}%`, width: `${maxPos - minPos}%` };
    }
    componentWillLoad() {
        this.minValue = this.initialMin !== undefined ? this.initialMin : this.min;
        this.maxValue = this.initialMax !== undefined ? this.initialMax : this.max;
        this.calculatePositions();
        this.sxHandler = new SxHandler(this.el, 'dga-slider');
    }
    watchMinValue(newValue) {
        this.minValue = newValue;
        this.calculatePositions();
    }
    watchMaxValue(newValue) {
        this.maxValue = newValue;
        this.calculatePositions();
    }
    watchRangeValue() {
        this.calculatePositions();
    }
    watchInitialMin() {
        this.minValue = this.initialMin !== undefined ? this.initialMin : this.min;
        this.calculatePositions();
    }
    watchInitialMax() {
        this.maxValue = this.initialMax !== undefined ? this.initialMax : this.max;
        this.calculatePositions();
    }
    handleMinChange(e) {
        const target = e.target;
        const newMinVal = this.range ? Math.min(+target.value, this.maxValue - this.step) : Math.min(+target.value);
        this.minValue = newMinVal;
        if (this.onChange) {
            this.onChange({ max: this.maxValue, min: this.minValue });
        }
        this.calculatePositions();
    }
    handleMaxChange(e) {
        const target = e.target;
        const newMaxVal = Math.max(+target.value, this.minValue + this.step);
        this.maxValue = newMaxVal;
        if (this.onChange) {
            this.onChange({ max: this.maxValue, min: this.minValue });
        }
        this.calculatePositions();
    }
    componentDidLoad() {
        this.sxHandler.processSx(this.sx);
    }
    sxChanged() {
        this.sxHandler.processSx(this.sx);
    }
    disconnectedCallback() {
        this.sxHandler.cleanup();
    }
    render() {
        return (h(Host, { key: 'f7c5cc6ae8d51754dab393c5466200020bf330b2', id: this.sxHandler.getId(), style: this.sxHandler.getStyles() }, h("div", { key: 'f0cfc5dfc8d8214ba04a42e9812736b97e85af76', class: `range-slider-wrapper ${this.size}` }, h("div", { key: '325b6912e6d497d3d530e101755116bab666b367', class: "range-slider-input-wrapper" }, h("input", { key: '7b219293cfdb66c94c748cdf2d0128b83e1e965e', class: "range-slider-input", type: "range", value: this.minValue, min: this.min, max: this.max, step: this.step, onInput: this.handleMinChange.bind(this) }), this.range && (h("input", { key: 'e593151fdc0a1eca10ac776a8b7e33ad7a882498', class: "range-slider-input", type: "range", value: this.maxValue, min: this.min, max: this.max, step: this.step, onInput: this.handleMaxChange.bind(this) }))), h("div", { key: '7706bf051264881a2a0358c471c7b94f40161292', class: "range-slider-container" }, this.showLabel && h("h3", { key: '5652702006260d92bb8c640579d6bf6f688561b3' }, this.label), h("div", { key: 'cd108207b97d9f896a20dcfae989160fd46fdb21', class: "range-slider-control-wrapper" }, h("div", { key: '07822939b1774ebd0fde62215d92b4f9e035e9f8', class: "range-slider-control", style: { left: `${this.minPos}%` } }), h("div", { key: 'e2501cde2e1e76379af97f6a4b0410883e0db71d', class: "range-slider-rail" }, this.range && h("div", { key: '7d6f97c3f691b9f2220eb043e87918404e6eefad', class: "range-slider-number_left" }, this.minValue), h("div", { key: 'b41e7a543ce402d7a059cf6852ea4685f297d1f5', class: "range-slider-inner-rail", style: this.railColorStyle }), this.range && h("div", { key: '125ac08fe18e794deef881477e9dbdef200351de', class: "range-slider-number_right" }, this.maxValue), !this.range && h("div", { key: '562d99d1270e501121087b8b264b8d3e6ed1b74d', class: "range-slider-number_right" }, this.minValue)), this.range && h("div", { key: '2ca96fa11eb0a21b76990acf1e8eac3d88c0a99d', class: "range-slider-control", style: { left: `${this.maxPos}%` } }), this.showHelperText && this.helperText && (h("div", { key: '5355150a78f77fac6f448f1b16e1c55ad2f1307b', class: "range-slider-note" }, h("div", { key: '7b3c68110030bcf593a59c5b5925ec7eb4f3b1ed', class: "range-slider-note-icon" }, h("svg", { key: '14590a763475018336f49408133b4a897a944878', width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '809bbbbe88e3424b382703c4ed025822163686f1', "clip-path": "url(#clip0_17869_405)" }, h("path", { key: '5a74109044468ae9adc9aa4615aeb84887d291e4', d: "M6.06004 6.00001C6.21678 5.55446 6.52614 5.17875 6.93334 4.93943C7.34055 4.70012 7.8193 4.61264 8.28483 4.69248C8.75035 4.77233 9.17259 5.01436 9.47676 5.3757C9.78093 5.73703 9.94741 6.19436 9.94671 6.66668C9.94671 8.00001 7.94671 8.66668 7.94671 8.66668M8.00004 11.3333H8.00671M14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00001C1.33337 4.31811 4.31814 1.33334 8.00004 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001Z", stroke: "#384250", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })), h("defs", { key: 'e68be0c6af9933b50ce19337a32f1609e5393a41' }, h("clipPath", { key: '3c76edab89c4f4d3a72fa846639740e934e3bfee', id: "clip0_17869_405" }, h("rect", { key: '74f162a1be920d72dd9efb82d31380a52c8aa5f5', width: "16", height: "16", fill: "white" }))))), h("div", { key: '5ee5140782694a9cffdb4387453928a7e4df7afc', class: "range-slider-note-content" }, h("p", { key: '49a572a1874da42fcc2c2e38f7681250b14c3d94' }, this.helperText)))))))));
    }
    static get is() { return "dga-slider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-slider.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-slider.css"]
        };
    }
    static get properties() {
        return {
            "min": {
                "type": "number",
                "attribute": "min",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "0"
            },
            "max": {
                "type": "number",
                "attribute": "max",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "100"
            },
            "step": {
                "type": "number",
                "attribute": "step",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "1"
            },
            "range": {
                "type": "boolean",
                "attribute": "range",
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
                "defaultValue": "true"
            },
            "label": {
                "type": "string",
                "attribute": "label",
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
            "showLabel": {
                "type": "boolean",
                "attribute": "show-label",
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
                "defaultValue": "true"
            },
            "showHelperText": {
                "type": "boolean",
                "attribute": "show-helper-text",
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
                "defaultValue": "true"
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
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'small' | 'medium'",
                    "resolved": "\"medium\" | \"small\"",
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
                "defaultValue": "'small'"
            },
            "initialMin": {
                "type": "number",
                "attribute": "initial-min",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
            "initialMax": {
                "type": "number",
                "attribute": "initial-max",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
            "onChange": {
                "type": "unknown",
                "attribute": "on-change",
                "mutable": false,
                "complexType": {
                    "original": "(props: { min: number; max: number }) => void",
                    "resolved": "(props: { min: number; max: number; }) => void",
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
            }
        };
    }
    static get states() {
        return {
            "minValue": {},
            "maxValue": {},
            "minPos": {},
            "maxPos": {},
            "railColorStyle": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "min",
                "methodName": "watchMinValue"
            }, {
                "propName": "max",
                "methodName": "watchMaxValue"
            }, {
                "propName": "range",
                "methodName": "watchRangeValue"
            }, {
                "propName": "initialMin",
                "methodName": "watchInitialMin"
            }, {
                "propName": "initialMax",
                "methodName": "watchInitialMax"
            }, {
                "propName": "sx",
                "methodName": "sxChanged"
            }];
    }
}
