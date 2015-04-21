function sbar() {
    var sbar = document.getElementsByName("s");

    for (var i = 0; i < sbar.length; i++) {
        sbar[i].addEventListener("focus", function() {
            this.value = "";
        }, false);

        sbar[i].addEventListener("blur", function() {
            this.value = "\u641c\u7d22";
        }, false);
    }
}

function comment() {
    var area = document.getElementById("textarea"),
        sub = document.getElementById("submit");

    if (area && sub) {
        area.addEventListener("keydown", function() {
            if ((event.metaKey && event.keyCode == 13) || (event.ctrlKey && event.keyCode == 13)) {
                sub.click();
                return false;
            }
        }, false);
    }
}

function toggle(e) {
    var _arguments = arguments;

    (function(count) {
        e.addEventListener("click", function() {
            count >= _arguments.length && (count = 1);
            _arguments[count++ % _arguments.length].call(e);
        }, false)
    })(1);
}

function menu(e) {
    var link = e.getElementsByTagName("a"),
        mh = link.length * 51;
    e.style.height = mh + "px";
}

function show() {
    var btn = document.getElementById("toggle"),
        nav = document.getElementById("nav");

    toggle(btn, function() {
        btn.className += "show-btn";
        menu(nav);
    }, function() {
        btn.className = "";
        nav.style.height = 0;
    });
}

function addLoadEvent(func) {
    var oldonload = window.onload;

    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}

addLoadEvent(sbar());
addLoadEvent(comment());
addLoadEvent(show());
