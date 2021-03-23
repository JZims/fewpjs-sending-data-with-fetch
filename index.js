




function submitData(userName, userEmail){
    const configObject = { 
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            Accept: "application/json"
            }, 
        body: JSON.stringify({
            "name": userName,
            "email": userEmail
    })
        };
        
return fetch("http://localhost:3000/users", configObject)
.then(response => {return response.json()
})
.then(object => console.log(object))

}
