# jquery-lite (forked version)

Custom version of jquery with limited functions and very light weight. (only 211 lines of code). This is a fored version from the original code by **Minseok Kim**.

You can visit the original version by **Minseok Kim** at https://github.com/mskims/jquery-lite


# File Size
- jquery-lite.js (4.44KB)
- jquery-lite.min.js (2.11KB) (961 bytes when zipped)


# What I have changes

- change from classic function to arrow style (to be more concised)
- move some functions to __proto__ (to be more jQuery's way)
- add get function to element (to be more jQuery's way)
- modify data function to use dataset (original code use attribute)
- allow setting css using object (original code not yet implemented)
- allow using $() around function (to be more jQuery's way) 

# Usages

```js
$(() => {
    // set css using object syntax
    $("h1").css{
            color: 'red',
            textDecoration: 'underline'
        }
    )

    // bind to click event
    $("a").click(function(e) {
        console.log('I am clicked!');
    })

    // add class
    $("p").addClass('red-text');

    // remove class
    $("p").removeClass('red-text');

    // toggle class
    $("p").toggleClass('red-text');

    // set attribute
    $("a").attr("title", "link to Google");

    // set data
    $("a").data("x", 10);
});
```

# Author

This is a forked version with small modification from the original code by **Minseok Kim** (https://github.com/mskims/jquery-lite)