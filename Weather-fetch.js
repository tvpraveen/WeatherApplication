import axios from "axios";

const API_KEY="abc5c5b491da810e91a7b4cbf5d3dde6"
const URL="https://api.openweathermap.org/data/2.5/weather"

const Fetch=async(query)=>{
    const {data}=await axios.get(URL,{
        params:{
            q:query,
            units:"metric",
            APPID:API_KEY
        }
    })
    return data
}
export default Fetch;