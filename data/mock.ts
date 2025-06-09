import {CHANCES_LEVELS} from "@/data/constants";
import type {School} from "@/types/School";

export const school: School = {
    name: 'Lycée Gaston Berger',
    type: 'Lycée Public',
    location: 'Bordeaux',
}

export const results = [
    {
        id: 1,
        school: "SKEMA",
        location: "Lille",
        program: "BBA - Global Management",
        chanceLevel: CHANCES_LEVELS.VERY_HIGH,
        trustLevel: 4,
        moreInfo:
            "Tu n'as pas renseigné ton lycée d'origine, or cette information rentre dans l'estimation des chances d'admission, surtout pour les formations les plus sélectives. Nous réduisons en conséquence notre indice de confiance. Tu peux toujours le renseigner !",
    },
    {
        id: 2,
        school: "EDHEC Business School",
        location: "Paris",
        program: "International BBA - Parcours Business Management",
        chanceLevel: CHANCES_LEVELS.HIGH,
        trustLevel: 2,
        moreInfo:
            "Tu n'as pas renseigné ton lycée d'origine, or cette information rentre dans l'estimation des chances d'admission, surtout pour les formations les plus sélectives. Nous réduisons en conséquence notre indice de confiance. Tu peux toujours le renseigner !",
    },
    {
        id: 3,
        school: "IPAG Business School",
        location: "Grenoble",
        program: "International BBA - Parcours Business Management",
        chanceLevel: CHANCES_LEVELS.LOW,
        trustLevel: 3,
        moreInfo:
            "Tu n'as pas renseigné ton lycée d'origine, or cette information rentre dans l'estimation des chances d'admission, surtout pour les formations les plus sélectives. Nous réduisons en conséquence notre indice de confiance. Tu peux toujours le renseigner !",
    },
    {
        id: 4,
        school: "ICN Business School",
        location: "Puteaux",
        program: "IBBA - Manager international",
        chanceLevel: CHANCES_LEVELS.MEDIUM,
        trustLevel: 2,
        moreInfo:
            "Tu n'as pas renseigné ton lycée d'origine, or cette information rentre dans l'estimation des chances d'admission, surtout pour les formations les plus sélectives. Nous réduisons en conséquence notre indice de confiance. Tu peux toujours le renseigner !",
    },
]