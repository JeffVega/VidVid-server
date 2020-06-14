const Peer = require('simple-peer');

let peer = new Peer({
    initiator:true,
    trickle:false
});

peer.on('signal',(data)=>{
    console.log(data)
})