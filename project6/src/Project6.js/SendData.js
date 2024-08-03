import React from "react";

const SendData = (props)=>{

    return(
        <div className="main">
        <h2>Web serise image : {props.ele.image}</h2>
        <h3>category ⭐⭐⭐⭐: {props.ele.category}</h3>
        <p>Photo :{props.ele.Photo}</p>
        <img src="https://variety.com/wp-content/uploads/2024/06/Mirzapur-3-poster.jpg?w=1000 " alt="mirzapur img" />
        <div className="img">
          {/* <img src="duggu.jpg.JPG" alt="duggu" /> */}
          <img src="https://i.ytimg.com/vi/dljEVygvwG8/maxresdefault.jpg" alt="" />
          <button>watch Now</button>
        </div>

      </div>
    )
}

export default SendData;