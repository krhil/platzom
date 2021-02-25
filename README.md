#Platzom
Platzom es un idioma inventado por los dioses

##Descripcion del idioma
- Si una palabra termina en ar, le quitamos las dos ultimas letras.
- Si una palabra empieza con z, le agregamos pe al final de la palabra.
- Si una palabra tiene mas de 10 caracteres, se divide a la mitad y se le coloca un guion para la separacion.
- Si una palabra es palindromo, ninguna regla anterior cuenta y se intercalan las letras de esa palabra entre mayusculas y minusculas.

##Instalación
```
npm install platzom
```

##Uso
```
import platzom from 'platzom'
platzom('sometemos') //SoMeTeMoS
platzom('abecedario') //abece-dario
platzom('Programar') //Program
platzom('Zorro') //Zorrope
platzom('Zarpar') //Zarppe
```
##Créditos
- [Carhil Matos](https://twitter.com/krhil)

##Licencia
[MIT](https://opensource.org/licenses/MIT)

