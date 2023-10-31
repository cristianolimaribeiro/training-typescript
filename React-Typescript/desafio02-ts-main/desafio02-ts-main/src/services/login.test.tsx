import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        const username = 'cristiano.lima.ribeiro@gmail.com'
        login(username)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo(a) ${username}!`)
    })
})