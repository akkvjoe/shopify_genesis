// get ip address need to complete
// get html tags

if(typeof $ === 'undefined' ){
  var jquey_script = document.createElement('script');
  jquey_script.type = 'text/javascript';
  jquey_script.src = 'http://code.jquery.com/jquery-1.7.1.min.js';
  document.body.appendChild(jquey_script); 
}


var ip_addr = "undefined" ;
var browser = "undefined" ;
var mouse_x = -1 ;
var mouse_y = -1 ;

function getInitVariables(){
  ip_addr = window.ip_addr
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

function getallHTMLtags(){
  var list_elems = document.body.getElementsByTagName("*");
  var list_coords = []; // create an empty array

  for (var i=0; i<list_elems.length; i++) {
    var coords = findDetails(list_elems[i]);
    list_coords.push(coords);
  } 
  return {
    "session_id" : session_id,
    "html_data": list_coords,
  }
}



function findDetails(element){
  var rect = element.getBoundingClientRect();
  details_dict = {
    "id" : element.id,
    "lang" : element.lang,
    "name" : element.tagName,
    "top" : rect.top,
    "right" : rect.right,
    "left" : rect.left,
    "bottom" : rect.bottom,
  }
  return details_dict     
}
  


// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
function tellPos(p) {
  // console.log("Position X : " + p.pageX + "<br />Position Y : " + p.pageY);
  send_http_data({
    url: "https://genesis-ai-test.herokuapp.com/mouse_event/",
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


console.log("Thanks for using this site...");
getInitVariables();
setSessionID();
sendInitVariables();
html_data = getallHTMLtags();
send_http_data({
  url: "https://genesis-ai-test.herokuapp.com/html_initialize/",
  data: html_data
});
addEventListener("mousemove", tellPos, false);


