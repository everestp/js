

const  promiseOne = new Promise(function(resolve ,reject){
    // Do an aysnc task
    //DB calls ,cryptography ,networkcall

    setTimeout(function(){
        console.log("Async task is complete")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consume")
})

//same work can be done

 new Promise(function(resolve ,reject){
    setTimeout(function(){
        console.log("PriomiseTwo Asyc task complete")
        resolve()
    },1000)
 }).then(function(){
    console.log("Async two resolve")
 })











const promiseThree = new Promise(function(resolve ,result){
    setTimeout(function(){
        resolve({usename:"Chai", email:"chai@example.com"})

    },1000)
})


promiseThree.then(function(user){
    console.log("Async three resolve")
console.log(user)
})




const promiseFour = new  Promise(function(resolve ,reject){
    setTimeout(function (){
       let error = true
       if(!error){
        resolve({username:"everest",password:"123"})
       }
       else {
        reject("ERROR :Something went wrong")
       }
    },1000)
})


 const username = promiseFour
 .then((user)=>{
console.log(user)
return user.username
})
.then((username)=>{
    console.log("THis is the username form .then chaing",username)
})
.catch((err)=>{
    console.log(err)
}).finally(function(){
    console.log("This is done alway execture")
})



//some  more interesting things

const promiseFive = new Promise(function(resolve ,reject){
setTimeout(function (){
       let error = true
       if(!error){
        resolve({username:"js",password:"js124"})
       }
       else {
        reject("ERROR :JS  went wrong")
       }
    },1000)
}) 


async function consumePromiseFive(){

    try {
        const response =  await promiseFive
        console.log(response)
        
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


async function  getAllUsers() {


    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    // console.log(data)
    } catch (error) {
        console.log(error)
    }
    
    
}
// what i wrote i create own promise but  fetch  it self  return the promise so don"t do this
//  new Promise(  function(resolve ,reject){
//         const response =  fetch('https://jsonplaceholder.typicode.com/users')
// const data = response.json()
//          resolve(data)
//     }).then((data)=>{
//         console.log(data)
//     }).catch((error)=>{
//   console.log("Eror while fetching")

//     }).finally(()=>{
//    console.log(" Fetching task is complete")
//     })


// getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log("This is the data",data)
})
.catch((err)=>{
    console.log("This is the error fetching the data",err)
})
.finally(()=>{
    console.log("Close the connnection")
})

 // fetch using async await


 async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error while fetching:", error);
    } finally {
        console.log("Fetching task is complete");
    }
}

fetchData();
