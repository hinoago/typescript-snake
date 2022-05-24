class Field{
    field: Array<Area> = [];

    constructor(verticalAreas: number, horizontalAreas: number){
        for(let y = 1; y <= horizontalAreas; y++){
            for(let x = 1; x <= verticalAreas; x++){
                this.field.push(new Area(x, y));
            }
        }
    }

    getField(): Array<Area>{
        return this.field;
    }
}