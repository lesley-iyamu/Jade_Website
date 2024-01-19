import './Home.css'
import './AboutUs.css'
import city1 from "../images/4161889baa128348ec811bcd6dec35e8.jpg"
import chess from "../images/chess.jpg"
import trees from "../images/trees.jpeg"
import lala from "../images/lala.png"

<img src={lala} alt= "lala" className="transparent-background" />

export default function About(){
return(
<div id ="everything">
   <div id="welcome">
    <h1>ABOUT US!</h1>
    <h5 id ="abouttext">
    My name is Lesley and I enjoy writing Poetry. I started this website when I was 13 and have worked on it ever since. I love writing because it allows me to express myself in a way speaking can't. I also enjoy watching thriller movies.
</h5>
    </div>

{/* 
    <div id ="cityPics"> 
        <img src = {chess} id = "chess" /> 
        <img src={city1} id="city1" />
        <img src={trees} id = "trees"></img> 
    </div> */}
</div>
)
}