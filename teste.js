class cliente{ 
    constructor(nome, nascimento, cpf, email, senha){
        this.id = id()
        this.nome = nome
        this.nascimento = nascimento
        this.cpf = cpf
        this.email = email
        this.senha = senha
    }
}

class funcionario{ 
    constructor(user, cpf, email, senha){
        this.id = id()
        this.user = user
        this.cpf = cpf
        this.email = email
        this.senha = senha
    }
}

function id(){                                      // Cria um id unico para cada objeto

    const { v4: uuidv4 } = require('uuid');
    const id = uuidv4();
    return id;

}

class produto{
    constructor(nome, descricao, validade, preco, estoque){
        this.nome = nome
        this.descricao = descricao
        this.validade = validade
        this.preco = preco
        this.estoque = estoque
    }
}

class sistema{
    constructor(){}
    add_produto(){
    
        produtos.push(new produto("bermuda", "preta", "sem", "RS 250", "20"))
    
    }

}

function input(pergunta){
    const frase = require("readline-sync")
    return frase.question(pergunta)

}

var produtos = []


var teste = new sistema

teste.add_produto()

var usuarios = []

var cliente_adm = new cliente('Lucas', '12/07/2003', "1669", 'lucas@mail', '123' )
var cliente_adm1 = new cliente('pedro', '12/07/2003', "1669", 'lucas@mail', '123' )
var funcionario_adm = new funcionario("mary", "445", "mary@", "1234")
usuarios.push(cliente_adm)
usuarios.push(cliente_adm1)




