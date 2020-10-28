import React, {useState} from 'react';
import './Piston.css'
const Piston = ({onPush}) => {

    const [pushed, setPushed] = useState(0);

    function handleClick()
    {
        setPushed(1);

        onPush();
    }

    return(
        <div className="piston">
            <div className="stick1 animate" onAnimationEnd={()=>setPushed(0)} pushed={pushed}></div>
            <div className="stick2 animate" onAnimationEnd={()=>setPushed(0)} pushed={pushed}></div>
            <button className="box" onClick={handleClick}>
                <div className="stamp-balloon"></div>
                <div className="stamp-triangle"></div>
            </button>
        </div>
    );
}

export default Piston;