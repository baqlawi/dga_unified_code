import { h } from "@stencil/core";
export class DgaButtonUsage {
    constructor() {
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: 'bb77901d2fdafe7121f8f0fda4fb52693fc33a17' }, h("h1", { key: 'a4f479ab3ab70e9ea9867bc634d8b87b249435cc' }, "Button Example"), h("div", { key: '937d5cff63f3ea5077852ab54d245afcff12943a', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '5c5b7de089c27219c5d622c496bf9588b40dcc3c', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-flex", { key: '3caecf289d7ffc442d4c5dd8eed38b43011572d0', direction: "column", spacing: 16 }, h("dga-button-v2", { key: '42462f99eee37c6a8c9be6e91965f4a07231c547', label: "Button", variant: "primary", size: "lg" }), h("dga-button-v2", { key: '8b84df4212ddd4c5494ce7c69a9ec69ad4ac36d5', label: "Button", variant: "primary", size: "md" }), h("dga-button-v2", { key: '337435766445d4a0630e4bc4cd1df9fba4671923', label: "Button", variant: "primary", size: "sm" }), h("dga-button-v2", { key: '86be9b82e8a747d3132b1321762702f8ea6e331f', label: "Button", variant: "neutral", size: "lg" }), h("dga-button-v2", { key: '52091e7d8e851373706144c444c328c3019e6411', label: "Button", variant: "neutral", size: "md" }), h("dga-button-v2", { key: '086a3905ae0e42b34528c69a89871000c63e13da', label: "Button", variant: "neutral", size: "sm" }), h("dga-button-v2", { key: '67889c811dafce96510d6535279b3359939e9b31', label: "Button", variant: "secondary-solid", size: "lg" }), h("dga-button-v2", { key: '3e9c4968bfb3a7fb58752b34dc588e088f0a9ddf', label: "Button", variant: "secondary-solid", size: "md" }), h("dga-button-v2", { key: '63c3e6b929044e860c7e82d6f067e36412e7f769', label: "Button", variant: "secondary-solid", size: "sm" }), h("dga-button-v2", { key: '8af7146eed01e3784a4b5a46d7868d345acd8e3b', label: "Button", variant: "primary", destructive: true, size: "lg" }), h("dga-button-v2", { key: '58406da872bfe22fe9f6d52d4211e650d0d03c68', label: "Button", variant: "primary", destructive: true, size: "md" }), h("dga-button-v2", { key: 'ccfdd7f852129cabdb079b4000186cea571257a2', label: "Button", variant: "primary", destructive: true, size: "sm" })), h("dga-button-v2", { key: 'fdd3892d25fd90eef576eeb4f1389c0afcbc6507', label: "Button", variant: "primary", onColor: true }, h("dga-button-leading-icon", { key: '351344df6d3626d23ab5c3e0dd41102dcb93022b', name: "link-square-01", size: 16, color: "red" })), h("dga-button-v2", { key: '5b9c02ed6d96acc0a4e4645d643335a205b0bce3', label: "Source code", variant: "secondary-outline", leadIcon: true, leadIconProps: { name: 'source-code', variant: 'stroke', type: 'standard' } }), h("dga-button-v2", { key: 'c0489eaf4470420c8d70d73938ad41f7ddc352d3',
            // className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
            label: "See live preview", size: "lg", variant: "secondary-outline", trailIcon: true, trailIconProps: {
                name: 'link-square-01',
                variant: 'stroke',
                type: 'standard',
            } })), h("div", { key: 'a0309f9344ff66c254753653e8924f699835672a', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-button-v2-usage"; }
    static get states() {
        return {
            "variant": {}
        };
    }
}
