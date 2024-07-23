import { useState } from "react"
function Light (){
      
    const [color,setColor] = useState
    (false)


    const handleonButton = () => {
        setColor(true)
    }

    const handleofButton = () => {
        setColor(false)
    }

  

    return <div className="text-center">
        <h1>THis is Light</h1>
        <div className="  mt-11">
            <div style={{backgroundColor: color === true ? "yellow" : ""}} className=" ml-[37%] w-[400px] h-[400px] border-2 border-black rounded-[50%]"></div>
            <button style={{backgroundColor: color === true? "red" : "green"}} onClick={handleofButton} className= "w-[151px] mt-4 h-[51px]  text-white border-blue-500 border-2 rounded-xl bg-blue-500 hover:bg-yellow-400  ">OFF</button>
            <button style={{backgroundColor: color === true? "green" : "red"}} onClick={handleonButton} className= "w-[151px] mt-4 ml-3 h-[51px] text-white border-blue-500 border-2 rounded-xl bg-blue-500  hover:bg-yellow-400"> ON</button>
        </div>
        
    </div>


}

export default Light