function appendThings(things, element) {
    const ul = document.createElement("ul")
    element.append(ul)
    
    for (let thing of things) {
        const thingLi = document.createElement("li")
        const thingDelete = document.createElement("button")
        todoDelete.innerText = "Delete"
        thingLi.innerText = thing.content
        thingDelete.addEventListener('click', deleteThing)
        thingLi.append(thingDelete)
        ul.append(thingLi)
    }

}
