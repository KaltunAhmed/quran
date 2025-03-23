import { chooseOneSurahFromSet, generateRandomSurah } from "./surahUtils"

describe("Genereate random Surah",() => {
    it('should return a random number between the range', () => {
        const min = 114
        const max = 78
        const numberOfSurahs = 4
        const randomSurahSet = generateRandomSurah(numberOfSurahs)

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

        const chosenSurah = chooseOneSurahFromSet(surahSet)

        expect(surahSet.has(chosenSurah)).toBe(true);
    })

}) 