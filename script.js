/* ========================================
   1. DADOS DOS PROJETOS
======================================== */

const projetos = [
    {
        nome: "Projeto Idade",
        tecnologia: "Python · básico",
        descricao: "Programa de prática com entrada de dados e estruturas condicionais para verificar a maioridade.",
        link: "https://github.com/isaacoliveirapizo89-bot/projeto-idade-usando-pyton--nivel--iniciante"
    },
    {
        nome: "Gerador de Senhas",
        tecnologia: "Python · básico",
        descricao: "Projeto de estudo voltado à geração de senhas e à prática de lógica de programação.",
        link: "https://github.com/isaacoliveirapizo89-bot/gerador_de_senhas"
    },
    {
        nome: "Site de Manicure",
        tecnologia: "HTML · CSS · JavaScript",
        descricao: "Site demonstrativo criado para apresentar uma proposta digital a uma profissional de manicure. Alguns valores eram estimativas usadas na demonstração.",
        link: "https://github.com/isaacoliveirapizo89-bot/site_de_manicure"
    },
    {
        nome: "Lista de Ativos",
        tecnologia: "Python · básico",
        descricao: "Projeto de estudo para praticar organização e manipulação de informações.",
        link: "https://github.com/isaacoliveirapizo89-bot/listas-de-ativos"
    },
    {
        nome: "Projeto Veigh",
        tecnologia: "Python · básico",
        descricao: "Projeto pessoal inspirado no artista Veigh, desenvolvido como exercício de programação.",
        link: "https://github.com/isaacoliveirapizo89-bot/Projeto_Veigh"
    }
];

/* ========================================
   2. DADOS DOS CERTIFICADOS
======================================== */

const certificados = [
    {
        nome: "Crie um Site Simples Usando HTML, CSS e JavaScript",
        instituicao: "Fundação Bradesco",
        arquivo: "assets/certificados/desenvolvimento-web.pdf"
    },
    {
        nome: "Lei Geral de Proteção de Dados (LGPD)",
        instituicao: "Fundação Bradesco",
        arquivo: "assets/certificados/lgpd.pdf"
    },
    {
        nome: "Fundamentos de TI: Hardware e Software",
        instituicao: "Fundação Bradesco",
        arquivo: "assets/certificados/fundamentos-ti.pdf"
    }
];

/* ========================================
   3. CRIAÇÃO DOS CARDS
======================================== */

function criarCartao({
    nome,
    tecnologia,
    descricao,
    link,
    arquivo,
    instituicao
}) {
    const article = document.createElement("article");
    article.className = "card";

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = tecnologia || instituicao;

    const title = document.createElement("h3");
    title.textContent = nome;

    const text = document.createElement("p");
    text.textContent = descricao || instituicao;

    article.append(tag, title, text);

    const url = link || arquivo;

    if (url) {
        const anchor = document.createElement("a");

        anchor.href = url;
        anchor.textContent = link
            ? "Ver repositório ↗"
            : "Ver certificado ↗";

        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";

        article.append(anchor);
    }

    return article;
}

/* ========================================
   4. EXIBIÇÃO DOS PROJETOS E CERTIFICADOS
======================================== */

const listaProjetos = document.querySelector("#lista-projetos");
const listaCertificados = document.querySelector("#lista-certificados");

if (listaProjetos) {
    projetos.forEach((projeto) => {
        listaProjetos.append(criarCartao(projeto));
    });
}

if (listaCertificados) {
    certificados.forEach((certificado) => {
        listaCertificados.append(criarCartao(certificado));
    });
}

/* ========================================
   5. ATUALIZAÇÃO AUTOMÁTICA DO ANO
======================================== */

const elementoAno = document.querySelector("#ano");

if (elementoAno) {
    elementoAno.textContent = new Date().getFullYear();
}

/* ========================================
   6. MENU DE NAVEGAÇÃO
======================================== */

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

function fecharMenu() {
    if (!nav || !menuButton) return;

    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
}

if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
        const aberto = nav.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", String(aberto));
        menuButton.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", fecharMenu);
    });
}
