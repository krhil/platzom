const expect = require('chai').expect
const platzom = require('..').default
describe('#platzom',function(){
	it('Si una palabra termina en ar, le quitamos las dos ultimas letras',function(){
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})
	it('Si una palabra empieza con z, le agregamos pe al final de la palabra',function(){
		const translation = platzom("Zorro")
		const translation2 = platzom("Zarpar")
		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})
	it('Si una palabra tiene mas de 10 caracteres, se divide a la mitad y se le coloca un guion para la separacion',function(){
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")

	})
	it('Si una palabra es palindromo, ninguna regla anterior cuenta y se intercalan las letras de esa palabra entre mayusculas y minusculas',function(){
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})
})