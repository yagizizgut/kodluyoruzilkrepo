// HTML SAYFASINDAKİ ELEMENTLERİN SEÇİLMESİ

let btnDOM = document.querySelector("#liveToastBtn") // liveToastBtn id'si ile ekle yazan butona seçtik ve bu butonu btnDOM değişkenine atadık.
let listDOM = document.querySelector("#list") // list id'si ile ul'nin ID'si olan list'i seçtik ve listDOM'a atadık.
let taskDOM = document.querySelector("#task") //input'un ID'si olan task'ı seçip taskDOM'a atadık.
let ullength = document.getElementsByTagName("li"); //burda var olan bütün li elementlerini alıp ullength'e atadık böylece elimizde kaç madde yani li olduğunu öğrendik.


// MEVCUT LİSTEYİ SİLMEK İÇİN ÇARPI BUTONUNUN OLUŞTURULMASI
for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span"); 
    closeButton.textContent = "\u00D7"; 
    closeButton.classList.add("close"); 
    closeButton.onclick = removeButton; 
    ullength[i].append(closeButton); 
    ullength[i].onclick = check;
}


btnDOM.addEventListener('click', elemanEkle)  




function check(){
  this.classList.toggle("checked");

}

function removeButton(){
  this.parentElement.remove();
}



function elemanEkle() {

    if (taskDOM.value == "")  {  
    $(".error").toast("show"); 
  } else {
    $(".success").toast("show");

    let liDOM = document.createElement('li') 
    listDOM.appendChild(liDOM); 
    liDOM.innerHTML = task.value; 
    taskDOM.value = "";
    liDOM.onclick = check;
        
    let closeButton = document.createElement("span");

    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton; 
    liDOM.append(closeButton);
    listDOM.append(liDOM);
    inputElement.value = ("");

        
}
}    








 

 






 




