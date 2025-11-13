import { h } from "@stencil/core";
export class DgaMetricChart {
    constructor() {
        this.type = 'realistic';
        this.trend = 'positive';
        this.size = 'lg';
        this.showMarker = false;
        this.data = [];
        this.lineColor = this.trend === 'positive' ? '#067647' : '#B42318';
        this.fillColor = this.trend === 'positive' ? '#079455' : '#D92D20';
        this.width = this.size === 'lg' ? 328 : 128;
        this.height = 64;
    }
    handleSizeChange() {
        this.width = this.size === 'lg' ? 328 : 128;
    }
    getLinePath() {
        const points = this.getPoints();
        switch (this.type) {
            case 'realistic':
                return this.getSmoothPath(points);
            case 'wavy':
                return this.getWavyPath(points);
            case 'straight':
                return this.getStraightPath(points);
            case 'layers':
                return this.getSmoothPath(points);
            default:
                return '';
        }
    }
    getPoints() {
        return this.data.map((d, i) => ({
            x: (i / (this.data.length - 1)) * this.width,
            y: this.height - (d / Math.max(...this.data)) * this.height
        }));
    }
    getSmoothPath(points) {
        return points.reduce((acc, point, i, arr) => {
            if (i === 0)
                return `M ${point.x},${point.y}`;
            const prev = arr[i - 1];
            const cX = (prev.x + point.x) / 2;
            return `${acc} C ${cX},${prev.y} ${cX},${point.y} ${point.x},${point.y}`;
        }, '');
    }
    getWavyPath(points) {
        return points.reduce((acc, point, i) => i === 0 ? `M ${point.x},${point.y}` : `${acc} Q ${point.x - 10},${point.y + 10} ${point.x},${point.y}`, '');
    }
    getStraightPath(points) {
        return points.reduce((acc, point, i) => i === 0 ? `M ${point.x},${point.y}` : `${acc} L ${point.x},${point.y}`, '');
    }
    getAreaPath() {
        const linePath = this.getLinePath();
        return `${linePath} L ${this.width},${this.height} L 0,${this.height} Z`;
    }
    render() {
        const linePath = this.getLinePath();
        const areaPath = this.getAreaPath();
        return (h("svg", { key: '50603cb6206def676708db0d1e158da0c538ddd9', width: this.width, height: this.height, viewBox: `0 0 ${this.width} ${this.height}` }, h("defs", { key: '15e91810e182e0c34a57f0a974e793751b246d82' }, h("linearGradient", { key: '12a538c6b8807e9c4b84040e0d61c3e0d1fbaa84', id: "areaGradient", x1: "0", x2: "0", y1: "0", y2: "1" }, h("stop", { key: '670bac2a6f5cbbee569232d0791e94ddce29d05a', offset: "0%", "stop-color": this.fillColor, "stop-opacity": "0.25" }), h("stop", { key: '17235c5fa2583152a29458f0b37187881ff9d361', offset: "100%", "stop-color": this.fillColor, "stop-opacity": "0" }))), h("path", { key: 'cecc8b65a069a2f32e5e89df2353bc5761c75dc8', d: areaPath, fill: "url(#areaGradient)" }), h("path", { key: '7be41d8b21447e868f1ee77002963e490e7902bb', d: linePath, fill: "none", stroke: this.lineColor, "stroke-width": "2" }), this.showMarker && this.getPoints().map((point) => (h("circle", { cx: point.x, cy: point.y, r: "4", fill: "white", stroke: this.lineColor, "stroke-width": "2" })))));
    }
    static get is() { return "dga-metric-chart"; }
    static get properties() {
        return {
            "type": {
                "type": "string",
                "attribute": "type",
                "mutable": false,
                "complexType": {
                    "original": "'realistic' | 'wavy' | 'straight' | 'layers'",
                    "resolved": "\"layers\" | \"realistic\" | \"straight\" | \"wavy\"",
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
                "defaultValue": "'realistic'"
            },
            "trend": {
                "type": "string",
                "attribute": "trend",
                "mutable": false,
                "complexType": {
                    "original": "'positive' | 'negative'",
                    "resolved": "\"negative\" | \"positive\"",
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
                "defaultValue": "'positive'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'lg'",
                    "resolved": "\"lg\" | \"sm\"",
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
                "defaultValue": "'lg'"
            },
            "showMarker": {
                "type": "boolean",
                "attribute": "show-marker",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "defaultValue": "false"
            },
            "data": {
                "type": "unknown",
                "attribute": "data",
                "mutable": false,
                "complexType": {
                    "original": "number[]",
                    "resolved": "number[]",
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
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "lineColor": {},
            "fillColor": {},
            "width": {},
            "height": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "size",
                "methodName": "handleSizeChange"
            }];
    }
}
