// programa para calcular preço de uma viagem
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidos = distanciaEmKm / KmPorLitro;

if (tipoCombustivel === 'Gasolina') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


