let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const drawgame =()=>{
    
    msg.innerText="Game Draw :| ";
    msg.style.backgroundColor="#081b31";
}
const gencompChoice= ()=>
{
    const option=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return option[randomidx];
};
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore;
       
        msg.innerText=`You Win !!  your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
    
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText=`You Lose :(  ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userchoice)=>
{
    console.log("user clicked",userchoice);
    //generate computer choice
    const compchoice=gencompChoice();
    console.log("comp choosed ",compchoice);

    if(userchoice===compchoice)
    {
        //draw game
        drawgame();
    }
    else{
        let userwin=true;

        if(userchoice==="rock")
        {
            //scissors, paper
            userwin=compchoice==="paper" ? false:true;
        }
       else if(userchoice==="paper")
        {
            userwin=compchoice==="scissors" ?false:true ;
        }
        else {
            //rock paper
            userwin=compchoice==="rock" ? false:true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
}
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        
        playGame(userchoice);
    });
});