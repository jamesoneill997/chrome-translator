google.load("language", "1")

var contextMenuItem = {
    "id" : "translateText",
    "title" : "Translate",
    "contexts" : ["selection"]
}

chrome.contextMenus.create(contextMenuItem)

function isStr(val){
    return typeof val === 'string'
}


chrome.contextMenus.onClicked.addListener(function(click){
    if(click.menuItemid == "translateText" && click.selectionText){
        if(isStr(click.selectionText)){
            var text = google.language.translate(click.selectionText, "en", "fr",)
            alert(text)
        }
    }
})