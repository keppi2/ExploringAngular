export class cell{
  private bomb : boolean;
  private clicked : boolean = false;
  private x : number;
  private y : number;
  private field : Array<Array<cell>>;

  constructor( x : number, y : number, field : Array<Array<cell>>){
    this.bomb =  Math.round((Math.random() * 4)) == 0;
    this.x = x;
    this.y = y;
    this.field = field;

    if(this.bomb){
      console.log("is Bomb on "+this.x+" and "+this.y);
    }else{
      console.log("is not a Bomb");
    }
  }

  public isBomb() : boolean {
    return this.bomb;
  }

  public click(){
    this.clicked = true;
  }

  public isClicked(){
    return this.clicked;
  }

  public getNumNeighborBombs(): number{
    var num = 0;
    if(this.x > 1 && this.field[this.y][this.x-1].isBomb()){
      num++;
    }
    if(this.y > 1 && this.field[this.y-1][this.x].isBomb()){
      num++;
    }
    return num;
  }

}
