// types/SchoolLevel.ts

export type SchoolClassType = 'SECONDE' | 'PREMIERE' | 'TERMINALE'

export type ClassType =
    | 'GENERALE'
    | 'TECHNOLOGIQUE'
    | 'PROFESSIONNEL'
    | 'AUTRE'

export interface SchoolClass {
    key: SchoolClassType
    label: string
}

export interface ClassCategory {
    key: ClassType
    label: string
}


