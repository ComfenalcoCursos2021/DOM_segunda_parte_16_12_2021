// let miEtiqueta = document.createElement("DIV");
let MyDIV = document.querySelector("#MYDiv");
let attr = {
    "data-nombre": "Miguel",
    "data-apellido": "Castro"
}
Object.entries(attr).forEach((valor, id) => MyDIV.setAttribute(valor[0], valor[1]));
setInterval(() => {
    MyDIV.dataset.nombre = `MIGUEL ${Math.trunc(Math.random()*10)}`;
    if(MyDIV.dataset.hasOwnProperty("nombre") && MyDIV.dataset.nombre == "MIGUEL 5"){
        alert("CSS");
    }
}, 2000);













// let table = document.createElement("TABLE");
// let thead = document.createElement("THEAD");
// let trHead = document.createElement("TR");
// let tbody = document.createElement("TBODY");

// let myStyleTrHead = {
//     color: "white",
//     background: "orange",
//     "font-family": "Arial",
//     "text-align": "center",
// };
// Object.assign(trHead.style, myStyleTrHead);
// let titulos = ["A","B","C","D","E"];
// for (let i = 0; i < titulos.length; i++) {
//     let th = document.createElement("TH");
//     th.insertAdjacentText("beforeend", titulos[i]);
//     trHead.appendChild(th);
// }


// for (let z = 0; z < 2; z++) {
//     let trBody = document.createElement("TR");
//     for (let i = 0; i < titulos.length; i++) {
//         let td = document.createElement("TD");
//         td.style.width = "100px";
//         td.insertAdjacentText("beforeend", Math.trunc(Math.random()*100));
//         trBody.appendChild(td);
//     }
//     tbody.appendChild(trBody);
// }


// table.append(thead, tbody);
// thead.appendChild(trHead);

// document.body.insertAdjacentElement("beforeend", table);

// setTimeout(() => {
//     let myStyle = {
//         color: "white",
//         background: "red",
//         "font-family": "cursive",
//         "font-weight": "bold",
//         "text-align": "center",
//         "border": "5px solid blue"
//     }
//     let tr = document.createElement("TR");
//     let td = document.createElement("TD");
//     td.setAttribute("colspan", 5);
//     Object.assign(td.style, myStyle);
//     td.innerText = "123456789";
//     tr.appendChild(td);
//     tbody.appendChild(tr);
// }, 2000);

// console.log(table);