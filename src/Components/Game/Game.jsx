import React, {useState} from 'react'
import Balon from './Balon/Balon'
import Piston from './Piston/Piston'
import {BiWallet} from 'react-icons/bi'
import {GrCheckmark} from 'react-icons/gr'
import './Game.css'

const baloonsCount = 5;
const baloonsHP = [4,3,1,2,5];

const afterPumpMoney = 2;

const Game = () => {

    const [baloon, setBaloon] = useState(1);
    const [pump, setPump] = useState(0);
    const [money, setMoney] = useState(0);
    const [moneyToTake, setMoneyToTake] = useState(0);
    
    function onPush()
    {
        if(baloonsHP[baloon-1] > 0){
            setMoneyToTake(moneyToTake+afterPumpMoney);
            setPump(pump+1);
        }
        else{
            setMoneyToTake(0);
            setBaloon(baloon+1);
            setPump(0);
        }

        baloonsHP[baloon-1]--;
    }
    function onTake()
    {
        setMoney(moneyToTake );
        setMoneyToTake(0);
        setBaloon(baloon+1);
        setPump(0);
    }

    if(baloon <= baloonsCount){
        return(
        <div className="container">
            <div className="hose"></div>
            <Balon pump={pump}/>
            <Piston onPush={onPush}/>
            <div className="wallet">
                <BiWallet/>
                {money}$
            </div>
            <div className="to-take">+{moneyToTake}$</div>
            <div className="baloon-counter">{baloon}/{baloonsCount}</div>
            <button className="take-btn" onClick={()=>onTake()}>
                <GrCheckmark className="take-icon"/>
            </button>
        </div>
        );
    }
    else{
        return(
            <div className="end-text">
                <BiWallet/>
                {money}$
            </div>
        );
    }

    
}

export default Game;