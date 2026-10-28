// O JavaScript controla as interações do portfólio.
// O atributo "defer" no HTML faz este arquivo rodar depois que a página for lida.

const menuToggle = document.querySelector("#menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");
const themeToggle = document.querySelector("#theme-toggle");
const saudacao = document.querySelector("#saudacao");
const anoAtual = document.querySelector("#current-year");

// 1. Saudação dinâmica: muda conforme o horário local do dispositivo.
function atualizarSaudacao() {
    const hora = new Date().getHours();

    if (hora < 12) {
        saudacao.textContent = "Bom dia! Seja bem-vindo(a).";
    } else if (hora < 18) {
        saudacao.textContent = "Boa tarde! Seja bem-vindo(a).";
    } else {
        saudacao.textContent = "Boa noite! Seja bem-vindo(a).";
    }
}
atualizarSaudacao();

// 2. Ano automático no rodapé: não precisa atualizar manualmente a cada ano.
anoAtual.textContent = new Date().getFullYear();

// 3. Menu hambúrguer para telas menores.
menuToggle.addEventListener("click", () => {
    const menuEstaAberto = menuPrincipal.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(menuEstaAberto));
    menuToggle.setAttribute(
        "aria-label",
        menuEstaAberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
});

// Ao selecionar uma seção, o menu móvel fecha.
menuPrincipal.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menuPrincipal.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
    });
});

// 4. Alternância entre modo escuro e claro.
// O tema escuro é o padrão; o botão troca a classe no body.
themeToggle.addEventListener("click", () => {
    const modoClaroAtivo = document.body.classList.toggle("light-theme");

    themeToggle.textContent = modoClaroAtivo ? "☾" : "☼";
    themeToggle.setAttribute(
        "aria-label",
        modoClaroAtivo ? "Ativar modo escuro" : "Ativar modo claro"
    );
    themeToggle.setAttribute(
        "title",
        modoClaroAtivo ? "Ativar modo escuro" : "Ativar modo claro"
    );
});

