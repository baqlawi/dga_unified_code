import { h } from "@stencil/core";
import { guid } from "../../utils";
export class DgaFooter {
    constructor() {
        this.mainTitle = '';
        this.mainDescription = '';
        this.mainLinkTilte = '';
        this.mainImage = '';
        this.copyright = '';
        this.groupLinks = [];
        this.socialMediaTitle = 'Social Media';
        this.socialMediaLinks = [];
        this.accessibilityTitle = 'Accessibility Tools';
        this.accessibilityLinks = [];
        this.basicLinks = [];
        this.extraLinks = [];
        this.bottomImages = [];
    }
    render() {
        return (h("footer", { key: '28fbcec797525581383483c5b7276480c65bb9f3', class: `footer ${this.background === 'DarkGreen' ? 'footer--bg-brand' : ''}` }, h("section", { key: '5af8fb335e35be5953ef17b9dfce47ae61380eff', class: "footer-content" }, (this.mainLinkTilte || this.mainImage) && (h("div", { key: '7d4b6107a02a5ff97a33aa3f74e5167cc682af75', class: "footer-icon-section" }, h("a", { key: '25789d8949db79c9411f1a8a100cb6db0425bf15', class: this.background === 'DarkGreen' ? 'link--on-color' : '', href: this.mainLink || '#', target: "_blank", rel: "noopener noreferrer" }, this.mainLinkTilte))), (this.mainTitle || this.mainDescription) && (h("div", { key: '5d4ab7f479d77bf565c8c0076c4f22ea5d9be5d2', class: "footer-title-description" }, h("h3", { key: '4ced5c9b892e180243e1e0dc19699cfe9df2ade5', class: this.background === 'DarkGreen' ? 'link--on-color' : '' }, this.mainTitle), h("p", { key: 'b69878a8e72173d24269122edc999358e0eaefe2', class: this.background === 'DarkGreen' ? 'link--on-color' : '' }, this.mainDescription))), this.NavLinks && (h("section", { key: '12d20f5cc62316e1e5f6795907e347740a75604e', class: "footer__nav-links" }, this.groupLinks.map(group => (h("div", { class: "footer__nav-links-column" }, h("div", { class: "footer__nav-links-column-title" }, group.title), h("ul", { class: "footer__nav-links-column-body" }, group.links.map(link => (h("li", null, h("a", { href: link.target, class: `link link--sm link--neutral ${this.background === 'DarkGreen' ? 'link--on-color' : ''}` }, h("span", { class: "link__label" }, link.name))))))))), h("div", { key: '17c165401a5acf1517674e34ccd6be4f440239a5', class: "footer__nav-links-column" }, this.socialMediaLinks.length > 0 && (h("div", { key: '9bcfcfb6a29640c99358f72adfa03e63c3030872' }, this.socialMediaTitle && h("div", { key: '5ec5e2ef62b3322996afd93659dd6aa2da115e53', class: "footer__nav-links-column-title" }, this.socialMediaTitle), h("div", { key: '20dd2fff93938fd3d10eaa1852c76bcc2545252a', class: "dga-flex icons-container" }, this.socialMediaLinks.map(social => (h("a", { href: social.target, title: social.title, class: `dga-btn dga-btn--md dga-btn--secondary-outline dga-btn--icon ${this.background} ${this.background === 'DarkGreen' ? 'dga-btn--secondary-outline--on-color' : ''}` }, h("span", { class: "btn-icon" }, h("dga-icon-v2", Object.assign({}, social.icon, { size: 20 }))))))))), this.accessibilityLinks.length > 0 && (h("div", { key: 'c5c3ce42d325bc3bc4fc0521a7a63c040a9b150b' }, h("div", { key: 'f1d489922355ea30760fcc4cf2dfa357414c776e', class: "footer__nav-links-column-title" }, this.accessibilityTitle), h("div", { key: 'cfaf9e9ad077e333679de4bfc094168acded1faa', class: "dga-flex icons-container" }, this.accessibilityLinks.map(access => (h("a", { href: access.target, title: access.title, class: `dga-btn dga-btn--md dga-btn--secondary-outline dga-btn--icon ${this.background} ${this.background === 'DarkGreen' ? 'dga-btn--secondary-outline--on-color' : ''}` }, h("span", { class: "btn-icon" }, h("dga-icon-v2", Object.assign({}, access.icon, { size: 20 })))))))))))), h("section", { key: '672b86191ca258c989c73e139e8b252fe35f49cf', class: "footer__basic" }, h("div", { key: '16bcdd950ba6fa6573c9e030d50c5398c30c94b8', class: "footer__actions-copyright" }, h("ul", { key: '4eaa3e2567940ff7c5e45d2bf39a790794f49ee1', class: "footer__actions" }, this.basicLinks.map(link => (h("li", null, h("a", { href: link.target, class: `link link--sm link--neutral link--inline ${this.background === 'DarkGreen' ? 'link--on-color' : ''}` }, h("span", { class: "link__label" }, link.name)))))), this.copyright && h("p", { key: '87bf262e0938a75fdb40014c9102988cf0bd7874', class: "footer__copyright text-sm-semibold" }, this.copyright), h("ul", { key: 'e6adbbcc770fb8981ca2611192bb944653f0c10e', class: "footer__extra-actions" }, this.extraLinks.map(link => (h("li", null, h("a", { href: link.target, class: `link link--sm link--neutral ${this.background === 'DarkGreen' ? 'link--on-color' : ''}` }, h("span", { class: "link__label" }, link.name))))))), h("div", { key: '6fb87e25065d7a42f73ff74a3dce1fd35b427abb', class: "footer__logos" }, this.bottomImages.map(image => (h("img", { src: image, key: guid() }))))))));
    }
    static get is() { return "dga-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["./footer.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["footer.css"]
        };
    }
    static get properties() {
        return {
            "background": {
                "type": "string",
                "attribute": "background",
                "mutable": false,
                "complexType": {
                    "original": "'DarkGreen' | 'Light'",
                    "resolved": "\"DarkGreen\" | \"Light\"",
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
                "reflect": false
            },
            "NavLinks": {
                "type": "boolean",
                "attribute": "nav-links",
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
                "reflect": false
            },
            "mainTitle": {
                "type": "string",
                "attribute": "main-title",
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
            "mainDescription": {
                "type": "string",
                "attribute": "main-description",
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
            "mainLink": {
                "type": "string",
                "attribute": "main-link",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "reflect": false
            },
            "mainLinkTilte": {
                "type": "string",
                "attribute": "main-link-tilte",
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
            "mainImage": {
                "type": "string",
                "attribute": "main-image",
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
            "copyright": {
                "type": "string",
                "attribute": "copyright",
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
            "groupLinks": {
                "type": "unknown",
                "attribute": "group-links",
                "mutable": false,
                "complexType": {
                    "original": "{ title: string; links: { name: string; target: string }[] }[]",
                    "resolved": "{ title: string; links: { name: string; target: string; }[]; }[]",
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
            },
            "socialMediaTitle": {
                "type": "string",
                "attribute": "social-media-title",
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
                "defaultValue": "'Social Media'"
            },
            "socialMediaLinks": {
                "type": "unknown",
                "attribute": "social-media-links",
                "mutable": false,
                "complexType": {
                    "original": "{ title?: string; target: string; icon: Icon }[]",
                    "resolved": "{ title?: string; target: string; icon: Icon; }[]",
                    "references": {
                        "Icon": {
                            "location": "import",
                            "path": "../dga-featured-icon/dga-featured-icon",
                            "id": "src/components/dga-featured-icon/dga-featured-icon.tsx::Icon"
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
                "setter": false,
                "defaultValue": "[]"
            },
            "accessibilityTitle": {
                "type": "string",
                "attribute": "accessibility-title",
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
                "defaultValue": "'Accessibility Tools'"
            },
            "accessibilityLinks": {
                "type": "unknown",
                "attribute": "accessibility-links",
                "mutable": false,
                "complexType": {
                    "original": "{ title?: string; target: string; icon: Icon }[]",
                    "resolved": "{ title?: string; target: string; icon: Icon; }[]",
                    "references": {
                        "Icon": {
                            "location": "import",
                            "path": "../dga-featured-icon/dga-featured-icon",
                            "id": "src/components/dga-featured-icon/dga-featured-icon.tsx::Icon"
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
                "setter": false,
                "defaultValue": "[]"
            },
            "basicLinks": {
                "type": "unknown",
                "attribute": "basic-links",
                "mutable": false,
                "complexType": {
                    "original": "{ name: string; target: string }[]",
                    "resolved": "{ name: string; target: string; }[]",
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
            },
            "extraLinks": {
                "type": "unknown",
                "attribute": "extra-links",
                "mutable": false,
                "complexType": {
                    "original": "{ name: string; target: string }[]",
                    "resolved": "{ name: string; target: string; }[]",
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
            },
            "bottomImages": {
                "type": "unknown",
                "attribute": "bottom-images",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
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
}
