namespace lernquiz {

    export interface Question {
        askedQuestion: string;
        answers: Answer[];
    }

    export interface Answer {
        anserText: string;
        right: boolean;
    }
}