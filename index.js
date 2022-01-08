let myLeads=[]
let inputEl=document.getElementById("input-el")
let inputBtn=document.getElementById("input-btn")
let deleteBtn=document.getElementById("delete-btn")
let ulEl=document.getElementById("ul-el")
let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
let tabBtn=document.getElementById("tab-btn")
if (leadsFromLocalStorage)
{
myLeads=leadsFromLocalStorage
render(myLeads)  
}

function render(leads){
let listItems=""

for(let i=0;i<leads.length;i++)
{
    listItems+= 
    `
    <li>

<a target ='_blank' href='${leads[i]}'>${leads[i]}</a></li>
    `
}
ulEl.innerHTML=listItems
}

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

