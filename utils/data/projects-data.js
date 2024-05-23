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
 /*  {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        link: 'https://example.com',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        link: 'https://example.com',
        role: 'Full Stack Developer',
    },*/
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