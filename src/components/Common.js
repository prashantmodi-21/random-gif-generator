import { useEffect, useState } from "react"
import axios from "axios"

const API_KEY = import.meta.env.VITE_MY_APP_API_KEY
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
const Common = (tag) =>{
    const [gif, setGif] = useState('')

    const fetchImg = async(tag)=>{
        const {data : {data}} = await axios.get(tag ?`${URL}&tag=${tag}` : URL)
        setGif(data.images.downsized_medium.url)
    }

    useEffect(()=>{
        fetchImg(tag)
    }, [tag])

    console.log(gif)
    return {gif, fetchImg}
}
export default Common