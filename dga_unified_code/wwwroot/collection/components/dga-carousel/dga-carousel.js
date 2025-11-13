import { h, Host } from "@stencil/core";
export class DgaCarousel {
    constructor() {
        this.DIRECTION = {
            LEFT: Symbol('LEFT'),
            RIGHT: Symbol('RIGHT'),
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
            size: 'lg',
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
            const translateX = this.isRTL() ? this.currentSlideIndex * this.childWidth : -(this.currentSlideIndex * this.childWidth);
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
        return (h(Host, { key: 'b346ab54ddb4cc3484e2a0a6fd1dfa3d3369145e', class: `KCarousel KCarousel--${this.variant} KCarousel--${this.size}`, dir: this.Dir }, this.variant !== 'dots-only' && (h("div", { key: '77acce250b8cf26da0824d202919899557da1663', class: "KCarousel-body" }, this.variant === 'arrows' && (h("a", { key: '323da00b147fa7db0a1b61ac7832bd5881375ca8', class: {
                'KCarousel-arrow': true,
                'KCarousel-arrow--active': this.showLeftArrow(),
                [this.isRTL() ? 'right' : 'left']: true,
                [`KCarousel-arrow--${this.arrowsVariant}`]: true,
            }, onClick: () => this.changeSlide(this.DIRECTION.LEFT) }, h("dga-icon", { key: '97be1096ff4062aeb584d00f132a78dd2c7c8e55', icon: this.isRTL() ? 'arrow-right-01' : 'arrow-left-01', variant: "stroke", type: "rounded", size: 24 }))), h("div", { key: 'd1f7b8c1009f4aa7e58f5dd5463a4f9212d5f3a8', class: "KCarousel-container", style: { overflow: 'hidden', maxWidth: `${this.childWidth}px` } }, h("div", { key: '32c47394aca42d309314a11b07c1c70deb238946', style: {
                display: 'flex',
                transition: `transform ${this.transitionDuration}ms ease-in-out`,
            }, class: "KCarousel-slides", ref: (el) => (this.slidesContainer = el) }, h("slot", { key: '7590de7cc7398b93a563d469e4c590212a8a7e85' }))), this.variant === 'arrows' && (h("a", { key: '271cf82120df9c3bf7c5887e304e3a4721122ef9', class: {
                'KCarousel-arrow': true,
                'KCarousel-arrow--active': this.showRightArrow(),
                [this.isRTL() ? 'left' : 'right']: true,
                [`KCarousel-arrow--${this.arrowsVariant}`]: true,
            }, onClick: () => this.changeSlide(this.DIRECTION.RIGHT) }, h("dga-icon", { key: '87651fb515125ee2bb8e2e36ae3c4dd6c5d24294', icon: this.isRTL() ? 'arrow-left-01' : 'arrow-right-01', variant: "stroke", type: "rounded", size: 24 }))))), ['dots', 'dots-only'].includes(this.variant) && (h("div", { key: '0a0c7621233bb51da617375b7c97e6645c85aefb', class: "KCarousel-dots" }, Array.from({ length: this.childrenLength }).map((_, index) => (h("span", { class: {
                'KCarousel-dot': true,
                'is-active': this.isHighlighted(index),
            }, onClick: () => {
                this.currentSlideIndex = index;
                this.updateSlidePosition();
            } })))))));
    }
    static get is() { return "dga-carousel"; }
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
                    "original": "{\n    variant: 'primary' | 'subtle';\n    size: 'sm' | 'md' | 'lg';\n  }",
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
                "defaultValue": "{\n    variant: 'primary',\n    size: 'lg',\n  }"
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
