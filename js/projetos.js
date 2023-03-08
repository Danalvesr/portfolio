$(document).ready(() => {
    let divProjetos = document.querySelector("#divProjetos");

    let dadosPuros = JSON.parse(`
    {
        "projetos": [
            {
                "titulo": "Parking Control - API",
                "descricao": "API desenvolvida com Spring Boot, PostgreSQL e usando o Postman para realizar os testes de rotas.",
                "imagem": "imagens/spring.png",
                "vmcard": ""
            },
            {
                "titulo": "Gêrencia de Eventos",
                "descricao": "Sistema para criar eventos e adicionar convidados. Desenvolvido em Spring e PostgreSQL.",
                "imagem": "imagens/spring2.png",
                "vmcard": ""
            },
            {
                "titulo": "CRUD Cliente - API",
                "descricao": "API para inserir, atualizar, pesquisar e deletar clientes. Desenvolvido com Spring, PostgreSQL e Postman.",
                "imagem": "imagens/spring.png",
                "vmcard": ""
            },
            {
                "titulo": "Desafio C3C - Biblioteca",
                "descricao": "Projeto desenvolvido no treinamento da empresa C3C Software. Criação de uma biblioteca.",
                "imagem": "imagens/c3c.png",
                "vmcard": ""
            },
            {
                "titulo": "Automação de Processos",
                "descricao": "Superbadge - O ponto alto dos meus estudos em salesforce foi ter concluído essa superbadge!",
                "imagem": "imagens/superbadge.png",
                "vmcard": "vm-card"
            },
            {
                "titulo": "BancoTech",
                "descricao": "Sistema de gerenciamento de finanças, possui o CRUD e foi totalmente desenvolvido em PHP puro.",
                "imagem": "imagens/bancotech.webp",
                "vmcard": "vm-card"
            },
            {
                "titulo": "Community Manager",
                "descricao": "Sistema feito para gerenciar setores em uma empresa de tecnologia para saúde. Desenvolvido em Laravel.",
                "imagem": "imagens/community.webp",
                "vmcard": "vm-card"
            },
            {
                "titulo": "InforGames",
                "descricao": "Meu primeiro site, feito somente com html e css, o intuito era colocar em prática tudo aprendidono no curso.",
                "imagem": "imagens/inforgames.webp",
                "vmcard": "vm-card"
            },
            {
                "titulo": "TheNet",
                "descricao": "Site sobre filmes e séries, criado para a prática do curso, totalmente desenvolvido em PHP puro.",
                "imagem": "imagens/thenet.webp",
                "vmcard": "vm-card"
            },
            {
                "titulo": "UserNet",
                "descricao": "Sistema de login com vários tipos de segurança aplicada, totalmente desenvolvido em PHP puro.",
                "imagem": "imagens/usernet.webp",
                "vmcard": "vm-card"
            },
            {
                "titulo": "DevilWheels - Unity",
                "descricao": "Projeto da faculdade desenvolvido para a prática de games e usando a linguagem C#.",
                "imagem": "imagens/DevilWheels.png",
                "vmcard": "vm-card"
            },
            {
                "titulo": "Labirinto 3D - Unity",
                "descricao": "Projeto desenvolvido nas férias com o intuito de aprender mais sobre a plataforma Unity e a linguagem C#.",
                "imagem": "imagens/labirinto3d.png",
                "vmcard": "vm-card"
            }           
        ]
    }
    `);

    dadosPuros.projetos.map((projeto) => {
        divProjetos.innerHTML  += `<div class="${projeto.vmcard}">
            <div class="projects-card uk-card uk-card-default uk-card-hover">
                <div class="uk-card-media-top">
                    <img src="${projeto.imagem}" width="1800" height="1200">
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                </div>
            </div>
        </div>`
    })
});