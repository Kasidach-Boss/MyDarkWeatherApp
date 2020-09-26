
export default async function getCurrentWeather(locationCoords){
    const axios = require('axios')
    const lat = locationCoords.latitude
    const log = locationCoords.longitude
    const API_KEY = 'c807d8bb34db966494715ea3e2f233c0'

    var result =[]

    await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}`)
    .then((response)=>{
        const data = response.data
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
}