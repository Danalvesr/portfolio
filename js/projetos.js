$(document).ready(() => {
    let divProjetos = document.querySelector("#divProjetos");

    let dadosPuros = JSON.parse(`
    {
        "projetos": [
            {
                "titulo": "Parking Control - API",
                "descricao": "API desenvolvida com Spring Boot, PostgreSQL e usando o Postman para realizar os testes de rotas.",
                "imagem": "imagens/resized-images/spring.png",
                "vmcard": "",
                "tecnologia": "Spring"
            },
            {
                "titulo": "Gêrencia de Eventos",
                "descricao": "Software para criar eventos e adicionar convidados. Criado com Spring e PostgreSQL.",
                "imagem": "imagens/resized-images/spring2.png",
                "vmcard": "",
                "tecnologia": "Spring"
            },
            {
                "titulo": "CRUD Cliente - API",
                "descricao": "API completa para gerenciamento de clientes. Desenvolvido com Spring, PostgreSQL e Postman.",
                "imagem": "imagens/resized-images/spring.png",
                "vmcard": "",
                "tecnologia": "Spring"
            },
            {
                "titulo": "Desafio C3C - Biblioteca",
                "descricao": "Projeto desenvolvido em treinamento. Criação de uma biblioteca.",
                "imagem": "imagens/resized-images/c3c.png",
                "vmcard": "",
                "tecnologia": "Salesforce"
            },
            {
                "titulo": "Automação de Processos",
                "descricao": "Superbadge - O ponto alto dos meus estudos em salesforce foi ter concluído essa superbadge!",
                "imagem": "imagens/resized-images/superbadge.png",
                "vmcard": "vm-card",
                "tecnologia": "Salesforce"
            },
            {
                "titulo": "BancoTech",
                "descricao": "Sistema de gerenciamento de finanças, possui o CRUD e foi desenvolvido em PHP puro.",
                "imagem": "imagens/resized-images/bancotech.webp",
                "vmcard": "vm-card",
                "tecnologia": "PHP"
            },
            {
                "titulo": "Community Manager",
                "descricao": "Software para gerencia de setores de um hub de tecnologia. Desenvolvido em Laravel.",
                "imagem": "imagens/resized-images/community.webp",
                "vmcard": "vm-card",
                "tecnologia": "Laravel"
            },
            {
                "titulo": "InforGames",
                "descricao": "Projeto desenvolvido para colocar em prática as habilidades do curso de informática.",
                "imagem": "imagens/resized-images/inforgames.webp",
                "vmcard": "vm-card",
                "tecnologia": "HTML/CSS"
            },
            {
                "titulo": "TheNet",
                "descricao": "Site sobre filmes e séries, criado para a prática do curso, totalmente desenvolvido em PHP puro.",
                "imagem": "imagens/resized-images/thenet.webp",
                "vmcard": "vm-card",
                "tecnologia": "PHP"
            },
            {
                "titulo": "UserNet",
                "descricao": "Sistema de login com vários tipos de segurança aplicada, totalmente desenvolvido em PHP puro.",
                "imagem": "imagens/resized-images/usernet.webp",
                "vmcard": "vm-card",
                "tecnologia": "PHP"
            },
            {
                "titulo": "DevilWheels",
                "descricao": "Projeto da faculdade desenvolvido para a prática de games e usando a linguagem C#.",
                "imagem": "imagens/resized-images/DevilWheels.png",
                "vmcard": "vm-card",
                "tecnologia": "Unity"
            },
            {
                "titulo": "Labirinto 3D",
                "descricao": "Projeto desenvolvido para aprender mais sobre a plataforma Unity e a linguagem C#.",
                "imagem": "imagens/resized-images/labirinto3d.png",
                "vmcard": "vm-card",
                "tecnologia": "Unity"
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
                <div class="uk-card uk-card-default uk-card-body">
                    <div class="uk-card-badge uk-label">${projeto.tecnologia}</div>
                    <h3 class="uk-card-title">${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                </div>
            </div>
        </div>`
    })
});