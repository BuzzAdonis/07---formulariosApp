export interface Gamer{
    nombre   : string;
    favoritos: Favoritos[]; 
}

export interface Favoritos{
    id    : number;
    nombre: string;
}