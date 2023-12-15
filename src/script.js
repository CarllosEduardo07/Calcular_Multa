const valor_multa_contratoAntigo = document.querySelector('#valor_multa_contratoAntigo');
const Porcentagem_fidelidade = document.querySelector('#Porcentagem_fidelidade');
const mostra_multa_contratoAntigo = document.querySelector('#mostra_multa_contratoAntigo');
const btn_calcular_contratoAntigo = document.querySelector('#btn_calcular_contratoAntigo');

//novo plano
const vtb_valor_multa_contratoNovo = document.querySelector('#vtb_valor_multa_contratoNovo');
const mr_mes_restante = document.querySelector('#mr_mes_restante');
const btn_calcular_contratoNovo = document.querySelector('#btn_calcular_contratoNovo');
const mf_mes_fidelidade = 12;
const resultado_multa_novoContrato = 0;
const mesesUsados = '';


function formatarValor(valor) {
    const numeroFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 });

     // tirando espaços
     const partes = numeroFormatado.split(','); 
     return partes.join(", ");
}

function idetificar_mes_fidelidade(porcentagem){
    if(Porcentagem_fidelidade.value == 90){
       return mesesUsados.value = '1';
    }else if(Porcentagem_fidelidade.value == 85){
        return mesesUsados.value = '2';
    }else if(Porcentagem_fidelidade.value == 80){
        return mesesUsados.value = '3';
    }else if(Porcentagem_fidelidade.value == 75){
        return mesesUsados.value = '4';
    }else if(Porcentagem_fidelidade.value == 70){
        return mesesUsados.value = '5';
    }else if(Porcentagem_fidelidade.value == 65){
        return mesesUsados.value = '6';
    }else if(Porcentagem_fidelidade.value == 60){
        return mesesUsados.value = '7';
    }else if(Porcentagem_fidelidade.value == 55){
        return mesesUsados.value = '8';
    }else if(Porcentagem_fidelidade.value == 50){
        return mesesUsados.value = '9';
    }else if(Porcentagem_fidelidade.value == 45){
        return mesesUsados.value = '10';
    }else if(Porcentagem_fidelidade.value == 40){
        return mesesUsados.value = '11';
    }else if(Porcentagem_fidelidade.value == 35){
        return mesesUsados.value = '12';
    }
}

//calcular Antigo Contrato
btn_calcular_contratoAntigo.addEventListener('click', (event) => {
    event.preventDefault()

    if(valor_multa_contratoAntigo.value === ""){
        return alert("Digite o valor do beneficio do cliente no Contrato Antigo");
    }else if(Porcentagem_fidelidade.value === ""){
        return alert("Selecione a quantia de meses Pago no Contrato Antigo");
    }

    const resultado_multa_contratoAntigo = (valor_multa_contratoAntigo.value * Porcentagem_fidelidade.value) / 100;

    const tilulo_historico_contratoAntigo = document.querySelector('#tilulo_historico_contratoAntigo');
    const texto_paraHistorico_contratoAntigo = document.querySelector('#texto_paraHistorico_contratoAntigo');

    tilulo_historico_contratoAntigo.innerHTML = `<h4 class="my-1">Histórico para os boletos:</h4>`
    texto_paraHistorico_contratoAntigo.innerHTML = `Gerar multa no valor de <strong>${formatarValor(resultado_multa_contratoAntigo)}</strong>, cliente usou ${idetificar_mes_fidelidade(Porcentagem_fidelidade.value)} meses - deverá arcar com uma <strong>multa de ${Porcentagem_fidelidade.value}%</strong> do total dos benefícios concedidos.`;
});


//calcular Novo Contrato
btn_calcular_contratoNovo.addEventListener('click', (event) => {
    event.preventDefault()

    if(vtb_valor_multa_contratoNovo.value === ""){
        return alert("Digite o valor do beneficio do cliente no Contrato Novo");
    }else if(mr_mes_restante.value === ""){
        return alert("Selecione a quantidade de meses para encerrar o Contrato Novo");
    }

    const resultado_multa_e_mes = (vtb_valor_multa_contratoNovo.value / mf_mes_fidelidade) * mr_mes_restante.value;

    const tilulo_historico_contratoNovo = document.querySelector('#tilulo_historico_contratoNovo');
    const texto_paraHistorico_contratoNovo = document.querySelector('#texto_paraHistorico_contratoNovo');

    //calculo de meses restantes
    tilulo_historico_contratoNovo.innerHTML = `<h4 class="my-1">Histórico para os boletos:</h4>`
    texto_paraHistorico_contratoNovo.innerHTML = `Gerar multa no valor de <strong>${formatarValor(resultado_multa_e_mes)}</strong>, falta ${mr_mes_restante.value} meses para encerrar a fidelidade.`


    //Resultado da formula
    let resultado = document.querySelector('#resultado_formula');

    resultado.innerHTML = `<h4><strong>Resultado da fórmula</strong>:</h4>
    M = (${vtb_valor_multa_contratoNovo.value} &#247; ${mf_mes_fidelidade}) &#215; ${mr_mes_restante.value}
    <br>
    M =  ${formatarValor(resultado_multa_e_mes)}`;
});

