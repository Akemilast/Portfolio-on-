// Exemplo de como adicionar novos projetos ao portfólio
// Copie este formato e cole no array 'projetos' no arquivo script.js
// 
// 🎨 TEMA ESCURO IMPLEMENTADO: O portfólio agora usa uma paleta elegante
// em preto, branco e cinza para uma aparência moderna e profissional.

const exemploProjeto = {
    nome: "Nome do Projeto",
    descricao: "Descrição detalhada do projeto. Explique o que o projeto faz, qual problema resolve e quais são os principais recursos.",
    tecnologias: ["React", "Node.js", "MongoDB", "Express"],
    repositorio: "https://github.com/seu-usuario/nome-do-repo",
    deploy: "https://seu-projeto.com", // URL do deploy ou null se não houver
    imagem: "caminho/para/imagem.jpg", // Caminho para imagem do projeto ou null para placeholder
    categoria: "Web App" // Categoria: "Web App", "Mobile", "Bot", "API", "Portfólio", etc.
};

// Exemplos de diferentes tipos de projetos:

const exemplosPorCategoria = {
    // Projeto Web
    webApp: {
        nome: "E-commerce Platform",
        descricao: "Plataforma completa de e-commerce com sistema de pagamentos, gestão de produtos e painel administrativo.",
        tecnologias: ["React", "Node.js", "PostgreSQL", "Stripe API"],
        repositorio: "https://github.com/usuario/ecommerce",
        deploy: "https://ecommerce-demo.com",
        imagem: "assets/images/ecommerce.jpg",
        categoria: "Web App"
    },

    // Projeto Mobile
    mobileApp: {
        nome: "Task Manager App",
        descricao: "Aplicativo mobile para gerenciamento de tarefas com sincronização em nuvem e notificações push.",
        tecnologias: ["React Native", "Firebase", "Redux", "Expo"],
        repositorio: "https://github.com/usuario/task-manager",
        deploy: null, // Apps mobile geralmente não têm deploy web
        imagem: "assets/images/task-manager.jpg",
        categoria: "Mobile"
    },

    // Projeto Backend/API
    api: {
        nome: "REST API Service",
        descricao: "API RESTful para sistema de gestão de usuários com autenticação JWT e documentação Swagger.",
        tecnologias: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
        repositorio: "https://github.com/usuario/user-api",
        deploy: "https://api-usuarios.herokuapp.com",
        imagem: null, // APIs geralmente não têm imagens
        categoria: "API"
    },

    // Projeto de Bot
    bot: {
        nome: "Discord Music Bot",
        descricao: "Bot do Discord para reprodução de música com comandos de controle e filas de reprodução.",
        tecnologias: ["Python", "Discord.py", "FFmpeg", "YouTube API"],
        repositorio: "https://github.com/usuario/music-bot",
        deploy: null, // Bots rodam em servidores, não têm deploy web
        imagem: "assets/images/music-bot.jpg",
        categoria: "Bot"
    },

    // Projeto de Portfólio
    portfolio: {
        nome: "Portfólio Pessoal",
        descricao: "Site portfólio responsivo desenvolvido com tecnologias modernas para exibir projetos e habilidades.",
        tecnologias: ["HTML5", "CSS3", "JavaScript", "Responsivo"],
        repositorio: "https://github.com/usuario/portfolio",
        deploy: "https://meu-portfolio.com",
        imagem: "assets/images/portfolio.jpg",
        categoria: "Portfólio"
    }
};

// Para adicionar um novo projeto, siga estes passos:

// 1. Crie um objeto seguindo o formato acima
const meuNovoProjeto = {
    nome: "Meu Projeto Incrível",
    descricao: "Descrição do meu projeto...",
    tecnologias: ["Tech1", "Tech2", "Tech3"],
    repositorio: "https://github.com/usuario/meu-projeto",
    deploy: "https://meu-projeto.com", // ou null
    imagem: "assets/images/meu-projeto.jpg", // ou null
    categoria: "Web App"
};

// 2. Adicione ao array 'projetos' no arquivo script.js:
// projetos.push(meuNovoProjeto);

// 3. Ou substitua o array inteiro:
// const projetos = [
//     // ... projetos existentes
//     meuNovoProjeto
// ];

// Dicas para boas descrições:
// - Seja específico sobre o que o projeto faz
// - Mencione o problema que resolve
// - Liste os principais recursos
// - Mantenha entre 1-3 frases
// - Use linguagem clara e profissional

// Dicas para tecnologias:
// - Liste as principais tecnologias usadas
// - Inclua frameworks e bibliotecas importantes
// - Mantenha entre 3-6 tecnologias por projeto
// - Use nomes padrão (React, não ReactJS)

// Dicas para imagens:
// - Use imagens de alta qualidade
// - Mantenha proporção 16:9 ou 4:3
// - Tamanho recomendado: 800x450px
// - Formato: JPG ou PNG
// - Se não tiver imagem, deixe como null para usar placeholder

// Exemplo de como o array final ficaria:
const projetosExemplo = [
    {
        nome: "Akemibots",
        descricao: "Bot do Discord desenvolvido com funcionalidades avançadas para moderação e entretenimento de servidores.",
        tecnologias: ["JavaScript", "Discord.js", "Node.js", "MongoDB"],
        repositorio: "https://github.com/Akemilast/Akemibots",
        deploy: null,
        imagem: null,
        categoria: "Bot"
    },
    {
        nome: "Akemiideveloper",
        descricao: "Plataforma de desenvolvimento e portfólio profissional com foco em tecnologias modernas.",
        tecnologias: ["React", "Node.js", "Express", "MongoDB"],
        repositorio: "https://github.com/Akemilast/Akemiideveloper",
        deploy: null,
        imagem: null,
        categoria: "Web App"
    },
    // Adicione seus novos projetos aqui
    meuNovoProjeto
];

console.log("Exemplos de projetos carregados. Use como referência para adicionar seus próprios projetos!");

// 🎨 INFORMAÇÕES SOBRE O TEMA ESCURO
// 
// O portfólio foi transformado para usar um tema escuro elegante:
// - Fundo principal: Preto (#000000)
// - Fundo secundário: Cinza escuro (#111111)
// - Cards: Cinza muito escuro (#1a1a1a)
// - Texto: Branco e cinzas claros para máximo contraste
// - Bordas: Cinza médio (#333333) para separação sutil
// 
// Para personalizar as cores, edite as variáveis CSS no arquivo styles.css
// Todas as funcionalidades foram mantidas e otimizadas para o tema escuro.
