import {Injectable} from 'angular2/core';
//import {Logger}     from '../logger.service';

@Injectable()
export class TicTacToeEngine {
  
  gridText= [['', '',''], ['','',''], ['','','']];
  turn:string = 'X';
  wonflag = false;
  gameStatus = "In Play";
  
  playerXScore: number = 0;
  playerOScore: number = 0;
  drawScore: number = 0;
  
  //constructor(private _logger: Logger) {  }
  constructor(){
    
  }
  
  resetGame(){
    this.gridText =  [['', '',''], ['','',''], ['','','']];
    this.turn = 'X';
    this.wonflag = false;
    this.gameStatus = "In Play";
  }
  
  switchTurns(){
      if (this.turn == 'X') {
        this.turn = 'O'
      } else {
        this.turn = 'X'
      }
  }
  
  getGameStatus(): string{
    return this.gameStatus;
  }
  
  getPlayerTurn(): string{
    return this.turn;
  }
  
  updateScore(){
	if (this.gameStatus == "Win"){
		if (this.turn == "X"){
			this.playerXScore ++;
		} else {
			this.playerOScore ++;
		}
	} else if (this.gameStatus == "Draw"){
		this.drawScore++;
	}
  }
  
  handlePlayerMove(rowIndex, colIndex ){
    if (this.makeBoardMove(rowIndex, colIndex)){
      if (this.isGameWon(this.gridText, rowIndex, colIndex)){
        this.gameStatus = "Win";
		this.wonflag = true;
		this.updateScore();
      } else  if (this.isGameADraw(this.gridText)){
        this.gameStatus = "Draw";
		this.updateScore();
      } else {
        this.gameStatus = "In Play";
        this.switchTurns();
      }
    }
  }
  
  makeBoardMove(rowIndex, colIndex){
    if ((this.wonflag == false) && (this.gridText[rowIndex][colIndex] == '')){
      this.gridText[rowIndex][colIndex] = this.turn;
      return true; 
    }
    return false;
  }
  
  isGameWon(gridText, rowIndex, colIndex) {
    
    var marker = this.turn;
    
    //this._logger.log('Getting heroes ...')
    var winResult = false; 
    //check row
    if (gridText[rowIndex][0] == marker && 
        gridText[rowIndex][1] == marker &&
        gridText[rowIndex][2] == marker){
      return true;
    }
    
    //check column
    if (gridText[0][colIndex] == marker &&
        gridText[1][colIndex] == marker && 
        gridText[2][colIndex] == marker){
      return true;
    }
    
    //check diagonal
    if (gridText[0][0] == marker &&
        gridText[1][1] == marker &&
        gridText[2][2] == marker){
      return true;      
    } 
    
    if (gridText[0][2] == marker && 
        gridText[1][1] == marker &&
        gridText[2][0] == marker){
      return true;
    }
    return false;
    
  }
  
  isGameADraw(gridText){
     for (var i = 0 ; i < 3; i++){
      for (var j = 0; j < 3; j++){
        if (gridText[i][j] == ''){
          return false;
        }
      }
    }
    return true;
  }
}