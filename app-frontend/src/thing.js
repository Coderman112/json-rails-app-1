function appendThings(things, element) {
    const ul = document.createElement("ul")
    element.append(ul)
    
    for (let thing of things) {
        const thingLi = document.createElement("li")
        thingLi.innerText = thing.content
        ul.append(thingLi)
    }

}