import { useEffect, useState } from 'react';

import { getWord } from '../requests/httpCalls/getWord';
import { getWordWithHint } from '../requests/httpCalls/getWordWithHint';
import { useAuthContext } from './useAuthContext';

export const useSuggestedWord = () => {
    const [suggestedWord, setSuggestedWord] = useState<string>('');
    const [hint, setHint] = useState<string>('');

    const {
        user: { email },
        isAuthenticated,
    } = useAuthContext();

    const getSuggestedWord = async () => {
        if (email) {
            const res = await getWordWithHint(email);

            if (res.success) {
                setSuggestedWord(res.word);
                setHint(res.hint);
            }
        } else {
            const res = await getWord();

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
        hint,
        suggestedWord,
        getSuggestedWord,
    } as const;
};
