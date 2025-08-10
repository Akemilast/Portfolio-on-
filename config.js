// ===== CONFIGURAÇÃO DO SITE AKEMI DEVELOPER =====
// Arquivo de configuração principal com todas as informações do site

const SITE_CONFIG = {
    // ===== INFORMAÇÕES BÁSICAS =====
    site: {
        name: "Akemi",
        title: "Akemi - Portfólio Profissional",
        description: "Desenvolvedor Full Stack especializado em web, mobile e desktop. Experiência em React, Node.js, Python, Java e muito mais.",
        url: "https://akemi.dev",
        author: "Akemi ",
        version: "2.0.0"
    },

    // ===== CONFIGURAÇÕES DE SEO =====
    seo: {
        keywords: [
            "desenvolvedor",
            "full stack",
            "web development",
            "mobile development",
            "react",
            "node.js",
            "python",
            "java",
            "javascript",
            "typescript",
            "portfólio",
            "programador",
            "software engineer"
        ],
        ogImage: "/images/og-image.jpg",
        twitterCard: "summary_large_image"
    },

    // ===== INFORMAÇÕES PESSOAIS =====
    profile: {
        name: "Akemi ",
        role: "Desenvolvedor Full Stack",
        location: "Brasil",
        email: "contato@akemi.dev",
        phone: "+55 (11) 99999-9999",
        website: "https://akemi.dev",
        github: "https://github.com/akemi-dev",
        linkedin: "https://linkedin.com/in/akemi-dev",
        twitter: "https://twitter.com/akemi_dev",
        instagram: "https://instagram.com/akemi_dev"
    },

    // ===== ESTATÍSTICAS =====
    stats: {
        projects: 25,
        experience: 5,
        clients: 15,
        satisfaction: 98
    },

    // ===== SOBRE MIM =====
    about: {
        summary: "Desenvolvedor apaixonado por criar soluções inovadoras e experiências digitais excepcionais. Especializado em desenvolvimento full stack com foco em performance, escalabilidade e UX.",
        features: [
            {
                icon: "🚀",
                title: "Performance",
                description: "Código otimizado e aplicações de alta performance"
            },
            {
                icon: "🎨",
                title: "Design",
                description: "Interfaces modernas e experiências intuitivas"
            },
            {
                icon: "🔒",
                title: "Segurança",
                description: "Aplicações seguras e boas práticas de desenvolvimento"
            },
            {
                icon: "📱",
                title: "Responsivo",
                description: "Sites que funcionam perfeitamente em todos os dispositivos"
            }
        ],
        technologies: [
            "React", "Node.js", "Python", "Java", "TypeScript",
            "MongoDB", "PostgreSQL", "AWS", "Docker", "Kubernetes"
        ]
    },

    // ===== PROJETOS =====
    projects: [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "Plataforma completa de e-commerce com sistema de pagamentos, gestão de estoque e painel administrativo.",
            category: "web",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "/images/projects/ecommerce.jpg",
            liveUrl: "https://ecommerce-demo.akemi.dev",
            githubUrl: "https://github.com/akemi-dev/ecommerce-platform",
            featured: true
        },
        {
            id: 2,
            title: "Mobile Banking App",
            description: "Aplicativo bancário móvel com funcionalidades de transferência, pagamentos e gestão de contas.",
            category: "mobile",
            technologies: ["React Native", "Node.js", "PostgreSQL", "Firebase"],
            image: "/images/projects/banking.jpg",
            liveUrl: "https://banking-demo.akemi.dev",
            githubUrl: "https://github.com/akemi-dev/banking-app",
            featured: true
        },
        {
            id: 3,
            title: "AI Chat Assistant",
            description: "Assistente virtual inteligente com processamento de linguagem natural e integração com APIs.",
            category: "ai",
            technologies: ["Python", "TensorFlow", "OpenAI", "FastAPI"],
            image: "/images/projects/ai-chat.jpg",
            liveUrl: "https://ai-chat.akemi.dev",
            githubUrl: "https://github.com/akemi-dev/ai-chat",
            featured: false
        },
        {
            id: 4,
            title: "Task Management System",
            description: "Sistema completo de gestão de tarefas com colaboração em tempo real e notificações.",
            category: "web",
            technologies: ["Vue.js", "Laravel", "MySQL", "WebSockets"],
            image: "/images/projects/task-manager.jpg",
            liveUrl: "https://tasks.akemi.dev",
            githubUrl: "https://github.com/akemi-dev/task-manager",
            featured: false
        },
        {
            id: 5,
            title: "IoT Dashboard",
            description: "Dashboard para monitoramento de dispositivos IoT com gráficos em tempo real e alertas.",
            category: "iot",
            technologies: ["React", "Python", "MQTT", "InfluxDB"],
            image: "/images/projects/iot-dashboard.jpg",
            liveUrl: "https://iot.akemi.dev",
            githubUrl: "https://github.com/akemi-dev/iot-dashboard",
            featured: false
        },
        {
            id: 6,
            title: "Social Media Analytics",
            description: "Plataforma de análise de redes sociais com métricas avançadas e relatórios personalizados.",
            category: "analytics",
            technologies: ["Next.js", "Python", "Redis", "Chart.js"],
            image: "/images/projects/social-analytics.jpg",
            liveUrl: "https://analytics.akemi.dev",
            githubUrl: "https://github.com/akemi-dev/social-analytics",
            featured: false
        }
    ],

    // ===== HABILIDADES =====
    skills: {
        frontend: [
            { name: "React", level: 95 },
            { name: "Vue.js", level: 90 },
            { name: "TypeScript", level: 88 },
            { name: "CSS/SASS", level: 92 },
            { name: "HTML5", level: 95 }
        ],
        backend: [
            { name: "Node.js", level: 90 },
            { name: "Python", level: 85 },
            { name: "Java", level: 80 },
            { name: "PHP", level: 75 },
            { name: "Go", level: 70 }
        ],
        database: [
            { name: "MongoDB", level: 88 },
            { name: "PostgreSQL", level: 85 },
            { name: "MySQL", level: 80 },
            { name: "Redis", level: 75 },
            { name: "Elasticsearch", level: 70 }
        ],
        devops: [
            { name: "Docker", level: 85 },
            { name: "AWS", level: 80 },
            { name: "CI/CD", level: 75 },
            { name: "Kubernetes", level: 70 },
            { name: "Terraform", level: 65 }
        ]
    },

    // ===== EXPERIÊNCIA PROFISSIONAL =====
    experience: [
        {
            company: "TechCorp Solutions",
            position: "Senior Full Stack Developer",
            period: "2022 - Presente",
            description: "Liderança de equipes de desenvolvimento, arquitetura de sistemas e implementação de soluções escaláveis.",
            technologies: ["React", "Node.js", "AWS", "MongoDB"]
        },
        {
            company: "Digital Innovations",
            position: "Full Stack Developer",
            period: "2020 - 2022",
            description: "Desenvolvimento de aplicações web e mobile com foco em UX e performance.",
            technologies: ["Vue.js", "Laravel", "React Native", "MySQL"]
        },
        {
            company: "StartupHub",
            position: "Frontend Developer",
            period: "2018 - 2020",
            description: "Criação de interfaces responsivas e implementação de designs modernos.",
            technologies: ["React", "TypeScript", "SASS", "Figma"]
        }
    ],

    // ===== EDUCAÇÃO =====
    education: [
        {
            institution: "Universidade de São Paulo",
            degree: "Bacharel em Ciência da Computação",
            period: "2014 - 2018",
            description: "Formação completa em computação com foco em desenvolvimento de software."
        },
        {
            institution: "MIT OpenCourseWare",
            degree: "Certificação em Machine Learning",
            period: "2019",
            description: "Curso avançado em algoritmos de machine learning e inteligência artificial."
        }
    ],

    // ===== SERVIÇOS OFERECIDOS =====
    services: [
        {
            icon: "💻",
            title: "Desenvolvimento Web",
            description: "Sites e aplicações web responsivas e modernas",
            price: "A partir de R$ 2.500"
        },
        {
            icon: "📱",
            title: "Apps Mobile",
            description: "Aplicativos nativos e híbridos para iOS e Android",
            price: "A partir de R$ 5.000"
        },
        {
            icon: "🖥️",
            title: "Sistemas Desktop",
            description: "Aplicações desktop multiplataforma",
            price: "A partir de R$ 3.500"
        },
        {
            icon: "🔧",
            title: "Consultoria",
            description: "Análise técnica e arquitetura de sistemas",
            price: "R$ 150/hora"
        }
    ],

    // ===== CONFIGURAÇÕES DE CONTATO =====
    contact: {
        form: {
            enabled: true,
            fields: ["name", "email", "subject", "message"],
            required: ["name", "email", "message"]
        },
        social: {
            github: "https://github.com/akemi-dev",
            linkedin: "https://linkedin.com/in/akemi-dev",
            twitter: "https://twitter.com/akemi_dev",
            instagram: "https://instagram.com/akemi_dev",
            youtube: "https://youtube.com/@akemi-dev"
        }
    },

    // ===== CONFIGURAÇÕES DE PERFORMANCE =====
    performance: {
        lazyLoading: true,
        imageOptimization: true,
        minification: true,
        caching: true,
        cdn: true
    },

    // ===== CONFIGURAÇÕES DE ANALYTICS =====
    analytics: {
        googleAnalytics: "G-XXXXXXXXXX",
        googleTagManager: "GTM-XXXXXXX",
        hotjar: "XXXXXXXXXX"
    },

    // ===== CONFIGURAÇÕES DE SEGURANÇA =====
    security: {
        https: true,
        csp: true,
        hsts: true,
        xssProtection: true
    }
};

// ===== EXPORTAÇÕES =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
} else if (typeof window !== 'undefined') {
    window.SITE_CONFIG = SITE_CONFIG;
}

// ===== FUNÇÕES UTILITÁRIAS =====
const ConfigUtils = {
    // Obter configuração específica
    get(path) {
        return path.split('.').reduce((obj, key) => obj && obj[key], SITE_CONFIG);
    },

    // Verificar se configuração existe
    has(path) {
        return this.get(path) !== undefined;
    },

    // Obter projetos por categoria
    getProjectsByCategory(category) {
        if (category === 'all') return SITE_CONFIG.projects;
        return SITE_CONFIG.projects.filter(project => project.category === category);
    },

    // Obter projetos em destaque
    getFeaturedProjects() {
        return SITE_CONFIG.projects.filter(project => project.featured);
    },

    // Obter habilidades por categoria
    getSkillsByCategory(category) {
        return SITE_CONFIG.skills[category] || [];
    },

    // Obter todas as tecnologias únicas
    getAllTechnologies() {
        const techs = new Set();
        SITE_CONFIG.projects.forEach(project => {
            project.technologies.forEach(tech => techs.add(tech));
        });
        return Array.from(techs).sort();
    }
};

// Exportar utilitários
if (typeof window !== 'undefined') {
    window.ConfigUtils = ConfigUtils;
}
