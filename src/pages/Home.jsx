import './Home.css'
import city1 from "../images/4161889baa128348ec811bcd6dec35e8.jpg"
import chess from "../images/chess.jpg"
import trees from "../images/trees.jpeg"
import me2 from "../images/me2.jpg"
import bio from "../images/bio.png"
import lala from "../images/lala.png"

export default function Home(){
return(
<div id ="everything">
    <div id="welcome">
    <h1>HELLO :) </h1>
    <p> Welcome to Lesley's poetry website! </p> 
    </div>

    <img src={me2} alt="" />

{/*books2*/}
<img src={bio} alt= "bio" className="transparent-background" />



    {/* <div id ="cityPics"> 
        <img src = {chess} id = "chess" /> 
        <img src={city1} id="city1" />
        <img src={trees} id = "trees"></img> 
    </div> 
*/}
</div>
);
}