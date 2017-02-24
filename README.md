# jquery-lite
custom version of jquery

# Usage

```js
window.document.addEventListener('DOMContentLoaded', function() {

    $(".select").each(function(value, index){
        console.log(this.e, $(this).html());
    });

    $(".select").click(function(e){
        this.toggleClass("active");
    }).find(".options li").click(function(){
        this.html();
        console.log(this.data("value"));
    });


    $(".lazy_img").each(function(){
        this.attr('src', this.data('original'));
    });

    $(".btn-close-option-layer").click(function(){
        console.log("!");
        // this.parent().attr("style", "bottom: -100%");
        this.parent().css("bottom", "-100%");
    });

});
```

# Author
maybe me?
