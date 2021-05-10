function appendThings(things, element) {
    const ul = document.createElement("ul")
    element.append(ul)
    
    for (let thing of things) {
        const thingLi = document.createElement("li")
        const thingDelete = document.createElement("button")
        thingDelete.innerText = "Delete"
        thingDelete.id = thing.id
        thingLi.innerText = thing.content
        thingDelete.addEventListener('click', function(e) {
            deleteThing(thing.id)
        }) 
        // thingDelete.addEventListener('click', deleteThing)
        thingLi.append(thingDelete)
        ul.append(thingLi)
    }

}

function deleteThing(thingId) {
    fetch(`http://localhost:3000/things/${thingId}`, {
        method: "DELETE"
    })
}