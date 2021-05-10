const listForm = document.getElementById('listForm')


class List {

    constructor(list) {
        this.name = list.name
        this.id = list.id
        this.things = list.things
    }

    appendList() {
        const listsDiv = document.getElementById('lists')
        const li = document.createElement("li")
        li.innerText = this.name
        let callBack = this.renderListShowPage
        li.addEventListener('click', callBack)
        listsDiv.append(li)
        appendThings(this.things, li)
    }

    renderListShowPage() {
        const listContainer = document.getElementById('listContainer')
        listContainer.children[1].innerHTML = ""
        listContainer.children[0].remove()
    
        this.appendList()
        appendThingForm()
    }

    static fetchLists(){
        fetch("http://localhost:3000/lists")
        .then(jsonToJS)
        // .then(theseLists=> {appendLists(theseLists)})
        .then(List.appendLists)
    }
    
    
    
    static appendLists(lists){
        for (let list of lists) {
            let newList = new List(list)
            newList.appendList()
        }
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

function renderListShowPage(list) {
    const listContainer = document.getElementById('listContainer')
    listContainer.children[1].innerHTML = ""
    listContainer.children[0].remove()

    appendList(list)
    appendThingForm()
}

function postList(e) {
    e.preventDefault()
    e.target.reset
    const userInput = e.target.children[1].value
    const body = {
        list: {
            name: userInput
        }
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(body)
    }

    e.target.reset()

    fetch("http://localhost:3000/lists", options)
    .then(jsonToJS)
    .then(list => {
        let newList = new List(list)
        newList.appendList(list)
    })
}