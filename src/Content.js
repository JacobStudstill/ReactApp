import { useState } from "react";
import { useEffect } from "react";

const Content = () => {
    const [name, setName] = useState('Jacob')
    const [age, setAge] = useState('26')
    const [location, setLocation] = useState('FL')

    const onClick= () => {
        setName('Jacob Studstill')
        setAge('almost 27')
        setLocation('Orlando, FL')
    }


    return (
        <div className="pageContent">
            <h2> Reviewing and Understanding React Hooks</h2>
            <p> Hi, my name is { name }. I am { age } years old and I reside in { location }. </p>
            <button onClick={onClick}>Click here to see the code using useState</button>

        </div>
    )
}

export default Content