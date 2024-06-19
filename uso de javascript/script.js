// Función para invertir una cadena
function reverseString() {
    const input = document.getElementById('string-input').value;
    const reversed = input.split('').reverse().join('');
    document.getElementById('reverse-string-result').textContent = reversed;
}

// Función para determinar si un número es primo
function checkPrime() {
    const num = parseInt(document.getElementById('prime-input').value);
    if (isNaN(num)) {
        document.getElementById('prime-number-result').textContent = 'Ingrese un número válido';
        return;
    }

    if (num <= 1) {
        document.getElementById('prime-number-result').textContent = 'No es primo';
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        document.getElementById('prime-number-result').textContent = 'Es primo';
    } else {
        document.getElementById('prime-number-result').textContent = 'No es primo';
    }
}

// Función para eliminar duplicados de un arreglo
function removeDuplicates() {
    const input = document.getElementById('array-input').value;
    const arr = input.split(',').map(item => item.trim());
    const uniqueArr = [...new Set(arr)];
    document.getElementById('remove-duplicates-result').textContent = uniqueArr.join(', ');
}

// Función para calcular el factorial de un número
function calculateFactorial() {
    const num = parseInt(document.getElementById('factorial-input').value);
    if (isNaN(num) || num < 0) {
        document.getElementById('factorial-result').textContent = 'Ingrese un número válido';
        return;
    }

    let factorial = 1;
    for (let i = 2; i <= num; i++) {
        factorial *= i;
    }

    document.getElementById('factorial-result').textContent = factorial;
}

// Función para contar el número de vocales en una cadena
function countVowels() {
    const input = document.getElementById('vowels-input').value;
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of input) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    document.getElementById('count-vowels-result').textContent = count;
}

// Función para sumar todos los números de un arreglo
function sumArray() {
    const input = document.getElementById('sum-array-input').value;
    const arr = input.split(',').map(item => parseFloat(item.trim()));
    const sum = arr.reduce((acc, num) => acc + num, 0);
    document.getElementById('sum-array-result').textContent = sum;
}

// Función para encontrar el número máximo en un arreglo
function findMax() {
    const input = document.getElementById('max-array-input').value;
    const arr = input.split(',').map(item => parseFloat(item.trim()));
    const max = Math.max(...arr);
    document.getElementById('max-array-result').textContent = max;
}
