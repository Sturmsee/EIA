namespace lernquiz {

    let allAnswers: Answer[] = [];
    let quizType: string[] = ["HTML", "CSS", "TypeScript", "gemischt"];

    let button: HTMLButtonElement = document.createElement('button');
    let div: HTMLDivElement = document.createElement('div');
    let span: HTMLSpanElement = document.createElement('span');
    let p: HTMLElement = document.createElement('p');

    let quizSpace: HTMLDivElement = <HTMLDivElement> document.getElementById('myQuiz');
    
    window.addEventListener("load", handleLoad);

    function handleLoad(_e: Event){
        p.innerHTML = "Choose a Quiz";
        span.appendChild(p);
        span.className = "temp";
        quizSpace.appendChild(span);
        startQuiz();

    }
    
    function startQuiz() {
        div.id = "anwserSpace";
        quizSpace.appendChild(div);
        for(let i = 0; i < quizType.length; i++) {
            button.innerHTML = quizType[i];
            div.appendChild(button);
        }

        
    }
}