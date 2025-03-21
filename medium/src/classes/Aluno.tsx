export default class Aluno{
    idAluno: number;
    nomeAluno: string;
    notasAluno: Array<number>;
    situacaoAluno: boolean = false;

    constructor(idAluno:number,nome: string, notas: Array<number>) {
        this.idAluno = idAluno;
        this.nomeAluno = nome;
        this.notasAluno = notas;
        

        this.verificaSituacao();
    }

    getMedia(notas: Array<number>) {
      
    if(this.notasAluno.length >= 0){
        var notasSomadas = this.notasAluno.reduce((acc, num) => acc + num, 0);;
        var media = notasSomadas / this.notasAluno.length;
        return media;
    }else{
        return 0
    }
      

      
    }

    verificaSituacao() {
        const media = this.getMedia(this.notasAluno);
        
        if (media>= 6) {
            this.situacaoAluno = true;
        }else {
            this.situacaoAluno = false;
        }
    }

    addNOta(nota:number){
        this.notasAluno.push(nota);
        this.verificaSituacao();
    }

    removeNOta(indice:number){
        this.notasAluno.splice(indice, 1);
        this.verificaSituacao();
    }
}


