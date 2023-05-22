import { Challenge } from "./Challenge";

export const CHALLENGE_DATA: Challenge[] = [
    { 
        id: 1, 
        name: 'Sumar números', 
        createdDate: new Date('2023-04-13'),
        endDate: new Date('2023-12-15'), 
        tries: false,
        status: 1,
    },

    { 
        id: 2, 
        name: 'Sumar DFGDFGHFGH', 
        createdDate: new Date('2023-05-08'),
        endDate: null,
        tries: true,
        status: 2,
    },

    { 
        id: 3, 
        name: 'Sumar DFGDFGHFGH', 
        createdDate: new Date('2023-02-20'),
        endDate: new Date('2023-07-15'), 
        tries: false,
        status: 3,
    }
]