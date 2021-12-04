import $ from '../core';


$.prototype.addEvent = function(eventName, callBack) {

    if (!eventName || !callBack) {
        return this;
    }
        for (let i = 0; i < this.length; i++) {
            this[i].addEventListener(eventName, callBack)
        }

        return this;
}
$.prototype.removeEvent = function(eventName, callBack) {

    if (!eventName || !callBack) {
        return this;
    }
        for (let i = 0; i < this.length; i++) {
            this[i].removeEventListener(eventName, callBack)
        }

        return this;
}
$.prototype.click = function(callBack) {
    for (let i = 0; i < this.length; i++) {
        if (!callBack) {
            this[i].click();
        } else {
            this[i].addEventListener('click', callBack)
        }
    }
    
        return this;
}
