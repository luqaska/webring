var wrapper = document.getElementById("webring-wrapper");

var style = document.createElement('style');
style.innerHTML = `
.webring-anchor {
  font-size: 24px;
  color: rgba(132, 146, 166, 0.8);
  text-decoration: none;
  transition: color 0.5s;
}
.webring-anchor:hover {
  color: rgba(132, 146, 166, 1);
  text-decoration: none;
}
.webring-logo {
  background-image: url(https://assets.hackclub.com/icon-rounded.svg);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  display: inline-block;
  width: 36px;
  height: 36px;
  margin: 0 4px;
  vertical-align: middle;
}
`;
wrapper.appendChild(style);


let requestURL = "https://googol88.github.io/webring/public/members.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const webring = request.response;

  var siteUrl = document.location.href.toLowerCase();
  var siteIndex = 0;
  var previousIndex = 0;
  var nextIndex = 0;

  var previousBtn = document.getElementById("previousBtn");
  var nextBtn = document.getElementById("nextBtn");


  for (var i=0; i<webring.length; i++) {
    if (siteUrl ==  webring[i].url) {
      console.log("Same URL");
      siteIndex = i;
      break;
    }

    previousIndex = siteIndex-1;
    if (previousIndex == -1)
      previousIndex = webring.length-1;
    previousBtn.href = webring[previousIndex].url;

    nextIndex = siteIndex+1;
    if (nextIndex == webring.length)
      nextIndex = 0;
    nextBtn.href = webring[previousIndex].url;
  }
}
