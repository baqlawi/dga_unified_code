import { h } from "@stencil/core";
export class DgaCardV2Usage {
    constructor() {
        this.variant = 'neutral';
        this.selected = false;
    }
    render() {
        return (h("div", { key: 'ce98886819f82d7f359e6bc536531f8f92f34f17' }, h("h1", { key: '015e45c1e8f607285249e09b5367df7669aa9b58' }, "Card Example"), h("div", { key: '75fd9d4512dcceab5ce1cb5c27e7f0f90a44562a', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '1e072764b77ffd6fc216ff388d2938043531fcc9', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-card-v2", { key: '81e2efc0032798f7f70622024fc3cdc4e76bb705', type: "default", sx: {
                "& > .card": {
                    backgroundColor: 'red',
                    height: '400px',
                }
            } }, h("dga-card-content", { key: '858218826169c82a73b16defa358786562886e2b' }, h("dga-featured-icon", { key: '056eaefbc0217f2c42bb888cfab977a0890e1987', color: 'brand', variant: 'light', size: 'lg', icon: {
                name: 'checkmark-circle-02',
                variant: 'stroke',
                type: 'sharp',
                size: 24
            } }), h("dga-flex", { key: '8bfe2b2809531a96db08d35e42c0f1cb0a1d0472', direction: 'column', spacing: 8 }, h("h4", { key: '41c8b777b90242f777c70798216db2ff155ab190', class: "text-lg-bold" }, "Card Title test"), h("p", { key: 'd9838775750bfc6774c6a92fdea441d34790e825', class: "text-md-regular" }, "Card content placeholder text goes here")), h("dga-flex", { key: '57efae9806a38b988b149f7b8cff5e2bcf31f06e', direction: 'column', spacing: 4 }, h("dga-rating", { key: '430973de0454d04c7639afd40b162e1c4033ff8e', value: 4, size: 'sm' }), h("span", { key: '4eee667bcc22459b83d256da2ea8a16ee1995f5e', class: "text-xs-regular" }, "12 reviews"))), h("dga-card-actions", { key: '58ac4b41aae907790eed36d49cdb4a69e7730eb0' }, h("dga-button-v2", { key: 'ea1f8d86a450443cc32e8c86a4c8d5d057f394e6', label: "Primary", size: "lg", variant: "primary", onClick: () => console.log('Primary Action') }), h("dga-button-v2", { key: '01477274960267f683628626edac6a8a5544f0da', label: "Secondary", size: "lg", variant: "secondary-outline", onClick: () => console.log('Secondary Action') })), h("dga-card-expandable-content", { key: '30642680580f8633536d5d511162844b77afddf8' }, h("div", { key: '25066b0951f619435ee4bd7922d04c49b7ace771' }, "Expanded Content"), h("p", { key: 'a481ca8c047150a6400c7237fa24e609ec2e8d0e' }, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum voluptatum, facere mollitia quas natus nihil, doloribus repudiandae, quasi vitae nobis deserunt similique magni explicabo. Molestiae unde dolorem expedita aut recusandae.")))), h("div", { key: '4ae077c90e6ff271e09ff1e1d37da45677448a37', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-card-v2-usage"; }
    static get states() {
        return {
            "variant": {},
            "selected": {}
        };
    }
}
