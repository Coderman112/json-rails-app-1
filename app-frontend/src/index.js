let listForm = document.getElementById('listForm')

listForm.addEventListener('submit', List.postList)
List.fetchLists()

function jsonToJS(resp){
    return resp.json()
}

function returnToHome(){
    document.getElementById('listContainer').innerHTML = `
        <form id="listForm">
            <label>List Name:</label>
            <input type="text">
            <input type="submit" value="Submit List">
        </form>
        <div id="lists"></div>
        `
    listForm = document.getElementById('listForm')
    listForm.addEventListener('submit', List.postList)
    List.appendListsOnReturnHome()
}