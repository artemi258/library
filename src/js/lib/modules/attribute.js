import $ from '../core';


$.prototype.getAtt = function(attr) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].hasAttribute(attr)) {
            continue;
        } else {
           return this[i].getAttribute(attr);
        }
    }
}
$.prototype.setAtt = function(attr, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(attr, value);
    }

    return this
}
$.prototype.removeAtt = function(attr) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attr)) {
            this[i].removeAttribute(attr);
        }
    }
    return this
}
$.prototype.toggleAtt = function(attr, value) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(attr)) {
            this[i].removeAttribute(attr, value);
        } else {
            this[i].setAttribute(attr, value);
        }
    }
    return this
}