import React from 'react'

const pizzaImage = <img src={"https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dc23cd051d2249a5903d25faf8eeee4c/BFV36537_CC2017_2IngredintDough4Ways-FB.jpg"} />

function ShowPizza () {
    return (
        <div class="pizzaImage">
            {pizzaImage}
        </div>
    )
}

export default ShowPizza