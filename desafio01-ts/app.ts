import { CompanyAccount } from './class/CompanyAccount'
import { DioVipMaisDez } from './class/DioVipMaisDez'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)

peopleAccount.deposit(350)

console.log(peopleAccount)

peopleAccount.deposit(123)

peopleAccount.deposit(220)

console.log(peopleAccount)

peopleAccount.withdraw(700)

console.log(peopleAccount)



const companyAccount: CompanyAccount = new CompanyAccount('Dio', 102030)

console.log(companyAccount)

companyAccount.getLoan(20000)

console.log(companyAccount)

const vip: DioVipMaisDez = new DioVipMaisDez('Cristiano', 112131)

console.log(vip)

vip.depositPlusTen(350)

console.log(vip)

peopleAccount.getBalance()
companyAccount.getBalance()
vip.getBalance()