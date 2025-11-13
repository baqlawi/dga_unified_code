import { h } from "@stencil/core";
export class DgaPickerUsage {
    render() {
        return (h("div", { key: '7f3a2a55742be2e0e71cc7786237452deb302a7a' }, h("h1", { key: '3db730e06d12e981667a4e25dc5dd22aa43aea86' }, "Datepicker Example"), h("div", { key: '9ec18fe4e87a12a5d42fbdc851932fb27b884eca', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'f9f66d17ac794b89812e00fc7ce7777374dc9753', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-datepicker", { key: 'a93bbe1a179cdd450ada050e135c15fc220364eb', inputField: false, qickOptions: true }), h("dga-datepicker", { key: 'd9211cadb5ef2d007f1eb427e183488f1498cb30', RTL: true, inputField: true, range: true, qickOptions: true }), h("dga-datepicker", { key: '86422422aadd6b0979fe545164f6255adc6189b1', range: true })), h("div", { key: '633e85c5bac030aa8bd266af53afadef6be074d1', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-datepicker-usage"; }
}
