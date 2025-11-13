import { h, Fragment } from "@stencil/core";
export class DgaMetric {
    constructor() {
        this.label = '';
        this.Style = 'small-chart';
        this.percentage = '0%';
        this.showFeaturedIcon = true;
        this.featuredIcon = (h("i", { class: "hgi-stroke hgi-trade-up", style: { fontSize: '24px' } })); // Default icon
        this.showChart = true;
        this.showInfo = true;
        this.showActions = true;
        this.showSecondaryAction = true;
        this.showMoreButton = true;
        this.changeProps = {
            type: '01',
            trend: 'positive',
        };
        this.onPrimaryAction = () => { };
        this.onSecondaryAction = () => { };
        this.onExpandAction = () => { };
        this.changeIcons = {
            '01': {
                positive: 'arrow-up-02',
                negative: 'arrow-down-02',
            },
            '02': {
                positive: 'trade-up',
                negative: 'trade-down',
            },
        };
    }
    render() {
        return (h("div", { key: 'c3e81302803360c6ec77dbeb0ac903041818f8ab', class: `dga-metric`, "data-chart-size": this.Style }, h("div", { key: '79eb16fb10b8e0a3783cc8828ca4a9742830d652', class: "dga-metric__head" }, h("div", { key: 'db26cb53e9e79b479597e075e609ee0152c63765', class: "dga-metric__head-content" }, this.showFeaturedIcon && h("div", { key: 'c82fde2410059746728153dee822667033953487', class: "featured-icon featured-icon--light-brand featured-icon--circle featured-icon--sm" }, this.featuredIcon), this.label && h("span", { key: '3b8558a19e95fdebebdef5a730719d00422052d6', class: "dga-metric__head-content-text" }, this.label)), this.showMoreButton && (h("dga-button-v2", { key: '1830b2c8e082b50a73428197d1e1315dc4ad5ad5', variant: "subtle", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'more-vertical',
                variant: 'stroke',
                type: 'rounded',
            }, onClick: this.onExpandAction }))), h("div", { key: '036a7863965ff42b8ef124bf8441561db4aa5a63', class: "dga-metric__body" }, h("div", { key: '3baf918239636acd3baeeee992c9374a32c23476', class: "dga-metric__content" }, h("h3", { key: 'acc229cb330b42cb41c4baf783d35090ac6bbe95', class: "dga-metric__content-percentage" }, this.percentage), this.showInfo && (h("div", { key: '1544777034c55242315efe258aa54c13f97195ae', class: "dga-metric__content-change", "data-change-trend": this.changeProps.trend }, h("span", { key: 'a953add7512d093cf87961b7df3363e9a09a85be', class: "dga-metric__content-change-icon" }, h("dga-icon", { key: '6f460378f228fef24d9e41265855d84929258a1b', icon: this.changeIcons[this.changeProps.type][this.changeProps.trend], type: "rounded", variant: "stroke", size: 24 })), h("span", { key: '004e52596af2bb69595e2d0b8511e956449fdf92', class: "dga-metric__content-change-value" }, Math.abs(100), "%"), h("span", { key: '1e8ec90d1754fba73efc67330b56e2cf435b2f08', class: "dga-metric__content-change-period" }, "vs last month")))), this.showChart && (h("div", { key: '803fa2293e806a17f003c0bfe6db70c26da0dd6c', class: "dga-metric__chart" }, h("dga-metric-chart", Object.assign({ key: '832fe506f173e20578b588d4c86809790c1c8521' }, this.chartProps, { size: this.Style === 'small-chart' ? 'sm' : 'lg' }))))), this.showActions && (h(Fragment, { key: '834099870197f308abb3d2741ea9ef98ba713983' }, h("div", { key: 'ffe340e2aca3a8608e472ddf76644ab82bc9ae69', class: "dga-metric__divider" }), h("div", { key: '70e2e5716d8aff6993caca0bb931a4a302bfdc76', class: "dga-metric__actions" }, this.showSecondaryAction && (h("dga-button-v2", { key: '3b8dd04c29c750e7abff3c4044b308518ddac22f', variant: "subtle", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'settings-02',
                variant: 'stroke',
                type: 'rounded',
            }, onClick: this.onSecondaryAction })), h("dga-button-v2", { key: 'ed77a3cca3b83b01a3eab318691e0c42a094b901', variant: "secondary-outline", class: "dga-metric__actions--primary", label: "View Report", onClick: this.onPrimaryAction }))))));
    }
    static get is() { return "dga-metric"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-metric.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-metric.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "attribute": "label",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "''"
            },
            "Style": {
                "type": "string",
                "attribute": "style",
                "mutable": false,
                "complexType": {
                    "original": "'small-chart' | 'large-chart'",
                    "resolved": "\"large-chart\" | \"small-chart\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'small-chart'"
            },
            "percentage": {
                "type": "string",
                "attribute": "percentage",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "'0%'"
            },
            "showFeaturedIcon": {
                "type": "boolean",
                "attribute": "show-featured-icon",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "featuredIcon": {
                "type": "any",
                "attribute": "featured-icon",
                "mutable": false,
                "complexType": {
                    "original": "HTMLElement | any",
                    "resolved": "any",
                    "references": {
                        "HTMLElement": {
                            "location": "global",
                            "id": "global::HTMLElement"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "(<i class=\"hgi-stroke hgi-trade-up\" style={{ fontSize: '24px' }} />)"
            },
            "showChart": {
                "type": "boolean",
                "attribute": "show-chart",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "showInfo": {
                "type": "boolean",
                "attribute": "show-info",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "showActions": {
                "type": "boolean",
                "attribute": "show-actions",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "showSecondaryAction": {
                "type": "boolean",
                "attribute": "show-secondary-action",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "showMoreButton": {
                "type": "boolean",
                "attribute": "show-more-button",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "defaultValue": "true"
            },
            "changeProps": {
                "type": "unknown",
                "attribute": "change-props",
                "mutable": false,
                "complexType": {
                    "original": "{\n    type: '01' | '02';\n    trend: 'positive' | 'negative';\n  }",
                    "resolved": "{ type: \"01\" | \"02\"; trend: \"negative\" | \"positive\"; }",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "{\n    type: '01',\n    trend: 'positive',\n  }"
            },
            "chartProps": {
                "type": "unknown",
                "attribute": "chart-props",
                "mutable": false,
                "complexType": {
                    "original": "IChartProps",
                    "resolved": "IChartProps",
                    "references": {
                        "IChartProps": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-metric/dga-metric.tsx",
                            "id": "src/components/dga-metric/dga-metric.tsx::IChartProps"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "trend": {
                "type": "unknown",
                "attribute": "trend",
                "mutable": false,
                "complexType": {
                    "original": "ITrend",
                    "resolved": "ITrend",
                    "references": {
                        "ITrend": {
                            "location": "local",
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-metric/dga-metric.tsx",
                            "id": "src/components/dga-metric/dga-metric.tsx::ITrend"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            },
            "onPrimaryAction": {
                "type": "unknown",
                "attribute": "on-primary-action",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "() => {}"
            },
            "onSecondaryAction": {
                "type": "unknown",
                "attribute": "on-secondary-action",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "() => {}"
            },
            "onExpandAction": {
                "type": "unknown",
                "attribute": "on-expand-action",
                "mutable": false,
                "complexType": {
                    "original": "() => void",
                    "resolved": "() => void",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "() => {}"
            }
        };
    }
}
