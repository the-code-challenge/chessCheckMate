# Code Challenge: ChessCheckMate

El rey de las blancas está solo y acorralado. Un alfil, una torre y un caballero de las negras lo tienen rodeado.

Dada la posición del Rey (blanco) y la posicion de la torre, alfil y caballero (negro) definir si es jaque o jaque mate.

### Movimiento del Caballero (knight)
El caballero puede moverse a un cuadrado que tiene dos cuadrados 
horizontalmente y un cuadrado verticalmente, o dos cuadrados verticalmente 
y un cuadrado horizontalmente alejado de él. Por lo tanto, el movimiento 
completo se parece a la letra L. 

![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2Fchessknight.jpg?alt=media&token=5e8d20d4-fb22-497a-bf39-919f1412ea46)

### Moviemiento de la torre (rock)
La torre tiene la característica de moverse de forma recta a traves de todo el tablero
![Moviemiento Torre](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2Fmovimiento_de_torre_ajedrez.png?alt=media&token=14261bcc-f992-4c6a-8d16-5332f3a49c53)

## Movimiento del Alfil (Bishop)
El alfil no tiene restricciones de distancia para cada movimiento, pero está limitado al movimiento diagonal. 
![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2Fbishop.jpg?alt=media&token=260667ac-a778-4135-9a16-a6c1e19f57c4)


## Movimiento del Rey (King)
El rey puede moverse en todas las direcciones, pero solo 1 casillero de distancia.
![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2Fmovimiento_de_rey_ajedrez.png?alt=media&token=bcfeebda-8f55-4f86-bbb8-8f94cd715e6a)

## Instrucciones
- Crear un nuevo repositorio utilizando este repositorio como template (Boton: use this template).
- Editar el código de la función definida en el archivo index.js con un algoritmo que permita obtener los resultados esperados en los test.
- Ejecutar los test validando que todos resulten exitosos

## Ejecutar Pruebas

Instalar dependencias (mocha)
```
npm install
```

Ejecutar test
```
npm run test
```
## Entrada

##### Parámetro 1
- **nombre**: kingWhite (Rey Blanco)
- **tipo**: String

##### Parámetro 2
- **nombre**: rookBlack (Torre Negra)
- **tipo**: String

##### Parámetro 3
- **nombre**: bishopBlack (Alfil Negro)
- **tipo**: String

##### Parámetro 4
- **nombre**: knightBlack (Caballero negro)
- **tipo**: String

## Salida

- **tipo**: String ("jaque mate"|"jaque")

## Ejemplo
Si el rey blanco esta en "A1", la torre negra esta en "A5", 
el alfil negro esta en "D4" Y el caballero negro esta en "D2" 
entonces debe ser = "jaque mate" 

![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2FJaqueMate-1.png?alt=media&token=b843daa8-ab3f-4137-a62b-13c50d899bc1)

---
Si el rey blanco esta en "D1", la torre negra esta en "H2", 
el alfil negro esta en "E3" Y el caballero negro esta en "C3" 
entonces debe ser = "jaque"  

![](https://firebasestorage.googleapis.com/v0/b/fullstack-extraordinary.appspot.com/o/TheCodeChallenge%2FJaqueMate-2.png?alt=media&token=2e466d89-85b6-4062-bebf-2eec4cab4ba6)

## Tests

### Test 1  

- **Parametros**: (kingWhite="A1", rookBlack= "A5", bishopBlack="D4", knightBlack="D2" )
- **Resultado esperado**: "jaque mate"
---
### Test 2  

- **Parametros**: (kingWhite="D1", rookBlack= "H2", bishopBlack="E3", knightBlack="C3" )
- **Resultado esperado**: "jaque"
---




