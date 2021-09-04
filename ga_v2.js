// get ip address need to complete
// get html tags
max_event_length = 2000

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
  
  var initElement = document.getElementsByTagName("html")[0];
  var json = mapDOM(initElement, true);
  
  return {
    "session_id" : session_id,
    "html_data": json,
  }
  
//   var list_elems = document.body.getElementsByTagName("*");
//   var list_coords = []; // create an empty array

//   for (var i=0; i<list_elems.length; i++) {
//     var coords = findDetails(list_elems[i]);
//     list_coords.push(coords);
//   } 
  
}



function findDetails(element){
  var rect = element.getBoundingClientRect();
  details_dict = {
    "id" : element.id,
    "lang" : element.lang,
    "tag_name" : element.tagName,
    "name" : element.title,
    "top" : rect.top,
    "right" : rect.right,
    "left" : rect.left,
    "bottom" : rect.bottom,
  }
  return details_dict     
}
  


// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
function MouseMoveTrigger(p) {
  element = p.target || p.srcElement;
  event_list.push(
    {
      timestamp: find_timestamp(),
      event_type : "MouseMove",
      element : element.nodeName,
      mouse_x: p.pageX,
      mouse_y: p.pageY,
      mouse_button : p.button,
      mouse_region : p.region,
      mouse_rel_x : p.clientX,
      mouse_rel_y : p.clientY,      
    }
  )
  check_and_send_data(event_list) ;
}

function ScrollTrigger(p) {
  element = p.target || p.srcElement;
  event_list.push(
    {
      timestamp: find_timestamp(),
      event_type : "Scroll",
      element : element.nodeName,
      scroll_y: window.scrollY,
      scroll_x: window.scrollX,   
    }
  )
  check_and_send_data(event_list) ;
}

function KeyBoardDownTrigger(p) {
  element = p.target || p.srcElement;
  event_list.push(
    {
      timestamp: find_timestamp(),
      event_type : "KeyBoardDown",
      element : element.nodeName,
      char_code : p.code, 
      key : p.key, 
      is_repeat : p.repeat,   
    }
  )
  check_and_send_data(event_list) ;
}

function ClickTrigger(p) {
  element = p.target || p.srcElement;
  event_list.push(
    {
      timestamp: find_timestamp(),
      event_type : "Click",
      element : element.nodeName,     
    }
  )
  check_and_send_data(event_list) ;
}

function check_and_send_data(event_list){
  if(event_list.length > max_event_length){
    send_event_list = event_list.slice();
    event_list = []  ;
    send_http_data({
      url: "https://genesis-ai-test.herokuapp.com/mouse_event/",
      data: {
        session_id : session_id,
        event_list: send_event_list,
      }
    });
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
    
function mapDOM(element, json) {
  var treeObject = {};

  // If string convert to document Node
  if (typeof element === "string") {
      if (window.DOMParser) {
            parser = new DOMParser();
            docNode = parser.parseFromString(element,"text/xml");
      } else { // Microsoft strikes again
            docNode = new ActiveXObject("Microsoft.XMLDOM");
            docNode.async = false;
            docNode.loadXML(element); 
      } 
      element = docNode.firstChild;
  }

  //Recursively loop through DOM elements and assign properties to object
  function treeHTML(element, object) {
      object["type"] = element.nodeName;
      var nodeList = element.childNodes;
      if (nodeList != null) {
          if (nodeList.length) {
              object["content"] = [];
              for (var i = 0; i < nodeList.length; i++) {
                  if (nodeList[i].nodeType == 3) {
                      object["content"].push(nodeList[i].nodeValue);
                  } else {
                      object["content"].push({});
                      treeHTML(nodeList[i], object["content"][object["content"].length -1]);
                  }
              }
          }
      }
      if (element.attributes != null) {
          if (element.attributes.length) {
              object["attributes"] = {};
              for (var i = 0; i < element.attributes.length; i++) {
                  object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
              }
          }
      }
  }
  treeHTML(element, treeObject);

  return (json) ? JSON.stringify(treeObject) : treeObject;
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

event_list = []

console.log("Thanks for using this site...");
getInitVariables();
setSessionID();
sendInitVariables();
html_data = getallHTMLtags();
send_http_data({
  url: "https://genesis-ai-test.herokuapp.com/html_initialize/",
  data: html_data
});

addEventListener("mousemove", MouseMoveTrigger, false);
addEventListener("keydown", KeyBoardDownTrigger, false);
addEventListener("click", ClickTrigger, false);
addEventListener("scroll", ScrollTrigger, false);
