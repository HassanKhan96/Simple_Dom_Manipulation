var rm_btns = document.querySelectorAll("#tasks ul li #listContent #btn-rm");
var input = document.getElementById("inputText");
var add_btn = document.querySelector('#actions #btn');

btnAction = (btn) => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        var li = btn.parentNode.parentElement;
        var ul = li.parentNode;
        ul.removeChild(li);
    })
}

rm_btns.forEach(btn => {
    this.btnAction(btn);
})


add_btn.addEventListener('click', e => {
    e.preventDefault();
    var value = input.value;
    var p = document.createElement('p');
    var btn_rm = document.createElement('button');
    var Div = document.createElement('div');
    var li = document.createElement('li');

    Div.id = "listContent";
    btn_rm.id = "btn-rm";
    this.btnAction(btn_rm);


    p.textContent = value;
    btn_rm.textContent = "Remove";

    Div.appendChild(p);
    Div.appendChild(btn_rm);

    li.appendChild(Div);

    var ul = document.querySelector("#tasks ul");
    ul.appendChild(li);

    input.value = "";
})