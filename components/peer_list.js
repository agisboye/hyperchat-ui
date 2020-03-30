const Component = require('hui')
const html = require('hui/html')
const { EventEmitter } = require('events')

let tick = 0
const e = new EventEmitter()

const dummyData = [
    { peerId: "aa20d3d741480211f60d1993b2ccc4c038a7a2132b7abf86a08ea0da6a94abad38028634f4f50b1ee66c611c902d5d2692312c4d6b3be7e23aafea7f38277a05", isOnline: true},
    { peerId: "bd629c12ab7a6bbaee59e1f7a50d8dcb033a3b80e4f77a20c0419b8073511b8e52fa421142eb11baf47ed9111c0f42ffb45b72252efe37671755e6320bf4b374", isOnline: false},
    { peerId: "aa20d3d741480211f60d1993b2ccc4c038a7a2132b7abf86a08ea0da6a94abad38028634f4f50b1ee66c611c902d5d2692312c4d6b3be7e23aafea7f38277a05", isOnline: false},
    { peerId: "aa20d3d741480211f60d1993b2ccc4c038a7a2132b7abf86a08ea0da6a94abad38028634f4f50b1ee66c611c902d5d2692312c4d6b3be7e23aafea7f38277a05", isOnline: true},
    { peerId: "bd629c12ab7a6bbaee59e1f7a50d8dcb033a3b80e4f77a20c0419b8073511b8e52fa421142eb11baf47ed9111c0f42ffb45b72252efe37671755e6320bf4b374", isOnline: false},
    { peerId: "aa20d3d741480211f60d1993b2ccc4c038a7a2132b7abf86a08ea0da6a94abad38028634f4f50b1ee66c611c902d5d2692312c4d6b3be7e23aafea7f38277a05", isOnline: false},
    { peerId: "aa20d3d741480211f60d1993b2ccc4c038a7a2132b7abf86a08ea0da6a94abad38028634f4f50b1ee66c611c902d5d2692312c4d6b3be7e23aafea7f38277a05", isOnline: true},
    { peerId: "bd629c12ab7a6bbaee59e1f7a50d8dcb033a3b80e4f77a20c0419b8073511b8e52fa421142eb11baf47ed9111c0f42ffb45b72252efe37671755e6320bf4b374", isOnline: false},
    { peerId: "aa20d3d741480211f60d1993b2ccc4c038a7a2132b7abf86a08ea0da6a94abad38028634f4f50b1ee66c611c902d5d2692312c4d6b3be7e23aafea7f38277a05", isOnline: false},
    { peerId: "aa20d3d741480211f60d1993b2ccc4c038a7a2132b7abf86a08ea0da6a94abad38028634f4f50b1ee66c611c902d5d2692312c4d6b3be7e23aafea7f38277a05", isOnline: true},
    { peerId: "bd629c12ab7a6bbaee59e1f7a50d8dcb033a3b80e4f77a20c0419b8073511b8e52fa421142eb11baf47ed9111c0f42ffb45b72252efe37671755e6320bf4b374", isOnline: false},
    { peerId: "aa20d3d741480211f60d1993b2ccc4c038a7a2132b7abf86a08ea0da6a94abad38028634f4f50b1ee66c611c902d5d2692312c4d6b3be7e23aafea7f38277a05", isOnline: false},
]

class PeerList extends Component {

    createElement() {
        console.log("Create element")
        // return document.createElement('div')
        let ul = document.createElement("ul")
        ul.className = "peer-list"

        for (let entry of dummyData) {
            let li = html`
                <li>
                    <span class="indicator ${entry.isOnline ? 'online' : 'offline'}"></span>
                    <span class="peer-id">${entry.peerId}</span>
                </li>
                `
            
            ul.appendChild(li)
        }

        return ul
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

module.exports = PeerList