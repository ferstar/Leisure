function sbar() {
    var sbar = document.getElementsByName('s');

    for (var i = 0; i < sbar.length; i++) {
        sbar[i].addEventListener('focus', function() {
            if (this.value == '\u641c\u7d22') {
                this.value = '';
            }
        }, false);

        sbar[i].addEventListener('blur', function() {
            if (this.value == '') {
                this.value = '\u641c\u7d22';
            }
        }, false);
    }
}

function key() {
    var event = window.event || arguments.callee.caller.arguments[0],
        sub = document.getElementById('submit');

    if ((event.metaKey && event.keyCode == 13) || (event.ctrlKey && event.keyCode == 13)) {
        sub.click();
        event.preventDefault();
    }
}

function comment() {
    var area = document.getElementById('textarea');

    if (area) {
        area.addEventListener('keydown', function() {
            key();
        }, false);
    }
}

function toggle(e) {
    var _arguments = arguments;

    (function(count) {
        e.addEventListener('click', function() {
            count >= _arguments.length && (count = 1);
            _arguments[count++ % _arguments.length].call(e);
        }, false)
    })(1);
}

function menu(e) {
    var link = e.getElementsByTagName('a'),
        mh = link.length * 51;

    e.style.height = mh + 'px';
}

function show() {
    var btn = document.getElementById('toggle'),
        nav = document.getElementById('nav');

    toggle(btn, function() {
        btn.className = 'show-btn';
        menu(nav);
    }, function() {
        btn.className = '';
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
