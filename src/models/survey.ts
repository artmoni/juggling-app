import {Poll} from "./poll";
import {DateTime} from "ionic-angular";

/**
 *   {
        "id": 1,
        "date_begin": "2018-06-01T00:00:00+02:00",
        "date_end": "2018-06-30T00:00:00+02:00",
        "limit_user": 20,
        "poll": {
            "id": 1,
            "question": "quel age avez vous ?",
            "answers": [
                {
                    "id": 2,
                    "answer": "plus de 18 ans"
                },
                {
                    "id": 3,
                    "answer": "moins de 18 ans"
                }
            ],
            "surveys": []
        },
        "survey_answers": []
    }
 */
export class Survey {
    id: number;
    date_begin: DateTime;
    date_end: DateTime;
    limit_user: number;
    poll: Poll;
}