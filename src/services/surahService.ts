import { getSurahDetails } from "../api/api.ts";
import { chooseOneSurahFromSet, generateRandomSurahs } from "../utils/surahUtils.ts";

interface SurahData {
    id: number;
    arabicName: string;
    englishName: string;
    englishTranslationName: string;
    numberOfAyahs: number;
    audioUrl: string | null;
    chosenSurah: boolean;
}

export async function generateSurahData(numberOfSurahs: number): Promise<SurahData[]> {
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
