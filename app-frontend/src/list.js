const listForm = document.getElementById('listForm')


function fetchLists(){
    fetch("http://localhost:3000/lists")
    .then(resp => resp.json())
    // .then(theseLists=> {appendLists(theseLists)})
    .then(appendLists)
}



function appendLists(lists){
    const listsDiv = document.getElementById('lists')
    for (let list of lists) {
        const li = document.createElement("li")
        li.innerText = list.name
        listsDiv.appendChild(li)
        appendThings.call(list.things, li)
    }
}

function postList(e) {
    e.preventDefault()
    const userInput = e.target.children[1].value
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify()
}
    fetch("http://localhost:3000/lists", options)
}