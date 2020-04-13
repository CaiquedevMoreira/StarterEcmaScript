const usuario = {
    nome: 'Caique',
    idade: 19,
    endereco: {
        cidade: 'Osasco',
        uf: 'SP'
    }
};

// var nome2 = usuario.nome;
// var idade2 = usuario.idade;
// var cidade2 = usuario.endereco.cidade;

// console.log(nome2);
// console.log(idade2);
// console.log(cidade2);

// const {nome, idade, endereco: {cidade}} = usuario

// console.log(nome);
// console.log(idade);
// console.log(cidade);


function mostraNome(usuario){
    console.log(usuario.nome);
}

mostraNome(usuario);

function mostraNomeDes({nome}){
    console.log(nome)
}

mostraNomeDes(usuario);