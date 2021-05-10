class Thing {

    static allThings = []

    constructor({id, content, listId}) {
        this.id = id
        this.content = content
        this.listId = listId
        Thing.allThings.push(this)
    }


    appendThing(ul) {
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

    deleteThing(thingLi) {
        fetch(`http://localhost:3000/things/${this.id}`, {
            method: "DELETE"
        }).then(jsonToJS)
        .then(m => {
            thingLi.remove()
            Thing.allThings = Thing.allThings.filter(thing => thing.id !== this.id)
        })
    }

function appendThingForm() {
    const lists = document.getElementById('lists')
    const thingForm = `
        <form id="thingForm">
            <label>Thing Content:</label>
            <input id="thingContent"/>
            <input type="submit" value="Add Thing"/>
        </form>
    `
    lists.innerHTML += thingForm 
    document.getElementById('thingForm').addEventListener('submit', addThing)
}

    static addThing(e) {
        e.preventDefault()
}
}