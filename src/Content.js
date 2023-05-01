import { useState, useEffect, useReducer } from "react";


const Content = () => {
    const [name, setName] = useState('Jacob')
    const [age, setAge] = useState('26')
    const [location, setLocation] = useState('FL')
    const [header, setHeader] = useState('Im confused')

    const [drink, setDrink] = useState('water')
    const [drinkInfo, setDrinkInfo] = useState('Water is pretty refreshing')

    const onClickGatorade = () => {
        setDrink('gatorade')
    }

    const onClickSoda = () => {
        setDrink('soda')
    }

    const onClickProteinShake = () => {
        setDrink('protein shake')
    }

    const onClick = () => {
        setName('no name')
        setAge('almost 27')
        setLocation('Orlando, FL')
    }

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
    }

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
        </div>
    )
}

export default Content;