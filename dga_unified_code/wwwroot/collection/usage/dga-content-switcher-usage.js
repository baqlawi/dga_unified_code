import { h } from "@stencil/core";
export class DgaContentSwitcherUsage {
    constructor() {
        this.value = 0;
    }
    render() {
        return (h("div", { key: 'eea558495b5f1d385f2a819af639961dd393cf86' }, h("h1", { key: '4234b166be1f37fc956b10b8609e8b53a4c58a94' }, "Content Switcher Example"), h("dga-content-switcher", { key: 'cb3b71efce2572e279afaa9cb6155ced6457cee8', size: 'lg' }, h("dga-content-switcher-item", { key: 'eeed5036984c3908fda077992d0e05d50a279861', label: "Option 1", content: "This is Option 1 content." }), h("dga-content-switcher-item", { key: '529f0cdc1c5bdd8c187346e14db3fdbe77efa9fa', label: "Option 2", content: "This is Option 2 content." }), h("dga-content-switcher-item", { key: '96d65cf41f8075f85729d00a49bb985fa7a36f93', label: "Option 3", content: "This is Option 3 content." })), h("dga-content-switcher", { key: '9ce93a4de497a23d5f670f65287b05cb760d5a7a', size: 'md' }, h("dga-content-switcher-item", { key: '8325df5870599f274e3fbfda7562c3fb260ec5e4', label: "Option 1", content: "This is Option 1 content." }), h("dga-content-switcher-item", { key: 'f9039165e5b15106bdddffd0370c5ba36b2867d1', label: "Option 2", content: "This is Option 2 content." }), h("dga-content-switcher-item", { key: 'ddd4c5c1bb1a13509b8f94fdcc6ef00f59001267', label: "Option 3", content: "This is Option 3 content." })), h("dga-content-switcher", { key: '8fc045dd65cc364a3ec3a02abc166a32eddde93d', size: 'sm', onColor: true }, h("dga-content-switcher-item", { key: 'ef83bda1eed6cfff47707a04c385a1cb30e84880', label: "Option 1", content: "This is Option 1 content." }), h("dga-content-switcher-item", { key: '9303cf60d830f40dc53ef5e6d605b27a5d7057cb', label: "Option 2", content: "This is Option 2 content." }), h("dga-content-switcher-item", { key: 'f11f6e8ef79fac28a11cde79fddc7874c04f50d1', label: "Option 3", content: "This is Option 3 content." })), h("h1", { key: '85c2ae31f5ee725d55aeab5aa96417c61affd4c1' }, this.value), h("dga-content-switcher", { key: 'f47a39226623a0295db0f8ba3563118d9b4dc671', size: 'lg', value: this.value, onChange: (val) => this.value = val }), h("dga-content-switcher-panel", { key: '5fe9e0620e66a1b05728ca0917968128eac51c3a', value: this.value, index: 0 }, h("div", { key: 'a4c294355980c2b803941e65e8732f8ff6cdda07' }, "Content 111111111111111")), h("dga-content-switcher-panel", { key: '597ffbaef3795399f0487a129a191c149e5aa66c', value: this.value, index: 1 }, h("div", { key: '81c2575139c5ce1f6f3b9929b00d1a0f826305b0' }, "Content 2")), h("dga-content-switcher-panel", { key: 'a2edf9093b4576644339b97c7c3aedc5d37b2177', value: this.value, index: 2 }, h("div", { key: 'e7635f88e640bd33dad80940cf052f9a698cc3a0' }, "Content 3"))));
    }
    static get is() { return "dga-content-switcher-usage"; }
    static get properties() {
        return {
            "value": {
                "type": "number",
                "attribute": "value",
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
            }
        };
    }
}
