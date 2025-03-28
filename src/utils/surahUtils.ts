
const JuzAmma = {
    startSurah: 78,
    endSurah: 114
}

const numberOfSurahs = 4

function generateRandomSurahs(numberOfSurahs: number): Set<number> {
    const uniqueNumbers = new Set<number>()

    while (uniqueNumbers.size < numberOfSurahs){
        const randomSurah = Math.floor(Math.random() * (JuzAmma.endSurah - JuzAmma.startSurah + 1) + JuzAmma.startSurah);
        uniqueNumbers.add(randomSurah)
    }
    return uniqueNumbers
}

 
function chooseOneSurahFromSet(uniqueNumbers: number[] ): number {
    const surahsArr = Array.from(uniqueNumbers)

    const randomIndex =  Math.floor(Math.random() * surahsArr.length);

    const oneRandomSurah = surahsArr[randomIndex]

    return oneRandomSurah

}

function chooseRandomAyahFromSurah(totalNumberOfAyahs: number): number {
const randomAyah: number = Math.floor(Math.random() * totalNumberOfAyahs) + 1;

return randomAyah
}

export  {
    generateRandomSurahs,
    chooseOneSurahFromSet,
    chooseRandomAyahFromSurah
} 