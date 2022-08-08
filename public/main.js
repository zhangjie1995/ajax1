const loadCSS = document.querySelector(".loadCSS");
const loadJS = document.querySelector(".loadJS");
const loadHTML = document.querySelector(".loadHTML");
const loadXML = document.querySelector(".loadXML");
const loadJSON = document.querySelector(".loadJSON");
const body = document.querySelector("body");
let n = 1;

loadCSS.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open("get", "/style");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const style = document.createElement("style");
      style.textContent = request.response;
      body.append(style);
    }
  };
  request.send();
});

loadJS.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open("get", "/JS");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const js = document.createElement("script");
      js.textContent = request.response;
      body.append(js);
    }
  };
  request.send();
});

loadXML.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open("get", "/xml");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const xml = document.createElement("p");
      xml.textContent = request.responseXML
        .querySelector("warning")
        .textContent.trim();
      body.append(xml);
    }
  };
  request.send();
});

loadHTML.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open("get", "/html");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      document.querySelector("body").innerHTML += request.response;
    }
  };
  request.send();
});

loadJSON.addEventListener("click", () => {
  const request = new XMLHttpRequest();
  request.open("get", `/page${n}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const list = JSON.parse(request.response);
      const ul = document.createElement("ul");
      for (let ele of list) {
        const li = document.createElement("li");
        li.textContent = ele.id;
        ul.appendChild(li);
      }
      body.appendChild(ul);
    }
  };
  n++;
  request.send();
});
