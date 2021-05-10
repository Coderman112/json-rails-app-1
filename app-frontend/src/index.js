listForm.addEventListener('submit', postList)
fetchLists()

function jsonToJS(resp){
    return resp.json()
}