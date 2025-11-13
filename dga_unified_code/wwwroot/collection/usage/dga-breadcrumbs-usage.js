import { h } from "@stencil/core";
export class DgaBreadcrumbsUsage {
    constructor() {
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: 'fcac40fcf0c16198bd638bdc007882d9795780ea' }, h("h1", { key: '36dcea57623959cc3bcecd7aa63a983577761bdb' }, "Breadcrumbs Example"), h("div", { key: '56652fbb3ac1b8fd1e105e6c1f562dc91fdd1af4', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '3a3f8c49e8aae8f0bf90c3f19565dc45343176cd', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-link", { key: '980aec2687e3c5ce354314b3405d2d5e55b864cd', label: "Link", variant: "neutral" }), h("dga-breadcrumbs", { key: 'cd45dba16444619ab4d215fe203f6ab48db1fef0', items: [
                {
                    label: 'Home',
                    path: '/',
                },
                {
                    label: 'Products',
                    path: '/products',
                },
                {
                    label: 'Computers',
                    path: '/products/computers',
                    disabled: true,
                },
                {
                    label: 'Keyboards',
                    path: '/products/keyboards',
                },
            ], max: 3 })), h("div", { key: '7c396549240d7d8f7167f5b132152ed443bd278e', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-breadcrumbs-usage"; }
    static get states() {
        return {
            "variant": {}
        };
    }
}
