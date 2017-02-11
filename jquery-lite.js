(function(){
    var $ = function(sel, ne) {
        var e = null;
        var _ = this;
        _.init = function(_sel, ne){
            if(typeof ne != 'undefined'){
                _.e = ne;
            }else if(typeof _sel == 'string'){
                _.e = document.querySelectorAll(_sel);
            }else if(_.isDom(_sel)){
                console.log("돔이네!");
                _.e = _sel;
            }
        };


        // Iter
        _.each = function(func){
            /**
             * $("SEL").each(function);
             */
            for(var i = 0, j = _.e.length ; i < j; i ++ ){
                func.apply(new $(null, [_.e[i]]), [_.e[i], i]);
            }
        };

        _.loop = function(func){
            for(var i = 0, j = _.e.length ; i < j; i ++ ){
                func( _.e[i] );
            }
        };

        _.loopIter = function(iter, func){
            for(var i = 0, j = iter.length ; i < j; i ++ ){
                func( iter[i] );
            }
        };


        // CLASS
        _.addClass = function(className){
            _.loop(function(el){
                el.classList.add(className);
            });

            return _;
        };

        _.removeClass = function(clsssName){
            _.loop(function(el){
                el.classList.remove(className);
            });

            return _;
        };

        _.toggleClass = function(className){
            _.loop(function(el){
                el.classList.toggle(className);
            });
        };



        // CSS
        _.css = function(pro, val){
            if(typeof val != 'undefined'){
                _.loop(function(el){
                    el.style[pro] = val;
                });
            }else{
                alert("NOT YET!");
            }
            return _;
        };


        // DOM
        _.parent = function(){
            var ar = [];
            _.loop(function(el){
                ar.push(el.parentNode);
            });
            _.set(ar);

            return _;
        };

        _.remove = function(){
            _.loop(function(el){
                el.remove();
            });

            return _;
        };

        _.find = function(selToF){
            var ar = [];
            _.loop(function(el){
                var ar2 = [];

                _.loopIter(el.querySelectorAll(selToF), function(elF){
                    ar.push(elF);
                });
            });
            _.set(ar);
            return _;
        };

        _.eq = function(i){
            _.set([_.e[i]]);
            return _;
        };


        // EVENT
        _.addEvent = function(trigger, func){
            _.loop(function(el){
                el.addEventListener(trigger, function(e){
                    func.apply(new $(null, [el]), [e]);
                });
            });
            return _;
        };

        _.on = function(trigger, func){
            return _.addEvent(trigger, func);
        };

        _.click = function(func){
            _.addEvent('click', func);
            return _;
        };


        // DATA
        _.html = function(ne){
            if(typeof ne != 'undefined'){
                _.loop(function(el){
                    el.innerHTML = ne;
                });
                return _;
            } else {
                return _.e[0].innerHTML;
            }
        };

        _.text = function(ne){
            if(typeof ne != 'undefined'){
                _.loop(function(el){
                    el.innerHTML = ne;
                });
                return _;
            } else {
                return _.e[0].textContent;
            }
        };

        _.val = function(){
            return _.e[0].value;
        };

        _.data = function(prop){
            return _.e[0].getAttribute('data-'+prop);
        };

        _.attr = function(prop, ne){
            if(typeof ne != 'undefined'){
                _.loop(function(el){
                    el.setAttribute(prop, ne);
                });
                return _;
            }else{
                return _.e[0].getAttribute(prop);
            }


        };

        _.set = function(el){
            _.e = el;
        };

        // CHECK
        _.isDom = function (o) {
            return typeof HTMLElement === "object" ? o instanceof HTMLElement : o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string";
        };


        _.init(sel, ne);
        return _;
    };

    window.$ = $;
    window.jQuery = $;
    return $;
})();
