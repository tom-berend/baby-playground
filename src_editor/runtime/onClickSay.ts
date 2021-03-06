/////////////////////////////////////////////////////////////////////////////////////
////////////////////// speech support ///////////////////////////////////////////////

export class OnClickSay {
    synth = window.speechSynthesis
    synthRunning = false // don't want two instances
    synthCancelled = false // if cancelled then don't restart
    voices: any

    constructor(){
        this.loadVoicesWhenAvailable()

    }

    // we need to load the voices before we can use them
    loadVoicesWhenAvailable() {
        this.voices = this.synth.getVoices()
        if (this.voices.length !== 0) {
            // console.log('voices already loaded')
            // console.log('voices', voices)
        } else {
            // console.log('loading voices')
            setTimeout(() => {
                this.loadVoicesWhenAvailable()
            }, 10)
        }
    }

    onClickSay(utterance: string) {
        console.log('arrived in onClickSay', utterance)
        if (this.voices === undefined) {
            alert('Speech not ready yet, still loading voices.')
            return
        }
        // if (this.synthRunning) {     // someone clicked, likelywants to STOP the playback
        //     this.synthCancelled = true
        //     return
        // }
        this.synthCancelled = false
        this.speakResponse(utterance)
        //
        // if (synth.speaking) { /* stop narration */
        //      /* for safari */
        //   synthRunning = false
        //   synth.cancel()
        // }
        //
        // if (!synthRunning) {
        //   synthRunning = true
        //   let utterance = new SpeechSynthesisUtterance(document.getElementById(id).innerHTML)
        //   console.log(utterance)
        //   utterance.voice = synth.getVoices()[3]
        //   utterance.voiceURI = 'native';
        //
        //   utterance.onend = function () {
        //     synthRunning = false
        //   }
        //   synth.speak(utterance)
        // }
    }

    // problem with longer speech chunks, here's a workaround
    // https://stackoverflow.com/questions/21947730/chrome-speech-synthesis-with-longer-texts

    sayit() {
        

        if (!this.synthRunning) {
            this.synthCancelled = true
            speechSynthesis.cancel() // if it errors, this clears out the error.
        }
        let msg = new SpeechSynthesisUtterance()

        // 1:  US english
        // 2:  UK english male
        // 3:  UK english female

        msg.voice = this.synth.getVoices()[1] // Note: some voices don't support altering params
        msg.lang = 'en-US'
        msg.volume = 1 // 0 to 1
        msg.rate = 1.0 // 0.1 to 1.0
        msg.pitch = 1 // 0 to 2
        msg.onstart = (event) => {
            this.synthRunning = true
            // console.log(`'Speech Starts ${event}`)
        }
        msg.onend = (event) => {
            this.synthRunning = false
            // console.log(`Speech Ends ${event}`)
        }
        msg.onerror = (event) => {
            this.synthRunning = false
            // console.assert(false, `Errored ${event}`)
        }
        msg.onpause = (event) => {
            this.synthRunning = false
            // console.assert(false, `paused ${event}`)
        }
        msg.onboundary = (event) => {
            // console.assert(false, `onboundary ${event}`)
        }
        return msg
    }

    speakResponse(text: string) {
        let wasRunning = this.synthRunning
        speechSynthesis.cancel() // if it errors, this clears out the error.
        // not running now

        if (!wasRunning) {
            this.synthRunning = true // try to prevent a second speaker from starting
            let sentences = text.split('.')
            for (let i = 0; i < sentences.length; i++) {
                let toSay = this.sayit()
                toSay.text = sentences[i]
                speechSynthesis.speak(toSay)
            }
            this.synthRunning = false
        }
    }

}
