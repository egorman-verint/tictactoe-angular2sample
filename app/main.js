System.register(['angular2/platform/browser', './navigation_bar', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, navigation_bar_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (navigation_bar_1_1) {
                navigation_bar_1 = navigation_bar_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(navigation_bar_1.NavigationBar, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map