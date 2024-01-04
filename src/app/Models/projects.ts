export class projects {
    idProject: number;
    nameProject: string;
    initialDate: Date;
    finisDate: Date;
    idResponsible: number;
    typeP: string;
    constructor(idProject,
        nameProject,
        initialDate,
        finisDate,
        idResponsible,
        typeP) {

            this.idProject=idProject;
            this.nameProject=nameProject;
            this.initialDate=initialDate;
            this.finisDate=finisDate;
            this.idResponsible=idResponsible;
            this.typeP=typeP;
    }
}
