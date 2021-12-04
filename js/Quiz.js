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
    //write code here to hide question elements
    /*this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();*/
  
    //write code to change the background color here
   background("yellow");
    //write code to show a heading for showing the result of Quiz
    fill("black");
    textSize(30)
    text("Results",370,40);
    //call getContestantInfo( ) here
    contestant.getPlayerInfo();
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("*NOTE: Contestant who answers correct are highlighted in green color!*",130,230);

    }

    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
        fill("green");
      }
      else{
        fill("red")
      }
  }}
  
}
