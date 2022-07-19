class Forca {
  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    for (let i = 0; i < palavraSecreta.length; i++) {
      this.palavra.push("_")
    }
  }

  letrasChutadas = [];
  vidas = 6;
  palavra = [];
  vetorIndicesLetrasCertas = [];
  posicaoAtualDaLetraCerta = 0;
  palavraSecretaCortada = this.palavraSecreta;



  chutar(letra) {
    if (this.palavraSecreta.includes(letra)) {
      for (let i = 0; i < this.palavraSecreta.length; i++) {
        if (this.palavraSecreta[i] == letra) {
          this.palavra[i] = letra;
        }
      }
    }
    else {
      this.vidas--;
    }
}

buscarEstado() {
  if (this.vidas == 0) {
    return "perdeu"
  }
  if (this.palavra.join('') == this.palavraSecreta) {
    return "ganhou"
  }
  return "aguardando chute";
} // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

buscarDadosDoJogo() {
  return {
    letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
    vidas: this.vidas, // Quantidade de vidas restantes
    palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
  }
}
}


module.exports = Forca;
