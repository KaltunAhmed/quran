import { chooseOneSurahFromSet, chooseRandomAyahFromSurah, generateRandomSurahs } from "./surahUtils"

describe("Genereate random Surah",() => {
    it('should return a random number between the range', () => {
        const min = 114
        const max = 78
        const numberOfSurahs = 4
        const randomSurahSet = generateRandomSurahs(numberOfSurahs)

        expect(randomSurahSet.size).toBe(numberOfSurahs)

        randomSurahSet.forEach(surah => {
            expect(surah).toBeGreaterThanOrEqual(78) 
            expect(surah).toBeLessThanOrEqual(114)

        })
    })
}),

describe("Choose random surah from set", () => { 
    it('should choose a random surah from the set', () => {
       const surahSet = new Set([78, 79, 80, 81]); 
       const surahSetArray = Array.from(surahSet)

        const chosenSurah = chooseOneSurahFromSet(surahSetArray)

        expect(surahSet.has(chosenSurah)).toBe(true);
    })

}) 

describe("Choose random Ayah from chosen surah", () => {
    it('Should return a number between 1 and the total number of ayahs available', () => {
        const totalNumberOfAyahs = 10

        const chosenAyah = chooseRandomAyahFromSurah(totalNumberOfAyahs)

        expect(chosenAyah).toBeLessThanOrEqual(totalNumberOfAyahs)
        expect(chosenAyah).toBeGreaterThanOrEqual(1)
    })

    it('Should return the correct range for a large number of Ayahs', () => {
        const totalNumberOfAyahs = 100;

        const chosenAyah = chooseRandomAyahFromSurah(totalNumberOfAyahs);

        expect(chosenAyah).toBeGreaterThanOrEqual(1);
        expect(chosenAyah).toBeLessThanOrEqual(totalNumberOfAyahs);
    });
})