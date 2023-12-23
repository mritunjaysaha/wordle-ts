import { useEffect, useState } from 'react';
import { BaseResponse } from '../types/BaseResponse';

type SuggestedWordResponse = BaseResponse & {
    word: string;
};

export const useSuggestedWord = () => {
    const [suggestedWord, setSuggestedWord] = useState<string>('');

    const getWord = async () => {
        const res = await fetch(
            `${
                import.meta.env.MODE === 'development'
                    ? 'http://localhost:4000'
                    : import.meta.env.VITE_BASE_URL
            }/api/v1/words/`,
        );
        const parsedRes = (await res.json()) as SuggestedWordResponse;
        console.log(parsedRes);

        setSuggestedWord(parsedRes.word);
    };

    useEffect(() => {
        getWord();
    }, []);

    return {
        suggestedWord,
    } as const;
};
