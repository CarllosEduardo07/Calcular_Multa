const valor_multa_contratoAntigo = document.querySelector('#valor_multa_contratoAntigo');
const Porcentagem_fidelidade = document.querySelector('#Porcentagem_fidelidade');
const mostra_multa_contratoAntigo = document.querySelector('#mostra_multa_contratoAntigo');
const btn_calcular_contratoAntigo = document.querySelector('#btn_calcular_contratoAntigo');

//novo plano
const vtb_valor_multa_contratoNovo = document.querySelector('#vtb_valor_multa_contratoNovo');
const mr_mes_restante = document.querySelector('#mr_mes_restante');
const mostra_multa_contratoNovo = document.querySelector('#mostra_multa_contratoNovo');
const btn_calcular_contratoNovo = document.querySelector('#btn_calcular_contratoNovo');

const mf_mes_fidelidade = 12;
const resultado_multa_novoContrato = 0;

function formatarValor(valor) {
    const numeroFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 });

     // tirando espaços
     const partes = numeroFormatado.split(','); 
     return partes.join(", ");
}

//calcular Antigo Contrato
btn_calcular_contratoAntigo.addEventListener('click', () => {
    const resultado_multa_contratoAntigo = (valor_multa_contratoAntigo.value * Porcentagem_fidelidade.value) / 100;

    mostra_multa_contratoAntigo.innerText = formatarValor(resultado_multa_contratoAntigo);
});


//calcular Novo Contrato
btn_calcular_contratoNovo.addEventListener('click', () => {
    const resultado_multa_e_mes = vtb_valor_multa_contratoNovo.value / mf_mes_fidelidade;

    const resultado_multa_novoContrato = resultado_multa_e_mes * mr_mes_restante.value;

    const tilulo_historico = document.querySelector('#tilulo_historico');
    const texto_paraHistorico = document.querySelector('#texto_paraHistorico');

    //calculo de meses restantes
    tilulo_historico.innerHTML = `<h4>Histórico para os boletos:</h4>`
    texto_paraHistorico.innerHTML = `<p>Gerar multa no valor de <strong>${formatarValor(resultado_multa_novoContrato)}</strong>, falta ${mr_mes_restante.value} meses para encerrar a fidelidade</p>`


    //formula dinamica
    let resultado = document.querySelector('#valor_dinamico');

    resultado.innerHTML = `<h4>Resultado da formula:</h4>
    ${formatarValor(resultado_multa_novoContrato)} = (${vtb_valor_multa_contratoNovo.value} &#247; ${mf_mes_fidelidade}) &#215; ${mr_mes_restante.value}`;
});

