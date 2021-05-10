listForm.addEventListener('submit', List.postList)
List.fetchLists()

function jsonToJS(resp){
    return resp.json()
}