import type {ChanceLevelType} from "@/types/ChanceLevel";
import type {SchoolClass, SchoolClassType, ClassCategory, ClassType} from '@/types/SchoolLevel'

export const CHANCES_LEVELS: Record<ChanceLevelType, {
    key: ChanceLevelType
    label: string
    color: string
    barColor: string
    textColor: string
    level: number
}> = {
    VERY_HIGH: {
        key: 'VERY_HIGH',
        label: 'Très élevées',
        color: 'bg-emerald-100',
        barColor: 'bg-emerald-400',
        textColor: 'text-emerald-500',
        level: 4,
    },
    HIGH: {
        key: 'HIGH',
        label: 'Élevées',
        color: 'bg-blue-100',
        barColor: 'bg-blue-400',
        textColor: 'text-blue-500',
        level: 3,
    },
    MEDIUM: {
        key: 'MEDIUM',
        label: 'Moyennes',
        color: 'bg-purple-100',
        barColor: 'bg-purple-400',
        textColor: 'text-purple-500',
        level: 2,
    },
    LOW: {
        key: 'LOW',
        label: 'Faibles',
        color: 'bg-orange-100',
        barColor: 'bg-orange-300',
        textColor: 'text-orange-400',
        level: 1,
    },
}


export const SCHOOL_CLASSES: Record<SchoolClassType, SchoolClass> = {
    SECONDE: {
        key: 'SECONDE',
        label: 'Seconde',
    },
    PREMIERE: {
        key: 'PREMIERE',
        label: 'Première',
    },
    TERMINALE: {
        key: 'TERMINALE',
        label: 'Terminale',
    },
}

export const CLASS_TYPES: Record<ClassType, ClassCategory> = {
    GENERALE: {
        key: 'GENERALE',
        label: 'Générale',
    },
    TECHNOLOGIQUE: {
        key: 'TECHNOLOGIQUE',
        label: 'Technologique',
    },
    PROFESSIONNEL: {
        key: 'PROFESSIONNEL',
        label: 'Professionnel',
    },
    AUTRE: {
        key: 'AUTRE',
        label: 'Autre',
    },
}