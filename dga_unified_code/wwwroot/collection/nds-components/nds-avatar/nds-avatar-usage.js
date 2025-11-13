import { h } from "@stencil/core";
export class NdsAvatarUsage {
    constructor() {
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: '10957124c53f3c709d95f884b5b64fa2737a15c0' }, h("h1", { key: '0b33377f55eda4ce58787fb90240970378d4b883' }, "Avatar Example"), h("div", { key: 'ed6ec11a38b5a0a4e12cf6c44eba808cc4d23c34', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'c18c14f77e8180c474ccbf8e9d257b17da910219', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("div", { key: '86d46b8cfcc13fc3aa99d9f647bbd5d6c8a7b056', style: { padding: "10px", display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: "black" } }, h("dga-avatar", { key: 'eca6b59e7f6b30947be70e00b7ebce8a2fbe0575', size: 120, border: false, square: true, sx: {
                "& .dga-avatar": {
                    borderRadius: "100px"
                }
            } }), h("dga-avatar", { key: '2fae6834b1e28d43926d631974e2e57bd30226bc', size: 120, border: true, square: true })), h("dga-avatar", { key: '731bc3cb3927117d24209e1c37fd3a375a9ed48e', type: "icon", size: 120, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: '5b7a38b3c991c2e5838f25b1aa648bfa0905ba97', type: "icon", size: 80, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: '60972bd3035aa30b37d19a6c301cac505ff698d3', type: "icon", size: 68, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: '5ad39c4d4f858d2b3f2af2547235483a1450c87e', type: "icon", size: 48, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: 'f6be5ee80c7cc443cd8c1080aa6d4043ab6cdeb3', type: "icon", size: 40, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: 'a4794c60e66c9617f904de8c65bb56c9e5e37540', type: "icon", size: 32, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: 'd80ce7011271aec41ea7e9c4e610d0a922c3390e', type: "icon", size: 24, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } })), h("dga-avatar-group", { key: 'a9423d0c22161f1d88532dba858c070fdd3b2480', stacked: true }, h("dga-avatar", { key: '6e981be499f56f74f99a993ef38433c0689de304', type: "initials", text: 'AB', size: 40 }), h("dga-avatar", { key: 'a9d20ecad55e9ee4f1e0614cbf6a5ffb5241ff5c', type: "initials", text: 'CD', size: 40 }), h("dga-avatar", { key: '9fadd325d41a6b18c28c55446921f65283458c95', type: "initials", text: 'SB', size: 40 }), h("dga-avatar", { key: '55d748a502ce5225d2e63ab28c353bafca0fca1c', type: "initials", text: 'WK', size: 40 }), h("dga-avatar", { key: '3b3963b6f1fc115860a695c4ce620cdfbc5726bd', type: 'initials', text: `+4`, size: 40 })), h("div", { key: '57b19f6bad52ae4bf40f6f74230f3dd864313914', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "nds-avatar-usage"; }
    static get states() {
        return {
            "variant": {}
        };
    }
}
