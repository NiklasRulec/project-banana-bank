import { useState } from "react";
import { ReactDOM } from "react";

const BankInput = () => {

    const [balance, setBalance] = useState(0)
    const [inputValue, setInputValue] = useState("")
    const [transactions, setTransactions] = useState([])
    const [currentBalance, setCurrentBalance] = useState(true)

    const inputChange = (e) => { setInputValue(Number(e.target.value)) }

    function deposit(){
        event.preventDefault();
        if(inputValue == ""){
            alert("Eingabe machen")
        } else {
            setBalance((prev) => Number(prev + inputValue))
            setInputValue("")
            addTransaction("+", inputValue)
            loanOffer()
        }
    }

    function withdraw(){
        event.preventDefault();
        if(inputValue == ""){
            alert("Eingabe machen")
        } else {
            setBalance((prev) => Number(prev - inputValue))
            setInputValue("")
            addTransaction("-", inputValue)
            loanOffer()
        }
    }

    function addTransaction(einheit,input){
        setTransactions((prev) => [...prev, `${einheit}${input}€`]);
    }

    function loanOffer(){
        if(balance > 0){
            setCurrentBalance(true)
        } else if (balance <= 0){
            setCurrentBalance(false)
        }
    }

    return ( 
        <article className="bank-input">
            <div className="balance-output">
                <h2>Kontostand</h2>
                <h3>{balance}€</h3>
                <button className="loan-button" style={{display: currentBalance ? "none" : "block"}}>Kredit anfragen</button>
            </div>
            <div className="transactions">
                <h2>Transaktionen</h2>
                <div className="transactions-container">
                    <h3>{transactions}</h3>
                </div>
            </div>
            <form>
                <div className="number-input">
                    <input type="number" placeholder="€ Betrag eingeben" required
                    value={inputValue} onChange={inputChange}/>
                </div>
                <div className="buttons">
                    <button onClick={deposit}>Einzahlen</button>
                    <button onClick={withdraw}>Auszahlen</button>
                </div>
            </form>
        </article>
     )
}
 
export default BankInput;