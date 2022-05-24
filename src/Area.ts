class Area{
    x: number;
    y: number;
    content: 'food' | 'snake' | 'empty';

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    getContent(): string{
        return this.content;
    }

    setContent(content: 'food' | 'snake' | 'empty'){
        this.content = content;
    }

    getX(): number{
        return this.x;
    }

    getY(): number{
        return this.y;
    }

    setX(x: number): void{
        this.x = x;
    }

    setY(y: number): void{
        this.y = y;
    }
}