

var strReceive = " worker";

function timdcount(){

    postMessage("Worker Send: " + strReceive);

    setTimeout("timedCount()",500);
}


timedCount();

self.onmessage = function( e ) {

    postMessage("Worker Send: " + e );
};


