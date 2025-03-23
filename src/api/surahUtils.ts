
const JuzAmma = {
    startSurah: 78,
    endSurah: 114
}

const numberOfSurahs = 4

function generateRandomSurah(numberOfSurahs: number): Set<number> {
    const uniqueNumbers = new Set<number>()

    while (uniqueNumbers.size < numberOfSurahs){
        const randomSurah = Math.floor(Math.random() * (JuzAmma.startSurah - JuzAmma.endSurah + 1) + JuzAmma.endSurah);
        uniqueNumbers.add(randomSurah)
    }
    return uniqueNumbers
}

 
function chooseOneSurahFromSet(uniqueNumbers: Set<number> ): number {
    const surahsArr = Array.from(uniqueNumbers)

    const randomIndex =  Math.floor(Math.random() * surahsArr.length);

    const oneRandomSurah = surahsArr[randomIndex]

    return oneRandomSurah

}

export  {
    generateRandomSurah,
    chooseOneSurahFromSet
} 