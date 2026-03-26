function openModal(){
    document.getElementById("orderModal").style.display = "flex";
}

function closeModal(){
    document.getElementById("orderModal").style.display = "none";
}

window.onclick = function(e){
    let modal = document.getElementById("orderModal");
    if(e.target === modal){
        modal.style.display = "none";
    }
}