import { useEffect, useState } from 'react';

import type { BaseResponse } from '../types/BaseResponse';

type SuggestedWordResponse = BaseResponse & {
    word: string;
};

export const useSuggestedWord = () => {
    const [suggestedWord, setSuggestedWord] = useState<string>('');

    const getWord = async () => {
        const res = await fetch(
            `${
                import.meta.env.MODE === 'development'
                    ? 'http://localhost:4123'
                    : import.meta.env.VITE_BASE_URL
            }/api/v1/words/`,
        );
        const parsedRes = (await res.json()) as SuggestedWordResponse;

        setSuggestedWord(parsedRes.word);
    };

    useEffect(() => {
        getWord();
    }, []);

    return {
        suggestedWord,
        getWord,
    } as const;
};
