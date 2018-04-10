export default function platzom(str){
	let translation = str
	//Si una palabra termina en ar, le quitamos las dos ultimas letras
	if(str.toLowerCase().endsWith('ar')){
		translation = str.slice(0, -2)
	}
	//Si una palabra empieza con z, le agregamos pe al final de la palabra
	if(str.toLowerCase().startsWith('z')){
		translation += 'pe' 
	}
	//Si una palabra tiene mas de 10 caracteres, se divide a la mitad y se le coloca un guion para la separacion
	const length = translation.length
	if(length >= 10){
		const firstHalf = translation.slice(0, Math.round(length/2))
		const secondHalf = translation.slice(Math.round(length/2))
		translation = `${firstHalf}-${secondHalf}`
	}

	//Si una palabra es palindromo, se intercalan las letras de esa palabra entre mayusculas y minusculas.
	const reverse = (str)=> str.split('').reverse().join('')//se separa la palabra en un arreglo se le aplica reverse() y luego se unen las letras resultantes.

	function minMay(){
		const length = str.length
		let translation = ''
		let capitalize = true
		for (let i = 0; i < str.length; i++) {
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}														

	if(str == reverse(str)){
		return minMay(str)
	}


	return translation
	
}