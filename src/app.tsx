import { useState } from "react"
import { toast } from "sonner"

export function App() {
  const [firstValue, setFirstValue] = useState<number>(1)
  const [secondValue, setSecondValue] = useState<number>(1)
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState<number>()

  function handleCalculate() {
    switch (operator) {
      case '+':
        setResult(addition(firstValue, secondValue))
        break;
      case '-':
        setResult(subtraction(firstValue, secondValue))
        break;
      case 'x':
        setResult(multiplication(firstValue, secondValue))
        break;
      case '÷':
        setResult(division(firstValue, secondValue))
        break;
      default:
        toast.error('Erro desconhecido!')
        break;
    }
  }

  function addition(a: number, b: number) {
    return a + b
  }

  function subtraction(a: number, b: number) {
    return a - b
  }

  function multiplication(a: number, b: number) {
    return a * b
  }

  function division(a: number, b: number) {
    if (b === 0) {
      toast.error('Não existe divisão com divisor = 0.')
      return
    }

    return a / b
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="font-bold text-2xl text-center">Calculadora Simples:</h1>
      <div className="flex flex-row space-x-2 text-slate-950">
        <input
          className="w-16 p-2 rounded-md"
          type="number"
          name="first-value"
          value={firstValue}
          onChange={(e) => setFirstValue(Number(e.target.value))}
        />
        <select
          className="p-2 rounded-md w-16 text-center"
          name="operator"
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="x">x</option>
          <option value="÷">÷</option>
        </select>
        <input
          className="w-16 p-2 rounded-md"
          type="number"
          name="second-value"
          value={secondValue}
          onChange={(e) => setSecondValue(Number(e.target.value))}
        />
        <button
          className="bg-white text-slate-950 p-2 rounded-md w-16 hover:bg-white/90"
          onClick={handleCalculate}
        >
          =
        </button>
      </div>
      {
        result ? (
          <p>{firstValue} {operator} {secondValue} = {result % 1 !== 0 ? result.toFixed(2) : result}</p>
        ) : (
          <p className="font-normal text-sm text-center">Realize alguma operação matemática acima...</p>
        )
      }
    </div>
  )
}