class Form {
  constructor() {
    //Propriedades do formulário
    this.input = createInput("").attribute("placeholder", "Digite seu nome");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "título do jogo");
    this.greeting = createElement("h2");
  }

  setElementPosition() {
    //Defina as posições na tela dos elementos
    this.input
    this.playButton
    this.titleImg
    this.greeting
  }


  hide() {
   //Esconda elementos da tela
   this.greeting.hide();
   this.playButton.hide();
   this.input.hide();
  }

  handleMousePressed() {
   // CRIE A FUNÇÃO DE PRESSIONAMENTO DE TECLA
   this.playButton.mousePressed(() => {
    this.input
    this.playButton
    var message = `ESCREVA A MSG`;
    this.greeting.html(message);
    player.name = this.input.value();
    player.index = 1;
  });
  }

  display() {
    // Chame setElementPosition e handleMousePressed
    
  
  }
}
