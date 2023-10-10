export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }


  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    let depositAmount = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)

    let amountDeposited = depositAmount

    if (this.validateStatus()) {

      this.balance = this.balance + value

      console.log(`Voce depositou ${amountDeposited}`)
    }
  }

  withdraw = (value: number): void => {
    let withdrawwalAmount = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)

    let amountWithdrawn = withdrawwalAmount

    if (this.validateStatus()) {
      if (this.balance > value) {
        this.balance = this.balance - value

        console.log(`Voce sacou ${amountWithdrawn}`)
      } else {
        console.log('Você não tem saldo suficiente para saque');
      }
    }
  }

  getBalance(): void {
    let balanceAmount= new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(this.balance)

    console.log(`Seu saldo é ${balanceAmount}`)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
