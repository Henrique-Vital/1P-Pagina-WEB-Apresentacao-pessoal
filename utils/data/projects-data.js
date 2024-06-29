import Link from 'next/link';
import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Henrique Vital Portfólio',
        description: 'Projetei e desenvolvi este portfólio front-end. Criei usando React/NextJS, TailwindCSS. Implantei o aplicativo na vercel.',
        tools: [
            "React", 
            "Node.js", 
            "APIs externas",             
            "Automatização de processos"
        ],
        role: 'Desenvolvedor Front-end',
        code: '', 
        demo: '', 
        link: 'https://henrique-vital-dev-five.vercel.app/', // Link para o perfil do GitHub
        image: '' ,
    },
    {
        id: 2,
        name: 'Connect2Trade Online Platform Service Copy',
        description: 'Projetei e desenvolvi um site web full-stack, projeto pessoal, um site que  permite gerenciar múltiplas contas e oferece suporte a corretores forex e CFD usando MT4 e MT5 em todo o mundo, sem a necessidade de um VPS em execução 24 horas por dia, 7 dias por semana ou instalação de software. Usei de inspiração um template pronto e modifiquei algumas coisas usando NextJS, Typescript, TailwindCSS. Desenvolvi o back-end usando NestJS, Typescript, P o s t g r e S Q L. Implantei o aplicativo front-end na Vercel e o aplicativo back-end vou inplantar tambem na vercel. O sistema esta em desenvolvimento.',
        tools: ['NextJS', 'Tailwind CSS', "NestJS", "TypeScript", " PostgreSQL"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        link: 'https://connect2-trade.vercel.app/',
        image: travel,
    },
    {
        id: 3,
        name: 'GitHub User Search',
        description: 'Desenvolvi um aplicativo web de busca de usuários do GitHub. Utilizando HTML para a estrutura, CSS e Bootstrap para a estilização e JavaScript para a lógica e interatividade, o aplicativo permite que os usuários pesquisem perfis do GitHub e visualizem detalhes como repositórios, seguidores e contribuições.',
        tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        code: 'https://github.com/seu-usuario/buscadeusuarios-github',
        demo: 'https://buscadeusuarios-github.vercel.app/',
        image: 'image_path',
        link: 'https://buscadeusuarios-github.vercel.app/',
        role: 'Desenvolvedor Front-end'
    },
    {
        id: 4,
        name: 'Disney+ Landing Page Clone',
        description: 'Desenvolvi um clone da landing page da Disney+ durante meu curso na EBAC. Utilizando HTML para estruturação, Sass para estilização, JavaScript para interatividade e Gulp para automação de tarefas. O projeto incluiu sliders de carrossel e botões interativos, com foco em eficiência e organização do código.',
        tools: ['HTML', 'Sass', 'JavaScript', 'Gulp'],
        code: 'https://lnkd.in/dwjz5tMh',
        demo: 'https://disney-thor.vercel.app/',
        image: 'ayla',
        link: 'https://disney-thor.vercel.app/',
        role: 'Desenvolvedor Front-end'
    },
    {
        id: 5,
        name: 'Minhas Tarefas',
        description: 'Desenvolvi um aplicativo de gerenciamento de tarefas utilizando React. O aplicativo permite aos usuários criar, editar e excluir tarefas, bem como marcar tarefas como concluídas. A aplicação utiliza uma interface amigável e intuitiva, com React para a estrutura e lógica, e CSS para a estilização.',
        tools: ['React', 'CSS', 'JavaScript'],
        code: 'https://github.com/Henrique-Vital/minhas_tarefas_react',
        demo: 'https://minhas-tarefas-rust.vercel.app/',
        image: 'image_path',
        link: 'https://minhas-tarefas-rust.vercel.app/',
        role: 'Desenvolvedor Front-end'
    },
    {
        id: 6,
        name: 'Lista de Contato',
        description: 'Desenvolvi uma aplicação web para gerenciamento de contatos. Utilizando HTML, CSS, JavaScript e Bootstrap, o aplicativo permite adicionar, editar e remover contatos, além de visualizar uma lista organizada de contatos salvos. A interface é intuitiva e responsiva, garantindo uma boa experiência de usuário.',
        tools: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        code: 'https://github.com/seu-usuario/lista-de-contato',
        demo: 'https://lista-de-contato-main.vercel.app/',
        image: 'image_path',
        link: 'https://lista-de-contato-main.vercel.app/',
        role: 'Desenvolvedor Front-end'
    },
    {
        id: 7,
        name: 'EBAC Sports',
        description: 'Desenvolvi uma aplicação web chamada EBAC Sports, que oferece informações e funcionalidades relacionadas a esportes. A aplicação apresenta uma interface amigável e responsiva, permitindo aos usuários acessar dados e estatísticas esportivas de forma organizada e intuitiva.',
        tools: [
            'HTML',
            'CSS',
            'JavaScript',
            'Bootstrap',
            'React',
            'React-Dom',
            'React-Redux',
            'Redux Toolkit',
            'Styled-Components',
            'TypeScript',
            'Testing Library',
            'Eslint',
            'Prettier'
        ],
        code: 'https://github.com/Henrique-Vital/ebac_sports',
        demo: 'https://ebac-sports-main.vercel.app/',
        image: 'image_path',
        link: 'https://ebac-sports-main.vercel.app/',
        role: 'Desenvolvedor Front-end'
    },
    {
        id: 8,
        name: 'Cálculo IMC',
        description: 'Desenvolvi uma aplicação web para calcular o Índice de Massa Corporal (IMC). Utilizando React e TypeScript, a aplicação permite que os usuários insiram seus dados de peso e altura para obter o valor do IMC, juntamente com a classificação correspondente. A interface é simples e intuitiva, proporcionando uma boa experiência ao usuário.',
        tools: [
            'React',
            'React-Dom',
            'TypeScript',
            'Vite',
            'ESLint'
        ],
        code: 'https://github.com/Henrique-Vital/Calculo_Imc',
        demo: 'https://calculo-imc-pied.vercel.app/',
        image: 'image_path',
        link: 'https://calculo-imc-pied.vercel.app/',
        role: 'Desenvolvedor Front-end'
    },
    {
        id: 9,
        name: 'README.md do GitHub',
        description: 'Desenvolvi o README.md do meu perfil no GitHub para apresentar e documentar meus projetos e habilidades. O README.md inclui uma breve introdução, uma lista de projetos com links para repositórios e demos, bem como informações sobre minhas habilidades técnicas e contatos.',
        tools: [
            'Markdown'
        ],
        code: 'https://github.com/Henrique-Vital/henrique-vital',
        demo: 'https://github.com/Henrique-Vital/henrique-vital',
        image: 'image_path',
        link: 'https://github.com/Henrique-Vital/henrique-vital',
        role: 'Desenvolvedor Front-end'
    },          
    {
        id: 10,
        name: "efood",
        description: "Desenvolvi o efood, uma aplicação web para visualização e gerenciamento de restaurantes e menus. Utilizando React, Redux Toolkit, React Router, Styled Components e TypeScript, o efood oferece uma experiência interativa e responsiva aos usuários, permitindo navegar pelos restaurantes, visualizar menus e realizar pedidos.",
        tools: [
            "React",
            "Redux Toolkit",
            "React Router",
            "Styled Components",
            "TypeScript"
        ],
        code: "https://github.com/Henrique-Vital/efood",
        demo: "https://efood-navy.vercel.app/",
        image: "image_path",
        link: "https://efood-navy.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 11,
        name: "fintech",
        description: "Desenvolvi o fintech, uma aplicação web voltada para serviços financeiros. Utilizando React, TypeScript, React Router e Recharts, o fintech oferece funcionalidades para visualização e análise de dados financeiros, proporcionando uma experiência informativa e interativa aos usuários.",
        tools: [
            "React",
            "TypeScript",
            "React Router",
            "Recharts"
        ],
        code: "https://github.com/Henrique-Vital/fintech",
        demo: "https://fintech-xi-two.vercel.app/",
        image: "image_path",
        link: "https://fintech-xi-two.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 12,
        name: "figpro",
        description: "Desenvolvi o figpro, uma aplicação web utilizando Next.js e Tailwind CSS. O figpro permite aos usuários criar e gerenciar figuras profissionais, utilizando tecnologias como React, Tailwind CSS e Next.js para oferecer uma experiência responsiva e eficiente.",
        tools: [
            "Next.js",
            "React",
            "Tailwind CSS"
        ],
        code: "https://github.com/Henrique-Vital/fig_pro",
        demo: "https://fig-pro-coral.vercel.app/",
        image: "image_path",
        link: "https://fig-pro-coral.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 13,
        name: "instasany",
        description: "Desenvolvi o instasany, uma aplicação web utilizando Next.js, GSAP e Tailwind CSS. O instasany oferece uma interface interativa e dinâmica para visualização de conteúdos diversos, utilizando tecnologias modernas como React, GSAP para animações e Tailwind CSS para estilização responsiva.",
        tools: [
            "Next.js",
            "GSAP",
            "React",
            "Tailwind CSS"
        ],
        code: "https://github.com/Henrique-Vital/instasany",
        demo: "https://instasany-delta.vercel.app/",
        image: "image_path",
        link: "https://instasany-delta.vercel.app/",
        role: "Desenvolvedor Front-end"
    },
    {
        id: 14,
        name: "nubank",
        description: "Desenvolvi o nubank, uma aplicação web inspirada na interface do Nubank. Utilizando HTML para a estrutura, JavaScript para a lógica e interatividade, e SASS para estilização, o nubank oferece uma experiência similar à plataforma original, com funcionalidades simplificadas e uma interface intuitiva.",
        tools: [
            "HTML",
            "JavaScript",
            "SASS"
        ],
        code: "https://github.com/Henrique-Vital/nubank",
        demo: "https://nubank-one.vercel.app/",
        image: "image_path",
        link: "https://nubank-one.vercel.app/",
        role: "Desenvolvedor Front-end"
    }    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },