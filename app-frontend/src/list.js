const listForm = document.getElementById('listForm')


class List {

    constructor(list) {
        this.name = list.name
        this.id = list.id
        things.forEach(thing => new thing(thing))
        List.allLists.push(this)
        // this.bindThisValues()
    }

    get things() {
        return Thing.allThings.filter(thing => thing.listId === this.id)
    }

    // bindThisValues() {
    //     this.renderListShowPage = this.renderListShowPage.bind(this)
    // }

    appendThings(element) {
        const ul = document.createElement('ul')
        ul.id = `list-${this.id}`
        element.append(ul)

        for (let thing of this.things) {
            thing.appendThing(ul)
        }
    }

    appendListIndexPage() {
        const listsDiv = document.getElementById('lists')
        const li = document.createElement("li")
        const div = document.createElement("div")
        const span = document.createElement("span")
        span.id = "list-span"
        li.innerText = this.name
        li.id = `list-name-${this.id}`
        li.addEventListener('click', this.renderListShowPage.bind(this))
        span.append(li)
        listsDiv.append(div)
        div.append(span)
        this.appendThings(div)
    }

    appendList() {
        const listsDiv = document.getElementById('lists')
        const li = document.createElement("li")
        li.innerText = this.name 
        li.addEventListener('click', this.renderListShowPage.bind(this))
        // li.addEventListener('click', this.renderListShowPage)
        listsDiv.append(li)
        appendThings(this.things, li)
    }

    renderListShowPage() {
        const listContainer = document.getElementById('listContainer')
        const backBtn = document.createElement('button')
        listContainer.children[1].innerHTML = ""
        listContainer.children[0].remove()
        backBtn.addEventListener('click', returnToHome)
        backBtn.innerText = "Home"
        listContainer.append(backBtn)
        this.prependListShowPage()
        this.appendThingForm()
        this.addEditListener()
    }

    prependListShowPage() {
        const lists = document.getElementById('lists')
        const p = document.getElementById(`list-name-${this.id}`) || document.createElement("p")
        const div = document.getElementById("list-div-show") || document.createElement("div")
        const span = document.getElementById("list-span") || document.createElement("span")
        const ul = document.getElementById('ul')
        ul.id = `list-${this.id}`
        span.id = "list-span"
        p.innerText = this.name
        p.id = `list-name-${this.id}`
        div.id = "list-div-show"
        span.append(p)
        div.append(span)
        div.append(ul)
        lists.prepend(div)
    }

    addEditListener() {
        const p = document.getElementById(`list-name-${this.id}`)
        p.addEventListener('click', () => this.openEditForm(p))
    }

    openEditForm(li){
        const listsDiv = document.getElementById(`lists`)
        const span = document.getElementById("list-span")
        const editForm = `
        <form id="listForm">
            <label>List Name:</label>
            <input type="text" value="${this.name}">
            <input type="submit" value="Edit List">
        </form>
        `
        span.innerHTML = editForm
        document.getElementById('listForm').addEventListener('submit', this.addEditListener.bind(this))
    }

    static fetchLists(){
        fetch("http://localhost:3000/lists")
        .then(jsonToJS)
        // .then(theseLists=> {appendLists(theseLists)})
        .then(this.appendLists)
    }
    
    
    
    static appendLists(lists){
        for (let list of lists) {
            let newList = new List(list)
            newList.appendList()
        }
    }

    editList(e) {
        e.preventDefault()
        const name = e.target.children[1].value
        const listObj = {
            list: {
                name
            }
        }
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(listObj)
        }
    
    
        fetch(`http://localhost:3000/lists/${this.id}`, options)
        .then(jsonToJS)
        .then(listObj => {
            let list = List.allLists.find(list => list.id === listObj.id)
            list.name = listObj.name
            e.target.remove()
            list.prependListShowPage()
        })
    }

    appendThingForm() {
        const lists = document.getElementById('lists')
        const thingForm = `
            <form id="thingForm">
                <label>Thing Content:</label>
                <input id="thingContent"/>
                <input type="hidden" id="${this.id}"/>
                <input type="submit" value="Add Thing"/>
            </form>
        `
        lists.innerHTML += thingForm
        document.getElementById('thingForm').addEventListener('submit', Thing.addThing.bing(this))
    }

}




// function fetchLists(){
//     fetch("http://localhost:3000/lists")
//     .then(jsonToJS)
//     // .then(theseLists=> {appendLists(theseLists)})
//     .then(appendLists)
// }



// function appendLists(lists){
//     for (let list of lists) {
//         let newList = new List(list)
//         newList.appendList()
//     }
// }

// function appendList(list) {
//     const listsDiv = document.getElementById('lists')
//     const li = document.createElement("li")
//     li.innerText = list.name
//     li.addEventListener('click', (e) => renderListShowPage(list))
//     listsDiv.appendChild(li)
//     appendThings.call(list.things, li)
// }

// function renderListShowPage(list) {
//     const listContainer = document.getElementById('listContainer')
//     listContainer.children[1].innerHTML = ""
//     listContainer.children[0].remove()

//     appendList(list)
//     appendThingForm()
// }

// function postList(e) {
//     e.preventDefault()
//     e.target.reset
//     const userInput = e.target.children[1].value
//     const body = {
//         list: {
//             name: userInput
//         }
//     }
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//         },
//         body: JSON.stringify(body)
//     }

//     e.target.reset()

//     fetch("http://localhost:3000/lists", options)
//     .then(jsonToJS)
//     .then(list => {
//         let newList = new List(list)
//         newList.appendList(list)
//     })
// }