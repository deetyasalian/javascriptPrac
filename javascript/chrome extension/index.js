let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function () {
   myLeads.push(inputEl.value) //value can be entered by us
   inputEl.value = "" //Clears out the input field
   renderLeads()
})


function renderLeads() {
   let listItems = " "
   for (i = 0; i < myLeads.length; i++) {       //target='_blank' is used to open the link in new tab
       listItems += `
 <li>
   <a target='_blank' href='${myLeads[i]}'> 
   ${myLeads[i]}
   </a>
 </li>
   `
   }
   ulEl.innerHTML = listItems
}