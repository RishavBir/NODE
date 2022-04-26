
let axios = require("axios")

let getSortedCities = async function (req, res) {
    try {
         
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray= []
        
        for (i = 0; i<cities.length; i++){

            let obj = { city:cities[i]}
            let resp = await axios.get (`https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=9e6ed1ab741e24715c868aee9ef2c4b1`)
            console.log(resp.data.main.temp)

            obj.temp = resp.data.main.temp
            cityObjArray.push(obj)
        }

        let sorted = cityObjArray.sort( function(a,b) { return a.temp - b.temp})     // ascending order

        console.log (sorted)
        res.status(200).send({ status: true, data: sorted})
    }

    catch (error){
        console.log(error)
        res.status(500).send({ status: false, msg: "connection failed"})
    }
    }



    module.exports.getSortedCities = getSortedCities