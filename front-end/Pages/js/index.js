fs = require('fs')

fs.readFile("Pages/dashboard.html",(err, data)=>{
    document.getElementById("get-page").innerHTML = data

    var imported = document.createElement("script")
    imported.src = "js/dashboard.js"
    document.head.appendChild(imported)
})

document.getElementById("dashboard-menu-item").addEventListener('click', ()=>{
    fs.readFile("Pages/dashboard.html",(err, data)=>{
        document.getElementById("get-page").innerHTML = data
    
        var imported = document.createElement("script")
        imported.src = "js/dashboard.js"
        document.head.appendChild(imported)
    })
})

document.getElementById("dispatch-menu-item").addEventListener('click', ()=>{
    fs.readFile("Pages/dispatch.html",(err, data)=>{
        document.getElementById("get-page").innerHTML = data
    
        var imported = document.createElement("script")
        imported.src = "js/dispatch.js"
        document.head.appendChild(imported)
    })
})


document.getElementById("return-menu-item").addEventListener('click', ()=>{
    fs.readFile("Pages/return.html",(err, data)=>{
        document.getElementById("get-page").innerHTML = data
    
        var imported = document.createElement("script")
        imported.src = "js/return.js"
        document.head.appendChild(imported)
    })
})


document.getElementById("shipment-menu-item").addEventListener('click', ()=>{
    fs.readFile("Pages/shipment.html",(err, data)=>{
        document.getElementById("get-page").innerHTML = data
    
        var imported = document.createElement("script")
        imported.src = "js/shipment.js"
        document.head.appendChild(imported)
    })
})

