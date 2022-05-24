class Field{
    field: Array<Area> = [];
    snake: Snake;

    constructor(verticalAreas: number, horizontalAreas: number){
        for(let y = 1; y <= horizontalAreas; y++){
            for(let x = 1; x <= verticalAreas; x++){
                this.field.push(new Area(x, y));
            }
        }
        this.createSnake();

        document.addEventListener('keydown', (key) =>{
            let head: Position = this.snake.getBody()[0];
            let x = head.getX();
            let y = head.getY();
        
            if(key.key == 'ArrowUp'){
                this.snake.move("up");
            }else if(key.key == 'ArrowDown'){
                this.snake.move("down");
            }else if(key.key == 'ArrowLeft'){
                this.snake.move("left");
            }else if(key.key == 'ArrowRight'){
                this.snake.move("right");
            }else{
                throw new Error("Botão errado");
            }
            console.log(this.snake.getBody());
        });
    }

    getField(): Array<Area>{
        return this.field;
    }
    
    createSnake(): void{
        this.snake = new Snake(new Position(1, 1));
        this.field.find(area => area.getX() == 1 && area.getY() == 1).setContent("snake");
    }
}