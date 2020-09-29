window.addEventListener("DOMContentLoaded",function(){
    let div=document.createElement("div");
    div.className="header-container";
    let h1=document.createElement("h1");
    let text_h1=document.createTextNode("This is an h1!");
    h1.appendChild(text_h1);
    div.appendChild(h1);
    document.body.appendChild(div);
    let h2=document.createElement("h2");
    let text_h2=document.createTextNode("This is an h2!");
    h2.appendChild(text_h2);
    div.appendChild(h2);
    let h3=document.createElement("h3");
    let text_h3=document.createTextNode("This is an h3!");
    h3.appendChild(text_h3);
    div.appendChild(h3);
    let h4=document.createElement("h4");
    let text_h4=document.createTextNode("This is an h4!");
    h4.appendChild(text_h4);
    div.appendChild(h4);
    let h5=document.createElement("h5");
    let text_h5=document.createTextNode("This is an h5!");
    h5.appendChild(text_h5);
    div.appendChild(h5);
    let h6=document.createElement("h6");
    let text_h6=document.createTextNode("This is an h6!");
    h6.appendChild(text_h6);
    div.appendChild(h6);
    h1.className="h1";
    h2.className="h2";
    h3.className="h3";
    h4.className="h4";
    h5.className="h5";
    h6.className="h6";
    h1.addEventListener("dblclick",changeColor);
    h2.addEventListener("dblclick",changeColor);
    h3.addEventListener("dblclick",changeColor);
    h4.addEventListener("dblclick",changeColor);
    h5.addEventListener("dblclick",changeColor);
    h6.addEventListener("dblclick",changeColor);
    let btn=document.getElementsByTagName("button");
    btn[0].addEventListener("click",addList);
})

var item=1;
var ul=document.createElement("ul");


function changeColor(){
    let colors=["purple","peach","orange","violet","darkgreen","chocolate","cyan"];
    let ind=Math.floor(Math.random()*7);
    let el=event.target;
    el.style.color=colors[ind];
}

function addList(){
    let li=document.createElement("li");
    let text="This is list item "+item;
    item++;
    let li_text=document.createTextNode(text);
    li.appendChild(li_text);
    ul.appendChild(li);
    document.body.appendChild(ul);
    li.addEventListener("dblclick",remove);
    return;
}

function remove(){
    let el=event.target;
    el.remove();
}