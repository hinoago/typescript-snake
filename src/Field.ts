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
        this.snakeMove();
    }
    
    createSnake(): void{
        this.snake = new Snake(new Position(1, 4));
        this.snake.insertBody(new Position(1, 3));
        this.snake.insertBody(new Position(1, 2));
        this.snake.insertBody(new Position(1, 1));
        this.renderSnake();
    }

    renderSnake(): void{
        this.snake.getBody().forEach(pos => {
            this.field.find(area => area.getX() == pos.getX() && area.getY() == pos.getY()).setContent("snake");
        });
    }

    snakeMove(): void{
        document.addEventListener('keydown', (key) =>{
            let tail: Position = this.snake.getBody()[this.snake.getSize()-1];
            this.field.find(area => area.getX() == tail.getX() && area.getY() == tail.getY()).setContent("empty");
        
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
            this.renderSnake();
        });
    }

    getEmptyAreas(): Array<Area>{
        return this.field.filter(area => area.getContent() == "empty");
    }
}