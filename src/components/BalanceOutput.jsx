const BalanceOutput = (props) => {
    return ( 
        <div>
            <h2>Kontostand</h2>
            <h3>{props.balance}€</h3>
            <button className="loan-button" style={{display: props.currentbalance ? "none" : "block"}}>Kredit anfragen</button>
        </div>
        
     );
}
 
export default BalanceOutput;