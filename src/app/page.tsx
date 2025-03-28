"use client";
import { useEffect, useState } from "react";
import { generateSurahData } from "../services/surahService.ts";

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
  },[])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {surahData.map(({ number, arabicName, englishName }, index) => (
        <>
        <p>{englishName}</p>
        <p key={number || index}>{arabicName}</p>
        </>
      ))}
    </div>
  );
}
