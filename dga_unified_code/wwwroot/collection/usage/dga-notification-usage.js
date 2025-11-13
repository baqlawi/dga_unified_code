import { h } from "@stencil/core";
export class DgaNotificationUsage {
    constructor() {
        this.variant = 'neutral';
    }
    render() {
        return (h("div", { key: '4891cf0b6639a986a06c18d21ff9273abba6fd0b' }, h("h1", { key: '3216fe429d181a853964803c46d0d29020146c0b' }, "Notification Example"), h("div", { key: 'c7d199b3767239ed8da945e31d281a04a6637065', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'd979851d545984f8d3c4219a9c7c49d259a1bf4f', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-notification", { key: '2e6c0e77e9dafff01d17ff33236ecef240f489d4', leadText: "This is a very important banner message that requires attention", variant: this.variant, dismissable: true }), h("dga-notification", { key: '6159d7a052b2f95d43934ff671f129dcdba19933', leadText: "This is a very important banner message that requires attention", variant: "critical", dismissable: true }), h("dga-notification", { key: 'c22b7d44b57b0aadeb292c43844dbc40ae7ab23a', leadText: "This is a very important banner message that requires attention", variant: "info", dismissable: true }), h("dga-notification", { key: '32e9536891259a9853c1c3177f2379d7750f8049', leadText: "This is a very important banner message that requires attention", variant: "success", dismissable: true }), h("dga-notification", { key: 'fc0bd6027e90f4c463e0bec4ad062e2182d01a87', leadText: "This is a very important banner message that requires attention", variant: "warning", dismissable: true })), h("div", { key: '5964f202a8cd477298ba90be2ec86ae9ac59a8dc', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-notification-usage"; }
    static get states() {
        return {
            "variant": {}
        };
    }
}
