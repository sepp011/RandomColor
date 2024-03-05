import './Box.css'
import { useState } from 'react'

export default function Box({colorList}){
    
    const randomColor = function() {
        const randomIndex = Math.floor(Math.random()*colorList.length)
        const theColor = colorList[randomIndex];
        return theColor;
    };
    const [startingColor, setColor] = useState(randomColor()); // randomColor runs everytime, however, it isn't something that is concerning as react knows to ignore it
                                                                // after the first time the component has run, 
                                                                // we can simply pass just the function name without () to stop it from runnig at every component rerun.
    function changeColor(){
        setColor(randomColor())
    }
    return(
        <div className="box" style={{backgroundColor: startingColor}} onClick={changeColor}>
        </div>
    )
}