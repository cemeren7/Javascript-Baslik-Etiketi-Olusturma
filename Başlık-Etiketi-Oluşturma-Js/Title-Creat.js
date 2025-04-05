// Elemanları Seç
const frmcreat = document.querySelector("#frm-title");
const frmname = document.querySelector("#frm-name");
const frmcl = document.querySelector("#frm-color");
const TıtleContaıner = document.querySelector("#container-tıtle");
const clbtn = document.querySelector("#clearbtn");
const crtbtn = document.querySelector("#creat-btn");
const creatdiv = document.querySelector("#creat-contact");
// olay fonkisyonu
events();
function events() {
  frmcreat.addEventListener("submit", titlecreat);
  frmcreat.addEventListener("reset", titlclear);
  frmcl.addEventListener("keyup", controlinput);
  frmname.addEventListener("keyup", controlname);
  creatdiv.addEventListener("click", removediv);
}

function titlecreat(e) {
  e.preventDefault(); // Sayfanın Yenilenmesini engeller
  const namevalue = frmname.value.trim();
  const colorvalue = frmcl.value.trim();
  if (
    namevalue == "" ||
    namevalue == null ||
    colorvalue == "" ||
    colorvalue == null
  ) {
    alert("Eksik Veya Boş Değer Girmeye Çalıştınız");
  } else {
    titlenewcreat(namevalue, colorvalue);
  }
}

function titlenewcreat(newtitle, newcolor) {
  const title = document.createElement("h2");
  title.textContent = newtitle;
  title.className = "fs-6 d-inline-block";
  title.style.color = `${newcolor}`;

  const div = document.createElement("div");
  div.className =
    "border border-2 rounded-2 text-center p-2 w-100 mb-2 d-flex justify-content-between contact";

  const icon = document.createElement("i");
  icon.className = "bi bi-trash3-fill text-primary";

  div.appendChild(title);
  div.appendChild(icon);

  TıtleContaıner.appendChild(div);

  frmname.value = "";
  frmcl.value = "";
  crtbtn.disabled = false;
  clbtn.disabled = false;
}

function titlclear() {
  const titles = document.querySelectorAll(".contact");
  titles.forEach(function (title) {
    title.remove();
  });
  clbtn.disabled = true;
  crtbtn.disabled = true;
}

function controlinput() {
  const valuefirst = frmcl.value.trim();
  if (valuefirst == "" || valuefirst == null) {
    crtbtn.disabled = true;
  } else {
    crtbtn.disabled = false;
  }
}

function controlname() {
  const valuesecond = frmname.value.trim();
  if (valuesecond == "" || valuesecond == null) {
    crtbtn.disabled = true;
  } else {
    crtbtn.disabled = false;
  }
}

function removediv(e) {
  if (e.target.className == "bi bi-trash3-fill text-primary") {
    const div = e.target.parentElement;
    div.remove();
    clbtn.disabled = true;
    crtbtn.disabled = true;
  }
}
