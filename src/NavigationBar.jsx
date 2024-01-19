import React, { useEffect} from 'react';
import './NavigationBar.css';

function NavagationBar() {
    useEffect(() => {
        const nameElement = document.getElementById('name');
        if (nameElement) {
            const text = nameElement.innerText;
            nameElement.innerText = '';

            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    nameElement.innerText += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100); // Adjust the speed of typing
                }
            };

            typeWriter();
        }
    }, []);

   
    return(
        <>
        <nav>
            <h1 id= "name">
                Lesley Iyamu
            </h1>
            <div>
                <ul id ="navbar">
                    <li><a href="#/Home">Home</a> </li>
                    <li><a href="#/AboutUs">About Us</a></li>
                    <li><a href="#/Poems">Poems</a></li>
                </ul>
                </div>
            </nav>
        </>
    );
}

export default NavagationBar