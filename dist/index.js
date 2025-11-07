"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hw = 'hello world';
console.log(hw);
let number = 123;
console.log(number);
let boolean = true;
console.log(boolean);
let nomes = ['Antonio', 'José'];
console.log(nomes);
var Patentes;
(function (Patentes) {
    Patentes["Genin"] = "genin";
    Patentes["Chunin"] = "chunin";
    Patentes["Jounin"] = "jounin";
})(Patentes || (Patentes = {}));
console.log(Patentes.Chunin);
var Posição;
(function (Posição) {
    Posição["Centroavante"] = "centroavante";
    Posição["Ponta"] = "ponta";
    Posição["Meio"] = "meio";
    Posição["Volante"] = "volante";
    Posição["Lateral"] = "lateral";
    Posição["Zagueiro"] = "zagueiro";
    Posição["Goleiro"] = "goleiro";
})(Posição || (Posição = {}));
let diMaria = {
    name: 'Di Maria',
    posição: Posição.Ponta,
    número: 11,
    clube: 'Club Atlético Rosario Central'
};
console.log(diMaria);
let Kakashi = {
    nome: 'Kakashi',
    patente: Patentes.Jounin,
    clã: 'Hatake'
};
console.log(Kakashi);
let base = 45;
let mutavel = base;
const NinjaEFutebolista = {
    name: 'Scorbunny',
    posição: Posição.Ponta,
    número: 10,
    clube: 'Pokemon League',
    nome: 'Greninja',
    patente: Patentes.Jounin,
    clã: 'Tipo água'
};
console.log(NinjaEFutebolista);
//# sourceMappingURL=index.js.map