function appendThings(things, element) {
    
    for (let thing of things) {
        const thingLi = document.createElement("li")
        thingLi.innerText = thing.content
        element.append(thingLi)
    }

}