import { nationalities } from '~/utils/nationalities'
import {
    BEETHOVEN,
    BOLLING,
    BUENCAMINO_SR,
    CHOO,
    CHOPIN,
    DEBUSSY,
    KREISLER,
    LISZT,
    MORRICONE,
    myFavoriteComposers,
    PAGANINI,
    RACHMANIOFF,
} from './favoriteComposers'
import { countries } from '~/utils/countries'

type CountriesType = typeof countries
type CountryStateType<T extends Record<keyof T, readonly string[]>> = {
    [K in keyof T]: [K, T[K][number]?]
}[keyof T]

type BornDiedType = { date: Date; place: CountryStateType<CountriesType> }
type ComposerType = (typeof myFavoriteComposers)[number]
type NationalityType = (typeof nationalities)[number]
type MusicalPieceType = {
    title: string
    originalArtist?: ComposerType
}
type BaseComposerType = {
    born: BornDiedType
    died?: BornDiedType
    name: ComposerType
    nationality: NationalityType[]
    pieces: MusicalPieceType[]
}

const composers: BaseComposerType[] = [
    {
        born: { date: new Date('December 1770'), place: ['Germany', 'Bonn'] },
        died: {
            date: new Date('March 26, 1827'),
            place: ['Austria', 'Vienna'],
        },
        name: 'Ludwig van Beethoven',
        nationality: ['German'],
        pieces: BEETHOVEN,
    },
    {
        born: { date: new Date('April 10, 1930'), place: ['France', 'Cannes'] },
        died: {
            date: new Date('December 29, 2020'),
            place: ['France', 'Saint-Cloud'],
        },
        name: 'Claude Bolling',
        nationality: ['French'],
        pieces: BOLLING,
    },
    {
        born: {
            date: new Date('November 5, 1883'),
            place: ['Philippines', 'Bulacan'],
        },
        died: {
            date: new Date('October 16, 1952'),
            place: ['Philippines', 'Manila'],
        },
        name: 'Francisco Buencamino Sr.',
        nationality: ['Filipino'],
        pieces: BUENCAMINO_SR,
    },
    {
        born: { date: new Date('February 8, 1991'), place: ['Singapore'] },
        name: 'Shaun Choo',
        nationality: ['Singaporean'],
        pieces: CHOO,
    },
    {
        born: {
            date: new Date('March 1, 1810'),
            place: ['Poland', 'Żelazowa Wola'],
        },
        died: {
            date: new Date('October 17, 1849'),
            place: ['France', 'Paris'],
        },
        name: 'Frédéric François Chopin',
        nationality: ['Polish'],
        pieces: CHOPIN,
    },
    {
        born: {
            date: new Date('August 22, 1862'),
            place: ['France', 'Saint-Germain-en-Laye'],
        },
        died: {
            date: new Date('March 25, 1918'),
            place: ['France', 'Paris'],
        },
        name: 'Claude Debussy',
        nationality: ['French'],
        pieces: DEBUSSY,
    },
    {
        born: {
            date: new Date('February 2, 1875'),
            place: ['Austria', 'Vienna'],
        },
        died: {
            date: new Date('January 29, 1962'),
            place: ['UnitedStates', 'New York'],
        },
        name: 'Fritz Kreisler',
        nationality: ['Austrian', 'American'],
        pieces: KREISLER,
    },
    {
        born: {
            date: new Date('October 22, 1811'),
            place: ['Austria', 'Raiding'],
        },
        died: {
            date: new Date('July 31, 1886'),
            place: ['Germany', 'Bayreuth'],
        },
        name: 'Franz Liszt',
        nationality: ['Hungarian'],
        pieces: LISZT,
    },
    {
        born: { date: new Date('November 10, 1928'), place: ['Italy', 'Rome'] },
        died: { date: new Date('July 6, 2020'), place: ['Italy', 'Selcetta'] },
        name: 'Ennio Morricone',
        nationality: ['Italian'],
        pieces: MORRICONE,
    },
    {
        born: { date: new Date('October 27, 1782'), place: ['Italy', 'Genoa'] },
        died: { date: new Date('May 27, 1840'), place: ['France', 'Nice'] },
        name: 'Niccolò Paganini',
        nationality: ['Italian'],
        pieces: PAGANINI,
    },
    {
        born: { date: new Date('April 1, 1873'), place: ['Russia', 'Staraya'] },
        died: {
            date: new Date('March 28, 1943'),
            place: ['UnitedStates', 'California'],
        },
        name: 'Sergei Vasilyevich Rachmaninoff',
        nationality: ['Russian'],
        pieces: RACHMANIOFF,
    },
] as const

export type { MusicalPieceType, BaseComposerType }
export { composers }
