class Snake{
    body: Array<Position> = [];

    constructor(position: Position){
        this.body.push(position);
    }

    insertBody(position: Position) :void{
        this.body.push(position);
    }

    getBody(): Array<Position>{
        return this.body;
    }

    getSize(): number{
        return this.body.length;
    }

    move(value: string): void{
        let beforeX = 0;
        let beforeY = 0;
        for(let i = 0; i < this.body.length; i++){
            let afterX = this.body[i].getX();
            let afterY = this.body[i].getY();
            if(i == 0){
                if(value == "up"){
                    this.body[i].setY(afterY - 1);
                }else if(value == "down"){
                    this.body[i].setY(afterY + 1);
                }else if(value == "left"){
                    this.body[i].setX(afterX - 1);
                }else if(value == "right"){
                    this.body[i].setX(afterX + 1);
                }
            }else{
                this.body[i].setX(beforeX);
                this.body[i].setY(beforeY);
            }
            beforeX = afterX;
            beforeY = afterY;
        }
    }
}