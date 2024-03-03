export type SectionType = {
    name: string
    items: {
        title: string
        value: { name: string; src?: string }[]
    }[]
    wavy?: boolean
}

export const languages = [
    {
        name: 'javascript',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
        name: 'typescript',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    },
    {
        name: 'php',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    },
    {
        name: 'python',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
]
export const techstacks = [
    {
        name: 'html',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    },
    {
        name: 'css',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    },
    {
        name: 'redux',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
    },
    {
        name: 'vscode',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
    },
    {
        name: 'visualstudio',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg',
    },
    {
        name: 'github',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    },
    {
        name: 'firebase',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    },
    {
        name: 'nodejs',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
        name: 'reactjs',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
        name: 'threejs',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
    },
    {
        name: 'nextjs',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    },
    {
        name: 'express',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    },
    {
        name: 'tailwindcss',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    },
    {
        name: 'scss/sass',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
    },
    {
        name: 'android studio',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
    },
    // 'MUI',
    // 'p5JS',
]
export const composers = [
    { name: 'Ludwig van Beethoven' },
    { name: 'Niccolò Paganini' },
    { name: 'Franz Liszt' },
    { name: 'Frédéric François Chopin' },
    { name: 'Sergei Vasilyevich Rachmaninoff' },
    { name: 'Claude Debussy' },
    { name: 'Francisco Buencamino Sr.' },
    { name: 'Shaun Choo' },
]
export const pieces = [
    { name: 'Ballade No 1 in G Minor Op 23' },
    { name: 'Debussy - Reverie' },
    { name: 'Transcendental Etude No.8' },
    { name: 'Rachmaninoff/Kreisler - Liebesleid' },
    { name: 'Caprice No. 24 in A minor' },
]
export const web: SectionType = {
    name: 'Web Developer',
    items: [
        {
            title: 'Languages I speak',
            value: languages,
        },
        {
            title: 'Tools, Libraries, & Frameworks I have used in the past',
            value: techstacks,
        },
    ],
}
export const musician: SectionType = {
    wavy: true,
    name: 'Musician',
    items: [
        {
            title: 'My go to composers',
            value: composers,
        },
        {
            title: 'My all-time favorite pieces',
            value: pieces,
        },
    ],
}
