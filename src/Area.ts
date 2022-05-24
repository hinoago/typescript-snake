class Area{
    x: number;
    y: number;
    size: number = 20;
    content: 'food' | 'snake' | 'empty';
    area: HTMLDivElement;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
        this.content = "empty";

        const doc: HTMLElement = document.querySelector(":root");
        doc.style.setProperty("--size", this.size+"px");

        const $container = document.getElementById("container");
        this.area = document.createElement("div");
        this.area.setAttribute("class", "area");
        this.area.style.top = this.y*this.size +"px";
        this.area.style.left = this.x*this.size +"px";
        this.area.style.backgroundColor = "green";
        $container.appendChild(this.area);
    }

    getContent(): string{
        return this.content;
    }

    setContent(content: 'food' | 'snake' | 'empty'){
        this.content = content;
        if(content == "food"){
            this.area.style.backgroundColor = "red";
        }else if(content == "snake"){
            this.area.style.backgroundColor = "blue";
        }else{
            this.area.style.backgroundColor = "green";
        }
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