// Todo:
// Init Variables: ip_addr, device_id, browser?
// Send HTML data : html objects with coordinates
// Add events : add events to list (upto 2000)
// send event_id list
// 


if(typeof $ === 'undefined' ){
  var jquey_script = document.createElement('script');
  jquey_script.type = 'text/javascript';
  jquey_script.src = 'http://code.jquery.com/jquery-1.7.1.min.js';
  document.body.appendChild(jquey_script); 
}

function getIPFromAmazon() {
  fetch("https://checkip.amazonaws.com/").then(res => res.text()).then(data => console.log(data))
}


var ip_addr = "undefined" ;
var browser = "undefined" ;
var mouse_x = -1 ;
var mouse_y = -1 ;

function getInitVariables(){
  
  if(typeof $ !== 'undefined'){
    $.getJSON("https://api.ipify.org?format=json", function (data) {
      // Setting text of element P with id gfg
      ip_addr = data.ip;
    });
  }
  device = window.navigator.userAgent;
  browser = detectBrowser();
 
}

function setSessionID(){
  session_id = ip_addr + ":" + find_timestamp() + ":" + getRandomInt(1000000);
}

function sendInitVariables(){
  send_http_data({
    url: "https://genesis-ai-test.herokuapp.com/data_post_test/",
    data: {
      ip_addr: ip_addr,
      device: device,
      browser: browser,
      session_id : session_id,
    },
  });
}

// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
function tellPos(p) {
  // console.log("Position X : " + p.pageX + "<br />Position Y : " + p.pageY);
  send_http_data({
    url: "https://genesis-ai-test.herokuapp.com/data_post_test/",
    data: {
      timestamp: find_timestamp(),
      session_id : session_id,
      mouse_x: p.pageX,
      mouse_y: p.pageY,
      mouse_button : p.button,
      mouse_region : p.region,
      mouse_rel_x : p.clientX,
      mouse_rel_y : p.clientY,      
    },
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


function detectBrowser() {
  if (
    (navigator.userAgent.indexOf("Opera") ||
      navigator.userAgent.indexOf("OPR")) != -1
  ) {
    return "Opera";
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    return "Chrome";
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    return "Safari";
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    return "Firefox";
  } else if (
    navigator.userAgent.indexOf("MSIE") != -1 ||
    !!document.documentMode == true
  ) {
    return "IE"; //crap
  } else {
    return "Unknown";
  }
}

function logging(log_msg, timestamp) {
  timestamp = typeof timestamp !== "undefined" ? timestamp : "";
  // if (_7.debug)
  //   console.log(
  //     "MF" + (_7.includeDebugTime ? " - " + timestamp : "") + ": " + log_msg
  //   );
  console.log("MF" + timestamp + ": " + log_msg);
}

function find_timestamp() {
  return +new Date();
}

function send_http_data(payload_cfg) {
  // if (!payload_cfg || !payload_cfg.url) return;
  if (window.XMLHttpRequest) {
    try {
      var xml_http_obj = new window.XMLHttpRequest();
      xml_http_obj.onreadystatechange = function () {
        if (xml_http_obj.readyState !== 4 || !xml_http_obj.status) return;
        if (payload_cfg.fn) payload_cfg.fn(xml_http_obj.response);
      };
      console.log(payload_cfg.url);
      xml_http_obj.open(
        payload_cfg.data ? "POST" : "GET",
        payload_cfg.url,
        true
      );
      xml_http_obj.setRequestHeader("Content-type", "application/json");
      // if (payload_cfg._733) xml_http_obj.withCredentials = true;
      xml_http_obj.send(JSON.stringify(payload_cfg.data));
    } catch (err_obj) {
      logging(
        "Error in transmitCrossDomain (XMLHttpRequest): " + err_obj.message,
        find_timestamp()
      );
    }
  }
}

function getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
    //compatibility for firefox and chrome
    var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var pc = new myPeerConnection({
        iceServers: []
    }),
    noop = function() {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
    key;

    function iterateIP(ip) {
        if (!localIPs[ip]) onNewIP(ip);
        localIPs[ip] = true;
    }

     //create a bogus data channel
    pc.createDataChannel("");

    // create offer and set local description
    pc.createOffer().then(function(sdp) {
        sdp.sdp.split('\n').forEach(function(line) {
            if (line.indexOf('candidate') < 0) return;
            line.match(ipRegex).forEach(iterateIP);
        });
        
        pc.setLocalDescription(sdp, noop, noop);
    }).catch(function(reason) {
       console.log("Error IP: ", reason)
        // An error occurred, so handle the failure to connect
    });

    //listen for candidate events
    pc.onicecandidate = function(ice) {
        if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
        ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
    };
}

// Usage

getUserIP(function(ip){
    console.log("Got IP! :" + ip);
});


ip_addr = getIPFromAmazon()
console.log("Thanks for using this site...");
getInitVariables();
setSessionID();
sendInitVariables();
addEventListener("mousemove", tellPos, false);

// send_http_data({
//   url: "https://genesis-ai-test.herokuapp.com//data_post_test/",
//   data: {
//     email: "mine",
//     pswd: "nomine",
//   },
// });

