'use strict';

const fs = require('fs');

const readFile = (filename) => {
    let arquivo = fs.readFileSync(`${filename}.json`);
    return JSON.parse(arquivo);
}

const returnObjectWithoutWeekend = (dados) => {
    let data = [];
    let soma = 0;
    let contagem = 0;

    dados.map((object) => {
        if (object.valor != 0) {
            contagem++;
            data.push(object);
            soma += object.valor;
        }
    });

    return {
        data,
        contagem,
        soma
    }
};

const maxValue = (data) => {
    return data.reduce((prev, current) => {
        return prev.valor > current.valor ? prev : current;
    })
};

const minValue = (data) => {
    return data.reduce((prev, current) => {
        return prev.valor < current.valor ? prev : current;
    });
}

const calculateAverage = (soma, contagem) => {
    return soma / contagem;
}

const countBillingGreaterAverage = (data, media) => {
    let contagemDias = 0;

    data.map((object) => {
        if (object.valor > media) {
            contagemDias++;
        }
    });

    return contagemDias;
}

let data = returnObjectWithoutWeekend(readFile('dados'));
let avarage = calculateAverage(data.soma, data.contagem);
let days = countBillingGreaterAverage(data.data, avarage);

console.log(`Menor faturamento: ${minValue(data.data).valor}`);
console.log(`Maior faturamento: ${maxValue(data.data).valor}`);
console.log(`Dias de faturamento acima da média: ${days}`);

