let nameText = document.querySelector('#text');
let nameButton = document.querySelector('#nameButton');
let nameBack = document.querySelector('#nameBack')

// console.log(nameButton); works
// console.log (nameText); works

nameButton.addEventListener("click", changeName );

// it did, in fact, work!

function changeName(){
    nameText.innerHTML ="Bee";
}

// worked

nameBack.addEventListener("click", changeBack );

function changeBack(){
    nameText.innerHTML = "Anum"
}




