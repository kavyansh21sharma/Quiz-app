const questions = [ 
    {
        'que' : 'which of the following is a markup language?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JavaScript',
        'd' : 'PHP',
        'correct' : 'a' ,
    },
    {
        'que' : 'Is Engineering Good Option ?',
        'a' : 'NO',
        'b' : 'HELL NO',
        'c' : 'NO Chance ',
        'd' : 'Worst Mistake',
        'correct' : 'd' ,
    },
    {
        'que' : 'How many days are there in a normal year ? ' ,
        'a' : '365',
        'b' : '360',
        'c' : '380',
        'd' : '390',
        'correct' : 'a' ,
    },
    {
        'que' : 'which animal is known as the "ship of desert" ?' ,
        'a' : 'humans',
        'b' : 'camel',
        'c' : 'Dog ',
        'd' : 'Horse',
        'correct' : 'b' ,
    },
    {
        'que' : 'How many lettees are there in english alphabet?' ,
        'a' : '54',
        'b' : '67',
        'c' : '26',
        'd' : '21',
        'correct' : 'c' ,
    },
    {
        'que' : 'WHich is the tallest animal on the earth?' ,
        'a' : 'Giraffe',
        'b' : 'Lion',
        'c' : 'Cat ',
        'd' : 'Humans',
        'correct' : 'a' ,
    }
]
let index = 0;
let total = questions.length;
let right = 0 , wrong = 0 ;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    
    reset ();
   const data = questions[index]
   console.log(data)     
   quesBox.innerText = `${index+1}) ${data.que}`;
   optionInputs[0].nextElementSibling.innerText = data.a;
   optionInputs[1].nextElementSibling.innerText = data.b;
   optionInputs[2].nextElementSibling.innerText = data.c;
   optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer() 
    if (ans == data.correct) { 
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;

}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}


const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
     <h4> thank you for playing the quiz </h4>
     <h1> ${right} / ${total} </h1>
     </div>
    `
}
 
loadQuestion();
