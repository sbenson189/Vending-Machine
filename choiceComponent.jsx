import React from 'react'
import { Route, NavLink} from "react-router-dom"
import './choiceComponent.css'
import ShowPizza from './pizzaComponent'
import ShowSoda from './sodaComponent'
import ShowBurrito from './burritoComponent'
import ShowCheeseburger from './cheeseburgerComponent'

function Choices () {
    return (
        <div className="Choices-list">
            <h1>Choose An Option</h1>
            <ul>
                <li><NavLink to="/pizza">Pizza</NavLink></li>
                <li><NavLink to="/soda">Soda</NavLink></li>
                <li><NavLink to="/cheeseburger">Cheeseburger</NavLink></li>
                <li><NavLink to="/burrito">Burrito</NavLink></li>
            </ul>
            <div className="showImages">
                <Route exact path="/pizza">
                    <ShowPizza />
                </Route>
                <Route exact path="/soda">
                    <ShowSoda />
                </Route>
                <Route exact path="/burrito">
                    <ShowBurrito />
                </Route>
                <Route exact path="/cheeseburger">
                    <ShowCheeseburger />
                </Route>
            </div>
        </div>
        
    )
}

export default Choices