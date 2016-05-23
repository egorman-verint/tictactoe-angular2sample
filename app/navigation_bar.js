System.register(['angular2/core', 'angular2/router', './tictactoe', './scorecard', './tictactoeengine'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, tictactoe_1, scorecard_1, tictactoeengine_1;
    var NavigationBar;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tictactoe_1_1) {
                tictactoe_1 = tictactoe_1_1;
            },
            function (scorecard_1_1) {
                scorecard_1 = scorecard_1_1;
            },
            function (tictactoeengine_1_1) {
                tictactoeengine_1 = tictactoeengine_1_1;
            }],
        execute: function() {
            NavigationBar = (function () {
                function NavigationBar() {
                }
                NavigationBar = __decorate([
                    core_1.Component({
                        selector: 'hassan-nav-bar',
                        template: "\n    <h1 class=\"title\">Tic Tac Toe</h1>\n    <nav>\n      <a [routerLink]=\"['TicTacToe']\">tic tac</a>\n      <a [routerLink]=\"['ScoreBoard']\">score</a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
                        providers: [tictactoeengine_1.TicTacToeEngine],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        /*{path: '/tictactoe',    name: 'TicTacToe',     component: UltimateTicTacToe  },*/
                        { path: '/tictactoe', name: 'TicTacToe', component: tictactoe_1.TicTacToe },
                        { path: '/score', name: 'ScoreBoard', component: scorecard_1.ScoreBoard }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], NavigationBar);
                return NavigationBar;
            }());
            exports_1("NavigationBar", NavigationBar);
        }
    }
});
//# sourceMappingURL=navigation_bar.js.map