import React from "react"
import "./style.css"
import Alldata from "../Data.series/Alldata"
// import SendData from "./SendData"
const Props = () => {

  // const name = "kings of kotha"
  // const Rating = "14"
  // const summary = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, voluptatibus aspernatur ratione voluptates beatae totam cumque, adipisci consequuntur aut laborum deserunt. Consequatur quo quia quam quaerat, quidem, eligendi alias dolore inventore commodi fuga ea assumenda provident architecto reprehenderit vel cum aperiam praesentium. Consectetur, iste quam."
  return (
    <>
      {Alldata.map((ele) => {
        return (
          <>
            <span>{ele.id}</span>
            <img src={ele.image} alt="" />
            <p>{ele.Name}</p>
            <h1>{ele.category}</h1>
            <p>{ele.price}</p>
            <div>{ele.Description}</div>

                 

             < SendData key = {ele.id} ele={ele}/>  {/*this is props */}
             

          </>
        )
      })}
    </>
  )
}
export default Props;