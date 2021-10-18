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
const restaurantsTransform = (result) => {
    const newResult = camelize(result)
    return newResult
}
restaurantsRequest ()
.then(restaurantsTransform)
.then((transformedResponse => {
    console.log(transformedResponse)
}))

.catch((error) => {
    console.log(error)
})