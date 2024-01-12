import { useEffect, useState } from 'react';

import { getWord } from '../requests/httpCalls/getWord';
import { getWordWithHint } from '../requests/httpCalls/getWordWithHint';
import { useAuthContext } from './useAuthContext';

export const useSuggestedWord = () => {
    const [suggestedWord, setSuggestedWord] = useState<string>('');

    const {
        user: { email },
        isAuthenticated,
    } = useAuthContext();

    console.log('[useSuggestedWord]', { email, isAuthenticated });

    const getSuggestedWord = async () => {
        if (email) {
            const res = await getWordWithHint(email);

            if (res.success) {
                setSuggestedWord(res.word);
            }
        } else {
            const res = await getWord();
            console.log('[useSuggestedWord]', { res });
            if (res.success) {
                setSuggestedWord(res.word);
            }
        }
    };

    useEffect(() => {
        setTimeout(() => {
            getSuggestedWord();
        }, 0);
    }, [isAuthenticated]);

    return {
        suggestedWord,
        getSuggestedWord,
    } as const;
};
