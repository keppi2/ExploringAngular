import {Component} from 'angular2/core';
import {cell} from './cell';
import {cellrenderer} from './cellrenderer';

@Component({
    selector: 'minesweeper',
    templateUrl: 'app/minesweeper.html',
    directives:[cellrenderer]
})
export class minesweeper {
  private field : Array<Array<cell>>;

   constructor(){
    this.initField();
  }

  public initField(){
    console.log("init field");
    var length = 10;
    this.field = new Array<Array<cell>>(length);
    for(var r = 0; r< length; r++){
      this.field[r] = new Array<cell>(length);
      for(var c = 0; c< 10; c++){
        this.field[r][c] = new cell(c,r, this.field);
      }
    }
  }

  public getField() : Array<Array<cell>> {
    return this.field;
  }
}
