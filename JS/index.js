
let Level=0;

let acertou;

let acerto=0;
  
let botao = ["azul", "vermelho", "verde","amarelo"];

let botao_escolhido =[]

let userChosenColour;

let userChosen =[];


$("#azul").click(function(){
   
    const Sound_azul = new Audio("../SOUND/blue.mp3");
    
    Sound_azul.play();

});

$("#verde").click(function(){
   
    const Sound_verde = new Audio("../SOUND/green.mp3");
    
    Sound_verde.play();

});

$("#amarelo").click(function(){

    const Sound_amarelo = new Audio("../SOUND/yellow.mp3");
    
    Sound_amarelo.play();

});


$("#vermelho").click(function(){

    const Sound_vermelho = new Audio("../SOUND/red.mp3");
   
    Sound_vermelho.play();

});



$(".btn").click(function() {

    let userChosenColour = $(this).attr('id'); 
    
    $("#"+userChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);
             
    userChosen.push(userChosenColour)

    verificacao(userChosen.length-1)   
  
});


function nextSequence(){

    Level ++;

    userChosen = [];

    $("#cabecalho").html("Level "+Level).css("margin-left","43rem")

    let randomNumber=Math.floor(Math.random()*4);

    let botaoescolhido= botao[randomNumber];

    $("#"+botaoescolhido).fadeIn(200).fadeOut(200).fadeIn(200);

    botao_escolhido.push(botaoescolhido)
    
    console.log(botao_escolhido)

}


   
     
function verificacao(currentLevel) {
    
 
    if (botao_escolhido[currentLevel] === userChosen[currentLevel]) {
        console.log("acerto");

        if (botao_escolhido.length === userChosen.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }

    }
    
    else{
        console.log("errou")
        const Sound_erro = new Audio("../SOUND/wrong.mp3");
        Sound_erro.play();
       
        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },300);
       
        $("#cabecalho").html("Game Over, Press Any Keyboard Key to Restart").css("margin-left","10rem")
       
        Level=0;
        
        botao_escolhido=[];

    }

}

    


(window).addEventListener("keypress",function(){
    
    if(Level==0){
        nextSequence()
    }

});
    
    



