import Parts from './Parts.js'
import App from './index.js'
const Content = (props) =>{
    return (
        
        <div>
            <Parts part1={props.part1 } exercises1={props.exercises1}/>
            <Parts part2={props.part2 } exercises2={props.exercises2}/>
            <Parts part3={props.part3 } exercises3={props.exercises3}/>
        </div>


    )
}
export default Content