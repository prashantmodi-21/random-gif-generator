import { useEffect, useState } from "react"
import axios from "axios"

const API_KEY = 'iNWaLFAuA5J98M4I4g5SmaPKxx0XVise'
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

    return {gif, fetchImg}
}

export default Common