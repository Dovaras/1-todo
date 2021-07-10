class Form {
    constructor(selector) {
        this.selector = selector;

        this.DOM = null;
    }

    init() {
        // patikrinti, ar validus selector
        if (this.isValidSelector()) {
            return true;
        }

        this.findTargetElement();
    }

    isValidSelector() {
        if (typeof this.selector !== 'string' ||
            this.selector === '') {
            console.error('ERROR: selector turi buti ne tuscias string');
            return false;
        }
        return true;
    }

    findTargetElement() {
        const DOM = document.querySelector(this.selector);

        if (!DOM) {
            console.error('ERROR: pagal pateikta selector, elementas neegzistuoja');
            return false;
        }
    }
}

export { Form }