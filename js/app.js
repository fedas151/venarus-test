(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
    menuInit();
    var state = 1;
    if (document.querySelector(".slider-button-next")) document.addEventListener("click", (function(e) {
        if (e.target.closest(".slider-button-next")) {
            console.log(state);
            if (state === 3) state = 1; else state += 1;
            if (state === 1) document.documentElement.classList.remove("third-state"), document.documentElement.classList.remove("second-state"), 
            document.documentElement.classList.toggle("first-state"); else if (state === 2) document.documentElement.classList.remove("third-state"), 
            document.documentElement.classList.remove("first-state"), document.documentElement.classList.toggle("second-state"); else if (state === 3) document.documentElement.classList.remove("first-state"), 
            document.documentElement.classList.remove("second-state"), document.documentElement.classList.toggle("third-state");
        }
    }));
    if (document.querySelector(".slider-button-prev")) document.addEventListener("click", (function(e) {
        if (e.target.closest(".slider-button-prev")) {
            console.log(state);
            if (state === 1) state = 3; else state -= 1;
            if (state === 1) document.documentElement.classList.remove("third-state"), document.documentElement.classList.remove("second-state"), 
            document.documentElement.classList.toggle("first-state"); else if (state === 2) document.documentElement.classList.remove("third-state"), 
            document.documentElement.classList.remove("first-state"), document.documentElement.classList.toggle("second-state"); else if (state === 3) document.documentElement.classList.remove("first-state"), 
            document.documentElement.classList.remove("second-state"), document.documentElement.classList.toggle("third-state");
        }
    }));
    if (document.querySelector(".disclaimer__button")) document.addEventListener("click", (function(e) {
        if (e.target.closest(".disclaimer__button")) document.documentElement.classList.toggle("disclaimer-closed");
    }));
})();