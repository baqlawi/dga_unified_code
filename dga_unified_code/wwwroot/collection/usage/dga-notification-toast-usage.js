import { h } from "@stencil/core";
export class DgaNotificationToastUsage {
    constructor() {
        this.type = 'success';
        this.open = false;
    }
    render() {
        return (h("div", { key: '9ae51b2b4d4ceb7eb4df4ba7dad131f23978543d' }, h("h1", { key: '4a1e1b273d502b4bf73c79c27e13c75fbf813209' }, "Notification Toast Example"), h("div", { key: '22228ceddff128bd1defdcb3a525c5fa3f272bba', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: '467ede341a921ce8e0ca2fa4c163098bcca9d73f', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("div", { key: '5318990216e2a2db52c81dab5a330091a684f2c4', style: { display: "flex", justifyContent: "center" } }, h("button", { key: '37aca750d7fd8ba30e023031845ae9fcad58dc0b', onClick: () => this.open = true }, "open"), h("button", { key: '8e972d116488723109d7acddcbf0c798fd065a54', onClick: () => this.open = false }, "close")), h("dga-notification-toast", { key: 'dc2609f34d857cc4972cde82210df86440b6ac7b', type: this.type, open: this.open, leadText: "Notification/Alert message title", hasHelperText: true, helperText: "When a Notification/Alert needs a further detailed explanation, it goes here.", action: true, buttonsList: [
                {
                    label: 'Button',
                    onClick: () => { },
                    title: 'Button 2',
                },
                {
                    label: 'Button',
                    onClick: () => { },
                    title: 'Button',
                },
            ], closeButton: true, vPostion: 'top', hPostion: 'left', onClose: () => this.open = false }), h("dga-notification-toast", { key: '9c7a333b227020f135d5f44fd25a589aaef1eb20', type: this.type, open: this.open, leadText: "Notification/Alert message title", hasHelperText: true, helperText: "When a Notification/Alert needs a further detailed explanation, it goes here.", action: true, buttonsList: [
                {
                    label: 'Button',
                    onClick: () => { },
                    title: 'Button 2',
                },
                {
                    label: 'Button',
                    onClick: () => { },
                    title: 'Button',
                },
            ], closeButton: true, vPostion: 'bottom', hPostion: 'left', onClose: () => this.open = false })), h("div", { key: '677fd59739cd18213440eb2fcb5ba012ed4bd457', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-notification-toast-usage"; }
    static get states() {
        return {
            "type": {},
            "open": {}
        };
    }
}
