import {Component, Input} from 'angular2/core';
import {cell} from './cell';

@Component({
    selector: 'cellrenderer',
    templateUrl: 'app/cellRenderer.html',
})
export class cellrenderer {
  @Input() cellParameter : cell;
  private clicked : boolean = false;

  constructor(){

  }

  public isBomb() : boolean{
    return this.cellParameter.isBomb();
  }

  public showBomb(){
    return this.cellParameter.isBomb() && this.isClicked();
  }

  public noBomb(){
    return !this.cellParameter.isBomb() &&this.isClicked();
  }

  public isClicked(){
    return this.cellParameter.isClicked();
  }


  public click(){
    this.cellParameter.click();
  }

  public getDisplayValue() : string{
    if(this.isClicked()){
      if(this.isBomb()){
        return "B";
      }else{
        return this.cellParameter.getNumNeighborBombs()+"";
      }
    }else{
      return "-"
    }
  }




}
