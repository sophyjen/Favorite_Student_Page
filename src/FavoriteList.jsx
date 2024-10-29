import { useContext } from "react"
import { StudentContext } from "./StudentContextProvider"

function FavoriteList()
{ 
    const {setTempArr} = useContext(StudentContext)
    const {tempArr} = useContext(StudentContext)
    
    console.log("fav",tempArr)
    let count = 0
    

    function removestudent(removeid)
    {
        var list = tempArr.filter(function(item){
            if (item.id === removeid)
            {
                return  false
            }
            else
            {
                return true
            }
        })
        setTempArr(list)       
    }


    return(
        
            <div className="p-16 flex flex-col">
            {
                
                tempArr.map(function(item)
                {  
                   count = count +1
                    // if(item.addfavorite === true)
                    // {
                        return(
                        <div className="flex flex-row gap-10 w-96 justify-between">
                            <h1>{count}{". "}{item.name}</h1>
                            <br />
                            <br />
                            <button className="bg-red-500 border rounded-md text-white w-40 h-7" onClick={()=>removestudent(item.id)}>Remove Favorite</button>
                        </div>) 
                        
                    // }  
                              
                 })
            }
            </div>
    )
}

export default FavoriteList