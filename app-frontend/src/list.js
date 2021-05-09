function fetchLists(){
    fetch("http://localhost:3000/lists")
    .then(resp => resp.json())
    .then(lists => {
        console.log(lists)
    })
}

