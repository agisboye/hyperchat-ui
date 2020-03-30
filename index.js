const Hyperchat = require("hyperchat-poc/hyperchat")
const MyIdentity = require("./components/my_identity")
const PeerList = require("./components/peer_list")
const InputBar = require("./components/input_bar")

const client = new Hyperchat()
const myIdentity = new MyIdentity(client.me());
const peerList = new PeerList();
const inputBar = new InputBar();

(function() {
    client.start()
    window.document.getElementById("left-column").appendChild(myIdentity.element)
    window.document.getElementById("left-column").appendChild(peerList.element)
    window.document.getElementById("input-container").appendChild(inputBar.element)
})();
