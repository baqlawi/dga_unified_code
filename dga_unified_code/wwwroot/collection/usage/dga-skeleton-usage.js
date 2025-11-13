import { h } from "@stencil/core";
export class LineSkeleton {
    render() {
        return (h("div", { key: '0f20be0d52539e72e709777531c450a3ab561002' }, h("dga-line-skeleton", { key: 'ee003674d6a4615d74eb2967007217f8c78fa6f5' }), h("dga-circle-skeleton", { key: '17cbe6409683637249c82af6eefe2e7ee1410c93' }), h("dga-rectangle-skeleton", { key: '3787820b3f96331e846043a60873cf0801365614' }), h("dga-square-skeleton", { key: 'cafdf575c297e51fdc1bd32bdab08504d3ea46c5' }), h("dga-skeleton-component", { key: 'bb6e9e1d9cc5be52396a9653af86826fc716cb05' })));
    }
    static get is() { return "dga-skeleton-usage"; }
}
