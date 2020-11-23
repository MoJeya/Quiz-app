// objekt mit fragen
//die Fragen selbst werden in Array rein gepackt

const qiuzData = [
    {
    question: "wie viele Weinachts bäume werden in Deutschland pro Jahr verkauft?",

    a: "etwa 60 Milionen",
    b: "etwa 30 Milionen",
    c: "etwa 100 Milionen",
    d: "etwa 150 Milionen",
    correct: "b",


    },
    {
        question: "Wie viele Liter Bier werden in Deutschland pro Kopf jährlich getrunken",

        a: "10",
        b:"50",
        c:"25",
        d:"10",

        correct:"d",


    },
    {
        question:"Wie lang ist der Begattungsapparat der 15 cm langen Bananenschnecke?",
        a:"80cm",
        b:"120cm",
        c:"40",
        d:"35",

        correct:"a",
    },
    {
        question:"wie viel Buchstaben hat das Hawaiianische Alphabet",
        a:"12",
        b:"45",
        c:"26",
        d:"35",
        correct:"a"
    }
]

const questEl = document.getElementById('Questions');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const button = document.getElementById('submit');

// const radioA = document.getElementById('a');
// const radioB = document.getElementById('b');
// const radioC = document.getElementById('c');
// const radioD = document.getElementById('d');

const vall = document.querySelectorAll(".anwser");

//  radioA.onclick = getSelection;
//  radioB.onclick = getSelection;
//  radioC.onclick = getSelection;
//  radioD.onclick = getSelection;

//var Radios = document.getElementsByName('anwser');
//counter für index von quiz
let currQue = 0;
let score = 0;


loadQuiz();

//hier wird das Quiz geladen
function loadQuiz(){
    deSelct();
    const currentQuiz = qiuzData[currQue];
    //speak to inner html on the index of 0
    questEl.innerText = currentQuiz.question;
    a_text.innerText = currentQuiz.a;
    b_text.innerText = currentQuiz.b;
    c_text.innerText = currentQuiz.c;
    d_text.innerText = currentQuiz.d;


    
}



function getSelect(){
       //Besser Idee mit schönerern Code
    let anwser = undefined;
    //for each schleife
    vall.forEach((vall)=> {
        if(vall.checked){
           anwser = vall.id;  
        }
    });
    
        return anwser;
    }


    //Das war meine Idee
    // for(var i = 0; i< Radios.length; i++){
    //     if(Radios[i].type === 'radio' && Radios[i].checked){
    //         value = Radios[i].value;
    //         console.log("you choose the Answser" +" "+ value);

    //         if(value == current.correct){
    //             console.log("you get a pint");
    //         }else{
    //             alert("wrong anwser");
    //         }
    //     }
        
    // }

 


function deSelct(){

    vall.forEach((vall)=> {
     vall.checked = false;
    });

}

    


button.addEventListener('click', () =>{
// radioA.onclick = check;
// radioB.onclick = check;
// radioC.onclick = check;
// radioD.onclick = check;

    // currQue++;
    //


    
    const anwser = getSelect();
    console.log(anwser);

    
        if(anwser){
            if(anwser === qiuzData[currQue].correct){
                score++;
            }
            currQue ++;
        if(currQue < qiuzData.length){

                 loadQuiz();
             } else{
                 //TODO: zeig ergebnisse
                 console.log("Score: "+" "+ score);
                 alert("there are no more Questions"+ " "+ "your finla Score will be" + " " + score);
                 
             }
            }



})
