const $ = function name(selector) {
    return new $.prototype.init(selector);
}

$.prototype.init = function (selector) {
    if (!selector) {
            return this;
    }

    if (selector.tagName) {
         this[0] = selector;
         console.log(this[0]);
         this.length = 1;

         return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
}

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;