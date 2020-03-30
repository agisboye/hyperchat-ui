const Component = require('hui')
const html = require('hui/html')
const { EventEmitter } = require('events')

class InputBar extends Component {

    createElement() {
        return html`
            <div class="input-bar">
                <input type=text placeholder="Hypermessage" />
            </div>
        `
    }

    onload() {
        console.log('component loaded')
    }

    onunload() {
        console.log('got unloaded')
    }

    render() {

    }

}

module.exports = InputBar