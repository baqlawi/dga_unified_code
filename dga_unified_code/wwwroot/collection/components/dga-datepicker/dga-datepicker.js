import { h, Host } from "@stencil/core";
import { getMonthDays, getDaysFromPreviousMonth, getDaysFromNextMonth, defaultStaticRanges, compareDatesWithoutTime, validateInputDate, daysMap, sameDate, } from "./dateUtils";
export class DgaDatepicker {
    constructor() {
        this.RTL = false;
        this.initialDate = new Date();
        this.range = false;
        this.dualMonthView = false;
        this.inputField = false;
        this.submitButton = false;
        this.qickOptions = false;
        // @Prop() onChange?: (event?: any) => void = () => { };
        // value;
        // onChange = () => {};
        // @Prop() onSubmit = () => {};
        // @Prop() onCancel = () => {};
        this.onSubmit = () => { };
        this.onCancel = () => { };
        this.currentMonth = this.initialDate;
        // @State() selectedDate: Date | null = null;
        this.selectedDate = this.value || new Date();
        this.rangeDates = {};
        this.inputDates = {
            startDate: '',
            endDate: '',
        };
        this.handlePrevClick = () => {
            const prevMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
            // this.monthChange.emit(prevMonth);
            this.handleChangeMonth(prevMonth);
        };
        this.handleNextClick = () => {
            const nextMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
            // this.monthChange.emit(nextMonth);
            this.handleChangeMonth(nextMonth);
        };
    }
    watchSelectedDate(newDate, oldDate) {
        if (newDate !== oldDate) {
            // this.onChange(newDate);
            this.change.emit(newDate);
        }
    }
    watchValue(newValue, oldValue) {
        if (newValue !== oldValue && newValue != this.selectedDate) {
            this.selectedDate = newValue;
            this.currentMonth = new Date(newValue.getFullYear(), newValue.getMonth(), 1);
        }
    }
    get nextMonth() {
        return new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1);
    }
    get days() {
        return [
            ...getDaysFromPreviousMonth(this.currentMonth).slice(0, 2),
            ...getMonthDays(this.currentMonth),
            ...getDaysFromNextMonth(this.currentMonth).slice(0, 2),
        ];
    }
    get nextMonthDays() {
        return [
            ...getDaysFromPreviousMonth(this.nextMonth).slice(0, 2),
            ...getMonthDays(this.nextMonth),
            ...getDaysFromNextMonth(this.nextMonth).slice(0, 2),
        ];
    }
    formatDate(date) {
        if (!date)
            return '';
        const dateObj = new Date(date);
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December',
        ];
        return `${monthNames[dateObj.getMonth()]} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
    }
    handleSelectDate(date) {
        if (this.range) {
            if (!this.rangeDates.startDate) {
                this.rangeDates = { startDate: date };
            }
            else if (!this.rangeDates.endDate) {
                if (date >= this.rangeDates.startDate) {
                    this.rangeDates = Object.assign(Object.assign({}, this.rangeDates), { endDate: date });
                }
                else {
                    this.rangeDates = { startDate: date };
                }
            }
            else {
                this.rangeDates = { startDate: date, endDate: null };
            }
        }
        else {
            this.selectedDate = date;
        }
    }
    handleInputDate(event) {
        const inputElement = event.target;
        const { name, value } = inputElement;
        this.inputDates = Object.assign(Object.assign({}, this.inputDates), { [name]: value });
    }
    handleChangeMonth(newMonth) {
        this.currentMonth = newMonth;
    }
    isMidRange(date) {
        console.log(date > this.rangeDates.startDate, date < this.rangeDates.endDate);
        if (this.range && this.rangeDates.startDate && this.rangeDates.endDate) {
            return date > this.rangeDates.startDate && date < this.rangeDates.endDate && !sameDate(date, this.rangeDates.startDate) && !sameDate(date, this.rangeDates.endDate);
        }
        return false;
    }
    isFirstRangeChild(date) {
        if (this.range && this.rangeDates.startDate && this.rangeDates.endDate && !sameDate(this.rangeDates.startDate, this.rangeDates.endDate)) {
            return this.rangeDates.startDate.getTime() !== this.rangeDates.endDate.getTime()
                && sameDate(date, this.rangeDates.startDate);
        }
        return false;
    }
    isLastRangeChild(date) {
        console.log(this.rangeDates, "this.rangeDatesthis.rangeDates");
        if (this.range && this.rangeDates.startDate && this.rangeDates.endDate && !sameDate(this.rangeDates.startDate, this.rangeDates.endDate)) {
            return this.rangeDates.startDate.getTime() !== this.rangeDates.endDate.getTime()
                && sameDate(date, this.rangeDates.endDate);
        }
        return false;
    }
    componentDidLoad() {
        if (this.inputField) {
            if (this.rangeDates.startDate) {
                this.inputDates = Object.assign(Object.assign({}, this.inputDates), { startDate: this.formatDate(this.rangeDates.startDate) });
            }
            if (this.rangeDates.endDate) {
                this.inputDates = Object.assign(Object.assign({}, this.inputDates), { endDate: this.formatDate(this.rangeDates.endDate) });
            }
            else {
                this.inputDates = Object.assign(Object.assign({}, this.inputDates), { endDate: '' });
            }
        }
    }
    render() {
        return (h(Host, { key: '8db917857f03f58ca7c9c8b9659e7b3f973be442' }, h("div", { key: '3358b09d7240f9a32a0a9e616f5632033d5d08e5', class: "date-picker-root dga-flex-column", "data-dual-view": this.dualMonthView, dir: this.RTL ? 'rtl' : 'ltr' }, h("div", { key: '1dbdcb04e55ce6334e57770a25a8a58ab37ecf76', class: "dga-flex" }, this.qickOptions && this.range && (h("div", { key: 'c4010a694b77607b0f199983438e2cefe20c2805', class: "date-picker-root__quick-options" }, h("span", { key: '4a7424a6a4d287bff105e6ff9d07f8608fd71e20', class: "text-md-regular" }, this.RTL ? 'اختصارات' : 'Qick options'), h("ul", { key: 'bb9e1ec7f9d1a791b6a0158dfbe28b2ce535fe0a', class: "options-list" }, defaultStaticRanges.map(({ label, range }) => (h("li", { key: label[this.RTL ? 'ar' : 'en'] }, h("button", { class: "text-md-medium", onClick: () => {
                this.rangeDates = range();
                console.log(range, "rrrrrrrrrrrrrrrrrrrraaaaaaaaaaaaaaaaaange");
            } }, label[this.RTL ? 'ar' : 'en']))))))), h("div", { key: 'db7c99dcfcf4891a9004dbac0ab1847ed9c39b92', class: "date-picker-root__main" }, this.inputField && (h("div", { key: 'ffb88e02288b20001d43647facc47bc261a3fb91', class: "date-picker-root__main__inputs" }, h("dga-text-input", { key: '2a55ce68d1d6924efb935e867a180f851af0b373', placeholder: "Month DD, YYYY", name: "startDate", value: this.inputDates.startDate, onChange: (e) => this.handleInputDate(e), onBlur: (e) => {
                if (validateInputDate(e.target.value)) {
                    const date = new Date(e.target.value);
                    if (this.range) {
                        if (!this.rangeDates.startDate) {
                            this.rangeDates = { startDate: date };
                        }
                        else if (this.rangeDates.endDate) {
                            if (date >= this.rangeDates.endDate) {
                                this.rangeDates = { startDate: date, endDate: date };
                            }
                            else {
                                this.rangeDates = Object.assign(Object.assign({}, this.rangeDates), { startDate: date });
                            }
                        }
                        else {
                            this.rangeDates = { startDate: date, endDate: null };
                        }
                    }
                    else {
                        this.selectedDate = date;
                    }
                }
            } }), this.range && (h("dga-text-input", { key: 'c985ecf962ff78c655bf95597e1e15bccb25f450', placeholder: "Month DD, YYYY", name: "endDate", value: this.inputDates.endDate, onChange: (e) => this.handleInputDate(e), onBlur: (e) => {
                if (validateInputDate(e.target.value)) {
                    const date = new Date(e.target.value);
                    if (this.range) {
                        if (!this.rangeDates.endDate) {
                            if (!this.rangeDates.startDate) {
                                this.rangeDates = { startDate: date, endDate: null };
                            }
                            else if (date <= this.rangeDates.startDate) {
                                this.rangeDates = {
                                    startDate: date,
                                    endDate: this.rangeDates.startDate,
                                };
                            }
                        }
                        else if (this.rangeDates.startDate) {
                            if (date <= this.rangeDates.startDate) {
                                this.rangeDates = {
                                    startDate: date,
                                    endDate: this.rangeDates.startDate,
                                };
                            }
                            else {
                                this.rangeDates = Object.assign(Object.assign({}, this.rangeDates), { endDate: date });
                            }
                        }
                        else {
                            this.rangeDates = { startDate: date, endDate: null };
                        }
                    }
                    else {
                        this.selectedDate = date;
                    }
                }
            } })))), h("div", { key: 'd7e170c002081529e456acd420944b5dcd506ffa', class: "date-picker-root__main__content-wrapper" }, h("div", { key: 'd74007b3e7cddc538f8fbf401c0280d030924c50', class: "date-picker" }, h("month-navigator", { key: 'dead35aaddbf8df75a78ee68bd2d77e3d6aa79f5', RTL: this.RTL, currentMonth: this.currentMonth, onChange: (date) => this.handleChangeMonth(date), showArrows: !this.dualMonthView }), h("div", { key: '57d6d8ec37e48d3c100e2a5aaddb7e95a615a0d4', class: "date-picker__weekdays" }, daysMap[this.RTL ? 'ar' : 'en'].map((day) => (h("div", { key: day, class: "date-picker__weekday" }, day)))), h("div", { key: '16fca643c9288d54eb493cd0075849b866508363', class: "date-picker__date-grid" }, this.days.map((date) => (h("date-cell", { key: date.toString(), date: date, isCurrentMonth: date.getMonth() === this.currentMonth.getMonth(), isSelected: (this.range)
                ? (!!this.rangeDates.startDate &&
                    compareDatesWithoutTime(date, this.rangeDates.startDate)) ||
                    (!!this.rangeDates.endDate &&
                        compareDatesWithoutTime(date, this.rangeDates.endDate))
                : this.selectedDate
                    ? compareDatesWithoutTime(date, this.selectedDate)
                    : false, isToday: new Date().toDateString() === date.toDateString(), isFirstRangeChild: this.isFirstRangeChild(date), isLastRangeChild: this.isLastRangeChild(date), midRange: this.isMidRange(date), onSelect: (date) => this.handleSelectDate(date) }))))), this.dualMonthView && (h("div", { key: '167541e1cdc2f61bb05d5d1eb64f7c34af14c67d', class: "date-picker" }, h("month-navigator", { key: '8dfa08053327639089883c9f1616d91b1783b661', currentMonth: this.nextMonth, onChange: (date) => {
                const newMonth = date.getMonth() === this.currentMonth.getMonth()
                    ? new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1)
                    : new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1);
                this.handleChangeMonth(newMonth);
            }, showArrows: true }), h("div", { key: '9723f8cd9fa767c87c0da259b07d1dfd6729ddef', class: "date-picker__weekdays" }, ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (h("div", { key: day, class: "date-picker__weekday" }, day)))), h("div", { key: 'c625f216d6585f4f59bdfe72dcf161eff8b59357', class: "date-picker__date-grid" }, this.nextMonthDays.map((date) => (h("date-cell", { key: date.toString(), date: date, isCurrentMonth: date.getMonth() === this.nextMonth.getMonth(), isSelected: this.range
                ? (!!this.rangeDates.startDate &&
                    date.getTime() ===
                        this.rangeDates.startDate.getTime()) ||
                    (!!this.rangeDates.endDate &&
                        date.getTime() === this.rangeDates.endDate.getTime())
                : this.selectedDate
                    ? date.getTime() === this.selectedDate.getTime()
                    : false, isToday: new Date().toDateString() === date.toDateString(), midRange: this.isMidRange(date), isFirstRangeChild: this.isFirstRangeChild(date), isLastRangeChild: this.isLastRangeChild(date), onSelect: (date) => this.handleSelectDate(date) }))))))))), this.submitButton && (h("div", { key: 'ffb069e43577931b8a382ec3b7293c7fc4263869', class: "date-picker-root__main__buttons" }, h("dga-button-v2", { key: 'c92e0c1980b0b206257d5cb3bd0a2e8967645dc9', label: "Cancel", onClick: this.onCancel, size: "lg", variant: "secondary-outline" }), h("dga-button-v2", { key: '5c38f9defb84a2e7a63e4bc8364b5bc412fb9b87', label: "Submit", onClick: this.onSubmit, size: "lg", variant: "neutral" }))))));
    }
    static get is() { return "dga-datepicker"; }
    static get originalStyleUrls() {
        return {
            "$": ["dga-datepicker.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["dga-datepicker.css"]
        };
    }
    static get properties() {
        return {
            "RTL": {
                "type": "boolean",
                "attribute": "r-t-l",
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
                "defaultValue": "false"
            },
            "initialDate": {
                "type": "unknown",
                "attribute": "initial-date",
                "mutable": false,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
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
                "defaultValue": "new Date()"
            },
            "range": {
                "type": "boolean",
                "attribute": "range",
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
                "defaultValue": "false"
            },
            "dualMonthView": {
                "type": "boolean",
                "attribute": "dual-month-view",
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
                "defaultValue": "false"
            },
            "inputField": {
                "type": "boolean",
                "attribute": "input-field",
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
                "defaultValue": "false"
            },
            "submitButton": {
                "type": "boolean",
                "attribute": "submit-button",
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
                "defaultValue": "false"
            },
            "qickOptions": {
                "type": "boolean",
                "attribute": "qick-options",
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
                "defaultValue": "false"
            },
            "value": {
                "type": "unknown",
                "attribute": "value",
                "mutable": false,
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
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
            "onSubmit": {
                "type": "unknown",
                "attribute": "on-submit",
                "mutable": false,
                "complexType": {
                    "original": "(event?: any) => void",
                    "resolved": "(event?: any) => void",
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
                "defaultValue": "() => { }"
            },
            "onCancel": {
                "type": "unknown",
                "attribute": "on-cancel",
                "mutable": false,
                "complexType": {
                    "original": "(event?: any) => void",
                    "resolved": "(event?: any) => void",
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
                "defaultValue": "() => { }"
            }
        };
    }
    static get states() {
        return {
            "currentMonth": {},
            "selectedDate": {},
            "rangeDates": {},
            "inputDates": {}
        };
    }
    static get events() {
        return [{
                "method": "change",
                "name": "change",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "Date",
                    "resolved": "Date",
                    "references": {
                        "Date": {
                            "location": "global",
                            "id": "global::Date"
                        }
                    }
                }
            }];
    }
    static get watchers() {
        return [{
                "propName": "selectedDate",
                "methodName": "watchSelectedDate"
            }, {
                "propName": "value",
                "methodName": "watchValue"
            }];
    }
}
