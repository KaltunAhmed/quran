import { chooseOneSurahFromSet, generateRandomSurahs } from "../utils/surahUtils.ts";
import axios from "axios";

export interface SurahData {
    id: number;
    arabicName: string;
    englishName: string;
    englishTranslationName: string;
    numberOfAyahs: number;
    audioUrl: string | null;
    chosenSurah: boolean
}

const API_BASE_URL = 'http://api.alquran.cloud/v1/surah/'

async function fetchSurahData(surahNumber: number) {
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


async function getSurahDetails(surahNumber: number, isChosen: boolean): Promise<SurahData | null> {
    try {
        const data = await fetchSurahData(surahNumber)

        return {
            id: data.number,
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

async function generateSurahData(numberOfSurahs: number): Promise<SurahData[]> {
    const randomSurahArray = Array.from(generateRandomSurahs(numberOfSurahs))
    const randomlyChosenSurah = chooseOneSurahFromSet(randomSurahArray)

    console.log('random', randomlyChosenSurah)
    const surahDataList = await Promise.all(randomSurahArray.map((surahNumber) =>
        getSurahDetails(surahNumber, surahNumber === randomlyChosenSurah)
    ))


    return surahDataList.filter((data): data is SurahData => data !== null);

}

generateSurahData(4).then((data) => {
    console.log(data);
});