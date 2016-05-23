import {Component} from 'angular2/core';
import {TicTacToeEngine} from './tictactoeengine';

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: 'tic-tac-toe',

  // Location of the template for this component
  templateUrl: 'app/tictactoe.html',  
})
export class TicTacToe {

  // Declaring the variable for binding with initial value
  announcement: string = '';
  gridText = null;
  turn:string = null;
  engine: TicTacToeEngine
  
  constructor(gameEngine: TicTacToeEngine){  
   this.engine = gameEngine;
   this.gridText = this.engine.gridText;
   this.turn = this.engine.turn;
  }
 
 setupGameBoard(){
   this.gridText = this.engine.gridText;
   this.turn = this.engine.getPlayerTurn();
 }
  
  onSelect(rowIndex, colIndex) { 
    this.engine.handlePlayerMove(rowIndex, colIndex);
    if (this.engine.getGameStatus() == "Win"){
      this.announcement = "Player " +this.engine.turn + " has won the game"
    } else if (this.engine.getGameStatus() == "Draw"){
      this.announcement = "Game has been a draw";
    } else {
      this.turn = this.engine.getPlayerTurn();
    }
  }
  
  resetGame(){
    this.announcement = '';
    this.engine.resetGame();
    this.setupGameBoard();
  }
}

