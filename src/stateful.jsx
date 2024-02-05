import React, {useState} from "react"

function Status(){

    const [name, setName] = useState("Piyush")
    const [age, setAge] = useState(26)
    
    const nameChange = () => {
        setName("Ishika");
    }

    const ageChange = () => {
        setAge(age + 5);
    }
    return(
    <div>
        <p>Name: {name}</p>
        <button onClick={nameChange}>Change the Name</button>

        
        <p>Age: {age} </p>
        <button onClick={ageChange}>Increment Age</button>
    </div>
    );

}

export default Status