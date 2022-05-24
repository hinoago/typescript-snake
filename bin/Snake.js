class Snake {
    constructor(position) {
        this.body = [];
        this.body.push(position);
    }
    insertBody(position) {
        this.body.push(position);
    }
    getBody() {
        return this.body;
    }
    move(value) {
        let x = 0;
        let y = 0;
        for (let i = 0; i < this.body.length; i++) {
            if (i == 0) {
                x = this.body[i].getX();
                y = this.body[i].getY();
                if (value == "up") {
                    this.body[i].setY(y - 1);
                }
                else if (value == "down") {
                    this.body[i].setY(y + 1);
                }
                else if (value == "left") {
                    this.body[i].setX(x - 1);
                }
                else if (value == "right") {
                    this.body[i].setX(x + 1);
                }
            }
            else {
                this.body[i].setPosition(x, y);
                x = this.body[i].getX();
                y = this.body[i].getY();
            }
        }
    }
}
