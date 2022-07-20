class Forca {
  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    PreencheEspaçosVazios(this.palavraSecreta, this.palavra);
  }

  letrasChutadas = [];
  vidas = 6;
  palavra = [];
  
  chutar(letra) {
    if (ChuteFoiUmaLetra(letra)) {
      if (!LetraJaFoiChutada(letra, this.letrasChutadas)) {

        AdicionaLetraAoVetor(letra, this.letrasChutadas);

        if (PalavraPossuiLetra(this.palavraSecreta, letra)) {
          PreencheLetrasCertasNaPalavra(letra, this.palavraSecreta, this.palavra);
        }
        else {
          this.vidas--;
        }
      }
    }
  }

  buscarEstado() {
    if (this.vidas == 0) {
      return "perdeu"
    }
    else if (TemVidaEPalvraEstaCerta(this.vidas, this.palavra, this.palavraSecreta)) {
      return "ganhou"
    }
    else {
      return "aguardando chute";
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}
ChuteFoiUmaLetra = (letra) => {
  return letra.length == 1;
}
LetraJaFoiChutada = (letra, letrasChutadas) => {
  return letrasChutadas.includes(letra) == true;
}
AdicionaLetraAoVetor = (letra, vetorAlvo) => {
  vetorAlvo.push(letra);
}
PalavraPossuiLetra = (palavra, letra) => {
  return palavra.includes(letra);
}
PreencheLetrasCertasNaPalavra = (letra, palavraSecreta, palavraAlvo) => {
  for (let i = 0; i < palavraSecreta.length; i++) {
    if (palavraSecreta[i] == letra) {
      palavraAlvo[i] = letra;
    }
  }
}
PreencheEspaçosVazios = (palavraSecreta, palavra) => {
  for (let i = 0; i < palavraSecreta.length; i++) {
    palavra.push("_")
  }
}
TemVidaEPalvraEstaCerta = (vidas, palavra, palavraSecreta) =>{
 return palavra.join('') == palavraSecreta && vidas > 0;
}
module.exports = Forca;
