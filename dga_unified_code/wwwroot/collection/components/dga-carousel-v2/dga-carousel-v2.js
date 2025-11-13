import { h } from "@stencil/core";
export class DgaCarousel {
    constructor() {
        this.DIRECTION = {
            LEFT: Symbol('LEFT'),
            RIGHT: Symbol('RIGHT')
        };
        this.variant = 'arrows';
        this.showDots = true;
        this.steps = 1;
        this.transitionDuration = 600;
        this.Dir = 'rtl';
        this.size = 'lg';
        this.arrowsVariant = 'primary';
        this.arrows = {
            variant: 'primary',
            size: 'lg'
        };
        this.childWidth = 0;
        this.childrenLength = 0;
        this.currentSlideIndex = 0;
    }
    isRTL() {
        return this.Dir === 'rtl';
    }
    changeSlide(direction) {
        const isMovingForward = direction === this.DIRECTION.RIGHT;
        const isMovingBackward = direction === this.DIRECTION.LEFT;
        if (this.isRTL()) {
            // In RTL: RIGHT means going towards index 0, LEFT means going towards the end
            if (isMovingForward && this.currentSlideIndex > 0) {
                this.currentSlideIndex--;
            }
            else if (isMovingBackward && this.currentSlideIndex < this.childrenLength - 1) {
                this.currentSlideIndex++;
            }
        }
        else {
            // In LTR: RIGHT means going towards the end, LEFT means going towards index 0
            if (isMovingForward && this.currentSlideIndex < this.childrenLength - 1) {
                this.currentSlideIndex++;
            }
            else if (isMovingBackward && this.currentSlideIndex > 0) {
                this.currentSlideIndex--;
            }
        }
        this.updateSlidePosition();
    }
    updateSlidePosition() {
        if (this.slidesContainer) {
            const translateX = this.isRTL()
                ? (this.currentSlideIndex * this.childWidth)
                : -(this.currentSlideIndex * this.childWidth);
            this.slidesContainer.style.transform = `translateX(${translateX}px)`;
        }
    }
    showLeftArrow() {
        if (this.isRTL()) {
            // In RTL: Left arrow shows when we can move towards the end (increase index)
            return this.currentSlideIndex < this.childrenLength - 1;
        }
        // In LTR: Left arrow shows when we can move towards the start (decrease index)
        return this.currentSlideIndex > 0;
    }
    showRightArrow() {
        if (this.isRTL()) {
            // In RTL: Right arrow shows when we can move towards the start (decrease index)
            return this.currentSlideIndex > 0;
        }
        // In LTR: Right arrow shows when we can move towards the end (increase index)
        return this.currentSlideIndex < this.childrenLength - 1;
    }
    isHighlighted(index) {
        return index === this.currentSlideIndex;
    }
    componentDidLoad() {
        var _a;
        const slot = (_a = this.el.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('slot');
        slot === null || slot === void 0 ? void 0 : slot.addEventListener('slotchange', this.calculateChildWidth.bind(this));
        this.calculateChildWidth();
        this.updateChildrenLength();
    }
    calculateChildWidth() {
        const child = this.slidesContainer.querySelector('.KCarousel-slides > *');
        if (child) {
            this.childWidth = child.clientWidth;
        }
    }
    updateChildrenLength() {
        if (this.slidesContainer) {
            this.childrenLength = this.slidesContainer.childElementCount;
        }
    }
    render() {
        return (h("section", { key: 'd4bfbb847179b61417ac3eb5453af8aed881870f', class: "embla" }, h("div", { key: '530f1ac5ed39be782bc69378807fb884b9748234', class: "embla__viewport" }, h("div", { key: 'f56b89070d00a29eef72b27478c2d3083363e881', class: "embla__container" }, h("div", { key: '78cee2a6ab972860a1b8cd70148ed2cb0842957b', class: "embla__slide" }, h("div", { key: '3162557b787224494b63a6522c2ca05c5da27200', class: "embla__slide__number" }, "1")), h("div", { key: '06cacad1aa2c07ed188a2e6d38a3b7ac729bc28e', class: "embla__slide" }, h("div", { key: '6578c8c9663d7d0bd6a8e7980565092e9269fc81', class: "embla__slide__number" }, "2")), h("div", { key: '6c88fa5ce07a009b46a3a8ca0d5213b9df3a0676', class: "embla__slide" }, h("div", { key: '74772c46f3437417efef32278ff9d9cb92033ba1', class: "embla__slide__number" }, "3")), h("div", { key: 'aa075a34d6b99d9a2b76018a6da168d4667180f0', class: "embla__slide" }, h("div", { key: 'd31adc6af31e3cf7039c3692939d7cb645583fff', class: "embla__slide__number" }, "4")), h("div", { key: '3b89c9a08df708d8f7f8700397a28d2e1676ceac', class: "embla__slide" }, h("div", { key: '7f8ee18821c5476cb468d2a83b067dbfafa18d41', class: "embla__slide__number" }, "5")))), h("div", { key: 'c2764da8c4d9f4d17bd5fffc4016c70a1ecf3552', class: "embla__controls" }, h("div", { key: '72e20f6a9c48380861f856f67e48e7c23758ecba', class: "embla__buttons" }, h("button", { key: '4c32a600c3618cde98e96add6be0bb5f6b3bb613', class: "embla__button embla__button--prev", type: "button" }, h("svg", { key: '7160cdb032e4b67e9f545d84882d661000f4ad7a', class: "embla__button__svg", viewBox: "0 0 532 532" }, h("path", { key: '779ccf6a7159465c8466a8aa133bc4a1e43f00bd', fill: "currentColor", d: "M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z" }))), h("button", { key: 'ca7f99c8efb668c3431e429738e08f8426cb7301', class: "embla__button embla__button--next", type: "button" }, h("svg", { key: 'bfa44646a9510e08c605b8a9e5a0653c4af62505', class: "embla__button__svg", viewBox: "0 0 532 532" }, h("path", { key: 'fb0e3c105a12651544c083c28ab2a47822a244d9', fill: "currentColor", d: "M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z" })))), h("div", { key: 'fc6246271312cf8721d7d5dfc6689c3852b67ff8', class: "embla__dots" }))));
    }
    static get is() { return "dga-carousel-v2"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-carousel.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-carousel.css"]
        };
    }
    static get properties() {
        return {
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'arrows' | 'dots' | 'dots-only'",
                    "resolved": "\"arrows\" | \"dots\" | \"dots-only\"",
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
                "defaultValue": "'arrows'"
            },
            "showDots": {
                "type": "boolean",
                "attribute": "show-dots",
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
                "defaultValue": "true"
            },
            "steps": {
                "type": "number",
                "attribute": "steps",
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
            "transitionDuration": {
                "type": "number",
                "attribute": "transition-duration",
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
                "defaultValue": "600"
            },
            "Dir": {
                "type": "string",
                "attribute": "dir",
                "mutable": false,
                "complexType": {
                    "original": "'rtl' | 'ltr'",
                    "resolved": "\"ltr\" | \"rtl\"",
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
                "defaultValue": "'rtl'"
            },
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'sm' | 'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\" | \"sm\"",
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
                "defaultValue": "'lg'"
            },
            "arrowsVariant": {
                "type": "string",
                "attribute": "arrows-variant",
                "mutable": false,
                "complexType": {
                    "original": "'primary' | 'subtle'",
                    "resolved": "\"primary\" | \"subtle\"",
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
                "defaultValue": "'primary'"
            },
            "arrows": {
                "type": "unknown",
                "attribute": "arrows",
                "mutable": false,
                "complexType": {
                    "original": "{\n    variant: 'primary' | 'subtle';\n    size: 'sm' | 'md' | 'lg'\n  }",
                    "resolved": "{ variant: \"subtle\" | \"primary\"; size: \"lg\" | \"md\" | \"sm\"; }",
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
                "defaultValue": "{\n    variant: 'primary',\n    size: 'lg'\n  }"
            }
        };
    }
    static get states() {
        return {
            "childWidth": {},
            "childrenLength": {},
            "currentSlideIndex": {}
        };
    }
    static get elementRef() { return "el"; }
}
