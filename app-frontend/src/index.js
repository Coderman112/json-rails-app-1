listForm.addEventListener('submit', postList)
List.fetchLists()

function jsonToJS(resp){
    return resp.json()
}