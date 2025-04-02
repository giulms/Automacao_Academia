#utf-8
#language: pt

Funcionalidade: testeRegistro-01 - Registro Portal
    Cenário: Validação Registro Portal
        Dado que acesso o portal My Shop
        E acesso a página de autenticação
        E preencho o campo de email com um email válido
        E clico no botão "Create an account"
        Quando preencho os campos obrigatórios do formulário com informações válidas
        Entao valido o acesso a Home