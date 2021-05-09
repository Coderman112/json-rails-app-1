function fetchLists(){
    fetch("http://localhost:3000/lists")
    .then(resp => resp.json())
    .then(lists => {
        appendLists(lists)
    })
}



function appendLists(){
    const listsDiv = document.getElementById('lists')
    for (let list of lists) {
        console.log(list)
    }
}

