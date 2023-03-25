fs = require('fs')
var request = require("request-promise")

document.getElementById('cancel').addEventListener('click', ()=>{
    fs.readFile("Pages/dashboard.html",(err, data)=>{
        document.getElementById("get-page").innerHTML = data

        var imported = document.createElement("script")
        imported.src = "js/dashboard.js"
        document.head.appendChild(imported)
   })
   
})

document.getElementById('save').addEventListener("click", ()=>{
    var get_product_code = document.getElementById("product-code").value
    var get_product_name = document.getElementById("product-name").value
    var get_product_weight = document.getElementById("product-weight").value

    var options = {
        method: 'POST',
        uri : 'http://127.0.0.1:5000/newproduct',
        form : {
            productcode : get_product_code,
            productname : get_product_name,
            productweight : get_product_weight
        }
    }

    
    request(options).then(function(data){
        if(data == 'success'){
            fs.readFile("Pages/dashboard.html",(err, data)=>{
                document.getElementById("get-page").innerHTML = data
        
                var imported = document.createElement("script")
                imported.src = "js/dashboard.js"
                document.head.appendChild(imported)
        })}
            
    }).catch(function (err){
        console.log(err)
    })










})

