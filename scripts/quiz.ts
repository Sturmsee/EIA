namespace lernquiz {

    let allAnswers: Answer[] = [];
    let quizType: string[] = ["HTML", "CSS", "TypeScript", "gemischt"];
    let rightAnswers: number = 0;


    let button: HTMLButtonElement = document.createElement('button');
    let div: HTMLDivElement = document.createElement('div');
    let span: HTMLSpanElement = document.createElement('span');
    let p: HTMLElement = document.createElement('p');

    let quizSpace: HTMLDivElement = <HTMLDivElement> document.getElementById('myQuiz');
    
    window.addEventListener("load", handleLoad);

    function handleLoad(_e: Event): void{
        p.innerHTML = "Choose a Quiz";
        span.appendChild(p);
        span.className = "temp";
        quizSpace.appendChild(span);

        div.id = "anwserSpace";
        quizSpace.appendChild(div);
        for(let i = 0; i < quizType.length; i++) {
            button.innerHTML = quizType[i];
            button.addEventListener("click", startQuiz);
            div.appendChild(button);
        }

        //startQuiz();

    }
    
    function startQuiz(_e: Event): void {
        let target = _e.target as HTMLInputElement;
        switch (target.innerHTML) {

            case quizType[0]: {

                break;
            }

            case quizType[1]: {

                break;
            }

            case quizType[2]: {

                break;
            }

            case quizType[3]: {

                break;
            }
        }
        
    }

    function quizGame(type: string): void {

    }

}