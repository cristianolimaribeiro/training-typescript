import { IndividualAccount } from "./class/IndividualAccount";
import { LegalEntityAccount } from "./class/LegalEntityAccount";


const account: IndividualAccount = new IndividualAccount(1554548484, 'Cristiano Lima Ribeiro', 1)
account.setNewName('Cris Lima')

account.deposit()
console.log(account);

const legalEntityAccount: LegalEntityAccount = new LegalEntityAccount('Impar', 2)
legalEntityAccount.deposit()
