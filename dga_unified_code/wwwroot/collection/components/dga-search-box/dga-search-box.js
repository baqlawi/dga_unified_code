import { Fragment, h, Host } from "@stencil/core";
import { guid } from "../../utils";
export class DgaSearchBox {
    constructor() {
        this.size = 'md';
        this.variant = 'default';
        this.error = false;
        this.showTrailingIcon = true;
        this.icon = true; // Adjusted to any since ReactNode isn't used in Stencil
        this.disabled = false;
        this.readonly = false;
        this.name = guid();
        this.value = '';
        this.onInput = () => { };
        this.speechLang = 'en'; // Default language is English
        this.fullwidth = true;
        this.isActive = false;
        this.isFocused = false;
        // @State() query: string = '';
        // @State() value: string = '';
        this.isListening = false;
        // Configure the timeout period (in milliseconds) for non-speaking.
        this.SILENCE_TIMEOUT_DURATION = 8000; // Stop after 8 seconds of silence
        this.handleResetInput = () => {
            this.value = ''; // Reset the input value
            this.onChange.emit({ target: { value: this.value } }); // Emit change event to inform parent component
        };
    }
    componentWillLoad() {
        // Check if browser supports SpeechRecognition
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            // this.recognition.continuous = false; // Only listen for a single input
            // this.recognition.interimResults = false;
            this.recognition.continuous = true; // Only listen for a single input
            this.recognition.interimResults = true;
            this.recognition.onresult = event => {
                let interimTranscript = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        this.value = event.results[i][0].transcript; // Final result
                    }
                    else {
                        interimTranscript += event.results[i][0].transcript; // Interim result
                    }
                }
                // Update the input with the real-time speech-to-text result
                this.value = interimTranscript || this.value;
            };
            // Handle recognition end
            this.recognition.onend = () => {
                this.isListening = false;
            };
            // Handle errors
            this.recognition.onerror = event => {
                console.error('Speech recognition error', event);
                this.isListening = false;
            };
        }
        else {
            console.error('SpeechRecognition is not supported by this browser.');
        }
    }
    startListening() {
        if (this.recognition) {
            // Set recognition language based on the selected language
            if (this.speechLang === 'en') {
                this.recognition.lang = 'en-US'; // English (US)
            }
            else if (this.speechLang === 'ar') {
                this.recognition.lang = 'ar'; // Arabic
            }
            this.isListening = true;
            this.recognition.start();
            // Start the silence timer when recognition starts
            this.resetSilenceTimer();
        }
    }
    stopListening() {
        if (this.recognition) {
            this.recognition.stop();
            this.isListening = false;
        }
    }
    // Reset the silence timer when speech is detected
    resetSilenceTimer() {
        this.clearSilenceTimer(); // Clear the previous timer
        this.silenceTimeout = setTimeout(() => {
            this.stopListening(); // Stop recognition after the timeout
        }, this.SILENCE_TIMEOUT_DURATION);
    }
    // Clear the silence timer to avoid stopping recognition prematurely
    clearSilenceTimer() {
        if (this.silenceTimeout) {
            clearTimeout(this.silenceTimeout);
        }
    }
    handleInputChange(event) {
        // this.onChange(event)
        this.value = event.target.value;
        this.onChange.emit({ target: { value: this.value } });
        // this.value = event.target.value;
    }
    render() {
        return (h(Host, { key: '88a9d2d6940ac86ed8f21570459dccabbf37633d' }, h("div", { key: 'eca3ea2f1d4804b18d7171e1f6dd254cff5cd600', class: { 'dga-form-control': true, 'dga-form-control--fullwidth': this.fullwidth } }, this.label && h("label", { key: '4f05ea95aea67c9729aae2894e88635c5facc32c', class: "dga-label" }, this.label), h("div", { key: '76e16af074ca388111f407bcfa82929d9e8d1d3e', class: `dga-search-box dga-search-box--${this.size} ${this.error ? 'dga-search-box--error' : ''} ${this.variant !== 'default' ? `dga-search-box--${this.variant}` : ''} ${this.isActive ? 'active' : ''} ${this.isFocused ? 'focus' : ''} ${this.disabled ? 'dga-search-box--disabled' : ''} ${this.readonly ? 'readOnly' : ''}`, ref: el => (this.inputContainerRef = el) }, this.icon && (h("span", { key: '942c3de63476bd1e8c614d06a42c02e42d9fcabf', class: "dga-search-box__icon" }, h("svg", { key: '46fcb4dd3da9dcd3164d6b4c72682cdcb3dc24e6', width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, h("path", { key: '5a5830806bb872f277770c062e149b9907f41137', "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M9.16675 1.04163C4.67943 1.04163 1.04175 4.67931 1.04175 9.16663C1.04175 13.6539 4.67943 17.2916 9.16675 17.2916C11.1854 17.2916 13.0322 16.5554 14.4531 15.3369L17.8915 18.7752C18.1356 19.0193 18.5313 19.0193 18.7754 18.7752C19.0194 18.5312 19.0194 18.1354 18.7754 17.8914L15.337 14.453C16.5556 13.032 17.2917 11.1853 17.2917 9.16663C17.2917 4.67931 13.6541 1.04163 9.16675 1.04163ZM2.29175 9.16663C2.29175 5.36967 5.36979 2.29163 9.16675 2.29163C12.9637 2.29163 16.0417 5.36967 16.0417 9.16663C16.0417 12.9636 12.9637 16.0416 9.16675 16.0416C5.36979 16.0416 2.29175 12.9636 2.29175 9.16663Z", fill: "#161616" })))), h("input", { key: '4a838dbe715fd93ea440728c6a71390667e0c251', value: this.value, name: this.name, type: "text", onFocus: () => (this.isFocused = true), onBlur: e => {
                this.isFocused = false;
                this.onBlur.emit(e);
            }, class: "dga-search-box__field", placeholder: this.placeholder, disabled: this.disabled, readOnly: this.readonly, onMouseDown: () => (this.isActive = true), onMouseUp: () => (this.isActive = false), onMouseOut: () => (this.isActive = false), onInput: event => {
                this.handleInputChange(event);
            } }), h("div", { key: '775b97d96ac19cd57ba1241d95ace86067ff2d47', class: "dga-search-box__actions" }, this.value.length > 0 && (h(Fragment, { key: '02bf3cbe1096ca48cf2c9ae0b153f0f608edd166' }, h("button", { key: '0ba8303fc60a0fb48339ddbe4b9b5642ee0758aa', class: "dga-search-box__action-btn", onClick: this.handleResetInput }, h("dga-icon-v2", { key: '36157c809c2e9710292abad34a6ee895cb40fe79', name: "cancel-01", variant: "stroke", size: 20 })), h("svg", { key: '8e2b58354cf88f37baf09f6b1833be45c5fe1e3d', xmlns: "http://www.w3.org/2000/svg", width: "1", height: "26", viewBox: "0 0 1 26", fill: "none" }, h("rect", { key: '635603ce26b7b2b0c8443bc631ffc05ee5eeaa98', x: "1", y: "0.5", width: "25", height: "1", transform: "rotate(90 1 0.5)", fill: "#D2D6DB" })))), this.showTrailingIcon && (h("dga-tooltip", { key: '6a0823c46da1192e80d203558855c980c81f06ae', tooltipTitle: "Search by voice", direction: "bottom", beakAlignment: "center", beakPlacement: "top" }, h("button", { key: '756c24b2e194cfdb822a5f7df89e81fb5af083f9', class: "dga-search-box__search-btn", onClick: () => this.startListening(), disabled: this.isListening }, this.isListening ? (h("span", { class: "dga-search-box__icon" }, h("dga-icon-v2", { name: "mic-01", variant: "stroke", size: 20 }))) : (h("span", { class: "dga-search-box__icon" }, h("dga-icon-v2", { name: "mic-01", variant: "stroke", size: 20 })))))))))));
    }
    static get is() { return "dga-search-box"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-search-box.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-search-box.css"]
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false
            },
            "placeholder": {
                "type": "string",
                "attribute": "placeholder",
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
            "size": {
                "type": "string",
                "attribute": "size",
                "mutable": false,
                "complexType": {
                    "original": "'md' | 'lg'",
                    "resolved": "\"lg\" | \"md\"",
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
                "defaultValue": "'md'"
            },
            "variant": {
                "type": "string",
                "attribute": "variant",
                "mutable": false,
                "complexType": {
                    "original": "'default' | 'lighter' | 'darker'",
                    "resolved": "\"darker\" | \"default\" | \"lighter\"",
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
                "defaultValue": "'default'"
            },
            "error": {
                "type": "boolean",
                "attribute": "error",
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
            "showTrailingIcon": {
                "type": "boolean",
                "attribute": "show-trailing-icon",
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
            "icon": {
                "type": "boolean",
                "attribute": "icon",
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
            "disabled": {
                "type": "boolean",
                "attribute": "disabled",
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
            "readonly": {
                "type": "boolean",
                "attribute": "readonly",
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
            "name": {
                "type": "string",
                "attribute": "name",
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
                "defaultValue": "guid()"
            },
            "value": {
                "type": "string",
                "attribute": "value",
                "mutable": true,
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
            "onInput": {
                "type": "unknown",
                "attribute": "on-input",
                "mutable": false,
                "complexType": {
                    "original": "(event?: Event) => void",
                    "resolved": "(event?: Event) => void",
                    "references": {
                        "Event": {
                            "location": "import",
                            "path": "@stencil/core",
                            "id": "../../node_modules/.pnpm/@stencil+core@4.36.0/node_modules/@stencil/core/internal/stencil-core/index.d.ts::Event"
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
                "defaultValue": "() => {}"
            },
            "speechLang": {
                "type": "string",
                "attribute": "speech-lang",
                "mutable": false,
                "complexType": {
                    "original": "'en' | 'ar'",
                    "resolved": "\"ar\" | \"en\"",
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
                "defaultValue": "'en'"
            },
            "fullwidth": {
                "type": "boolean",
                "attribute": "fullwidth",
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
            }
        };
    }
    static get states() {
        return {
            "isActive": {},
            "isFocused": {},
            "isListening": {}
        };
    }
    static get events() {
        return [{
                "method": "onChange",
                "name": "onChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }, {
                "method": "onBlur",
                "name": "onBlur",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "any",
                    "resolved": "any",
                    "references": {}
                }
            }];
    }
}
