import { Fragment, h } from "@stencil/core";
export class DgaSliderUsage {
    constructor() {
        this.activeStep = 1;
        this.minValue = 10;
        this.maxValue = 100;
    }
    render() {
        return (h(Fragment, { key: '441f415f4d949cf765cfa52d2e447bf766dacf3b' }, h("br", { key: '1fb18358581cf52b993dce2c40033d815a343dde' }), h("dga-slider", { key: '38c08a87645de2e2e99346adb6e7013d51e185b7', min: this.minValue, max: this.maxValue, step: 1, range: true, size: "medium", helperText: "Helper Text Example", label: "Test", sx: {
                backgroundColor: "yellow",
                marginTop: "200px",
                ".range-slider-inner-rail": {
                    backgroundColor: "red"
                }
            } }), ";", h("br", { key: '9ea46053d4fcfe5da186e954b1fc99180e11e972' }), this.minValue, " - ", this.maxValue, h("dga-slider", { key: '0a6daf48f49d00f9e0a8ddc76c0925627888047a' })));
    }
    static get is() { return "dga-slider-usage"; }
    static get encapsulation() { return "shadow"; }
    static get states() {
        return {
            "activeStep": {},
            "minValue": {},
            "maxValue": {}
        };
    }
}
