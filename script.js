const projetos = [
  {nome:"Projeto Idade",tecnologia:"Python · básico",descricao:"Programa de prática com entrada de dados e estruturas condicionais para verificar a maioridade.",link:"https://github.com/isaacoliveirapizo89-bot/projeto-idade-usando-pyton--nivel--iniciante"},
  {nome:"Gerador de Senhas",tecnologia:"Python · básico",descricao:"Projeto de estudo voltado à geração de senhas e à prática de lógica de programação.",link:"https://github.com/isaacoliveirapizo89-bot/gerador_de_senhas"},
  {nome:"Site de Manicure",tecnologia:"HTML · CSS · JavaScript",descricao:"Site demonstrativo criado para apresentar uma proposta digital a uma profissional de manicure. Alguns valores eram estimativas usadas na demonstração.",link:"https://github.com/isaacoliveirapizo89-bot/site_de_manicure"},
  {nome:"Lista de Ativos",tecnologia:"Python · básico",descricao:"Projeto de estudo para praticar organização e manipulação de informações.",link:"https://github.com/isaacoliveirapizo89-bot/listas-de-ativos"},
  {nome:"Projeto Veigh",tecnologia:"Python · básico",descricao:"Projeto pessoal inspirado no artista Veigh, desenvolvido como exercício de programação.",link:"https://github.com/isaacoliveirapizo89-bot/Projeto_Veigh"}
];

const certificados = [
  {nome:"Crie um Site Simples Usando HTML, CSS e JavaScript",instituicao:"Fundação Bradesco",arquivo:"assets/certificados/desenvolvimento-web.pdf"},
  {nome:"Lei Geral de Proteção de Dados (LGPD)",instituicao:"Fundação Bradesco",arquivo:"assets/certificados/lgpd.pdf"},
  {nome:"Fundamentos de TI: Hardware e Software",instituicao:"Fundação Bradesco",arquivo:"assets/certificados/fundamentos-ti.pdf"}
];

function criarCartao({nome,tecnologia,descricao,link,arquivo,instituicao}){
  const article=document.createElement("article");
  article.className="card";
  const tag=document.createElement("span");
  tag.className="tag";
  tag.textContent=tecnologia||instituicao;
  const title=document.createElement("h3");
  title.textContent=nome;
  const text=document.createElement("p");
  text.textContent=descricao||instituicao;
  article.append(tag,title,text);
  const url=link||arquivo;
  if(url){
    const anchor=document.createElement("a");
    anchor.href=url;
    anchor.textContent=link?"Ver repositório ↗":"Ver certificado ↗";
    if(link){anchor.target="_blank";anchor.rel="noopener noreferrer"}
    else{anchor.target="_blank";anchor.rel="noopener"}
    article.append(anchor);
  }
  return article;
}

const listaProjetos=document.querySelector("#lista-projetos");
const listaCertificados=document.querySelector("#lista-certificados");
projetos.forEach(projeto=>listaProjetos.append(criarCartao(projeto)));
certificados.forEach(certificado=>listaCertificados.append(criarCartao(certificado)));

document.querySelector("#ano").textContent=new Date().getFullYear();

const menuButton=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
menuButton.addEventListener("click",()=>{
  const aberto=nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded",String(aberto));
  menuButton.setAttribute("aria-label",aberto?"Fechar menu":"Abrir menu");
});
nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded","false");
  menuButton.setAttribute("aria-label","Abrir menu");
}));
