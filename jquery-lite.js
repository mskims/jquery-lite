;(() => {
  var $ = (sel) => {
    var e = null
    var _ = {}

    const _camel_to_snake = (string) => {
      return string.replace(/([a-z]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase()
    }

    const _is_dom = (o) => {
      return typeof HTMLElement === "object" ? o instanceof HTMLElement : o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
    }

    const _loop = (func) => {
      for (var i = 0, j = _.e.length; i < j; i++) {
        func(_.e[i])
      }
    }

    _loop_iter = function (iter, func) {
      for (var i = 0, j = iter.length; i < j; i++) {
        func(iter[i])
      }
    }
    _.__proto__.init = (_sel) => {
      _.__proto__.length = 0

      if (typeof _sel === "string") {
        _.e = document.querySelectorAll(_sel)
        _.length = _.e.length
        _.e.forEach((item, i) => {
          _[i] = item
        })
      } else if (typeof _sel === "function") {
        window.onload = _sel
      } else if (_is_dom(_sel)) {
        _.e = _sel
        _[0] = _sel
        _.length = 1
      }
    }

    _.__proto__.get = (idx) => {
      return _[idx]
    }

    _.__proto__.each = (func) => {
      for (var i = 0, j = _.e.length; i < j; i++) {
        func.apply($(null), [_.e[i], i])
      }
    }

    _.__proto__.addClass = (className) => {
      _loop(function (el) {
        el.classList.add(className)
      })

      return _
    }

    _.__proto__.removeClass = (clsssName) => {
      _loop(function (el) {
        el.classList.remove(className)
      })

      return _
    }

    _.__proto__.toggleClass = (className) => {
      _loop(function (el) {
        el.classList.toggle(className)
      })
    }

    _.__proto__.css = (pro, val) => {
      if (typeof pro === "object") {
        const _style = {}
        const arr = Object.keys(pro)

        arr.forEach((item) => {
          _style[_camel_to_snake(item)] = pro[item]
        })

        _loop(function (el) {
          Object.keys(_style).forEach((item) => {
            el.style[item] = _style[item]
          })
        })
      } else {
        if (typeof val != "undefined") {
          _loop(function (el) {
            el.style[pro] = val
          })
        }
      }

      return _
    }

    _.__proto__.parent = () => {
      let _el = null

      _loop(function (el) {
        _el = el.parentNode
      })

      return _el
    }

    _.__proto__.remove = () => {
      _loop(function (el) {
        el.remove()
      })

      return _
    }

    _.__proto__.find = (selToF) => {
      var ar = []
      _loop(function (el) {
        var ar2 = []

        _loop_iter(el.querySelectorAll(selToF), (elF) => {
          ar.push(elF)
        })
      })
      _.set(ar)
      return _
    }

    _.__proto__.eq = (i) => {
      _.set([_.e[i]])
      return _
    }

    _.__proto__.addEvent = (trigger, func) => {
      _loop(function (el) {
        el.addEventListener(trigger, (e) => {
          func.apply($(null), [e])
        })
      })
      return _
    }

    _.__proto__.on = (trigger, func) => {
      return _.addEvent(trigger, func)
    }

    _.__proto__.click = (func) => {
      _.addEvent("click", func)
      return _
    }

    _.__proto__.html = (ne) => {
      if (typeof ne != "undefined") {
        _loop(function (el) {
          el.innerHTML = ne
        })
        return _
      } else {
        return _.e[0].innerHTML
      }
    }

    _.__proto__.text = (ne) => {
      if (typeof ne != "undefined") {
        _loop(function (el) {
          el.innerHTML = ne
        })
        return _
      } else {
        return _.e[0].textContent
      }
    }

    _.__proto__.val = () => {
      return _.e[0].value
    }

    _.__proto__.data = (prop, val) => {
      if (val === undefined) {
        return _.e[0].dataset[prop]
      } else {
        _.e[0].dataset[prop] = val
        return _
      }
    }

    _.__proto__.attr = (prop, ne) => {
      if (typeof ne != "undefined") {
        _loop(function (el) {
          el.setAttribute(prop, ne)
        })
        return _
      } else {
        return _.e[0].getAttribute(prop)
      }
    }

    _.__proto__.set = (el) => {
      _.e = el
    }
    _.__proto__.init(sel)
    return _
  }

  window.$ = $
  window.jQuery = $
  return $
})()