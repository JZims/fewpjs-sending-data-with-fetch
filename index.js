
document.body.setAttribute("id", "rando")
let elementMake = document.getElementById("rando")
let contactField = document.createElement("ul")
        contactField.classList.add("item")
let errorDiv = document.createElement("div")
    errorDiv.setAttribute("id","error-message")


function submitData(userName, userEmail){
    return fetch("http://localhost:3000/users", { 
        method: "POST", 
        headers: {
            "Content-Type": "application/json", 
            Accept: "application/json"
        }, 
        body: JSON.stringify({
            name: userName,
            email: userEmail,
           
        })
})
        .then(response =>  response.json())
        
        .then(function(JSONData){ 
             //grabbing each key in a {key[user]}
            //console.log(JSONData)
            //debugger;
            addToContactList(JSONData)
            
        })
        .catch(error => {
            alert(`${error.message} has been caught!`)
            caughtThis(error)
        })
            
        

function caughtThis(errorMsg){
document.body.append(errorMsg.message)
}
    



function addToContactList(data){
    //console.log(data)
    //debugger;
     
        document.body.append(`Name: ${data.name}, Email: ${data.email},  ID: ${data.id}`)
        
        


}}

