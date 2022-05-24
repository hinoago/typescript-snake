const snake = new Snake(new Position(2, 1));
snake.insertBody(new Position(1, 1));

document.addEventListener('keydown', (key) =>{
    let head: Position = snake.getBody()[0];
    let x = head.getX();
    let y = head.getY();

    if(key.key == 'ArrowUp'){
        snake.move("up");
    }else if(key.key == 'ArrowDown'){
        snake.move("down");
    }else if(key.key == 'ArrowLeft'){
        snake.move("left");
    }else if(key.key == 'ArrowRight'){
        snake.move("right");
    }else{
        throw new Error("Botão errado");
    }
});