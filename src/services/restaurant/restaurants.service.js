import {mocks} from './mock'
import camelize from 'camelize'


export const restaurantsRequest = (location ="37.7749295,-122.4194155") => {
// console.log(mocks[location])
return new Promise((resolve, reject) => {
    const mock = mocks[location]
        if(!mock) {
            reject("Not Found")
        } 
        resolve(mock)
})
}
export const restaurantsTransform = ({results =[]}) => {
    const mappedResults = results.map((restaurant) => {
        return {
            ...restaurant,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
            
        }
    });
    return camelize(mappedResults)

    
    // const newResult = camelize(results.length)
  
}   

restaurantsRequest ()
.then(restaurantsTransform)
.then((transformedResponse => {
    console.log(transformedResponse)
}))

.catch((error) => {
    console.log(error)
})