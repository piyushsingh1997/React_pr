import './Button.css'

function Button() {

     const handleClick = (name) => {
        console.log('Hi, ', name);
     }
    return (
        <div className="btn">
            <button onClick={() => handleClick("Piyush")}>Click Me Goat</button>  
        </div>

         // always use a arrow function when passing an argument
    );

}

export default Button