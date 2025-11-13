import { h } from "@stencil/core";
import { guid } from "../../utils";
import { SxHandler } from "../../utils/sx-handler";
import { isElementRTL } from "../../utils/rtl-utils";
const DOTS = '...';
const range = (start, end) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
};
export class DgaPagination {
    constructor() {
        this.size = 'large';
        this.totalPageCount = 10;
        this.currentPage = 1;
        this.siblingCount = 1;
        this.onChange = () => { };
        this.onNext = () => {
            if (this.currentPage == this.totalPageCount)
                return;
            this.currentPage = this.currentPage + 1;
            this.onChange && this.onChange(this.currentPage);
        };
        this.onPrevious = () => {
            if (this.currentPage == 1)
                return;
            this.currentPage = this.currentPage - 1;
            this.onChange && this.onChange(this.currentPage);
        };
        this.handelPageChange = (activePage) => {
            if (activePage == this.currentPage)
                return;
            this.currentPage = activePage;
            this.onChange(this.currentPage);
        };
    }
    // @State() currentPage = 1;
    get paginationRange() {
        const { totalPageCount, siblingCount, currentPage } = this;
        const totalPageNumbers = siblingCount + 5;
        // If the number of pages is less than the page numbers we want to show in our pagination component, we return the range [1..totalPageCount]
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount);
        }
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);
        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;
        const firstPageIndex = 1;
        const lastPageIndex = totalPageCount;
        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);
            return [...leftRange, DOTS, totalPageCount];
        }
        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
            return [firstPageIndex, DOTS, ...rightRange];
        }
        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
        }
        return [];
    }
    componentWillLoad() {
        this.sxHandler = new SxHandler(this.el, 'dga-slider');
    }
    componentDidLoad() {
        this.sxHandler.processSx(this.sx);
    }
    sxChanged() {
        this.sxHandler.processSx(this.sx);
    }
    disconnectedCallback() {
        this.sxHandler.cleanup();
    }
    render() {
        return (h("ul", { key: '9a1c30a26f4720842bff56e7eec8a1de257b0619', dir: isElementRTL(this.el) ? 'rtl' : 'ltr', class: `pagination pagination--${this.size}` }, h("li", { key: '82f55d0d50842765232259dcc0197d3eed33c5cc', class: "pagination__item pagination__arrow" }, h("button", { key: 'bd7d8d264097dfad7073d4e16a05b9af82d0f831', onClick: this.onPrevious, disabled: this.currentPage === 1 }, h("svg", { key: 'f323d4bf784ad8293a61212faf0728a55e65359c', width: "17", height: "16", viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'a297b50dec28ffcf64ae207ac1bc8a0dfa4b0702', id: "Leading Icon" }, h("path", { key: 'd983c7a6af068f55e66f83d00ad3a6c8eda8dd04', id: "Icon", d: "M10.5 12L6.5 8L10.5 4", stroke: "#161616", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }))))), this.paginationRange &&
            this.paginationRange.map(pageNumber => {
                if (pageNumber === DOTS) {
                    return (h("li", { key: guid(), class: "pagination__item" }, "\u2026"));
                }
                return (h("li", { key: guid(), class: `pagination__item ${this.currentPage === pageNumber ? 'pagination__item--active' : ''}` }, h("button", { onClick: () => {
                        this.handelPageChange(pageNumber);
                    } }, pageNumber)));
            }), h("li", { key: '27c8ee1b28d8cf86a29c6db39d848263fccff54d', class: "pagination__item pagination__arrow" }, h("button", { key: 'e66037e46b82a5cd5d99b31b7398257ea28df37c', onClick: this.onNext, disabled: this.currentPage === this.totalPageCount }, h("svg", { key: 'c978edae30ecbf41222100017e8dd9060e70da37', width: "17", height: "16", viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("g", { key: 'ae8d88a1881a83ecd729977d57576c5e95ae932e', id: "Leading Icon" }, h("path", { key: '0abdf461b8dc76f707fafd087eb05a52e17bfea1', id: "Icon", d: "M6.5 12L10.5 8L6.5 4", stroke: "#161616", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })))))));
    }
    static get is() { return "dga-pagination"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-pagination.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-pagination.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'small' | 'medium' | 'large'",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
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
                "defaultValue": "'large'"
            },
            "totalPageCount": {
                "type": "number",
                "attribute": "total-page-count",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "10"
            },
            "currentPage": {
                "type": "number",
                "attribute": "current-page",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "1"
            },
            "siblingCount": {
                "type": "number",
                "attribute": "sibling-count",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "defaultValue": "1"
            },
            "onChange": {
                "type": "unknown",
                "attribute": "on-change",
                "mutable": false,
                "complexType": {
                    "original": "(value: number) => void",
                    "resolved": "(value: number) => void",
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
            "sx": {
                "type": "string",
                "attribute": "sx",
                "mutable": false,
                "complexType": {
                    "original": "SxProps | string",
                    "resolved": "SxProps | string",
                    "references": {
                        "SxProps": {
                            "location": "import",
                            "path": "../../utils/sx-handler",
                            "id": "src/utils/sx-handler.ts::SxProps"
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
                "reflect": false
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "sx",
                "methodName": "sxChanged"
            }];
    }
}
