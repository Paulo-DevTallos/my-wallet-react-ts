/**
 * Abordagem utilizada para dizer que ao criar um type 
 * para um objeto é possível criar a definição para um
 * nível externo tipando as props do objeto.
 * 
 */

export type Category = {
    [tag: string]: {
        title: string;
        color: string;
        expense: boolean
    } 
}