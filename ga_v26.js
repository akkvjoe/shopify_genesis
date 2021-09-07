// get ip address need to complete
// get html tags
max_event_length = 2000

var ip_addr = "undefined" ;
var browser = "undefined" ;
var window_dim = "undefined" ;
var mouse_x = -1 ;
var mouse_y = -1 ;
var doc_height = -1;
var doc_width = -1;
var body = document.body;
var html = document.documentElement;
var html_id = 0;

event_list = [] ;

function Initialize(){
  getInitVariables();
  WaitForIP();
}

function WaitForIP(){
  send_http_data({
    url: "https://api.ipify.org?format=json",
    fn : function(data){
      ip_addr = JSON.parse(data)["ip"];
      console.log(data);
      sendInitVariables();
      sendallHTMLtags()
    }
  });
}

function getInitVariables(){
  
  device = window.navigator.userAgent;
  session_id = find_timestamp() + ":" + getRandomInt(1000000000000);
  doc_height = Math.max( body.scrollHeight, body.offsetHeight, body.clientHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  doc_width = Math.max( body.scrollHeight, body.offsetHeight, body.clientHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  window_dim = {
    client_width : window.innerWidth,
    client_height : window.innerHeight,
    scroll_y: window.pageYOffset,
    scroll_x: window.pageXOffset, 
    doc_height : doc_height,
    doc_width : doc_width,
  }
  
}

function sendInitVariables(){
  send_http_data({
    url: "https://genesis-ai-test.herokuapp.com/new_session/",
    data: {
      ip_addr: ip_addr,
      device: device,
      browser: browser,
      session_id : session_id,
      window_dim : window_dim,
    },
  });
}

function sendallHTMLtags(){
  html_id += 1;
  
  var initElement = document.getElementsByTagName("html")[0];
  var json = mapDOM(initElement, false);
  json["id"] = html_id
  
  send_http_data({
    url: "https://genesis-ai-test.herokuapp.com/html_data/",
    data: {
      ip_addr: ip_addr,
      session_id : session_id,
      html_data : json,
    }
  });
  
}


// --------------------------------------------------------------------------------



function findDetails(element){
  var rect = element.getBoundingClientRect();
  details_dict = {
//     "id" : element.id,
//     "lang" : element.lang,
//     "tag_name" : element.tagName,
//     "name" : element.title,
    "top" : rect.top + window.pageYOffset,
    "right" : rect.right + window.pageXOffset,
    "left" : rect.left + window.pageXOffset,
    "bottom" : rect.bottom + window.pageYOffset,
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
      mouse_rel_x : p.clientX,
      mouse_rel_y : p.clientY,      
    }
  );
  check_and_send_data() ;
}

function ScrollTrigger(p) {
  element = p.target || p.srcElement;
  event_list.push(
    {
      timestamp: find_timestamp(),
      event_type : "Scroll",
      element : element.nodeName,
      scroll_y: window.pageYOffset,
      scroll_x: window.pageXOffset,   
    }
  );
  check_and_send_data() ;
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
  );
  check_and_send_data() ;
}

function ClickTrigger(p) {
  element = p.target || p.srcElement;
  event_list.push(
    {
      timestamp: find_timestamp(),
      event_type : "Click",
      element : element.nodeName,
      mouse_x: p.pageX,
      mouse_y: p.pageY,
      mouse_rel_x : p.clientX,
      mouse_rel_y : p.clientY,  
    }
  )
  check_and_send_data() ;
}

function ResizeTrigger(p) {
  var temp_doc_height = Math.max( body.scrollHeight, body.offsetHeight, body.clientHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  var temp_doc_width = Math.max( body.scrollHeight, body.offsetHeight, body.clientHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  
  if(temp_doc_height != doc_height){
    console.log("Height CHanged- Weird");
    doc_height = temp_doc_height;
    sendallHTMLtags();
  }
  else if(temp_doc_width != doc_width){
    console.log("Width CHanged- Weird");
    doc_width = temp_doc_width;
    sendallHTMLtags();
  }
  
  event_list.push(
    {
      timestamp: find_timestamp(),
      event_type : "Resize",
      client_width: window.innerWidth,
      client_height: window.innerHeight, 
      doc_height : doc_height,
      doc_width : doc_width,
    }
  )
  check_and_send_data() ;
}

function check_and_send_data(){
  if(event_list.length > max_event_length){
    send_event_list = event_list.slice();
    event_list = []  ;
    send_http_data({
      url: "https://genesis-ai-test.herokuapp.com/mouse_event/",
      data: {
        ip_addr: ip_addr,
        session_id : session_id,
        html_id : html_id,
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
      object["dim"] = findDetails(element);
      object["attributes"] = {};
      object["content"] = [];
      var text_nodes = [];
      var nodeList = element.childNodes;
      if (nodeList != null) {
          if (nodeList.length) {
              for (var i = 0; i < nodeList.length; i++) {
                  if (nodeList[i].nodeType == 3) {
                      text_nodes.push(nodeList[i].nodeValue);
                      // object["content"].push(nodeList[i].nodeValue);
                  } else {
                      object["content"].push({});
                      treeHTML(nodeList[i], object["content"][object["content"].length -1]);
                  }
              }
          }
      }
      if (text_nodes.length > 0){
        object["attributes"]["text_data"] = text_nodes;
        // console.log(text_nodes);
      }
      if (element.attributes != null) {
          if (element.attributes.length) {
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






console.log("Thanks for using this site...");

Initialize();

addEventListener("mousemove", MouseMoveTrigger, false);
addEventListener("keydown", KeyBoardDownTrigger, false);
addEventListener("click", ClickTrigger, false);
addEventListener("scroll", ScrollTrigger, false);
addEventListener("resize", ResizeTrigger, false);
