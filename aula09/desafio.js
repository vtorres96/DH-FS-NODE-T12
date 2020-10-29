const moment = require("moment");
const { differenceInDays, differenceInMonths } = require("date-fns");

let dataAntiga = moment("2005-09-15");
let dataAtual = moment("2020-09-15");

let diasDeDiferenca = dataAtual.diff(dataAntiga, 'days');
let mesesDeDiferenca = dataAtual.diff(dataAntiga, 'months');

console.log("A diferença de dias entre 15/09/2005 e 15/09/2020 é: " + diasDeDiferenca + " dias.");
console.log("A diferença de meses entre 15/09/2005 e 15/09/2020 é: " + mesesDeDiferenca + " meses.");

let dataAntigaFNS = new Date(2005, 08, 15);
let dataAtualFNS = new Date(2020, 08, 15);

let diasDeDiferencaFNS = differenceInDays(dataAtualFNS, dataAntigaFNS);
let mesesDeDiferencaFNS = differenceInMonths(dataAtualFNS, dataAntigaFNS);

console.log("A diferença de dias entre 15/09/2005 e 15/09/2020 é: " + diasDeDiferencaFNS + " dias.");
console.log("A diferença de meses entre 15/09/2005 e 15/09/2020 é: " + mesesDeDiferencaFNS + " meses.");