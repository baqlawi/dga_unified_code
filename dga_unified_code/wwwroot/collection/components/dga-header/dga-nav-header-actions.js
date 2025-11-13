import { h, Fragment } from "@stencil/core";
export class DgaNavHeaderActions {
    constructor() {
        this.isMenuOpen = false; // State to control menu visibility
        this.toggleMenu = () => {
            this.isMenuOpen = !this.isMenuOpen;
            if (this.isMenuOpen) {
                document.addEventListener('click', this.handleOutsideClick);
            }
            else {
                document.removeEventListener('click', this.handleOutsideClick);
            }
        };
        this.closeMenu = () => {
            this.isMenuOpen = false;
            document.removeEventListener('click', this.handleOutsideClick);
        };
        this.handleOutsideClick = (event) => {
            const target = event.target;
            if (!this.el.contains(target)) {
                this.closeMenu();
            }
        };
    }
    render() {
        return (h(Fragment, { key: 'a7203ec320b3be7396eb3785bdd8c4663cdc2ccb' }, h("div", { key: 'b276fdc28ec8b5ca23feaa7c7416f1dbd669a776', style: { position: 'relative' } }, h("dga-button-v2", { key: '967bf99609e51556e37407aeb243f98b0ac6f944', "aria-haspopup": "true", "aria-expanded": this.isMenuOpen ? 'true' : 'false', iconOnly: true, leadIcon: true, leadIconProps: {
                name: 'more-horizontal-circle-01',
                size: 24,
                variant: 'solid',
                type: 'rounded',
            }, variant: "transparent", onClick: this.toggleMenu, class: "header-menu__btn" }), this.isMenuOpen && (h("ul", { key: 'e59d2ff07d620be157ef9a4ee58a34f93d1afad6', class: "dga-breadcrumb-dropdown" }, [{
                label: 'Item 1', path: '/item1'
            },
            { label: 'Item 2', path: '/item2' },
        ].map(ellipsedItem => (h("li", { key: ellipsedItem === null || ellipsedItem === void 0 ? void 0 : ellipsedItem.label, class: "dga-breadcrumb-dropdown-item" }, h("a", null, h("span", { class: "link__label" }, ellipsedItem.label)))))))), h("ul", { key: '665dbab8025f0f38b1bbb1fa9e959992df4db9af', class: "header-nav__actions" }, h("slot", { key: '4838b5da817fb088ef7d84fdd26bf344da2e933b' }))));
    }
    static get is() { return "dga-nav-header-actions"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-nav-header-sub-menu.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-nav-header-sub-menu.css"]
        };
    }
    static get states() {
        return {
            "isMenuOpen": {}
        };
    }
    static get elementRef() { return "el"; }
}
