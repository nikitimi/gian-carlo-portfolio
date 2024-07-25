import type { SectionValueType } from './_index'

type DevIconType = SectionValueType & {
    type: 'original' | 'plain'
}

const DEV_ICON_BASE_URL = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'
const devIconLanguages: DevIconType[] = [
    {
        name: 'JavaScript',
        type: 'original',
    },
    {
        name: 'Csharp',
        type: 'original',
    },
    {
        name: 'Dart',
        type: 'original',
    },
    {
        name: 'TypeScript',
        type: 'original',
    },
    {
        name: 'PHP',
        type: 'original',
    },
    {
        name: 'Python',
        type: 'original',
    },
]
const devIconTechstacks: DevIconType[] = [
    {
        name: 'HTML5',
        type: 'original',
    },
    {
        name: 'Flutter',
        type: 'original',
    },
    {
        name: 'Dot-Net',
        type: 'original',
    },
    {
        name: 'CSS3',
        type: 'original',
    },
    {
        name: 'Redux',
        type: 'original',
    },
    {
        name: 'VS Code',
        type: 'original',
    },
    {
        name: 'Visual Studio',
        type: 'plain',
    },
    {
        name: 'GitHub',
        type: 'original',
    },
    {
        name: 'Firebase',
        type: 'plain',
    },
    {
        name: 'NodeJS',
        type: 'original',
    },
    {
        name: 'React',

        type: 'original',
    },
    {
        name: 'ThreeJS',
        type: 'original',
    },

    {
        name: 'NextJS',
        type: 'original',
    },
    {
        name: 'Express',
        type: 'original',
    },
    {
        name: 'TailwindCSS',
        type: 'original',
    },
    {
        name: 'SASS',
        type: 'original',
    },
    {
        name: 'Android Studio',
        type: 'original',
    },
]

function processDevIconToUrl(props: DevIconType) {
    const { name, type } = props
    const formattedName = name.replace(/ /g, '').toLowerCase()
    return `${DEV_ICON_BASE_URL}${formattedName}/${formattedName}-${type}.svg`
}

export type { DevIconType }
export {
    DEV_ICON_BASE_URL,
    devIconLanguages,
    devIconTechstacks,
    processDevIconToUrl,
}
