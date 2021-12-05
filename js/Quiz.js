class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
   background("yellow");
   fill("black");
   textSize(30)
   text("Results",370,40);
   Contestant.getPlayerInfo();

   if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("*NOTE: Contestant who answers correct are highlighted in green color!*",130,230);
    }

    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
        fill("green");
        text(allContestants[plr].name + ":" + allContestants[plr].answer,350,300)
      }
      else{
        fill("red")
        text(allContestants[plr].name + ":" + allContestants[plr].answer,350,350)
      }
  }
 }
}
