class Noticia{
  
  constructor(titulo, Data_de_publicação, resumo, Texto){
    this.titulo = titulo
    this.Data_de_publicação = Data_de_publicação
    this.resumo = resumo
    this.Texto = Texto
  }
  mostrarNoticia(){
  return this.titulo +"\n"+ this.Data_de_publicação + "\n" + "\n"+this.resumo + "\n" + "\n" + this.Texto
}
}
let noticia = new Noticia ("Carro é roubado","26/02/2020","Carro do Prefeito foi roubado em Campo Grande MS ","Nessa manhã de sabado foi roubado o carro oficial do Prefeito, de acordo com ele foi durante as 12:00 e as 13:00, logo depois o carro foi encontrado abondonado na br-250 pegando fogo!!!")
console.log(noticia.mostrarNoticia())