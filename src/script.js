//novo plano
const input_Vtb_valor_multa_contratoNovo = document.querySelector('#vtb_valor_multa_contratoNovo');
const input_Mr_mes_restante = document.querySelector('#mr_mes_restante');
const btn_calcular_contratoNovo = document.querySelector('#btn_calcular_contratoNovo');
const mf_mes_fidelidade = 12;
const resultado_multa_novoContrato = 0;
const mesesUsados = '';
const valorDiasDoMes = 30;

//dias
const inputDiasRestante = document.querySelector('#diasRestante');

function formatarValor(valor) {
  const numeroFormatado = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2, maximumFractionDigits: 2 });

  // tirando espaços
  const partes = numeroFormatado.split(',');
  return partes.join(', ');
}

//calcular Novo Contrato
btn_calcular_contratoNovo.addEventListener('click', event => {
  event.preventDefault();

  if (input_Vtb_valor_multa_contratoNovo.value === '') {
    return alert('Digite o valor do beneficio do cliente no Contrato Novo');
  } else if (input_Mr_mes_restante.value === '') {
    return alert('Selecione a quantidade de meses para encerrar o Contrato Novo');
  }

  //formula: M = (VTB ÷ MF) × MR
  const resultado_multa_Do_Contrato = (input_Vtb_valor_multa_contratoNovo.value / mf_mes_fidelidade) * input_Mr_mes_restante.value;

  //calculo dos dias formula: M = (DR ÷ 30) × (VTB ÷ MF)
  const dias_Restantes = inputDiasRestante.value / valorDiasDoMes;
  const value_Dias_restantes = dias_Restantes.toFixed(2); //valor decimal dos dias restantes

  resultado_Dias_Restantes = value_Dias_restantes * (input_Vtb_valor_multa_contratoNovo.value / mf_mes_fidelidade);

  console.log(resultado_Dias_Restantes);




  const tilulo_historico_contratoNovo = document.querySelector('#tilulo_historico_contratoNovo');
  const texto_paraHistorico_contratoNovo = document.querySelector('#texto_paraHistorico_contratoNovo');

  //calculo de meses restantes
  tilulo_historico_contratoNovo.innerHTML = `<h4>Histórico para os boletos:</h4>`;
  texto_paraHistorico_contratoNovo.innerHTML = `<p class="mt-2">Gerar multa no valor de <strong>${formatarValor(resultado_multa_Do_Contrato)}</strong>, falta ${
    input_Mr_mes_restante.value
  } meses para encerrar a fidelidade.</p>`;

  //Resultado da formula
  let resultado = document.querySelector('#resultado_formula');

  resultado.innerHTML = `
    <h3 class="text-base font-bold mt-2">Fórmula:</h3>
    <p>M = (VTB &#247; MF) &#215; MR</p>
    <h4 class="my-2"><strong>Resultado da Fórmula</strong>:</h4>
    <p>
        M = (${input_Vtb_valor_multa_contratoNovo.value} &#247; ${mf_mes_fidelidade}) &#215; ${input_Mr_mes_restante.value}
        <br>
        M =  ${formatarValor(resultado_multa_Do_Contrato + resultado_Dias_Restantes)}
    </p>
    `;
});
