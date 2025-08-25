export interface ScrambleWordsState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    totalWords: number;
    words: string[];

};

export type ScrambleWordsAction =
    | { type: "SET_GUESS", payload: string }
    | { type: "GUESS" }
    | { type: "SKIP" }
    | { type: "RESTART", payload: ScrambleWordsState };


const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};

export const getInitialState = (): ScrambleWordsState => {
    const shuffledWords = shuffleArray([...GAME_WORDS]);
    return {
        currentWord: shuffledWords[0],
        errorCounter: 0,
        guess: "",
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord(shuffledWords[0]),
        skipCounter: 0,
        totalWords: GAME_WORDS.length,
        words: shuffledWords,
    }
}

export const scrambleWordsReducer = (state: ScrambleWordsState, action: ScrambleWordsAction): ScrambleWordsState => {
    switch (action.type) {
        case "SET_GUESS":
            return { ...state, guess: action.payload }

        case "GUESS": {
            if (state.guess !== state.currentWord) {
                const errorCounter = state.errorCounter + 1;
                const isGameOver = errorCounter >= state.maxAllowErrors;

                return {
                    ...state,
                    errorCounter,
                    isGameOver,
                    guess: ""
                }
            }

            const isGameOver = state.words.length - 1 === 0;
            const points = state.points + 1;
            const words = state.words.slice(1);
            const currentWord = words[0];
            const scrambledWord = scrambleWord(words[0])
            const guess = "";

            return {
                ...state,
                isGameOver,
                words,
                points,
                currentWord,
                guess,
                scrambledWord
            };
        }

        case "SKIP": {
            if (state.skipCounter >= state.maxSkips) return state;
            const words = state.words.slice(1);
            const skipCounter = state.skipCounter + 1;
            const currentWord = words[0];
            const scrambledWord = scrambleWord(words[0])
            const guess = "";

            return {
                ...state,
                words,
                skipCounter,
                currentWord,
                scrambledWord,
                guess
            }
        }

        case "RESTART": return action.payload;

        default:
            return state;
    }
}