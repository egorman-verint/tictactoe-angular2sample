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
    var TicTacToe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tictactoeengine_1_1) {
                tictactoeengine_1 = tictactoeengine_1_1;
            }],
        execute: function() {
            TicTacToe = (function () {
                function TicTacToe(gameEngine) {
                    // Declaring the variable for binding with initial value
                    this.announcement = '';
                    this.gridText = null;
                    this.turn = null;
                    this.engine = gameEngine;
                    this.gridText = this.engine.gridText;
                    this.turn = this.engine.turn;
                }
                TicTacToe.prototype.setupGameBoard = function () {
                    this.gridText = this.engine.gridText;
                    this.turn = this.engine.getPlayerTurn();
                };
                TicTacToe.prototype.onSelect = function (rowIndex, colIndex) {
                    this.engine.handlePlayerMove(rowIndex, colIndex);
                    if (this.engine.getGameStatus() == "Win") {
                        this.announcement = "Player " + this.engine.turn + " has won the game";
                    }
                    else if (this.engine.getGameStatus() == "Draw") {
                        this.announcement = "Game has been a draw";
                    }
                    else {
                        this.turn = this.engine.getPlayerTurn();
                    }
                };
                TicTacToe.prototype.resetGame = function () {
                    this.announcement = '';
                    this.engine.resetGame();
                    this.setupGameBoard();
                };
                TicTacToe = __decorate([
                    core_1.Component({
                        // Declare the tag name in index.html to where the component attaches
                        selector: 'tic-tac-toe',
                        // Location of the template for this component
                        templateUrl: 'app/tictactoe.html',
                    }), 
                    __metadata('design:paramtypes', [tictactoeengine_1.TicTacToeEngine])
                ], TicTacToe);
                return TicTacToe;
            }());
            exports_1("TicTacToe", TicTacToe);
        }
    }
});
//# sourceMappingURL=tictactoe.js.map