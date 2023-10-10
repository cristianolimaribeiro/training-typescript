import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    let loanValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)

    let amountBorrowed = loanValue

    if(this.validateStatus()){
      this.balance = this.balance + value
      console.log(`Voce pegou um empréstimo de ${amountBorrowed}`)
    }
  }
}
