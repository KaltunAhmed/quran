import { chooseRandomAyahFromSurah } from "../utils/surahUtils.ts";
import axios from "axios";

interface SurahData {
    number: number;
    arabicName: string;
    englishName: string;
    englishTranslationName: string;
    numberOfAyahs: number;
    audioUrl: string | null;
    chosenSurah: boolean;
}

const API_BASE_URL = 'http://api.alquran.cloud/v1/surah/'

export async function fetchSurahData(surahNumber: number) {
    try {
        const response = await axios.get(`${API_BASE_URL}${surahNumber}/ar.alafasy`, {
            headers: { Accept: 'application/json' },
        });

        return response.data.data
    } catch (error) {
        console.error('Error fetching surah data:', error);
        throw error;
    }
}


export async function getSurahDetails(surahNumber: number, isChosen: boolean): Promise<SurahData | null> {
    try {
        const data = await fetchSurahData(surahNumber)

        return {
            number: data.number,
            arabicName: data.name,
            englishName: data.englishName,
            englishTranslationName: data.englishNameTranslation,
            numberOfAyahs: data.numberOfAyahs,
            chosenSurah: isChosen,
            audioUrl: isChosen
                ? data.ayahs[Math.floor(Math.random() * data.ayahs.length)].audio
                : null
        };

    } catch (error) {
        console.error(`Failed to fetch surah ${surahNumber}:`, error);
        return null; // Ensures partial failure doesn't break execution
    }

}