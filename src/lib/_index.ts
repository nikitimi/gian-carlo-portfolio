import { BaseComposerType, composers } from './musician'
import { devIconLanguages, devIconTechstacks, type DevIconType } from './web'

type SectionValueType = {
    name: string
}
type SectionType = {
    sectionTitle: string
    sectionItems: {
        title: string
        value: (SectionValueType | DevIconType | BaseComposerType)[]
    }[]
    isWavy?: boolean
}

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
    sectionTitle: 'Musician',
    sectionItems: [
        {
            title: 'My favorite composers',
            value: composers,
        },
    ],
    isWavy: true,
}

export type { SectionType, SectionValueType }
export { web, musician }
