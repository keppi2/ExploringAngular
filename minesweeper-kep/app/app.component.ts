import {Component} from 'angular2/core';
import {minesweeper} from './minesweeper';

@Component({
    selector: 'my-app',
    template: '<minesweeper></minesweeper>',
    directives: [minesweeper]
})
export class AppComponent { }
