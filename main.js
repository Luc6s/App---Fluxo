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

class pedido{
    constructor(id_cliente, status, data, avaliacao){
        this.id = id()
        this.id_cliente = id_cliente
        this.data = data
        this.status = status
        this.avaliacao = avaliacao
    }
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
        
        espaco()
        var nome = input("Nome do produto: ")
        var descricao = input("Decricao do produto: ")
        var validade = input("Validade do produto: ")
        var preco = input("Preco do produto: ")
        var estoque = input("Estoque do produto: ")

        var Produto = new produto(nome, descricao, validade, preco, estoque)
        produtos.push(Produto)

    }
    editar_produto(indice){

        abrir_produtos(produtos)
        var produto_atual = produtos[indice]
    
        espaco()
        print("Qual dado gostaria de editar?")
        print("nome(1)")
        print("preco(2)")
        print("validade(3)")
        print("estoque(4)")
        print("descricao(5)")
        print("voltar(6)")
        var resposta = input()
        resposta = parseInt(resposta)
        
        switch(resposta){
    
            case 1:
                var resposta1 = input("Qual será o novo nome de nome?\n")
                produtos.splice(indice, 1)
                produto_atual.nome = resposta1
                produtos.push(produto_atual)
                espaco()
                
                var instancia = new sistema

                return menu_produtos()
            
            case 2:
                var resposta1 = input("Qual será o novo preco?\n")
                produtos.splice(indice, 1)
                produto_atual.preco = resposta1
                produtos.push(produto_atual)
                espaco()
                
                var instancia = new sistema

                return menu_produtos()
            
            case 3:
                var resposta1 = input("Qual será o novo validade?\n")
                produtos.splice(indice, 1)
                produto_atual.validade = resposta1
                produtos.push(produto_atual)
                espaco()
                
                var instancia = new sistema

                return menu_produtos()
    
            case 4:
                var resposta1 = input("Qual será o novo estoque?\n")
                produtos.splice(indice, 1)
                produto_atual.estoque = resposta1
                produtos.push(produto_atual)
                espaco()
                
                var instancia = new sistema

                return menu_produtos()
    
            case 5:
                var resposta1 = input("Qual será o novo descricao?\n")
                produtos.splice(indice, 1)
                produto_atual.descricao = resposta1
                produtos.push(produto_atual)
                espaco()
    
                var instancia = new sistema

                return menu_produtos()
            
            case 6:
                return menu_produtos()
    
            default:
                print("Resposta inválida!")
                espaco()
                var instancia = new sistema

                return menu_produtos()
        }
        
    }
    excluir_produto(){
        var resposta = input("Escreva o numero do produto que deseja excluir: ")
        resposta = parseInt(resposta)

        if(isNaN(resposta)){
            espaco()
            print("Resposta Inválida!")
            return menu_produtos()
        }
        var teste = produtos.slice

        resposta = resposta - 1
        produtos.splice(resposta, 1)

        if(produtos == teste){
            espaco()
            print("Resposta Inválida!")
            return menu_produtos()

        }else{
            espaco()
            print("Produto excluido!")
            return menu_produtos()
        }
    }
    fazer_pedido(id_cliente){

        var data = input("Qual a data do pedido? ")
        var Pedido = new pedido(id_cliente,"Pendente", data)
        pedidos.push(Pedido)

    }

    excluir_pedido(lista_pedidos){

        abrir_produtos(lista_pedidos)
        var resposta = input("Escreva o numero do pedido que deseja excluir: ")
        resposta = parseInt(resposta)

        if(isNaN(resposta)){
            espaco()
            print("Resposta Inválida!")
            return menu_pedidos(lista_pedidos)
        }


        resposta = resposta - 1
        lista_pedidos.splice(resposta, 1)

        if (lista_pedidos == 0){
            print('sem pedidos')
            return menu_pedidos(lista_pedidos)
        }
        return menu_pedidos(lista_pedidos)

        
    }

    fazer_pedido(id_cliente){

        var data = input("Qual a data do pedido?")
        var Pedido = new pedido(id_cliente,"Pendente", data)
        pedidos.push(Pedido)
    }

    status_pedido(funcionario){
        if (pedidos == 0){
            print("Sem pedidos!")
            return menu_funcionario(funcionario)
        }
        abrir_produtos(pedidos)
        var indice = input("Escreva o numero do pedido modificar: ")
        indice = parseInt(indice)

        if(isNaN(indice)){
            espaco()
            print("Resposta Inválida!")
            return menu_funcionario(funcionario)
        }
        var pedido_atual = pedidos[indice]
        var resposta1 = input("Qual será o novo status?\n")
        pedidos.splice(indice, 1)
        pedido_atual.status = resposta1
        pedidos.push(pedido_atual)
        espaco()
        print("Status atualizado!")
        print(pedidos)
        return menu_funcionario(funcionario)
        
    }
    
}

var pedidos = []
var usuarios = []
var produtos = []
var pedidos = []

produtos.push(new produto("bermuda", "preta", "sem", "RS 250", "20"))
produtos.push(new produto("camisa", "azul", "sem", "RS 250", "20"))
var funcionario_adm = new funcionario("mary", "445", "mary@", "1234")
var cliente_adm = new cliente('lucas', '12/07/2003', "1669", 'lucas', '123')
var cliente_adm1 = new cliente('pedro', '12/07/2003', "1669", 'pedro@mail', '123')


usuarios.push(cliente_adm)
usuarios.push(cliente_adm1)
usuarios.push(funcionario_adm)


function input(pergunta){
    const frase = require("readline-sync")
    return frase.question(pergunta)

}

function espaco(){                                 // Pula uma linha no console 
    console.log('')
}

function menu_incial(){                            // Interface inicial de escolhas

    console.log("Escolha uma opção:")
    espaco()
    console.log('Login (1)')
    console.log('Cadastro (2)')
    console.log('Sair do Programa (3)')
    espaco()
    let resposta = input("User: ")
    resposta = parseInt(resposta)
    
    switch(resposta){
        case 1:
            return login()

        case 2:
            while(1){
                var escolha_cadastro = input('Funcionário(1)    Cliente(2)')

                if (escolha_cadastro == 1){
                    return cadastro_funcionario()
                }
                if (escolha_cadastro == 2){
                    return cadastro_cliente()
                }else{
                    console.log("Resposta inválida!")
                    espaco()
                }
            }   
        case 3:
            return console.log("Finalizando programa!")

        default:
            print('Sistema: Resposta incorreta.')
            espaco()
            return menu_incial()

    }
  
}

function id(){                                      // Cria um id unico para cada objeto

    const { v4: uuidv4 } = require('uuid');
    const id = uuidv4();
    return id;

}

function cadastro_cliente(){                                // Interface de cadastro

    console.log('Preencha as informações abaixo:')
    espaco()
    let nome = input("Nome: ")
    let nascimento = input('Data de nascimento (dd/mm/aaaa): ')
    let cpf = input('CPF: ')
    let email = input('Email: ')
    let senha = validar_senha()
    espaco()
    
    var cliente1 = new cliente(nome, nascimento, cpf, email, senha)
    usuarios.push(cliente1)
    espaco()
    print("Cadastro realizado com sucesso!")
    espaco()
    return menu_incial()

}

function cadastro_funcionario(){                                // Interface de cadastro

    console.log('Preencha as informações abaixo:')
    espaco()
    let nome = input("Nome de usuário: ")
    let cpf = input('CPF: ')
    let email = input('Email: ')
    let senha = validar_senha()
    espaco()
    
    var funcionario1 = new funcionario(nome, nascimento, cpf, email, senha)
    usuarios.push(funcionario1)

}

function validar_senha(){                       // Valida a confirmação da senha

    let senha = input("Senha: ")
    let senha2 = input("confirme a senha: ")
    if (senha == senha2){
        return senha
    }else{
        console.log('Senha incorreta')
        espaco()
        return validar_senha()
    }
}

function login(){
    espaco()
    let emailR = input("Email: ")
    let senhaR = input("Senha: ")
    var cliente1 = {email: emailR, senha: senhaR}


    for(i = 0; i < usuarios.length; i++){

        if(usuarios[i].email == cliente1.email && usuarios[i].senha == cliente1.senha){
            console.log("Login bem sucedido!")
            var classe = descobrir_classe(usuarios[i])
        
            if (classe == 0){
                return menu_funcionario(usuarios[i])
            }
            if (classe == 1){
                return menu_cliente(usuarios[i])
            }
        }       
    }

    console.log("Usuário inválido")

    while(1){
        resposta = input("Tentar novamente(1)    Voltar(2)")
        if (resposta == 1){
            return login()    

        }                
        if (resposta == 2){
            return menu_incial()
            
        }else{
            console.log('Respota inválida!')
            espaco()
        }
    }   
}

function descobrir_classe(usuario){
    if(usuario instanceof cliente){
        return 1
    }
    if(usuario instanceof funcionario){
        return 0
    }
}

function print(Pergunta){
    return console.log(Pergunta)
}

function menu_funcionario(funcionario){

    espaco()
    var funcionario_atual = funcionario
    print("Ver meus dados(1)")
    print("Ver lista de Clientes(2)")
    print("Ver Lista de Pedidos(3)")
    print("Ver Lista de Produtos(4)")
    print("Mudar status Pedidos(5)")
    print("Deslogar(6)")
    espaco()
    
    let resposta = parseInt(input("User: "))

    switch(resposta){

        case 1:

            while (true){
                print(funcionario_atual)
                print('Voltar(1)      Editar(2)')
                var escolha1 = parseInt(input("User: "))
                
                if(escolha1 == 1){
                    return menu_funcionario(funcionario_atual)
                }
                if(escolha1 == 2){
                    return editar_funcionario(funcionario_atual)
                }else{
                    print("Resposta inválida")
                }
            }
        
        case 2:
            var clientes = usuarios.filter(function(elemento) {
                return elemento instanceof cliente;
            })
            print(clientes)
            return menu_funcionario(funcionario_atual)
        
        case 3:
            print(pedidos)
            return menu_funcionario(funcionario_atual)

        case 4:
            return menu_produtos()
        
        case 5:
            var instancia = new sistema
            instancia.status_pedido(funcionario)
        
        case 6:
            return menu_incial()
    }
}

function editar_funcionario(funcionario){

    var funcionario_atual = funcionario
    var indice = usuarios.indexOf(funcionario_atual)

    espaco()
    print("Qual dado gostaria de editar?")
    print("Usuário(1)")
    print("CPF(2)")
    print("Email(3)")
    print("Senha(4)")
    print("Voltar(5)")
    
    var resposta = parseInt(input("User: "))

    switch(resposta){

        case 1:
            var resposta1 = input("Qual será o novo nome de usuário?\n")
            usuarios.splice(indice, 1)
            funcionario_atual.user = resposta1
            usuarios.push(funcionario_atual)
            espaco()
            print(funcionario_atual)
            
            return editar_funcionario(funcionario_atual)
        
        case 2:
            var resposta1 = input("Qual será o novo CPF?\n")
            usuarios.splice(indice, 1)
            funcionario_atual.cpf = resposta1
            usuarios.push(funcionario_atual)
            espaco()
            print(funcionario_atual)

            return editar_funcionario(funcionario_atual)
        
        case 3:
            var resposta1 = input("Qual será o novo Email?\n")
            usuarios.splice(indice, 1)
            funcionario_atual.email = resposta1
            usuarios.push(funcionario_atual)
            espaco()
            print(funcionario_atual)

            return editar_funcionario(funcionario_atual)

        case 4:
            var resposta1 = input("Qual será a nova Senha?\n")
            usuarios.splice(indice, 1)
            funcionario_atual.senha = resposta1
            usuarios.push(funcionario_atual)
            espaco()
            print(funcionario_atual)

            return editar_funcionario(funcionario_atual)

        case 5:
            return menu_funcionario(funcionario_atual)

        default:
            print("Resposta inválida!")
            espaco()
            return editar_funcionario(funcionario_atual)
    }
}

function abrir_produtos(lista){

    var contador = 1
    espaco()

    if (lista == 0){
        print("Sem Produtos!")
    } 
    for(i of lista){
        lista_nova = JSON.stringify(i, null, 2)
        lista_nova = lista_nova.slice(1, -1)
        console.log("Alternativa ", contador)
        print(lista_nova);
        contador++
    }
}

function menu_produtos(){

    abrir_produtos(produtos)

    escolha1 = input("Voltar(1)     Editar um produto(2)     Adicionar produto(3)    Excluir produto(4)\n")
    escolha1 = parseInt(escolha1)
    switch(escolha1){
        case 1:
            return menu_funcionario()
        
        case 2:
            var resposta = input("Escreva o numero do produto que deseja editar: ")
            resposta = parseInt(resposta)

            if(isNaN(resposta)){
                espaco()
                print("Resposta Inválida!")
                return menu_produtos()
            }
            resposta = resposta - 1

            var instancia = new sistema
            return instancia.editar_produto(resposta)

        case 3:
            var instancia = new sistema
            instancia.add_produto()
            return menu_produtos()

        case 4:
            var instancia = new sistema
            instancia.excluir_produto()
            return excluir_produto()
        }
}

function menu_cliente(cliente){
    
    espaco()
    var cliente_atual = cliente
    print("Ver meus dados(1)")
    print("Fazer pedido(2)")
    print("Meus Pedidos(3)")
    print("Ver Lista de Produtos(4)")
    print("Minhas avaliaçoes(5)")
    print("Deslogar(6)")
    espaco()
    
    let resposta = parseInt(input("User: "))

    switch(resposta){

        case 1:

            while (true){
                print(cliente_atual)
                print('Voltar(1)      Editar(2)')
                var escolha1 = parseInt(input("User: "))
                
                if(escolha1 == 1){
                    return menu_cliente(cliente_atual)
                }
                if(escolha1 == 2){
                    return editar_cliente(cliente_atual)
                }else{
                    print("Resposta inválida")
                }
            }
        
        case 2:
            cliente_atual
            var instancia = new sistema
            instancia.fazer_pedido(cliente_atual.id)
            print("Pedido realizado!")
            return menu_cliente(cliente_atual)
        
        case 3:
            var meus_pedidos = []
            for(i = 0; i < pedidos.length; i++){

                if(pedidos[i].id_cliente == cliente.id){
                    meus_pedidos.push(pedidos[i])
                }
            }
            if (meus_pedidos == 0){
                print("Sem pedidos! ")
                return menu_cliente(cliente_atual)
            }
            return menu_pedidos(meus_pedidos)

        case 4:
            print(produtos)
            return menu_cliente()
        
        case 5:
            var meus_pedidos = []
            for(i = 0; i < pedidos.length; i++){

                if(pedidos[i].id_cliente == cliente.id){
                    meus_pedidos.push(pedidos[i])
                }
            }
            if (meus_pedidos == 0){
                print("Sem avaliacoes")
                return menu_cliente(cliente_atual)
            }
            for(a of meus_pedidos){
                print(a.avaliacao)
            }
            return menu_cliente(cliente_atual)

        case 6:
            return menu_incial()
    }
}

function editar_cliente(cliente){

    var cliente_atual = cliente
    var indice = usuarios.indexOf(cliente_atual)

    espaco()
    print("Qual dado gostaria de editar?")
    print("Nome(1)")
    print("CPF(2)")
    print("Email(3)")
    print("Senha(4)")
    print("Nascimento(5)")
    print("Voltar(6)")
    
    var resposta = parseInt(input("User: "))

    switch(resposta){

        case 1:
            var resposta1 = input("Qual será o novo nome?\n")
            usuarios.splice(indice, 1)
            cliente_atual.nome = resposta1
            usuarios.push(cliente_atual)
            espaco()
            print(cliente_atual)
            
            return editar_cliente(cliente_atual)
        
        case 2:
            var resposta1 = input("Qual será o novo CPF?\n")
            usuarios.splice(indice, 1)
            cliente_atual.cpf = resposta1
            usuarios.push(cliente_atual)
            espaco()
            print(cliente_atual)
            
            return editar_cliente(cliente_atual)
        
        case 3:
            var resposta1 = input("Qual será o novo Email?\n")
            usuarios.splice(indice, 1)
            cliente_atual.email = resposta1
            usuarios.push(cliente_atual)
            espaco()
            print(cliente_atual)
            
            return editar_cliente(cliente_atual)

        case 4:
            var resposta1 = input("Qual será a nova Senha?\n")
            usuarios.splice(indice, 1)
            cliente_atual.senha = resposta1
            usuarios.push(cliente_atual)
            espaco()
            print(cliente_atual)
            
            return editar_cliente(cliente_atual)

        case 5:
            var resposta1 = input("Qual será o novo Nascimento?\n")
            usuarios.splice(indice, 1)
            cliente_atual.nascimento = resposta1
            usuarios.push(cliente_atual)
            espaco()
            print(cliente_atual)

        case 6:
            return menu_cliente(cliente_atual)

        default:
            print("Resposta inválida!")
            espaco()
            return editar_cliente(cliente_atual)
    }
}

function menu_pedidos(lista_pedidos){

    abrir_produtos(lista_pedidos)

    escolha1 = input("Voltar(1)     Avaliar(2)    Excluir Pedido(3)\n")
    escolha1 = parseInt(escolha1)
    switch(escolha1){
        case 1:
            return menu_pedidos(lista_pedidos)
        
        case 2:
            var resposta = input("Escreva o numero do pedido que deseja avaliar: ")
            resposta = parseInt(resposta)

            if(isNaN(resposta)){
                espaco()
                print("Resposta Inválida!")
                return menu_pedidos(lista_pedidos)
            }
            resposta = resposta - 1

            pedido_atual = lista_pedidos[resposta]
            avaliacao_atual = input("Avaliacao: ")
            pedido_atual.avaliacao = avaliacao_atual
            print("Avaliacao adicionada")
            return menu_pedidos(lista_pedidos)

        case 3:
            var instancia = new sistema
            instancia.excluir_pedido(lista_pedidos)
            return menu_pedidos(lista_pedidos)

        default:
            espaco()
            print("Resposta Inválida!")
            return menu_pedidos(lista_pedidos)
        }
}


menu_incial()
