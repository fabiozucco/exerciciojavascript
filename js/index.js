var a = 5;
var b = "10";
var c = 10;
var d = a + c;
var e = c * a;
var f = b + e;
console.info(f);
console.log(a);
console.error(b);
var h1 = document.createElement("h1");
h1.append(f)
document.body.appendChild(h1);
var a = document.createElement("a");
a.setAttribute("href", "http://google.com");
a.setAttribute("target", "_blank");
a.append(b);
document.body.appendChild(a);

var li = document.createElement("li");
var ul = document.createElement("ul");
ul.appendChild(li);
li.append("Item 01");
document.body.appendChild(ul);

var li2 = document.createElement("li");
li2.appendChild(a);
ul.appendChild(li2);

var g = "Exercício Javascript"
var section = document.createElement("section");
var div = document.createElement("div");
var h1 = document.createElement("h1");
var nav = document.createElement("nav");
var ul = document.createElement("ul");
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var a1 = document.createElement("a");
var a2 = document.createElement("a");
a1.setAttribute("href", "http://google.com");
a2.setAttribute("href", "http://google.com");

section.appendChild(div);
div.appendChild(h1);
h1.append(g);
section.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li1);
ul.appendChild(li2);
li1.appendChild(a1);
li2.appendChild(a2);
a1.append("Link 01");
a2.append("Link 02");

document.body.appendChild(section)

