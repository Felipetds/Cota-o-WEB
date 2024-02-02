const selectMoeda1 = document.getElementById('moedaSelect1');
const selectMoeda2 = document.getElementById('moedaSelect2');

const valorInicial = document.getElementById('valor-inicial');
const valorFinal = document.getElementById('valor-final');

const button = document.getElementById('button');


fetch('teste_moedas.json').then((response) => {
    response.json().then((data) => {
        if (data && data.Moedas) {
          const moedas = data.Moedas;

          // Iterar sobre as chaves do objeto (nomes dos países)
          Object.keys(moedas).forEach((pais) => {
            const moeda = moedas[pais];
            const sigla = moeda["Sigla"];
            const nome = moeda["Nome"];

            // Criar uma nova opção para cada moeda
            const option = document.createElement('option');
            option.value = sigla;
            option.text = `${pais} - ${nome} (${sigla})`;

            // Adicionar a opção ao elemento select
            selectMoeda1.appendChild(option);
          });
        } else {
          console.error('O JSON retornado não possui a estrutura esperada.');
        }
      }).catch((error) => {
        console.error('Erro ao analisar o JSON:', error);
      });
  }).catch((error) => {
    console.error('Erro ao buscar os dados:', error);
  });

  fetch('teste_moedas.json').then((response) => {
    response.json().then((data) => {
        if (data && data.Moedas) {
          const moedas = data.Moedas;

          // Iterar sobre as chaves do objeto (nomes dos países)
          Object.keys(moedas).forEach((pais) => {
            const moeda = moedas[pais];
            const sigla = moeda["Sigla"];
            const nome = moeda["Nome"];

            // Criar uma nova opção para cada moeda
            const option = document.createElement('option');
            option.value = sigla;
            option.text = `${pais} - ${nome} (${sigla})`;

            // Adicionar a opção ao elemento select
            selectMoeda2.appendChild(option);
          });
        } else {
          console.error('O JSON retornado não possui a estrutura esperada.');
        }
      }).catch((error) => {
        console.error('Erro ao analisar o JSON:', error);
      });
  }).catch((error) => {
    console.error('Erro ao buscar os dados:', error);
  });

const getData = async(moeda1, moeda2, vI) => {

  const pesq1 = `${moeda1}-${moeda2}`
  
  const api = `https://economia.awesomeapi.com.br/${pesq1}`
  
  const retorno = await fetch(api)
  const data = await retorno.json()

  const x = parseFloat(data[0].bid);
  console.log(x);
  console.log(typeof x);
  console.log(vI);
  console.log(typeof vI);

  const b = x*vI;

  console.log(b);

  valorFinal.innerHTML = `${b.toFixed(2)}`

  return(b);
}

const calculo = async(x, vI) => {

  const resultado = x * vI;

  return resultado
}

button.addEventListener('click', (e) => {
  e.preventDefault();

  const moeda1 = selectMoeda1.value
  const moeda2 = selectMoeda2.value
  const vI = parseFloat(valorInicial.value)
  
  const x = getData(moeda1, moeda2, vI)
  
  
  /*
  const y = calculo(x, vI)
  
  console.log(y);
  console.log(typeof x);
  console.log(typeof vI);
  */
  

  /*
  console.log(x.bid);
  console.log(`${vI} em ${moeda1} para ${moeda2}`)
  valorFinal.innerHTML = `${vI}`
  
  */
  })