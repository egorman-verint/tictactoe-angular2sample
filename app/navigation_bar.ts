import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {TicTacToe} from './tictactoe';
import {ScoreBoard} from './scorecard';
import {TicTacToeEngine} from './tictactoeengine';
import {UltimateTicTacToe} from './ultimatetictactoe';

@Component({
  selector: 'hassan-nav-bar',
  template: `
    <h1 class="title">Tic Tac Toe</h1>
    <nav>
      <a [routerLink]="['TicTacToe']">tic tac</a>
      <a [routerLink]="['ScoreBoard']">score</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers:[TicTacToeEngine],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  /*{path: '/tictactoe',    name: 'TicTacToe',     component: UltimateTicTacToe  },*/
  {path: '/tictactoe',    name: 'TicTacToe',     component: TicTacToe  },
  {path: '/score',    name: 'ScoreBoard',     component: ScoreBoard  }  
])

export class NavigationBar { }