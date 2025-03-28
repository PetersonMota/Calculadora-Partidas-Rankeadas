let heroi = "Clank"

let vitoria = 358
let derrota = 259
let saldo = saldoVitoria(vitoria,derrota)


function saldoVitoria(vitoria, derrota) {
    return vitoria - derrota; 
}

let nivel = ""

switch (true){
    case saldo <= 10:
        nivel = "Ferro"
        break

    case saldo >= 11 && saldo <= 20:
        nivel = "Bronze"
        break

    case saldo >= 21 && saldo <= 50:
        nivel = "Prata"
        break
           
    case saldo >= 51 && saldo <= 80:
        nivel = "Ouro"
        break
        
    case saldo >= 81 && saldo <= 90:
        nivel = "Diamante"
        break
        
    case saldo >= 91 && saldo <= 100:
        nivel = "Lendário"
        break
        
    case saldo >= 101:
        nivel = "Imortal"
        break
}

console.log(`O Herói ${heroi} tem saldo de ${saldo} e está no nível de ${nivel}`);
