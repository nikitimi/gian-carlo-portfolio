import { devIconLanguages, devIconTechstacks, DevIconType } from './devIcons'

type SectionValueType = Omit<DevIconType, 'type'>
type SectionType = {
    sectionTitle: string
    sectionItems: {
        title: string
        value: (SectionValueType | DevIconType)[]
    }[]
    wavy?: boolean
}

const composers = [
    { name: 'Ludwig van Beethoven' },
    { name: 'Niccolò Paganini' },
    { name: 'Franz Liszt' },
    { name: 'Frédéric François Chopin' },
    { name: 'Sergei Vasilyevich Rachmaninoff' },
    { name: 'Claude Debussy' },
    { name: 'Francisco Buencamino Sr.' },
    { name: 'Shaun Choo' },
]
const pieces = [
    { name: 'Ballade No 1 in G Minor Op 23' },
    { name: 'Debussy - Reverie' },
    { name: 'Transcendental Etude No.8' },
    { name: 'Rachmaninoff/Kreisler - Liebesleid' },
    { name: 'Caprice No. 24 in A minor' },
]
const web: SectionType = {
    sectionTitle: 'Web Developer',
    sectionItems: [
        {
            title: 'Languages I speak',
            value: devIconLanguages,
        },
        {
            title: 'Tools, Libraries, & Frameworks I have used in the past',
            value: devIconTechstacks,
        },
    ],
}
const musician: SectionType = {
    wavy: true,
    sectionTitle: 'Musician',
    sectionItems: [
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

export type { SectionType }
export { composers, pieces, web, musician }
