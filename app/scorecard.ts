import {Component} from 'angular2/core';
import {TicTacToeEngine} from './tictactoeengine';

@Component({
  template: `
	<h1>Score Board</h1>
	<p>{{gamestatus}}</p>
	<p>Player X score: {{xScore}}</p>
	<p>Player O score: {{oScore}}</p>
	<p>Draws: {{draw}}</p>
  `
})
export class ScoreBoard {
	gamestatus: string = null;
	xScore: number = 0;
	oScore: number = 0;
	draw: number = 0;
	
	constructor(private _gameEngine: TicTacToeEngine){
		this.gamestatus = _gameEngine.getGameStatus();
		this.xScore = _gameEngine.playerXScore;
		this.oScore = _gameEngine.playerOScore;
		this.draw = _gameEngine.drawScore;
	}
}