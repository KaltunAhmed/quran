interface Props {
    Number: number;
    ArabicName: string;
    EnglishName: string;
    EnglishNameTranslation: string;
    onClick: () => void;
    isChosen: boolean;
    children?: React.ReactNode;
}

export function AnswerCard({ ArabicName, EnglishName, onClick, isChosen, EnglishNameTranslation, Number }: Props) {
    return (
        <div
            onClick={onClick}
            className={`w-full max-w-xs mx-auto flex flex-col justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-lg shadow-sm hover:from-gray-100 hover:to-gray-200 transition-all dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-800`}
        >
            <div className="flex place-content-evenly px-2 py-2">
            <p>{Number}</p>
            <p className="text-xl font-bold text-gray-900 dark:text-white">{ArabicName}</p>
            </div>
            
            <div className="flex flex-col items-center justify-center h-full space-y-2">
                <p className="text-md font-medium dark:text-indigo-400">{EnglishName}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 italic">{EnglishNameTranslation}</p>
            </div>
        </div>
    )
}