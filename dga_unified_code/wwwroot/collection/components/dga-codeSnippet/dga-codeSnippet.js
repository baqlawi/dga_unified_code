import { h } from "@stencil/core";
export class CodeSnippet {
    constructor() {
        var _a;
        this.snippets = {};
        this.showButton = false;
        this.type = 'multi-line';
        this.showSidebar = false;
        this.showTabList = false;
        this.showMore = false;
        this.activeTab = ((_a = Object.keys(this.snippets || {})) === null || _a === void 0 ? void 0 : _a[0]) || '';
    }
    componentDidLoad() {
        var _a;
        this.activeTab = ((_a = Object.keys(this.snippets || {})) === null || _a === void 0 ? void 0 : _a[0]) || '';
    }
    handleTabClick(tab) {
        this.activeTab = tab;
        this.showMore = false;
    }
    handleCopy() {
        navigator.clipboard.writeText(this.snippets[this.activeTab]);
    }
    renderWithLineNumbers(code) {
        var _a;
        const isMultiLine = this.type === 'multi-line';
        if (isMultiLine) {
            return (_a = code === null || code === void 0 ? void 0 : code.split('\n')) === null || _a === void 0 ? void 0 : _a.map((line, index) => (h("div", { key: index, class: "code-snippet-code-line" }, this.showSidebar && (h("div", { class: "code-snippet-number_container" }, h("span", { class: "code-snippet-line-number" }, index + 1))), h("span", { class: "code-snippet-line-content" }, line))));
        }
        else {
            return code
                .split('\n')
                .slice(0, 1)
                .map((line, index) => (h("div", { key: index, class: "code-snippet-code-line" }, h("span", { class: "code-snippet-line-content green" }, line))));
        }
    }
    render() {
        return (h("div", { key: 'c8b8f6966d3a5697d391710ec7c49a7c7812d6dc', class: "code-snippet-container" }, this.showTabList && (h("div", { key: 'e12158c24ef3271e4d42ae37d59b3295d59bcb6b', class: "code-snippet-tabs" }, h("dga-tabs", { key: 'b34b729e67baf2ebf06059bda346422a07e73604', divider: true, orientation: "horizontal", size: "lg", tabsList: Object.keys(this.snippets).map(tab => ({
                label: tab,
                onClick: () => this.handleTabClick(tab),
            })) }))), h("pre", { key: 'c27a625639f0331d7d062de7867d58baa7b5f343', class: "code-snippet-code-display" }, h("dga-button-v2", { key: 'c3e27261b30dbe7f50636a5f2dea31fc9dc7c9b0', size: "lg", iconOnly: true, variant: 'subtle', leadIcon: true, leadIconProps: {
                name: 'copy-01',
                size: 24,
                color: '#161616',
                variant: 'stroke',
            }, class: `code-snippet-icon ${this.type}`, onClick: () => this.handleCopy(), onColor: false }), h("code", { key: 'cf5a2a615b327b37e1e1cbd29ad9fedc6b78b2d9', style: {
                height: this.showButton && this.type === 'multi-line' && !this.showMore ? '150px' : 'auto',
            } }, this.renderWithLineNumbers(this.snippets[this.activeTab])), this.showButton && this.type === 'multi-line' && (h("div", { key: '5935a319d08f6d09a09aedd0d92dcda804d27885', class: "code-snippet-wrapper" }, h("dga-button-v2", { key: '5b6a869a8930a807c2a4f95b8a5c4cba95643b4a', label: this.showMore ? 'Show Less' : 'Show More', size: "md", trailIcon: true, variant: 'subtle', trailIconProps: { name: !this.showMore ? 'arrow-down-01' : 'arrow-up-01', size: 20, color: '#161616', variant: 'stroke' }, onClick: () => (this.showMore = !this.showMore), onColor: false }))))));
    }
    static get is() { return "dga-codesnippet"; }
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
            "snippets": {
                "type": "unknown",
                "attribute": "snippets",
                "mutable": false,
                "complexType": {
                    "original": "{ [key: string]: string }",
                    "resolved": "{ [key: string]: string; }",
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
                "defaultValue": "{}"
            },
            "showButton": {
                "type": "boolean",
                "attribute": "show-button",
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
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'multi-line' | 'single'",
                    "resolved": "\"multi-line\" | \"single\"",
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
                "defaultValue": "'multi-line'"
            },
            "showSidebar": {
                "type": "boolean",
                "attribute": "show-sidebar",
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
            "showTabList": {
                "type": "boolean",
                "attribute": "show-tab-list",
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
            }
        };
    }
    static get states() {
        return {
            "showMore": {},
            "activeTab": {}
        };
    }
}
