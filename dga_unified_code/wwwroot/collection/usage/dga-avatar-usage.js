import { h } from "@stencil/core";
export class DgaAvatarUsage {
    constructor() {
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: '193d238ff8b41886d6e413c92caa5b068ac8734a' }, h("h1", { key: '5c7e8fba7c5543655a8fb1f23e6e4b792e5e72f4' }, "Avatar Example"), h("div", { key: '8bbdea2d63e3ed3cc2ad4d3d04e0bdbf6485e129', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '86b30b35da4122cc6d4017b88c11e6a0c1bf1873', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("div", { key: '584e11368b1641813d2a6f55cc7634178e6a5567', style: { padding: "10px", display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: "black" } }, h("dga-avatar", { key: '423406260aaf87943c0b40cb31a49df03b717eaf', size: 120, border: false, square: true, sx: {
                "& .dga-avatar": {
                    borderRadius: "100px"
                }
            } }), h("dga-avatar", { key: 'a9c28a7732f1ecfd9801e5a639a89fbb7fd9c42c', size: 120, border: true, square: true })), h("dga-avatar", { key: 'eee37fa40046a2fe771ffd90aac075dd66f9763a', type: "icon", size: 120, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: 'cb2e7d54ab394528400f4b8f2be0280c010f3735', type: "icon", size: 80, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: 'c88d5df0b98455eb3b528ce075ae3145fd34d6b3', type: "icon", size: 68, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: '39122daf998afb1fa0bd70003a6fb93adf71cac9', type: "icon", size: 48, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: 'b37e2dacfdfd78df81f7d8ed254c966cb1c011f6', type: "icon", size: 40, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: '059e5d33f9c6b94aea74dd5c037baacf4dab98de', type: "icon", size: 32, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } }), h("dga-avatar", { key: 'ce14be8770db9a2e505acfd64f3c80ca143240a0', type: "icon", size: 24, icon: {
                name: 'user',
                variant: "stroke",
                type: "rounded"
            } })), h("dga-avatar-group", { key: '295d73c6bb2af6d7fc20760a1abb6a908fba91a3', stacked: true }, h("dga-avatar", { key: '4e596fbe7926f0f9913331e10e16966b70f183a5', type: "initials", text: 'AB', size: 40 }), h("dga-avatar", { key: '6a18f8b235d51720aa5b141ecedb0c7f4c27c952', type: "initials", text: 'CD', size: 40 }), h("dga-avatar", { key: 'e58c465d425aea011382366d7d043e9e2fcab43c', type: "initials", text: 'SB', size: 40 }), h("dga-avatar", { key: '19766900183fc22d218b734535e27da0a03f8498', type: "initials", text: 'WK', size: 40 }), h("dga-avatar", { key: 'ac492735b35b08492c48fc8d82796e6220f8a83c', type: 'initials', text: `+4`, size: 40 })), h("div", { key: '5346b3d2a9883866327bf1454357c32f7adfe6a6', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-avatar-usage"; }
    static get states() {
        return {
            "variant": {}
        };
    }
}
