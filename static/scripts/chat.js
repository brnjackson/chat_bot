// Collapsible

var collapsible = document.getElementsByClassName('collapsible')

for(let i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener("click", function(){
        this.classList.toggle("active")

        var content = this.nextElementSibling;

        if(content.style.maxHeight){
            content.style.maxHeight = null
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    })

}

getTime = () => {
    let today = new Date();
    hours = today.getHours()
    minutes = today.getMinutes()

    if(hours < 10) {
        hours = "0" + hours
    }
    if(minutes < 10) {
        minutes = "0" + minutes
    }

    let time = hours + ':' + minutes
    return time
}

firstBotMessage = () => {
    let firstMsg = "How's it going?"

    document.getElementById("botStarterMsg").innerHTML = '<p class="botText"><span>' + firstMsg + '</span></p>'

    let time = getTime()

    $("#timestamp").append(time)
    document.getElementById("user_input").scrollIntoView(false)
}

firstBotMessage()

getHardResp = (userText) => {
    let botResp = getBotResp(userText)
    let botHtml = '<p class="botText"><span>' + botResp + '</span></p>'

    $("#chatbox").append(botHtml)

    document.getElementById("chat_bar_bottom").scrollIntoView(true)
}

getResp = () => {
    let userText = $("#textInput").val()

   if(userText == "") {
        userText = "You forgot to type a message!"
    }
    

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>'

    $("#textInput").val("")
    $("#chatbox").append(userHtml)
    document.getElementById("chat_bar_bottom").scrollIntoView(true)

    setTimeout(() => {
        getHardResp(userText)
    }, 1000)
}

btnSendText = (sampleText) => {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>'

    $("#textInput").val("")
    $("#chatbox").append(userHtml)
    document.getElementById("chat_bar_bottom").scrollIntoView(true)


}

sendBtn = () => {
    getResp()
}

heartBtn = () => {
    btnSendText("Heart clicked!")
}

$("#textInput").keypress(function(e) {
    if(e.which == 13) {
        getResp()
    }
})
