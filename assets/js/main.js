function criarCalculadora() {
    return {
        display: document.querySelector(".display"),
        inicia() {
            this.cliqueBotoes();
        },
        btnResultado() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert("Conta inválida");
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert("Conta inválida");
                return;
            }
        },
        cliqueBotoes() {
            document.addEventListener("click", (event) => {
                const elementoClicado = event.target;
                if (elementoClicado.classList.contains("btn-num")) {
                    this.btnParaDisplay(elementoClicado.innerText);
                }
                if (elementoClicado.classList.contains("btn-clear")) {
                    this.btnParLimpar();
                }
                if (elementoClicado.classList.contains("btn-del")) {
                    this.btnApagar1Numero(elementoClicado.innerText);
                }
                if (elementoClicado.classList.contains("btn-eq")) {
                    this.btnResultado();
                }
            });
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        btnParLimpar() {
            this.display.value = "";
        },
        btnApagar1Numero() {
            this.display.value = this.display.value.slice(0, -1);
        },
    };
}
const calculadora = criarCalculadora();
calculadora.inicia();
