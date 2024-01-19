import './Home.css'
import './Poems.css'
import city1 from "../images/4161889baa128348ec811bcd6dec35e8.jpg"
import chess from "../images/chess.jpg"
import trees from "../images/trees.jpeg"

export default function Poems(){
return(
<div id ="everything">
    <div id="poemswelcome">
    <h1>POEMS :) </h1>
    </div>


    <div id ="cityPics"> 
        <img src = {chess} id = "chess" /> 
        <img src={city1} id="city1" />
        {/* <img src={trees} id = "trees"></img>  */}
    </div>
</div>
)
}