const playBtn = document.querySelector('#play-btn')
const pauseBtn = document.querySelector('#pause-btn')
const stopBtn = document.querySelector('#stop-btn')
const textInput = document.querySelector('#text')
const speedInput = document.querySelector('#speed')
let currentChar;
const utterance = new SpeechSynthesisUtterance()

playBtn.addEventListener('click', () => {
    playText(textInput.value)
})
pauseBtn.addEventListener('click', pauseText)
stopBtn.addEventListener('click', stopText)
speedInput.addEventListener('input', () => {
    stopText()
    playText(utterance.text.substring(currentChar))
})
const playText = (text) => {
    if(speechSynthesis.speaking) return
    if(speechSynthesis.paused && speechSynthesis.speaking) return speechSynthesis.resume()
    utterance.text = text
    utterance.rate = speedInput.value || 1
    utterance.addEventListener('end', () => {
        textInput.disabled = false
    })
    utterance.addEventListener('boundary', e => {
        currentChar = e.charIndex
    })
    textInput.disabled = true
    speechSynthesis.speak(utterance)
}

function pauseText() {
    if(speechSynthesis.speaking) speechSynthesis.pause()
}

function stopText() {
    speechSynthesis.resume()
    speechSynthesis.cancel()
    textInput.disabled = false
}
