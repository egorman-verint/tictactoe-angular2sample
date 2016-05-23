import {Component} from 'angular2/core';
import {TicTacToe} from './tictactoe';
import {TicTacToeEngine} from './tictactoeengine';

@Component({
  template: `
	<h1>Ultimate Tic Tac Toe</h1>
	<table>
  <tr >
    <td class="">
		<tic-tac-toe></tic-tac-toe>
		<tic-tac-toe></tic-tac-toe>
		<tic-tac-toe></tic-tac-toe>
    </td>
	<td class="">
		<tic-tac-toe></tic-tac-toe>
		<tic-tac-toe></tic-tac-toe>
		<tic-tac-toe></tic-tac-toe>
    </td>
	<td class="">
		<tic-tac-toe></tic-tac-toe>
		<tic-tac-toe></tic-tac-toe>
		<tic-tac-toe></tic-tac-toe>
    </td>
  </tr>
</table>
  `,
   directives: [TicTacToe]
})
export class UltimateTicTacToe {
	//grid = [new TicTacToe()];
	//tictac: TicTacToe;

	constructor(/*private _gameEngine: TicTacToeEngine*/){
	}
}