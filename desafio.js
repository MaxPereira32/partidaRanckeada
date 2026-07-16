

function partidaRankeada(saldoVitorias) {
    if (saldoVitorias <= 10) {
        return "Ferro";
    } else if (saldoVitorias <= 20) {
        return "Bronze";
    } else if (saldoVitorias <= 50) {
        return "Prata";
    } else if (saldoVitorias <= 80) {
        return "Ouro";
    } else if (saldoVitorias <= 90) {
        return "Diamante";
    } else if (saldoVitorias <= 100) {
        return "Lendário";
    } else {
        return "Imortal";
    }
}

let saldoVitorias = 0;
let nivel = "";

while (nivel !== "Imortal") {
    let vitorias = Math.floor(Math.random() * 20) + 1;
    let derrotas = Math.floor(Math.random() * 10) + 1;

    saldoVitorias += vitorias - derrotas;
    nivel = partidaRankeada(saldoVitorias);

    console.log(`+${vitorias} vitórias / -${derrotas} derrotas | Saldo: ${saldoVitorias} | Nível: ${nivel}`);
}

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
