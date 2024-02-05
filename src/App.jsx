import './components/card/card.jsx'
import Card from './components/card/card.jsx'
import Student from './components/student/student.jsx'
import Button  from './Button.jsx'
import Status from './stateful.jsx'
import Counter from './counter.jsx'
import Color from './color.jsx'
import Arrays from './arrays.jsx'

function App() {
  return (

    <>
      <Card name = "Piyush" paragraph = "I am Piyush and I want to be rich"/>
      <Card name = "Nitesh" paragraph = "Nice, positive person"/>
      <Card name= "Souvik Charkraborty" paragraph ="Curious, observant, knowledgeable"/>
      <Student name = "Piyush" age = {26} Student = {false}/>
      <Button />
      <Status />
      <Counter />
      <Color />
      <Arrays />
    </>
  )
}

export default App
