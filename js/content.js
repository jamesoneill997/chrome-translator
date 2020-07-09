function translate(text){
    textBody = `\"${text}\"`
    fetch("https://microsoft-translator-text.p.rapidapi.com/translate?profanityAction=NoAction&textType=plain&api-version=3.0", {
    	"method": "POST",
    	"headers": {
    		"x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
    		"x-rapidapi-key": "52df80241emsh656a6b3eb2ac34ap13e4ccjsn09d896deb0ab",
    		"content-type": "application/json",
    		"accept": "application/json"
    	},
    	"body": [
    		{
    			"Text": textBody
    		}
    	]
    })
    .then(response => {
    	console.log(response)
    })
    .catch(err => {
    	console.log(err)
    })
}
