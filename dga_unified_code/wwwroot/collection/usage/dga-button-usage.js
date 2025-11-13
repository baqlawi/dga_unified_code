import { h } from "@stencil/core";
export class DgaButtonUsage {
    constructor() {
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: 'f60fb65a6d8d25bd0963a1aee2e93d979cf8e594' }, h("h1", { key: 'b5c0c1bda48058e0c228608e9361ff8ae152ba05' }, "Button Example"), h("div", { key: '46afd28b03c20d057a92e73c4fde04c1f8ed59ce', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'ee5d75a3b65a8c78a024360b2b6a50ad05ece60d', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-button", { key: '40b91e2769e854cc06fe654afe70349c99b133df', label: "Click me", variant: "primary-brand", sx: {
                '&': {
                    fontSize: '18px',
                    fontWeight: 'bold',
                },
                '.dga-btn': {
                    backgroundColor: { xs: 'red', sm: 'blue', md: 'green' },
                    // backgroundColor: 'yellow',
                    color: { xs: 'black', sm: 'yellow', md: 'white' },
                },
                '.dga-btn:hover': {
                    backgroundColor: 'blue',
                },
            } }), h("dga-button", { key: '60f3258b4054a77af233a8927545327023a6302c', label: "Brown Button", variant: "primary-neutral" }), h("dga-button", { key: '2e740b397d1d41dc5000739091cadacae263e06c', label: "Button", variant: "des-transparent" }), h("dga-button", { key: '31f7473b5d47efe5ca6279e05ae2ea3b9b35fc6b', label: "Source code", variant: "secondary-outline", leadIcon: true, leadIconType: "source-code", leadIconProps: { variant: 'stroke', type: 'standard' } }), h("dga-button", { key: '2b1554b5bd06ddfa7123314f7a1ab9bd6041f086',
            // className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
            label: "See live preview", size: "lg", variant: "secondary-outline", trailIcon: true, trailIconType: "link-square-01", trailIconProps: {
                variant: 'stroke',
                type: 'standard',
            } })), h("div", { key: 'b2fac2003873d9c2aa089956701b29005c2d7444', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-button-usage"; }
    static get states() {
        return {
            "variant": {}
        };
    }
}
