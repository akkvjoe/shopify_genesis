console.log("Thanks for using this site...");

// Creating function that will tell the position of cursor
// PageX and PageY will getting position values and show them in P
function tellPos(p) {
  // console.log("Position X : " + p.pageX + "<br />Position Y : " + p.pageY);
  send_http_data({
    url: "https://aed9-111-65-61-149.ngrok.io/data_post_test/",
    data: {
      ip_addr: ip_addr,
      browser_type: browser,
      mouse_x: p.pageX,
      mouse_y: p.pageY,
    },
  });
}

addEventListener("mousemove", tellPos, false);

send_http_data({
  url: "https://aed9-111-65-61-149.ngrok.io/data_post_test/",
  data: {
    email: "mine",
    pswd: "nomine",
  },
});

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

$.getJSON("https://api.ipify.org?format=json", function (data) {
  // Setting text of element P with id gfg
  ip_addr = data.ip;
});
browser = detectBrowser();

console.log("Data Sent Success...");

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

// function send_http_data(payload_cfg) {
//   s;
//   if (!payload_cfg || !payload_cfg.url) return;
//   _329();
//   if (_588() && window.XDomainRequest) {
//     try {
//       // payload_cfg.url = _737(_363(payload_cfg.url, "0"));
//       console.log(payload_cfg.url);

//       var xdr_obj = new window.XDomainRequest();
//       xdr_obj.open(payload_cfg.data ? "POST" : "GET", payload_cfg.url);
//       // xdr_obj.onload = function () {
//       //   if (payload_cfg._148) payload_cfg._148(_606(xdr_obj));
//       // };
//       // xdr_obj.onerror = function () {
//       //   if (payload_cfg._76) payload_cfg._76(_606(xdr_obj));
//       // };
//       xdr_obj.onprogress = function () {
//         logging("XDR progress:" + payload_cfg.url, find_timestamp());
//       };
//       xdr_obj.ontimeout = function () {
//         logging("XDR timeout:" + payload_cfg.url, find_timestamp());
//       };
//       xdr_obj.timeout = 20000;
//       _23._53(function () {
//         xdr_obj.send(payload_cfg.data);
//       }, 500);
//     } catch (err_obj) {
//       logging(
//         "Error in transmitCrossDomain (XDomainRequest): " + err_obj.message,
//         find_timestamp()
//       );
//       if (payload_cfg._76) payload_cfg._76({});
//     }
//   } else if (window.XMLHttpRequest) {
//     try {
//       var xml_http_obj = new window.XMLHttpRequest();
//       xml_http_obj.onreadystatechange = function () {
//         if (xml_http_obj.readyState !== 4 || !xml_http_obj.status) return;
//         if (_735(xml_http_obj.status)) {
//           if (payload_cfg._148) payload_cfg._148(_610(xml_http_obj));
//         } else {
//           if (payload_cfg._76) payload_cfg._76(_610(xml_http_obj));
//         }
//       };
//       if ((payload_cfg.data, payload_cfg._612)) {
//         payload_cfg.data = pako.gzip(payload_cfg.data);
//         payload_cfg.url = _363(payload_cfg.url, "1");
//       } else {
//         payload_cfg.url = _363(payload_cfg.url, "0");
//       }
//       console.log(payload_cfg.url);
//       payload_cfg.url = _hyper_all; // added this
//       xml_http_obj.open(payload_cfg.data ? "POST" : "GET", payload_cfg.url, true);
//       xml_http_obj.setRequestHeader("Content-type", "text/plain");
//       if (payload_cfg._733) xml_http_obj.withCredentials = true;
//       xml_http_obj.send(payload_cfg.data);
//     } catch (err_obj) {
//       logging(
//         "Error in transmitCrossDomain (XMLHttpRequest): " + err_obj.message,
//         find_timestamp()
//       );
//       if (payload_cfg._76) payload_cfg._76({});
//     }
//   }
// }
