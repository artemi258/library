(() => {
    const $ = function(selector) {
        const elements = document.querySelectorAll(selector);
        const obj = {};
        obj.hide = () => {
            elements.forEach(element => {
                element.style.display = 'none';
            });
            return obj;
        }
        obj.show = () => {
            elements.forEach(element => {
                element.style.display = '';
            });
            return obj;
        }  
        return obj;
    };
        
    window.$ = $;
})();

