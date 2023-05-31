# preEntrega3js
3rd project for coderhouse javascript course
https://gonzalosdesign.github.io/preEntrega3js/

Hello everyone, today I'm sharing another project that I created while studying JavaScript at Coderhouse.

It's a simple savings simulator that allowed me to put into practice a lot of what I learned in the course:

The user enters the amount and description of each deposit, and this data is collected using DOM and event listeners. A function uses the input data to create objects with an ID and date, and adds them to an array where all the deposits are accumulated. The total sum of the amounts of all the deposits determines the total savings. The objects and the total savings are displayed on the screen by creating HTML tags using DOM.

In addition, there is a form to filter deposits within a range defined by the user. The logic is similar to the function that displays the deposits on the screen, but it applies the filter method to return only the deposits whose amount is within the defined range.

The data is converted to JSON and stored in local storage, from where it is retrieved when the application is reloaded, the device is restarted, etc. Finally, it also allows resetting the local storage to start a simulation from scratch.

Extremely basic Bootstrap 5 and CSS were used, but the main focus was on the JavaScript ;D

https://gonzalosdesign.github.io/preEntrega3js/
#bootstrap,
#javascript,
#JSON,
#html
