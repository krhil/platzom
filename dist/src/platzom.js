'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {
	var translation = str;
	//Si una palabra termina en ar, le quitamos las dos ultimas letras
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}
	//Si una palabra empieza con z, le agregamos pe al final de la palabra
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}
	//Si una palabra tiene mas de 10 caracteres, se divide a la mitad y se le coloca un guion para la separacion
	var length = translation.length;
	if (length >= 10) {
		var firstHalf = translation.slice(0, Math.round(length / 2));
		var secondHalf = translation.slice(Math.round(length / 2));
		translation = firstHalf + '-' + secondHalf;
	}

	//Si una palabra es palindromo, se intercalan las letras de esa palabra entre mayusculas y minusculas.
	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	}; //se separa la palabra en un arreglo se le aplica reverse() y luego se unen las letras resultantes.

	function minMay() {
		var length = str.length;
		var translation = '';
		var capitalize = true;
		for (var i = 0; i < str.length; i++) {
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}
		return translation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	}

	return translation;
}