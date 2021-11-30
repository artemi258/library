 function Obj(q,w, e, r) {
    
        this.q = q,
        this.w = w,
        this.e = e,
        this.r = r
   
}

Obj.prototype.g = 25;

const test = new Obj(10,20,30,40);

const h = test.g;
h


const $ = function name(selector) {
        return new $.prototype.init(selector);
}

$.prototype.init = function (selector) {
        if (!selector) {
                return this;
        }

        Object.assign(this, document.querySelectorAll(selector));
        this.length = document.querySelectorAll(selector).length;
        return this;
}
const b = $.prototype;

console.log(b)
console.log($('a'))