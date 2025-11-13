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
        return (h("div", { key: '22574ce3c9d9ea036d013b3bbc8cd390c1165705', class: `dga-metric`, "data-chart-size": this.Style }, h("div", { key: 'a6f524209d8bd4b89c98384510ca69517ba75cbe', class: "dga-metric__head" }, h("div", { key: '3d4b3d41b3f33cd09ac48b291b464db887b52258', class: "dga-metric__head-content" }, this.showFeaturedIcon && h("div", { key: '2d46b7c4ec2e413b470b374799618a10613c897c', class: "featured-icon featured-icon--light-brand featured-icon--circle featured-icon--sm" }, this.featuredIcon), this.label && h("span", { key: '997d3771bd53bcc9d8ec871d7e6b524315f90017', class: "dga-metric__head-content-text" }, this.label)), this.showMoreButton && (h("dga-button-v2", { key: 'd962334fb80e8bc48c9c0b0db6b6e5335d92c6e7', variant: "subtle", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'more-vertical',
                variant: 'stroke',
                type: 'rounded',
            }, onClick: this.onExpandAction }))), h("div", { key: '1278fec7010c0b69afcc13b83d3b83112e95aefb', class: "dga-metric__body" }, h("div", { key: 'a1782b8ee0c2433a01962634e51dc0eb199f1fd1', class: "dga-metric__content" }, h("h3", { key: '1db4529b03c4bb38d4dc8cd7d76b83462fc1e528', class: "dga-metric__content-percentage" }, this.percentage), this.showInfo && (h("div", { key: '98032465e358de976f86691831acbb56fa70707b', class: "dga-metric__content-change", "data-change-trend": this.changeProps.trend }, h("span", { key: '390c79891a1f71ede80a29f3b15c2197c0e8c460', class: "dga-metric__content-change-icon" }, h("dga-icon", { key: 'c67782c6927934607a259d3383e13f6452ad5318', icon: this.changeIcons[this.changeProps.type][this.changeProps.trend], type: "rounded", variant: "stroke", size: 24 })), h("span", { key: '5926dff1be667d8c78f5489f7b413efc31e6441e', class: "dga-metric__content-change-value" }, Math.abs(100), "%"), h("span", { key: '4f6732d398c9d2c20900a688c4f5b116336975de', class: "dga-metric__content-change-period" }, "vs last month")))), this.showChart && (h("div", { key: 'dc64138f3a31e7a30c98b0e2506e9b616fb0bf62', class: "dga-metric__chart" }, h("dga-metric-chart", Object.assign({ key: '6383f9e773b41604238b3804dd1c9e61847f2152' }, this.chartProps, { size: this.Style === 'small-chart' ? 'sm' : 'lg' }))))), this.showActions && (h(Fragment, { key: '2161c4eee6bdbfa60f914349a6adfcafd3b028b7' }, h("div", { key: '7152f709a3bd143375dd01df9b41823b971ec6e4', class: "dga-metric__divider" }), h("div", { key: '08c0c8a07d2e779e836e6b5a63b66b3ea81fe127', class: "dga-metric__actions" }, this.showSecondaryAction && (h("dga-button-v2", { key: 'cb2f67166465568c5324d8214af1a8700e794f1c', variant: "subtle", iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'settings-02',
                variant: 'stroke',
                type: 'rounded',
            }, onClick: this.onSecondaryAction })), h("dga-button-v2", { key: '237dd83a762df0ef0b55f216833004caaabf0ab6', variant: "secondary-outline", class: "dga-metric__actions--primary", label: "View Report", onClick: this.onPrimaryAction }))))));
    }
    static get is() { return "dga-metric-v2"; }
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
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-metric-v2/dga-metric-v2.tsx",
                            "id": "src/components/dga-metric-v2/dga-metric-v2.tsx::IChartProps"
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
                            "path": "/home/mahmoud/Documents/platform-code-cross-platform-storybook/packages/core/src/components/dga-metric-v2/dga-metric-v2.tsx",
                            "id": "src/components/dga-metric-v2/dga-metric-v2.tsx::ITrend"
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
