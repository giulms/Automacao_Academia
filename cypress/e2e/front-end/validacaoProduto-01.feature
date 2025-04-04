#utf-8
#language: pt

Funcionalidade: validacaoProduto-01 - Acesso ao Produto
    Cenário: Acesso ao Produto
        Dado que acesso o portal My Shop
        Quando realizo login no portal
        E clico na categoria women
        E valido a quantidade de produtos
        E acesso o produto 'Blouse'
        Então valido o produto 'Blouse'