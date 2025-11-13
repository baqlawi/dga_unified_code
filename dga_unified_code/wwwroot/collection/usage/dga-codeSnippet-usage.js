import { h } from "@stencil/core";
export class DgaChipUsage {
    constructor() {
        this.snippets = {
            JavaScript: `// Imports
import mongoose, { Schema } from 'untitled'

// Collection name
export const collection = 'Design'|

// Schema
const schema = new Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  }
}, {timestamps: true})

// Model
export default untitled.model(collection, schema, collection)
        `,
            HTML: `<div>
 <h1>Hello, HTML!</h1>
</div>`,
            CSS: `body {
    background-color: lightblue;
  }
    
h1 {
  color: navy;
  margin-left: 20px;
}`,
        };
        this.snippetLine = {
            JavaScript: 'npm install nds-design-system@^0.0.1',
        };
    }
    render() {
        return (h("div", { key: '434ca7773cd5992c45d5a88ce7e22f4f9966188c', style: { width: '743px', display: 'flex', flexDirection: 'column', gap: '123px', margin: "10px" } }, h("dga-codesnippet", { key: '42f826792e94ce8f63000da485910d9b332f4a60', showButton: true, type: "multi-line", showSidebar: true, showTabList: true, snippets: this.snippets }), h("dga-codesnippet", { key: '4d0b83f69356d1da6208147cf21f7a207c8b4050', showButton: false, type: "single", showSidebar: false, showTabList: false, snippets: this.snippetLine })));
    }
    static get is() { return "dga-codesnippet-usage"; }
}
