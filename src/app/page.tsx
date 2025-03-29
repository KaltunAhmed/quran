"use client";
import { useEffect, useState } from "react";
import { generateSurahData } from "../services/surahService.ts";
import { AnswerCard } from "../components/answerCard.tsx";

interface SurahData {
  number: number;
  arabicName: string;
  englishName: string;
  englishTranslationName: string;
  numberOfAyahs: number;
  audioUrl: string | null;
  chosenSurah: boolean;
}

export default function Home() {
  const [surahData, setSurahData] = useState<SurahData[]>([]);


  useEffect(() => {
    async function fetchData() {
      generateSurahData(4).then((data) => { setSurahData(data) });
    }
    fetchData()
  }, [])

  return (
    <div className="p-4 sm:p-8 md:p-12 lg:p-16 font-[family-name:var(--font-geist-sans)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto items-center ">
      {surahData.map(({ number, arabicName, englishName, englishTranslationName }, index) => (
        <AnswerCard
          key={number || index}
          Number={number}
          ArabicName={arabicName}
          EnglishName={englishName}
          EnglishNameTranslation = {englishTranslationName}
          onClick={() => console.log(`Clicked ${englishName}`)}
          isChosen={false}
        />
      ))}
       </div>
    </div>
  );
}
