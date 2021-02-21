class Form {

  constructor() {
    this.input = createInput("Name");
    this.input1 = createInput("Answer");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input1.hide();
  }

  display(){
    var title = createElement('h2')
    var para = createElement('h4')
    var o1 =  createElement('h4')
    var o2 =  createElement('h4')
    var o3 =  createElement('h4')
    var o4 =  createElement('h4')   

    title.html("My Quiz Game");
    title.position(130, 0);
    para.html("Question : What starts and ends with e, but has only 1 letter")
    para.position(60,70);
    o1.html("1:Everyone")
    o1.position(100,90)
    o2.html("2:Envelope")
    o2.position(100,110)
    o3.html("3:Estimate")
    o3.position(100,130)
    o4.html("4:Example")
    o4.position(100,150)

    this.input.position(100, 200);
    this.input1.position(400,200);
    this.button.position(300, 230);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.input1.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}
