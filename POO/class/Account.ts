    //abstract class não pode iniciar instacias, servem apenas para serem extendidas por outras classes
    
    export abstract class Account {
        private name: string
        readonly accountNumber: number //só aceita inserção de valor no momento da instanciação/criação
        balance: number = 0
        status: boolean = true

        constructor(name: string, accountNumber: number){
            this.name = name
            this.accountNumber = accountNumber
        }

        setNewName = (name: string): void => {
            this.name = name
            console.log(`Nome alterado para ${name}`);
            
        }

        deposit = (): void => {
            if(this.validateStatus()){

                console.log('Você depositou');
            }
            
        }
        withdraw = () => {
            console.log('Você sacou');
            
        }
        getBalance = () => {
            console.log(this.balance);
            
        }
        private validateStatus = (): boolean => {
            if(this.status){
                return this.status
            }

            throw new Error('Conta Inativa')
        }
    }