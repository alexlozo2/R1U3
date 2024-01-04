export class activity{

    idActivity:number;
    nameAct:string;
    initialDate:Date;
    finishDate:Date;
    responsible:string;
    idProject:number;
    constructor(idActivity,nameAct,initialDate,finisDate,responsible,idProject){
        this.idActivity=idActivity;
        this.nameAct=nameAct;
        this.initialDate=initialDate;
        this.finishDate=finisDate;
        this.responsible=responsible;
        this.idProject=idProject;
    }
}