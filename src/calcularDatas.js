import { differenceInDays, differenceInMonths, differenceInYears } from 'https://cdn.skypack.dev/date-fns';

const btn = document.querySelector('#btn_Calcular_Datas');

btn.addEventListener('click', event => {
  event.preventDefault();

  const date1 = new Date(2023, 4, 23); // 23 de maio de 2023
  const date2 = new Date(2024, 5, 23); // 23 de junho de 2024

  const diffInDays = differenceInDays(date2, date1);
  const diffInMonths = differenceInMonths(date2, date1);
  const diffInYears = differenceInYears(date2, date1);

  console.log(`Diferença em dias: ${diffInDays}`);
  console.log(`Diferença em meses: ${diffInMonths}`);
  console.log(`Diferença em anos: ${diffInYears}`);
});
