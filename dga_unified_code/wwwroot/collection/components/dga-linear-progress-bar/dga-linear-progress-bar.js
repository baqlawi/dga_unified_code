import { h } from "@stencil/core";
export class DgaLinearProgressBar {
    constructor() {
        this.RTL = false;
        this.percentage = 0;
        this.size = 'small';
        this.progressStyle = 'neutral';
        this.showLabel = true;
        this.showHelperText = true;
        this.error = false;
        this.success = false;
        this.label = 'label';
        this.helperText = 'Help Text';
    }
    render() {
        const sizeMapper = {
            small: 'sm',
            medium: 'md',
            large: 'lg',
        };
        let progressStyle = this.error ? 'error' : this.success ? "success" : this.progressStyle;
        let progressPercentage = this.percentage;
        const icon = {
            neutral: (h("svg", { key: '5520b3ffa0e9769340793d0fd9102292cf51dfec', width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: '52ba2afb905f85f5cf055f32b4cae77216680f9b', "clip-path": "url(#clip0_17869_405)" }, h("path", { key: '46ff409a69f2cc2e1b6beec887258734caec8f8f', d: "M6.06004 6.00001C6.21678 5.55446 6.52614 5.17875 6.93334 4.93943C7.34055 4.70012 7.8193 4.61264 8.28483 4.69248C8.75035 4.77233 9.17259 5.01436 9.47676 5.3757C9.78093 5.73703 9.94741 6.19436 9.94671 6.66668C9.94671 8.00001 7.94671 8.66668 7.94671 8.66668M8.00004 11.3333H8.00671M14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8.00004 14.6667C4.31814 14.6667 1.33337 11.6819 1.33337 8.00001C1.33337 4.31811 4.31814 1.33334 8.00004 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001Z", stroke: "#384250", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })), h("defs", { key: 'd56a7abbe51f3f659484588967ba9eab364da5d5' }, h("clipPath", { key: 'c0abb52b19239c598cd019b24a15e8cc451cdefa', id: "clip0_17869_405" }, h("rect", { key: 'a4dab6cf5c33a3a0d25f7e599e28ca588c534dcd', width: "16", height: "16", fill: "white" }))))),
            primary: (h("svg", { key: 'e6858fe2416b099db2311e216785724a7c2c0120', width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: 'ff5142c1edc3789b81933d838a90fc7c72b370fb', "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.00002 15.3334C12.0501 15.3334 15.3334 12.0501 15.3334 8.00002C15.3334 3.94993 12.0501 0.666687 8.00002 0.666687C3.94993 0.666687 0.666687 3.94993 0.666687 8.00002C0.666687 12.0501 3.94993 15.3334 8.00002 15.3334Z", fill: "white" }), h("path", { key: 'd45936362ed40c489f04f2e2b793cbca734f7c70', "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.00002 15.3334C12.0501 15.3334 15.3334 12.0501 15.3334 8.00002C15.3334 3.94993 12.0501 0.666687 8.00002 0.666687C3.94993 0.666687 0.666687 3.94993 0.666687 8.00002C0.666687 12.0501 3.94993 15.3334 8.00002 15.3334ZM4.70017 7.41423C4.43982 7.67458 4.43982 8.09669 4.70017 8.35704L6.58578 10.2427C6.84613 10.503 7.26824 10.503 7.52859 10.2427L11.2998 6.47143C11.5602 6.21108 11.5602 5.78897 11.2998 5.52862C11.0395 5.26827 10.6174 5.26827 10.357 5.52862L7.05719 8.82845L5.64297 7.41423C5.38263 7.15388 4.96052 7.15388 4.70017 7.41423Z", fill: "#067647" }))),
            error: (h("svg", { key: '8016fa7d37a85ec33acb6d8ea6b86ddb289671c9', width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '8488a360d1d19e3ddc53e859299e4557e276627a', "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M8.00002 15.3334C12.0501 15.3334 15.3334 12.0501 15.3334 8.00002C15.3334 3.94993 12.0501 0.666687 8.00002 0.666687C3.94993 0.666687 0.666687 3.94993 0.666687 8.00002C0.666687 12.0501 3.94993 15.3334 8.00002 15.3334Z", fill: "white" }), h("path", { key: 'f75d6c3e0fcf470ccd33971f58ecde0607e719dc', "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.3334 8.00002C15.3334 12.0502 12.0502 15.3334 8.00002 15.3334C3.94989 15.3334 0.666687 12.0502 0.666687 8.00002C0.666687 3.94989 3.94989 0.666687 8.00002 0.666687C12.0502 0.666687 15.3334 3.94989 15.3334 8.00002ZM5.80471 4.862C5.54445 4.60158 5.12225 4.60158 4.862 4.862C4.60158 5.12225 4.60158 5.54445 4.862 5.80471L7.05715 8.00002L4.862 10.1953C4.60158 10.4556 4.60158 10.8778 4.862 11.138C5.12225 11.3985 5.54445 11.3985 5.80471 11.138L8.00002 8.94289L10.1953 11.138C10.4556 11.3985 10.8778 11.3985 11.138 11.138C11.3985 10.8778 11.3985 10.4556 11.138 10.1953L8.94289 8.00002L11.138 5.80471C11.3985 5.54445 11.3985 5.12225 11.138 4.862C10.8778 4.60158 10.4556 4.60158 10.1953 4.862L8.00002 7.05715L5.80471 4.862Z", fill: "#B42318" }))),
        };
        return (h("div", { key: '1324b2e98738b3e76f043d5b1f7a53a4db98fcde', class: 'progress-wrapper', style: { direction: this.RTL ? "rtl" : "ltr" } }, this.showLabel && h("h3", { key: '66d1759863ddbfad15902bc5610b4971a30b1056', class: `${sizeMapper[this.size]}` }, this.label), h("div", { key: '0225ef2ade3dc21fce8134f72dd9622d85db4851', class: `progress-bar-container ${sizeMapper[this.size]}`, title: `${progressPercentage.toString()}%` }, h("div", { key: 'b11a12e7b69c4e3d819c5533290b3def5a1c9c73', class: `progress-bar ${progressStyle}`, style: { width: `${progressPercentage}%` } }, this.size === "large" && progressPercentage > 8 && h("span", { key: 'eb7066257a80b7af9c7eab1a84193f9291a08f1e', class: "progress-bar-text" }, progressPercentage, "%"))), this.showHelperText && (h("div", { key: '51ffbf2c01127510c8b2652f7407753670c50777', class: "progress-bar__note" }, h("div", { key: '74a20f3ec4e33a2aa19baa208f32848fdd134578', class: "icon" }, this.error ? icon["error"] : this.success ? icon["primary"] : icon["neutral"]), h("div", { key: '68e1db19b2ebc56f8eed03f7982ece58b8034d96', class: "content" }, h("p", { key: '5952071423ec93ecacaa14504d98996445ef4ffb', class: `progress-bar-content ${this.success && "success"} ${this.error && "error"} ${sizeMapper[this.size]}` }, this.helperText))))));
    }
    static get is() { return "dga-linear-progress-bar"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-linear-progress-bar.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-linear-progress-bar.css"]
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
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'small' | 'medium' | 'large'",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
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
            "progressStyle": {
                "type": "string",
                "attribute": "progress-style",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'neutral' | 'error'",
                    "resolved": "\"error\" | \"neutral\" | \"primary\"",
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
                "defaultValue": "'neutral'"
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
            "error": {
                "type": "boolean",
                "attribute": "error",
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
            "success": {
                "type": "boolean",
                "attribute": "success",
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
                "reflect": false,
                "defaultValue": "'label'"
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
                "reflect": false,
                "defaultValue": "'Help Text'"
            }
        };
    }
}
