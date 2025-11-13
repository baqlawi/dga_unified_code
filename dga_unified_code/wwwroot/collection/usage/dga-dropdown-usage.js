import { h } from "@stencil/core";
export class DgaDropdownUsage {
    constructor() {
        this.activeStep = 1;
        this.selectedValue = 'Option-1';
    }
    render() {
        return (h("div", { key: 'c99ef4abd14f83bb99ffba3d56d63c990555b0cb' }, h("h1", { key: 'f98770aee8ed8778159925c8407f424c2c562fde' }, "Dropdown Example"), h("div", { key: '3768e6fe2f0223143b9003da3b8376e192f9d3b7', style: { padding: '50px', display: 'flex', gap: '20px' } }, h("div", { key: 'c5cca93ae6b2b190c0998a38650ecefebb830026', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }, h("dga-dropdown", { key: '30a9771750c35d751e063b514ecc258f38894f51', placeholder: "Placeholder text", variant: "default", optionLabel: "label", trackBy: "value", value: this.selectedValue, options: [
                {
                    label: 'Netherlands Antiles',
                    value: 'Option-1',
                },
                {
                    label: 'Option 2',
                    value: 'Option-2',
                },
                {
                    label: 'Option 3',
                    value: 'Option-3',
                },
            ], onChange: (value) => this.selectedValue = value }), this.selectedValue, h("dga-dropdown", { key: 'dbbf643ca91c74e0d588b9661f82b86c55372896', placeholder: "Placeholder text", variant: "darker", optionLabel: "label", trackBy: "value", options: [
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option Optionbbb',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
            ] }), h("dga-dropdown", { key: 'f6f0e02ee967c645019669f0c6710edc45220d37', placeholder: "Placeholder text", variant: "lighter", optionLabel: "label", trackBy: "value", options: [
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
            ] }), h("dga-dropdown", { key: '994266b66741bdd7e48e12f0cd70fc1f145d4c13', error: true, placeholder: "Placeholder text", variant: "lighter", optionLabel: "label", trackBy: "value", options: [
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
            ] }), ['lg', 'md'].map((size) => (h("dga-dropdown", { key: size, size: size, placeholder: "Placeholder text", variant: "default", optionLabel: "label", trackBy: "value", options: [
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
            ] }))), h("dga-dropdown", { key: 'ddf1c397c6323566d301b99ba790661e040747ad', multiSelect: true, placeholder: "Placeholder text", variant: "lighter", optionLabel: "label", trackBy: "value", options: [
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
                {
                    label: 'Option',
                    value: 'Option',
                },
            ] })), h("div", { key: 'f9423cd6720dd1aa65f2c3fba91dc9a52bff75cd', style: { display: 'flex', flexDirection: 'column', gap: '20px' } }))));
    }
    static get is() { return "dga-dropdown-usage"; }
    static get states() {
        return {
            "activeStep": {},
            "selectedValue": {}
        };
    }
}
