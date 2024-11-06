const container=document.getElementById("container")
container.innerHTML="<button onclick='buy()'>Buy!</button>"

function buy(){
    container.innerHTML+="<p>THank you for buying</p>"
}