import React from 'react'

const sodaImage = <img src={"https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2019/09/1140-diet-soda-study.jpg"} />

function ShowSoda () {
    return (
        <div class="sodaImage">
            {sodaImage}
        </div>
    )
}

export default ShowSoda