 


function Profile ({name,bio,src}){
    return <div className="border-2 border-black m-3 p-5 w-[450px] h-[630px]">
        <div>
       <img className=" w-[400px] h-[400px] rounded-xl" src={src}></img>
       <h1 className="text-3xl font-bold mt-2">{name}</h1>
        </div>
        
        <div className="flex gap-3 mt-2">
        <div className="bg-blue-500 w-[110px] h-[31px] ">
            <h1 className="text-white text-center">Html</h1>
            
        </div>
        <div className="bg-blue-500 w-[110px] h-[31px] ">
            <h1 className="text-white text-center">CSS</h1>
            
        </div>
        <div className="bg-blue-500 w-[110px] h-[31px] ">
            <h1 className="text-white text-center">REACT</h1>
            
        </div>

        </div>
        <div>
            <p>{bio}</p>
            <button className="w-[300px] h-[51px] rounded-xl bg-yellow-500 ml-[10%] mt-3"> Read more</button>
        </div>
      
    </div>
}

export default Profile 