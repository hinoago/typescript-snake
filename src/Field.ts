class Field{
    field: Array<Area> = [];
    game: number;
    snake: Snake;

    constructor(verticalAreas: number, horizontalAreas: number){
        for(let y = 1; y <= horizontalAreas; y++){
            for(let x = 1; x <= verticalAreas; x++){
                this.field.push(new Area(x, y));
            }
        }
        this.createSnake();
        this.snakeMove();
        this.insertFood();
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

    insertFood(): void{
        this.game = setInterval(() =>{
            try{
                let n = Math.floor(Math.random()*this.getEmptyAreas().length);
                let empty = this.getEmptyAreas()[n];
                let x = empty.getX();
                let y = empty.getY();
                let area = this.field.find(area => area.getX() == x && area.getY() == y);
                console.log(area);
                area.setContent("food");
            }catch(err){
                alert("FIM");
            }
        },100);
    }

    getEmptyAreas(): Array<Area>{
        if(this.field.filter(area => area.getContent() == "empty").length > 0){
            return this.field.filter(area => area.getContent() == "empty");
        }
        clearInterval(this.game);
        this.endGame();
    }

    endGame(): void{
        throw new Error("End Game");
    }
}