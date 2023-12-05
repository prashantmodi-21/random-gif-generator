import Common from "./Common"

const Random = () =>{
    const {gif, fetchImg} = Common()
    return (
    <div className="container">
        <h1>Random Image</h1>
        <img src={gif} alt="Random Img" />
        <button onClick={()=>fetchImg()}>Change</button>
    </div>
)
}

export default Random