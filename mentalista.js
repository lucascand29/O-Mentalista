var salaSorteada = parseInt(Math.random()*11);

function Ok() {
    var nomePersonagem1 = document.getElementById("nome1").value;
    var nomePersonagem2 = document.getElementById("nome2").value;
  
    var mensagem = document.getElementById("instrucao");
    var frase =
      "Olá guerreio(a) " +
      nomePersonagem1 +
      ", o amor da sua vida " +
      nomePersonagem2 +
      ", está preso(a) em algum andar da Torre Maligna entre 0 e 10. E para salva-lá, escolha um número de um andar, porém tenha muito cuidado!!! É melhor escolher o andar certo, pois nos andares errados estão repletos de monstros e armadilhas e cada erro seu custará uma vida sua. Sendo assim você tem 3 vidas. Boa sorte meu nobre guerreiro(a)!!!";
    mensagem.innerHTML = frase;
  }
     var vida = 3;
    function Chutar() {
   
    var salaEscolhida = parseInt(document.getElementById("valor").value);
  
    if (salaEscolhida < 0 || salaEscolhida > 10) {
      var mensagem1= document.getElementById("resultado")
      var frase1 ="meu caro guerreiro, a sua amada está em uma sala entre 0 e 10, esse andar não foi construído na torre!!!!"
      mensagem1.innerHTML=frase1
      
    } else if (salaEscolhida == salaSorteada) {
      var mensagem2=document.getElementById("resultado")
      var frase2="Você salvou a sua pessoa amada! Sejam felizes pombinhos <3"
      mensagem2.innerHTML=frase2
    } else if (salaEscolhida != salaSorteada) {
      vida--;
      var mensagem3=document.getElementById("resultado")
      var frase3="Ho não, você acaba de perder uma vida!! Continue tentando! Vidas Restantes: " +
          vida;
      mensagem3.innerHTML=frase3
    }if(vida == 0){
      var mensagem4=document.getElementById("resultado")
      var frase4= "ho não, você perdeu todas as suas vidas. Inicie o jogo novamente" 
      mensagem4.innerHTML=frase4
      vida=3;
    }
    
   
  }