console.log("Desafio do Felipão - Por Geder Evando Weber")

console.log("Classificador de Nível de Herói:")

let nomeHeroi = "DartVader"

//Sistema de ganho de XP:

let faseSuperada = 14
let qtde_estrelas = 486
let qtde_inimigos = 31
let bossVencido = 3
let vidaPerdida = 12


let XP_fase = 250*(faseSuperada)
let XP_coleta = 5*(qtde_estrelas)
let XP_inimigo = 15*(qtde_inimigos)
let XP_boss = 500*(bossVencido)
let XP_perdida = 50*(vidaPerdida)
let XP_total = (XP_fase + XP_coleta + XP_inimigo + XP_boss) - XP_perdida

console.log("Você superou " + faseSuperada + " fases. + " + XP_fase)
console.log("Você coletou " + qtde_estrelas + " estrelas. +" + XP_coleta)
console.log("Você matou " + qtde_inimigos + " inimigos. +" + XP_inimigo)
console.log("Você venceu " + bossVencido + " chefões. +" +XP_boss)
console.log("Você morreu " + vidaPerdida + " vezes. -" + XP_perdida)
console.log("Sua XP total é: " + XP_total)

// Classificador do Herói - É necessário fazer um sistema de classificação (pensei em usar o switch case, mas não rola)

let nivelHeroi;
    if (XP_total < 1000) {
        nivelHeroi = "FERRO";
    }   else if (XP_total >= 1001 && XP_total <= 2000){
        nivelHeroi = "BRONZE";
    }   else if (XP_total >= 2001 && XP_total <= 5000){
        nivelHeroi = "PRATA";
    }   else if (XP_total >= 5001 && XP_total <= 7000){
        nivelHeroi = "OURO";
    }   else if (XP_total >= 7001 && XP_total <= 8000){
        nivelHeroi = "PLATINA";
    }   else if (XP_total >= 8001 && XP_total <= 9000){
        nivelHeroi = "ASCENDENTE";
    }   else if (XP_total >= 9001 && XP_total <= 10000){
        nivelHeroi = "IMORTAL";
    }   else if (XP_total >= 10001) {
        nivelHeroi = "RADIANTE"
    }

console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi + "! PARABÉNS!!!")

