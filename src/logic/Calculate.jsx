export function calculate(valor, button) {

    if (button === 'C') {
        return {
            valor: '',
        }
    }
    else if (button === '=') {

        try {
            if (valor.indexOf('e') === 0 && valor.indexOf('^') === 1) {
                var arr = valor.split('^')
                return {
                    valor: Math.pow(Math.E, arr[1])
                }
            }
            else if (valor.indexOf('^') !== -1) {
                var arr1 = valor.split('^')
                return {
                    valor: Math.pow(arr1[0], arr1[1])
                }
            }
            else {
                return {
                    valor: (eval(valor) || '') + ''
                }
            }
        } catch (e) {
            return {
                valor: 'error'
            }
        }
    }
    else if (button === 'del') {
        return {
            valor: valor.slice(0, -1)
        }
    }
    else if (button === "+/-") {
        if (valor) {
            return { valor: (-1 * parseFloat(valor)).toString() };
        }
        return {};
    }
    else if (button === '%') {
        return {
            valor: eval(eval(valor.substring(0, valor.length))) / '100'
        }
    }
    else if (button === 'customDivide') {

        return {
            valor: valor * 1 + '/'
        }
    }

    else if (button === 'sqrt') {
        return {
            valor: Math.sqrt(valor)
        }
    }
    else if (button === 'e') {
        return {
            valor: Math.exp(1)
        }
    }
    else if (button === 'ePow') {
        return {
            valor: 'e^'
        }
    }
    else if (button === 'power') {
        return {
            valor: valor + '^'
        }
    }
    else if (button === 'abs') {
        return {
            valor: Math.abs(valor)
        }
    }
    else if (button === 'square') {
        return {
            valor: Math.pow(valor, 2)
        }
    }
    else if (button === 'factorial') {
        return {
            valor: factorial(valor)
        }

    }
    else if (button === 'sin') {
        return {
            valor: Math.sin(valor * Math.PI / 180)
        }
    }
    else if (button === 'tan') {
        return {
            valor: Math.tan(valor * Math.PI / 180)
        }
    }
    else if (button === 'cos') {
        return {
            valor: Math.cos(valor * Math.PI / 180)
        }
    }
    else if (button === 'ln') {
        return {
            valor: Math.log(valor)
        }
    }
    else if (button === 'log') {
        return {
            valor: Math.log10(valor)
        }
    }
    else if (button === 'pi') {
        return {
            valor: Math.PI
        }
    }

    else {
        return {
            valor: valor + button

        }
    }
}

export function factorial(num) {
    if (num === 0) { return 1; }
    else { return num * factorial(num - 1); }
}