# preEntrega3js
3rd project for coderhouse javascript course
https://gonzalosdesign.github.io/preEntrega3js/

Hola red, hoy les comparto otro proyecto que hice cursando javascript en coderhouse.

Es un sencillo simulador de ahorros que me permitió poner en practica mucho de lo aprendido en el curso:

El usuario ingresa el importe y la descripción de cada deposito y estos datos se recogen mediante DOM y event listener. Una función se encarga de usar los datos de los inputs para crear objetos con id y fecha y agregarlos a un array donde se acumulan todos los depósitos. El total de la suma del importe de todos los depósitos determina el total ahorrado. Los objetos y el total ahorrado se presentan en pantalla creando etiquetas html mediante DOM.

En paralelo cuenta con un formulario para filtrar depósitos dentro de un rango definido por el usuario. La logica es similar a la de la función que muestra los depósitos en pantalla, pero aplica el método filter para retornar solo los depósitos cuyo importe este dentro del rango definido.

Los datos son convertidos a JSON y enviados al local storage, desde donde se recuperan cuando la aplicación se recarga, reinicia el equipo, etc.
Por ultimo también permite reiniciar el local storage para hacer una simulación desde cero.

Boostrap 5 y css extremadamente básicos, el presupuesto estuvo en el js ;D

https://gonzalosdesign.github.io/preEntrega3js/
#bootstrap,
#javascript,
#JSON,
#html
