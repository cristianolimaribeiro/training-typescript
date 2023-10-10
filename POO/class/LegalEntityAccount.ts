import { Account } from "./Account";

export class LegalEntityAccount extends Account{
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = () => {
        console.log('Você pegou um empréstimo');
        
    }

    deposit = () => {
        console.log(`A empresa realizou um deposito`);
    }
}