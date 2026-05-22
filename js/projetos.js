(function () {
    var projetos = [
        {
            titulo: 'Desafio C3C - Biblioteca',
            descricao: 'Projeto desenvolvido em treinamento. Criação de uma biblioteca.',
            imagem: 'imagens/projetos/salesforce.webp',
            vmcard: '',
            tecnologia: 'Salesforce'
        },
        {
            titulo: 'Automação de Processos',
            descricao: 'Superbadge com automações de fluxo e regras de negócio em Salesforce.',
            imagem: 'imagens/projetos/salesforce.webp',
            vmcard: 'vm-card',
            tecnologia: 'Salesforce'
        },
        {
            titulo: 'Parking Control - API',
            descricao: 'API com Spring Boot e PostgreSQL para controle de vagas e fluxo de entrada.',
            imagem: 'imagens/projetos/rest-api.webp',
            vmcard: '',
            tecnologia: 'Spring'
        },
        {
            titulo: 'CRUD Cliente - API',
            descricao: 'API para gerenciamento de clientes com endpoints REST e validações.',
            imagem: 'imagens/projetos/rest-api.webp',
            vmcard: '',
            tecnologia: 'Spring'
        },
        {
            titulo: 'Gerência de Eventos',
            descricao: 'Software para criação de eventos e controle de convidados.',
            imagem: 'imagens/projetos/springBoot.webp',
            vmcard: '',
            tecnologia: 'Spring'
        },
        {
            titulo: 'BancoTech',
            descricao: 'Sistema de gerenciamento de finanças com operações CRUD em PHP puro.',
            imagem: 'imagens/projetos/bancotech.webp',
            vmcard: 'vm-card',
            tecnologia: 'PHP'
        },
        {
            titulo: 'TheNet',
            descricao: 'Portal de filmes e séries para prática de arquitetura web com PHP.',
            imagem: 'imagens/projetos/thenet.webp',
            vmcard: 'vm-card',
            tecnologia: 'PHP'
        },
        {
            titulo: 'UserNet',
            descricao: 'Sistema de login com diferentes camadas de segurança em PHP.',
            imagem: 'imagens/projetos/usernet.webp',
            vmcard: 'vm-card',
            tecnologia: 'PHP'
        },
        {
            titulo: 'Community Manager',
            descricao: 'Software para gerenciamento de setores de um hub de tecnologia.',
            imagem: 'imagens/projetos/community.webp',
            vmcard: 'vm-card',
            tecnologia: 'Laravel'
        },
        {
            titulo: 'InforGames',
            descricao: 'Projeto educacional para consolidar fundamentos de desenvolvimento web.',
            imagem: 'imagens/projetos/inforgames.webp',
            vmcard: 'vm-card',
            tecnologia: 'HTML/CSS'
        },
        {
            titulo: 'DevilWheels',
            descricao: 'Jogo de corrida desenvolvido com Unity e C# como projeto acadêmico.',
            imagem: 'imagens/projetos/DevilWheels.png',
            vmcard: 'vm-card',
            tecnologia: 'Unity'
        },
        {
            titulo: 'Labirinto 3D',
            descricao: 'Jogo 3D para estudos de mecânicas, ambiente e movimentação em Unity.',
            imagem: 'imagens/projetos/labirinto3d.png',
            vmcard: 'vm-card',
            tecnologia: 'Unity'
        }
    ];

    function renderProjetos() {
        var container = document.querySelector('#divProjetos');
        if (!container) {
            return;
        }

        var html = projetos.map(function (projeto) {
            return '<article class="project-card ' + projeto.vmcard + '">' +
                '<img src="' + projeto.imagem + '" alt="Projeto ' + projeto.titulo + '" loading="lazy" width="450" height="300">' +
                '<div class="project-body">' +
                    '<span class="project-tag">' + projeto.tecnologia + '</span>' +
                    '<h3>' + projeto.titulo + '</h3>' +
                    '<p>' + projeto.descricao + '</p>' +
                '</div>' +
            '</article>';
        }).join('');

        container.innerHTML = html;
    }

    document.addEventListener('DOMContentLoaded', renderProjetos);
})();
