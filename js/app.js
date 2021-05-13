// estado de aplicación
let counter = 0


// manipulación de la vista

// Cada vez que le damos al botón "Add Count", incrementamos en 1 el contador. 

/**
 * 1. Asociar un evento 'click' al botón Add Count
 * 2. Cada vez que se capture el evento 'click'; incrementamos en 1 la variable 'counter'
 *  2.5. Actualizar el elemento HTML que contiene el valor actual del contador
 * 3. Si el valor de la variable 'counter' es mayor de 0 estrictamente, la tenemos que colorear a verde
 */
let btnIncrement = document.querySelector('.nextBtn')
btnIncrement.addEventListener('click', () => {

    counter++

    let htmlCounter = document.querySelector('#counter')
    htmlCounter.textContent = counter

    updateColorCounter()
})

/**
 * 1. Asociar un evento 'click' al botón Lower Count
 * 2. Cada vez que se capture el evento 'click'; decrementamos en 1 la variable 'counter'
 * 2.5. Actualizar el elemento HTML que contiene el valor actual del contador
 * 3. Si el valor de la variable 'counter' es menor de 0 estrictamente, la tenemos que colorear a rojo
 */
let btnDecrement = document.querySelector('#btnDecrement')
btnDecrement.onclick = decrementCounter

function decrementCounter() {
    counter = counter - 1
    
    let htmlCounter = document.querySelector('#counter')
    htmlCounter.textContent = counter

    updateColorCounter()
}

function updateColorCounter() {
    let htmlCounter = document.querySelector('#counter')

    if (counter > 0) {
        htmlCounter.style.color = 'green'
    }

    else if (counter < 0) {
        htmlCounter.style.color = 'red'
    }

    else {
        htmlCounter.style.color = 'gray'
    }
}
