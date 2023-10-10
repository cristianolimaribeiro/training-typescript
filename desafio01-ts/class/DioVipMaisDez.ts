import { DioAccount } from "./DioAccount";

export class DioVipMaisDez extends DioAccount {
    constructor(name: string, accountNumber: number){
        super(name,accountNumber)
    }

    depositPlusTen = (value: number): void => {
        let vipValue = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(this.balance = (this.balance + value) + 10)
      
          let amount = vipValue 

        

        console.log(`Esse é o valor do seu deposito ${amount} já acrescido o valor VIP de R$ 10,00`)
    }
}