var contextMenus = {}

contextMenus.createTranslationMenu = chrome.contextMenus.create(
    {
        "title" : "Translate"
    },

    function (){
        if(chrome.runtime.lastError){
            console.error(chrome.runtime.lastError.message)
        }
    }
)

chrome.contextMenus.onClicked.addListener(contextMenuHandler)


function contextMenuHandler(info, tab){
    if(info.menuItemId === contextMenus.createTranslationMenu){
        chrome.tabs.executeScript({
            file: 'js/content.js'
        })
    }
}

