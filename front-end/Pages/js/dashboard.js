fs = require('fs')
fs = require('fs')
var request = require("request-promise")

document.getElementById('add-product').addEventListener('click', ()=>{
    fs.readFile("Pages/forms/addproduct.html",(err, data)=>{
        document.getElementById("get-form-page").innerHTML = data
   
        var imported = document.createElement("script")
        imported.src = "js/addproduct.js"
        document.head.appendChild(imported)
   })
   
})


var options = {
    uri : 'http://127.0.0.1:5000/getproducts',
}


request(options).then(function(data){
    var obj = JSON.parse(data)
    var length = Object.keys(obj).length
    document.getElementById('count-products').innerText = length

        
}).catch(function (err){
    console.log(err)
})

