import React from 'react'

const burritoImage = <img src={"https://www.onceuponachef.com/images/2018/03/Breakfast-Burritos.jpg"} />

function ShowBurrito () {
    return (
        <div class="burritoImage">
            {burritoImage}
        </div>
    )
}

export default ShowBurrito