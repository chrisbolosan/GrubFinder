import {mocks} from './mock'


export const restaurantsRequest = (location ="37.7749295,-122.4dfs194155") => {
// console.log(mocks[location])
return new Promise((resolve, reject) => {
    const mock = mocks[location]
        if(!mock) {
            reject("Not Found")
        } 
        resolve(mock)
})
}
restaurantsRequest ().then((result) => {
    console.log('results $$$',result)
})
.catch((error) => {
    console.log(error)
})