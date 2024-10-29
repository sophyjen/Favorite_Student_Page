import { useContext } from "react"
import { StudentContext } from "./StudentContextProvider"

function StudentList()
{
    const {studentArr} = useContext(StudentContext)
    const {setTempArr} = useContext(StudentContext)    

    function addstudent(addid, event)
    {
       var list = studentArr.filter(function(item){
            if (item.id === addid || item.addfavorite === true)
            {
                item.addfavorite=true
                return  true
                
            }
            else
            {
                return false
            }
        })
        setTempArr(list)   
    }


    return(
        <div className="p-16 flex flex-col">
            {
                studentArr.map(function(item, index){
                return(
                <div className="flex flex-row gap-10 w-96 justify-between">
                    <h1>{index+1}{". "}{item.name}</h1>
                    <br />
                    <br />
                    <button className="bg-black border rounded-md text-white w-40 h-7" onClick={(event)=>addstudent(item.id, event)}>Add to Favorite</button>
                </div>) 
                    
                })
                   
            }
        
        </div>
    )
}

export default StudentList