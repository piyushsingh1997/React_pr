import React, {useState} from "react"


export default function Arrays(){

     const [dreams, setDreams] = useState(["Get a nice job", "Permisso", "Travel", "iphone", "Happy"]);

     const added = () =>{
        const texts = document.getElementById("idn").value;
        document.getElementById("idn").value = "";

         setDreams([...dreams, texts]);

    }
    return(
        <div>
            <h2>Dreams to Accomplish</h2>
            <ul>
               {   dreams.map((dream, index) => 
                   <li key={index}>{dream}</li>
                   )
               }
            </ul>
            <input type="text" id="idn" placeholder="Enter your dreams" />
            <button onClick={added}>Add</button>
        </div>
    )

}

