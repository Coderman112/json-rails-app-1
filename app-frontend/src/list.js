function fetchLists(){
    fetch("http://localhost:3000/lists")
    .then(resp => resp.json())
    // .then(theseLists=> {appendLists(theseLists)})
    .then(appendLists)
}



function appendLists(){
    const listsDiv = document.getElementById('lists')
    for (let list of lists) {
        const li = document.createElement("li")
        li.innerText = list.name
        listsDiv.appendChild(li)
        appendThings(list.things, li)
    }
}

