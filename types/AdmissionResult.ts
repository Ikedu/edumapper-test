import type {ChanceLevelType} from "@/types/ChanceLevel";

export interface AdmissionResult {
    id: number
    school: string
    location: string
    program: string
    chanceLevel: ChanceLevelType
    trustLevel: number // ex: 1–4
    moreInfo: string
}