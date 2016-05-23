System.register(['angular2/core', './tictactoeengine'], function(exports_1, context_1) {
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
    var core_1, tictactoeengine_1;
    var ScoreBoard;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tictactoeengine_1_1) {
                tictactoeengine_1 = tictactoeengine_1_1;
            }],
        execute: function() {
            ScoreBoard = (function () {
                function ScoreBoard(_gameEngine) {
                    this._gameEngine = _gameEngine;
                    this.gamestatus = null;
                    this.xScore = 0;
                    this.oScore = 0;
                    this.draw = 0;
                    this.gamestatus = _gameEngine.getGameStatus();
                    this.xScore = _gameEngine.playerXScore;
                    this.oScore = _gameEngine.playerOScore;
                    this.draw = _gameEngine.drawScore;
                }
                ScoreBoard = __decorate([
                    core_1.Component({
                        template: "\n\t<h1>Score Board</h1>\n\t<p>{{gamestatus}}</p>\n\t<p>Player X score: {{xScore}}</p>\n\t<p>Player O score: {{oScore}}</p>\n\t<p>Draws: {{draw}}</p>\n  "
                    }), 
                    __metadata('design:paramtypes', [tictactoeengine_1.TicTacToeEngine])
                ], ScoreBoard);
                return ScoreBoard;
            }());
            exports_1("ScoreBoard", ScoreBoard);
        }
    }
});
//# sourceMappingURL=scorecard.js.map