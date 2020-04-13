class todoList {
    
    constructor() {
        this.nomes = []
    }

    metodo(){

        this.nomes.push('Caique', 'Fulano')
        console.log(this.nome);
    }
}

class minhaTodoList extends todoList {

    constructor(){
        super();
        this.skills = []
    }

    meuMetodo(){

        this.skills.push('JavaScript');
        console.log(this.skills);
    }
}

var lista = new minhaTodoList();

lista.metodo();

lista.meuMetodo();