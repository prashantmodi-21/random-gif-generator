import { useState } from "react"
import Common from "./Common"
const Tag = () =>{
    const [tag, setTag] = useState('')
    const {gif, fetchImg} = Common()
    return (
    <div className="container">
        <h1>Random Tag Image</h1>
        <img src={gif} alt="Random Img" />
        <input type="text"  value={tag} onChange={(e)=>setTag(e.target.value)}/>
        <button onClick={()=>fetchImg(tag)}>Change</button>
    </div>
    )
}

export default Tag