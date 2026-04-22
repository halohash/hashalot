window.labels = {
    'live': '',
    'aa': 'a0000000',
    'ac': 'a0000002',
    'ab': 'a0000001',
    'ae': 'a0000004',
    'ad': 'a0000003',
    'ag': 'a0000006',
    'af': 'a0000005',
    'ai': 'a0000008',
    'ah': 'a0000007',
    'aj': 'a0000009'
};

(function() {
    var a = window.labels;
    if (window.jstiming && window.jstiming.load) {
        window.jstiming.load.tick("ld_s");
    }

    var b = window.devjs,
        c = /[?&]debugjs=1/.exec(window.location.href),
        e = /[?&]localPlayer=1/.exec(window.location.href),
        g = /[?&]mediaDiagnostics=1/.exec(window.location.href),
        h = /[?&]prodjs=1/.exec(window.location.href),
        k = /[?&]label=([a-f0-9]{8}|[a-z]+)(?:[&#].*)?$/.exec(window.location.href);

    k = k && k.length === 2 ? k[1] : null;

    window.label = (b || h) ? "current" : (a && k in a ? a[k] : (/^[a-f0-9]{8}$/.test(k) ? k : a.live));

    var l = window.appRoot + window.label;

    function n(d) {
        document.write('<script src="' + d + '"><\/script>');
    }

    function p(d) {
        document.write("<script>" + d + "<\/script>");
    }

    function q(d) {
        var f = document.createElement("link");
        f.setAttribute("rel", "stylesheet");
        f.setAttribute("type", "text/css");
        f.setAttribute("href", d);
        var head = document.getElementsByTagName("head")[0];
        head.insertBefore(f, head.lastChild);
    }

    window.removeAngularCss = function() {
        if (window.angular && angular.element) {
            var styles = angular.element(document).find("style");
            for (var m = 0; m < styles.length; ++m) {
                if (styles[m].innerText.indexOf("ng-cloak") >= 0) {
                    angular.element(styles[m]).remove();
                }
            }
        }
    };

    window.initializeOrRedirect = function(d) {
        if (window.jstiming && window.jstiming.load) {
            window.jstiming.load.tick("js_r");
        }

        if (window.yt && yt.tv && yt.tv.initializer) {
            yt.tv.initializer(d);
        } else {
            window.location.href = "http://www.youtube.com/error?src=404";
        }
    };

    if (!window.jstiming) {
        n(l + "/csi-head.js");
        p("window.jstiming.load.tick('ld_s');");
    }

    if (b) {
        window.CLOSURE_BASE_PATH = "/javascript/closure/";
        n(l + "/angular.js");
        n(l + "/lasagna-parse.js");
        n(CLOSURE_BASE_PATH + "base.js");
        n("/i18n/t13n/javascript/deps.js");
        n("/video/youtube/src/web/javascript/deps-runfiles.js");
        n(l + "/deps.js");
        n(l + "/js/initializer.js");
        n(l + "/js/preload_templates.js");
        p("yt.tv.preloadTemplates.appPath = '" + l + "';");
        n(l + "/html-list.js");

        var cssFiles = [
            "/css/main.css", "/css/search.css", "/css/browse.css", "/css/watch.css",
            "/css/pair.css", "/css/toasts.css", "/css/dialog.css", "/css/lang.css",
            "/css/devices.css", "/css/media_queries.css", "/css/experiments.css",
            "/css/call_to_cast.css"
        ];
        for (var i = 0; i < cssFiles.length; i++) {
            q(l + cssFiles[i]);
        }
    } else if (c) {
        window.CLOSURE_NO_DEPS = true;
        q(l + "/classic.css");
        n(l + "/app-concat-bundle.js");
    } else {
        q(l + "/classic.css");
        n(l + "/classic.js");
    }

    window.checkBrokenLabel = function() {
        if (typeof yt === "undefined" && k) {
            window.location.href = window.location.href.replace(/([?&])label=[^&]+&?/, "$1stick=0&");
        }
    };

    p("window.checkBrokenLabel();");
    p("window.removeAngularCss();");

    if (e) {
        if (!window.environment) {
            window.environment = {};
        }
        window.environment.player_url = c || b ? "/video/youtube/src/web/javascript/debug-tv-player.js" : "/video/youtube/src/web/javascript/tv-player.js";
    }

    if (window.navigator.userAgent.indexOf("SmartHub") >= 0) {
        n("$MANAGER_WIDGET/Common/API/Widget.js");
        n("$MANAGER_WIDGET/Common/API/Plugin.js");
        n("$MANAGER_WIDGET/Common/API/TVKeyValue.js");
    }

    if (g) {
        n(c || b ? l + "/modules/media-diagnostics-debug.js" : l + "/modules/media-diagnostics.js");
    }

    if (!b) {
        p("initializeOrRedirect('" + l + "');");
    }
})();
