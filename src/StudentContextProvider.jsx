import { createContext, useState } from "react"

const StudentContext = createContext()

function StudentContextProvider(data)
{ 
    const [studentArr, setStudentArr] = useState([
        {
            id:1,
            name:"Bharath",
            addfavorite:false
        },
        {
            id:2,
            name:"Praveen",
            addfavorite:false
        }, 
        {
            id:3,
            name:"Kumar",
            addfavorite:false
        }
    ])

    const [tempArr, setTempArr] = useState([])

    return(
        <>
            <StudentContext.Provider value={{studentArr, setStudentArr, tempArr, setTempArr}}>
                {data.children}
            </StudentContext.Provider>
        </>
    )
}

export default StudentContextProvider
export {StudentContext}