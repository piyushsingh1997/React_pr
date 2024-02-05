import   './../../components/student/student.css'
import Proptypes from 'prop-types'
function Student(props) {

    return(
          <div className="student">
            <ol>
            <li><p>Name: {props.name}</p></li> 
            <li><p>Age: {props.age}</p></li> 
            <li><p>Student: {props.Student ? " He is a student" : "He is not a student"}</p></li>
            </ol>
          </div>
    )
}

Student.Proptypes = {
    name: Proptypes.string,
    age: Proptypes.number,
    Student: Proptypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    Student: false,

}
export default Student