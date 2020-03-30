const Component = require('hui')
const html = require('hui/html')
const { EventEmitter } = require('events')
const { clipboard } = require('electron')

class MyIdentity extends Component {

    constructor(id) {
        super()
        this.id = id
    }

    createElement() {
        return html`
            <div class="my-identity">
                <div class="me">My ID:</div>
                <span>${this.id}</span>
            </div>
        `
    }

    onload() {
        this.element.addEventListener("click", this.handleClick.bind(this))
    }

    onunload() {
        // this.element.removeEventListener("click", this.handleClick.bind(this))
    }

    render() {

    }

    handleClick(event) {
        console.log("My ID copied to clipboard")
        clipboard.writeText(this.id)
    }

}

module.exports = MyIdentity