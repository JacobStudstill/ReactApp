import { useState, useEffect, useReducer } from "react";
import photo from './photo/code.png'


const Content = () => {
    
    const [name, setName] = useState('Jacob')
    const [age, setAge] = useState('26')
    const [location, setLocation] = useState('FL')
    const [header, setHeader] = useState('Im confused')

    const [drink, setDrink] = useState('water')
    const [drinkInfo, setDrinkInfo] = useState('Water is pretty refreshing')

    // onclick with set the drink to a different kind of drink which will then be used to console log a response.
    const onClickGatorade = () => {
        setDrink('gatorade')
    }

    const onClickSoda = () => {
        setDrink('soda')
    }

    const onClickProteinShake = () => {
        setDrink('protein shake')
    }

    //This function uses useState to change the text upon button click.
    const onClick = () => {
        setName('Jacob Studstill')
        setAge('almost 27')
        setLocation('Orlando, FL')
    }

    //Switch case that will console log upon clicking the corresponding button. drink is defined as water by default
    switch (drink) {
        case 'gatorade': {
            console.log('Gatorade is good on a hot day')
            break
        }
        case 'soda': {
            console.log('Soda is good when you need something sweet')
            break
        }
        case 'protein shake': {
            console.log('Protein shakes are good if you need protein')
            break
        }
        default: console.log ('Your favorite drink must be water as well')
    }

    //This is used to change the header on load. Will console log old header before the header is changed to verify it changed on render.
    useEffect(() => {
        console.log(header)
        setHeader('Working with useState and useEffect')
    }, [header])

    return (
        <div className="pageContent">
            <h2> {header} </h2>
            <p> Hi, my name is {name}. I am {age} years old and I reside in {location}. </p>
            <button onClick={onClick}>Click here to see the code using useState</button>
            <p>My favorite drink is water, what is yours?</p>

            <button onClick={onClickGatorade}>Gatorade</button>
            <button onClick={onClickSoda}>Soda</button>
            <button onClick={onClickProteinShake}>Protein Shake</button>

            <p>Check console log for more info</p>
            <img src={photo} alt="Code" />
            <p></p>
            <a className="repo" href="https://github.com/JacobStudstill/ReactApp"> Github repo </a>
        </div>
    )
}

export default Content;