System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var TicTacToeEngine;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import {Logger}     from '../logger.service';
            TicTacToeEngine = (function () {
                //constructor(private _logger: Logger) {  }
                function TicTacToeEngine() {
                    this.gridText = [['', '', ''], ['', '', ''], ['', '', '']];
                    this.turn = 'X';
                    this.wonflag = false;
                    this.gameStatus = "In Play";
                    this.playerXScore = 0;
                    this.playerOScore = 0;
                    this.drawScore = 0;
                }
                TicTacToeEngine.prototype.resetGame = function () {
                    this.gridText = [['', '', ''], ['', '', ''], ['', '', '']];
                    this.turn = 'X';
                    this.wonflag = false;
                    this.gameStatus = "In Play";
                };
                TicTacToeEngine.prototype.switchTurns = function () {
                    if (this.turn == 'X') {
                        this.turn = 'O';
                    }
                    else {
                        this.turn = 'X';
                    }
                };
                TicTacToeEngine.prototype.getGameStatus = function () {
                    return this.gameStatus;
                };
                TicTacToeEngine.prototype.getPlayerTurn = function () {
                    return this.turn;
                };
                TicTacToeEngine.prototype.updateScore = function () {
                    if (this.gameStatus == "Win") {
                        if (this.turn == "X") {
                            this.playerXScore++;
                        }
                        else {
                            this.playerOScore++;
                        }
                    }
                    else if (this.gameStatus == "Draw") {
                        this.drawScore++;
                    }
                };
                TicTacToeEngine.prototype.handlePlayerMove = function (rowIndex, colIndex) {
                    if (this.makeBoardMove(rowIndex, colIndex)) {
                        if (this.isGameWon(this.gridText, rowIndex, colIndex)) {
                            this.gameStatus = "Win";
                            this.wonflag = true;
                            this.updateScore();
                        }
                        else if (this.isGameADraw(this.gridText)) {
                            this.gameStatus = "Draw";
                            this.updateScore();
                        }
                        else {
                            this.gameStatus = "In Play";
                            this.switchTurns();
                        }
                    }
                };
                TicTacToeEngine.prototype.makeBoardMove = function (rowIndex, colIndex) {
                    if ((this.wonflag == false) && (this.gridText[rowIndex][colIndex] == '')) {
                        this.gridText[rowIndex][colIndex] = this.turn;
                        return true;
                    }
                    return false;
                };
                TicTacToeEngine.prototype.isGameWon = function (gridText, rowIndex, colIndex) {
                    var marker = this.turn;
                    //this._logger.log('Getting heroes ...')
                    var winResult = false;
                    //check row
                    if (gridText[rowIndex][0] == marker &&
                        gridText[rowIndex][1] == marker &&
                        gridText[rowIndex][2] == marker) {
                        return true;
                    }
                    //check column
                    if (gridText[0][colIndex] == marker &&
                        gridText[1][colIndex] == marker &&
                        gridText[2][colIndex] == marker) {
                        return true;
                    }
                    //check diagonal
                    if (gridText[0][0] == marker &&
                        gridText[1][1] == marker &&
                        gridText[2][2] == marker) {
                        return true;
                    }
                    if (gridText[0][2] == marker &&
                        gridText[1][1] == marker &&
                        gridText[2][0] == marker) {
                        return true;
                    }
                    return false;
                };
                TicTacToeEngine.prototype.isGameADraw = function (gridText) {
                    for (var i = 0; i < 3; i++) {
                        for (var j = 0; j < 3; j++) {
                            if (gridText[i][j] == '') {
                                return false;
                            }
                        }
                    }
                    return true;
                };
                TicTacToeEngine = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TicTacToeEngine);
                return TicTacToeEngine;
            }());
            exports_1("TicTacToeEngine", TicTacToeEngine);
        }
    }
});
//# sourceMappingURL=tictactoeengine.js.map