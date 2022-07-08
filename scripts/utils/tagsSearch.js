const tagSearchBtn = document.querySelectorAll('.btn')
const tagSearchInput = document.querySelectorAll('.text-control')

tagSearchBtn.forEach((btn) => btn.addEventListener("click", delayDropdownFocus));
tagSearchInput.forEach((btn) => btn.addEventListener("input", searchTag));

function DropdownFocus(btn){
    if(btn.children[0]){
        btn.children[0].focus()
    }else{
        btn.focus()
    }
}

function delayDropdownFocus(e){
    setTimeout(function() {DropdownFocus(e.target)}, 500);
}

function searchTag(e){
    console.log(e.target.value)
    }