
//tangkap beberapa element html/
let modal =document.getElementById("modal"); 
let floating_button =document.getElementById("floating_button");
let modal_bg = document.getElementById("modal_bg");
let addList_from =document.getElementById("addList_from")
let root =document.getElementById("root");
lef subtitle =document.getElementById("subtitle");

//tambahkan date ke subtitle
subtitle.innerHTML = new date().toLocalDateString();

// data list belanja 
let data_list_belanja = [];

//menambah event listener ke floating button/
floating_button.addEventListener('click',()=>{

//munculnya modal 
if(modal.style.display == "none"){
  showModal();
return 
}

// sembunyikan kembali 
hideModal();

})

//menambahkan ivent listener ke modal bg
modal_bg .addEventListener("click" .()=>{-
})

  // sembunyikan kembali 
hideModal();
}

//tambahkan ivent listener submit ke addlist from 
addList_from.addEventListener("submit" , (event)=>{-
})

//stop from dri reload page 
event.preventDefault();

//tangkap value dari masing masing input field 
let barang = event.target.barang.value;
let harga = event.target.harga.value;

//push data ke data list belanja 
data_list_belanja.push({
  nama_barang :barang,
  nama_barang :harga,
  tanggal : new Date().toLocaleDateString();
});

console.info(data_list_belanja);


//clear input field
event.target.barang.value = "";
event.target.harga.value = "";

hideModal();
rendelToHtml();

})


//show modal 
function showModal(){
  modal.style.display = "flex";
  floating_button.style.backgroundColor ='gray';
  floating_button.style.transform = 'rotate(45deg)';
}

//hide modal 
function hideModal(){
  modal.style.display ="none";
floating_button.style.backgroundColor ='#indianred;';
floating_button.style.transform = 'rotate(0deg)';
}

//render fuction
function renderToHtml(){


  //clear elemen div 
  root.innerHTML ="";

  //perulangan
  data_list_belanja.forEach((e, i=>{

    root.innerHTML += '
    <div class="card"> 
    <small> ${e.tanggal} </small>
    <div>
      ${e.nama barang} <span> Rp. {e.harga barang} </span>
      </div>
      <button onclick="handleDelete(${i})">selesai</buton>
    </div>
    '
 
  });

}

//fuction untuk dalete item pada arrah datalistbelanja 
function handleDelete(index){

  data_list_belanja.splice(index, 1);

  renderToHtml();


}
