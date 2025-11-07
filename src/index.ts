const hw: string = 'hello world'
console.log(hw)

let number: number = 123
console.log(number)

let boolean: boolean = true
console.log(boolean)

let nomes: Array<string> = ['Antonio', 'José']
console.log(nomes)

enum Patentes{
    Genin = 'genin',
    Chunin = 'chunin',
    Jounin = 'jounin'
}
console.log(Patentes.Chunin)

enum Posição{
    Centroavante = 'centroavante',
    Ponta = 'ponta',
    Meio = 'meio',
    Volante = 'volante',
    Lateral = 'lateral',
    Zagueiro = 'zagueiro',
    Goleiro = 'goleiro'
}
interface Jogador{
    name: string,
    posição: Posição,
    número: number
}
interface Jogador{
    clube: string
}
let diMaria: Jogador ={
    name: 'Di Maria',
    posição: Posição.Ponta,
    número: 11,
    clube: 'Club Atlético Rosario Central'
}
console.log(diMaria)
type Ninja = {
    nome: string
    patente: Patentes
    clã: string
}
let Kakashi: Ninja = {
    nome: 'Kakashi',    
    patente: Patentes.Jounin,
    clã: 'Hatake'
}
console.log(Kakashi)
let base: any = 45 
let mutavel = <string>base

const NinjaEFutebolista: Jogador & Ninja = {
    
    name: 'Scorbunny',
    posição: Posição.Ponta,
    número: 10,
    clube: 'Pokemon League',
    nome: 'Greninja',    
    patente: Patentes.Jounin,
    clã: 'Tipo água'

}
console.log(NinjaEFutebolista)