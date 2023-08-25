import { Category } from "../types/Category";

export const category: Category = {
    food: { 
        title: 'Alimentação', 
        color: 'blue',
        expense: true, 
    },
    rent: {
        title: 'Aluguel', 
        color: 'red',
        expense: true, 
    },
    salary: {
        title: 'Salario', 
        color: 'green',
        expense: false,
    }
}