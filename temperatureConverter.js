// C = (F - 32) × 5/9
// F = C × 9/5 + 32

function temperatureConversion(temperature) {
    const celsius = temperature.toUpperCase().includes('C')
    const fahrenheit = temperature.toUpperCase().includes('F')

    if(!celsius && !fahrenheit) {
        throw new Error('Grau não identificado')
    }
  
    let result = "";


    if (celsius) {
        result =  (Number(temperature.toUpperCase().replace('C', ''))  * 9/5 + 32 ) + 'F';
    }else {
        result =  (Number((temperature.toUpperCase().replace('F', ''))  - 32) * 5/9) + 'C';
    }

    console.log(result);
}

try {
    temperatureConversion("20C");
    temperatureConversion("50F");
    temperatureConversion("30Z");
} catch (error) {
    console.log(error.message)
}

