export default class Aluno{
    nomeAluno: string;
    notasAluno: Array<number>;
    situacaoAluno: boolean = false;

    constructor(nome: string, notas: Array<number>) {
        this.nomeAluno = nome;
        this.notasAluno = notas;
        

        this.verificaSituacao();
    }

    getMedia(notas: Array<number>) {
        const somaNotas = notas.reduce((acc, num) => {
            return acc + num;
        })
        const media = somaNotas / notas.length;
        return media;
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


