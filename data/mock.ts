import {CHANCES_LEVELS} from "@/data/constants";
import type {School} from "@/types/School";
import type {AdmissionResult} from "@/types/AdmissionResult";
import type {ProfileCategory} from "@/types/Profile";

export const school: School = {
    name: 'Lycée Gaston Berger',
    type: 'Lycée Public',
    location: 'Bordeaux',
}

export const results: AdmissionResult[] = [
    {
        id: 1,
        school: "SKEMA",
        location: "Lille",
        program: "BBA - Global Management",
        chanceLevel: CHANCES_LEVELS.VERY_HIGH.key,
        trustLevel: 4,
        moreInfo:
            "Tu n'as pas renseigné ton lycée d'origine, or cette information rentre dans l'estimation des chances d'admission, surtout pour les formations les plus sélectives. Nous réduisons en conséquence notre indice de confiance. Tu peux toujours le renseigner !",
    },
    {
        id: 2,
        school: "EDHEC Business School",
        location: "Paris",
        program: "International BBA - Parcours Business Management",
        chanceLevel: CHANCES_LEVELS.HIGH.key,
        trustLevel: 2,
        moreInfo:
            "Tu n'as pas renseigné ton lycée d'origine, or cette information rentre dans l'estimation des chances d'admission, surtout pour les formations les plus sélectives. Nous réduisons en conséquence notre indice de confiance. Tu peux toujours le renseigner !",
    },
    {
        id: 3,
        school: "IPAG Business School",
        location: "Grenoble",
        program: "International BBA - Parcours Business Management",
        chanceLevel: CHANCES_LEVELS.LOW.key,
        trustLevel: 3,
        moreInfo:
            "Tu n'as pas renseigné ton lycée d'origine, or cette information rentre dans l'estimation des chances d'admission, surtout pour les formations les plus sélectives. Nous réduisons en conséquence notre indice de confiance. Tu peux toujours le renseigner !",
    },
    {
        id: 4,
        school: "ICN Business School",
        location: "Puteaux",
        program: "IBBA - Manager international",
        chanceLevel: CHANCES_LEVELS.MEDIUM.key,
        trustLevel: 2,
        moreInfo:
            "Tu n'as pas renseigné ton lycée d'origine, or cette information rentre dans l'estimation des chances d'admission, surtout pour les formations les plus sélectives. Nous réduisons en conséquence notre indice de confiance. Tu peux toujours le renseigner !",
    },
]

export const profileCategories: ProfileCategory[] = [
    {
        id: 1,
        title: "Classe",
    },
    {
        id: 2,
        title: "Spécialités",
    },
    {
        id: 3,
        title: "Notes",
    },
    {
        id: 4,
        title: "Résultats du bac",
    },
]