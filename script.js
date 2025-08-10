// ===== CONFIGURAÇÕES GLOBAIS =====
const CONFIG = {
    // Configurações de animação
    animation: {
        duration: 600,
        easing: 'ease-out',
        threshold: 0.1
    },
    
    // Configurações de scroll
    scroll: {
        smooth: true,
        offset: 80
    },
    
    // Configurações de loading
    loading: {
        minDuration: 2000,
        fadeOutDuration: 500
    },
    
    // Configurações de toast
    toast: {
        duration: 5000,
        position: 'top-right'
    }
};

// ===== ESTADO GLOBAL =====
const STATE = {
    currentTheme: 'light',
    isLoading: true,
    isMenuOpen: false,
    currentSection: 'home',
    scrollY: 0
};

// ===== UTILITÁRIOS =====
const Utils = {
    // Debounce para otimizar performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Throttle para otimizar scroll
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // Verificar se elemento está visível
    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },

    // Formatar números
    formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },

    // Gerar ID único
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
};

// ===== SISTEMA DE TEMAS =====
class ThemeManager {
    constructor() {
        this.themes = {
            light: {
                name: 'Claro',
                icon: '☀️'
            },
            dark: {
                name: 'Escuro',
                icon: '🌙'
            }
        };
        
        this.init();
    }

    init() {
        // Carregar tema salvo
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
        
        // Configurar toggle
        this.setupToggle();
    }

    setTheme(themeName) {
        if (!this.themes[themeName]) return;
        
        STATE.currentTheme = themeName;
        document.documentElement.setAttribute('data-theme', themeName);
        localStorage.setItem('theme', themeName);
        
        // Atualizar ícone do toggle
        const toggle = document.querySelector('.theme-toggle');
        if (toggle) {
            toggle.innerHTML = this.themes[themeName].icon;
        }
        
        // Disparar evento de mudança de tema
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: themeName } }));
    }

    toggleTheme() {
        const newTheme = STATE.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    setupToggle() {
        const toggle = document.querySelector('.theme-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => this.toggleTheme());
        }
    }
}

// ===== SISTEMA DE LOADING =====
class LoadingManager {
    constructor() {
        this.screen = document.querySelector('.loading-screen');
        this.progress = document.querySelector('.loading-progress');
        this.text = document.querySelector('.loading-text');
        this.startTime = Date.now();
        
        this.init();
    }

    init() {
        if (!this.screen) return;
        
        // Simular carregamento
        this.simulateLoading();
        
        // Verificar se todos os recursos estão carregados
        window.addEventListener('load', () => {
            this.completeLoading();
        });
        
        // Fallback para garantir que o loading seja removido
        setTimeout(() => {
            this.completeLoading();
        }, CONFIG.loading.minDuration);
    }

    simulateLoading() {
        const messages = [
            'Carregando recursos...',
            'Inicializando componentes...',
            'Preparando interface...',
            'Quase pronto...'
        ];
        
        let currentMessage = 0;
        const interval = setInterval(() => {
            if (this.text) {
                this.text.textContent = messages[currentMessage];
            }
            currentMessage = (currentMessage + 1) % messages.length;
        }, 800);
        
        // Limpar intervalo quando loading terminar
        this.interval = interval;
    }

    completeLoading() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        
        STATE.isLoading = false;
        
        // Fade out
        if (this.screen) {
            this.screen.classList.add('hidden');
            setTimeout(() => {
                this.screen.style.display = 'none';
            }, CONFIG.loading.fadeOutDuration);
        }
        
        // Inicializar aplicação
        this.initApp();
    }

    initApp() {
        // Inicializar componentes
        Navigation.init();
        ScrollManager.init();
        AnimationManager.init();
        ContactForm.init();
        
        // Animar entrada dos elementos
        this.animatePageEntry();
    }

    animatePageEntry() {
        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate');
            }, index * 100);
        });
    }
}

// ===== SISTEMA DE NAVEGAÇÃO =====
class Navigation {
    static init() {
        this.setupMobileMenu();
        this.setupScrollEffects();
        this.setupActiveLinks();
    }

    static setupMobileMenu() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const menu = document.querySelector('.nav-menu');
        
        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                STATE.isMenuOpen = !STATE.isMenuOpen;
                menu.classList.toggle('active');
                
                // Animar hamburger
                const spans = toggle.querySelectorAll('span');
                if (STATE.isMenuOpen) {
                    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        }
        
        // Fechar menu ao clicar em links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (STATE.isMenuOpen) {
                    STATE.isMenuOpen = false;
                    menu.classList.remove('active');
                }
            });
        });
    }

    static setupScrollEffects() {
        const navbar = document.querySelector('.navbar');
        
        const handleScroll = Utils.throttle(() => {
            STATE.scrollY = window.scrollY;
            
            if (navbar) {
                if (STATE.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        }, 16);
        
        window.addEventListener('scroll', handleScroll);
    }

    static setupActiveLinks() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
        
        const updateActiveLink = () => {
            const currentSection = Array.from(sections).find(section => {
                const rect = section.getBoundingClientRect();
                return rect.top <= CONFIG.scroll.offset && rect.bottom > CONFIG.scroll.offset;
            });
            
            if (currentSection) {
                const id = currentSection.getAttribute('id');
                if (STATE.currentSection !== id) {
                    STATE.currentSection = id;
                    
                    // Atualizar links ativos
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            }
        };
        
        window.addEventListener('scroll', Utils.throttle(updateActiveLink, 100));
    }
}

// ===== GERENCIADOR DE SCROLL =====
class ScrollManager {
    static init() {
        this.setupSmoothScroll();
        this.setupScrollToTop();
        this.setupScrollAnimations();
    }

    static setupSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - CONFIG.scroll.offset;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    static setupScrollToTop() {
        const scrollBtn = document.querySelector('.scroll-to-top');
        
        if (scrollBtn) {
            const handleScroll = Utils.throttle(() => {
                if (STATE.scrollY > 500) {
                    scrollBtn.classList.add('visible');
                } else {
                    scrollBtn.classList.remove('visible');
                }
            }, 100);
            
            window.addEventListener('scroll', handleScroll);
            
            scrollBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    static setupScrollAnimations() {
        const observerOptions = {
            threshold: CONFIG.animation.threshold,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);
        
        const elements = document.querySelectorAll('.scroll-animate');
        elements.forEach(el => observer.observe(el));
    }
}

// ===== GERENCIADOR DE ANIMAÇÕES =====
class AnimationManager {
    static init() {
        this.setupHeroAnimations();
        this.setupSkillBars();
        this.setupCounterAnimations();
    }

    static setupHeroAnimations() {
        const heroElements = document.querySelectorAll('.hero-badge, .hero-title, .hero-description, .hero-stats, .hero-actions');
        
        heroElements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                el.style.transition = `all ${CONFIG.animation.duration}ms ${CONFIG.animation.easing}`;
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    static setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const animateSkillBars = () => {
            skillBars.forEach(bar => {
                const targetWidth = bar.getAttribute('data-width') || '0%';
                bar.style.width = targetWidth;
            });
        };
        
        // Animar quando skills section estiver visível
        const skillsSection = document.querySelector('.skills-section');
        if (skillsSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateSkillBars();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.3 });
            
            observer.observe(skillsSection);
        }
    }

    static setupCounterAnimations() {
        const counters = document.querySelectorAll('.stat-number');
        
        const animateCounters = () => {
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-target') || '0');
                const duration = 2000;
                const step = target / (duration / 16);
                let current = 0;
                
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    counter.textContent = Utils.formatNumber(Math.floor(current));
                }, 16);
            });
        };
        
        // Animar quando hero section estiver visível
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(heroSection);
        }
    }
}

// ===== FORMULÁRIO DE CONTATO =====
class ContactForm {
    static init() {
        this.setupForm();
        this.setupValidation();
    }

    static setupForm() {
        const form = document.querySelector('.contact-form');
        
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleSubmit(form);
            });
        }
    }

    static setupValidation() {
        const inputs = document.querySelectorAll('.form-input, .form-textarea');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    this.clearFieldError(input);
                }
            });
        });
    }

    static validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';
        
        // Validações específicas
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Email inválido';
            }
        }
        
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'Este campo é obrigatório';
        }
        
        if (!isValid) {
            this.showFieldError(field, errorMessage);
        }
        
        return isValid;
    }

    static showFieldError(field, message) {
        field.classList.add('error');
        
        // Remover mensagem de erro existente
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
        
        // Adicionar nova mensagem de erro
        const errorElement = document.createElement('div');
        errorElement.className = 'field-error';
        errorElement.style.color = '#ef4444';
        errorElement.style.fontSize = '0.875rem';
        errorElement.style.marginTop = '0.25rem';
        errorElement.textContent = message;
        
        field.parentNode.appendChild(errorElement);
    }

    static clearFieldError(field) {
        field.classList.remove('error');
        const errorElement = field.parentNode.querySelector('.field-error');
        if (errorElement) {
            errorElement.remove();
        }
    }

    static async handleSubmit(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validar todos os campos
        const fields = form.querySelectorAll('.form-input, .form-textarea');
        let isValid = true;
        
        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        if (!isValid) return;
        
        // Simular envio
        this.showLoading(form);
        
        try {
            // Simular delay de API
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Sucesso
            this.showSuccess(form);
            form.reset();
            
        } catch (error) {
            // Erro
            this.showError(form);
        }
    }

    static showLoading(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        }
    }

    static showSuccess(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
            
            setTimeout(() => {
                submitBtn.innerHTML = 'Enviar Mensagem';
            }, 3000);
        }
        
        Toast.show('Mensagem enviada com sucesso!', 'success');
    }

    static showError(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Enviar Mensagem';
        }
        
        Toast.show('Erro ao enviar mensagem. Tente novamente.', 'error');
    }
}

// ===== SISTEMA DE TOAST =====
class Toast {
    static show(message, type = 'info') {
        const container = this.getContainer();
        const toast = this.createToast(message, type);
        
        container.appendChild(toast);
        
        // Auto-remover
        setTimeout(() => {
            this.removeToast(toast);
        }, CONFIG.toast.duration);
    }

    static getContainer() {
        let container = document.querySelector('.toast-container');
        
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }
        
        return container;
    }

    static createToast(message, type) {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        
        const icon = this.getIcon(type);
        
        toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-message">${message}</div>
        `;
        
        // Adicionar botão de fechar
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-secondary);
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;
        
        closeBtn.addEventListener('click', () => this.removeToast(toast));
        toast.appendChild(closeBtn);
        
        return toast;
    }

    static getIcon(type) {
        const icons = {
            success: '✓',
            error: '✕',
            info: 'ℹ',
            warning: '⚠'
        };
        
        return icons[type] || icons.info;
    }

    static removeToast(toast) {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }
}

// ===== FILTRO DE PROJETOS =====
class ProjectFilter {
    static init() {
        this.setupFilters();
    }

    static setupFilters() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');
                
                // Atualizar botões ativos
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                // Filtrar projetos
                this.filterProjects(projectCards, category);
            });
        });
    }

    static filterProjects(cards, category) {
        cards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar gerenciadores
    new ThemeManager();
    new LoadingManager();
    
    // Inicializar filtros de projeto
    ProjectFilter.init();
    
    // Configurar dados dos contadores
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const value = counter.textContent;
        counter.setAttribute('data-target', value);
        counter.textContent = '0';
    });
    
    // Configurar larguras das barras de skill
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.textContent;
        bar.setAttribute('data-width', width);
        bar.textContent = '';
    });
    
    // Configurar categorias dos projetos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const category = card.querySelector('.project-tech span:first-child')?.textContent || 'web';
        card.setAttribute('data-category', category.toLowerCase());
    });
});

// ===== EVENT LISTENERS GLOBAIS =====
window.addEventListener('resize', Utils.debounce(() => {
    // Recalcular layouts se necessário
}, 250));

// ===== EXPORTAÇÕES PARA USO EXTERNO =====
window.App = {
    ThemeManager,
    Toast,
    Utils,
    STATE
};
