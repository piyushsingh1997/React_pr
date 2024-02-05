import profilePic from './../../assets/github.png'
import  './../../components/card/card.css'
function Card(props){

    return(
        <div className="card">
            <img src={profilePic} alt="" />
            <h1>{props.name}</h1>
            <p>{props.paragraph}</p>
            <hr />
        </div>
    )

}

export default Card