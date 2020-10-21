import React from "react"

const cheeseburgerImage = <img src={"https://d1bjorv296jxfn.cloudfront.net/s3fs-public/SRG_EasyBake_Cheeseburger_95215_copy.jpg"} />

function ShowCheeseburger () {
    return (
        <div class="cheeseburgerImage">
            {cheeseburgerImage}
        </div>
    )
}

export default ShowCheeseburger