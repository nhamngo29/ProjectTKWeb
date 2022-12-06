    document.onscroll = function(e){
        console.log(window.scrollY)
        if(window.scrollY > 90){
            document.querySelector('nav').classList.add('shadow')
        }
        else{
            document.querySelector('nav').classList.remove('shadow')
        }
    }
    function changeImg(id){
        let imgPath = document.getElementById(id).getAttribute('src');
        document.getElementById('img-main').setAttribute('src', imgPath);
    }
    function xoa(id) {
        $(`.cart-body-row-${id}`).fadeOut();
    }
    function sumMoney()
    {
        
    }
    //cộng trừ số lượng
    function cong(id) {
        var value = document.getElementById(`text_so_luong-${id}`).value
        document.getElementById(`text_so_luong-${id}`).value = parseInt(value) + 1;
    }
    function tru(id) {
        var value = document.getElementById(`text_so_luong-${id}`).value
        if(parseInt(value) > 1)
        {
            document.getElementById(`text_so_luong-${id}`).value = parseInt(value) - 1;
        }
        
    }
    //Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}