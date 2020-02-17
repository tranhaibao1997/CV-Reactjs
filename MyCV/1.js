document.addEventListener("DOMContentLoaded", function() {

    var button = document.getElementsByClassName("phandeclick"); // khai bao mang button co cung class
    var content = document.getElementsByClassName("phanhienthi"); // khai bao mang content co cung class
    for (var i = 0; i < button.length; i++) {
        button[i].onclick = function() {

            if (this.classList[1] == "turn-icon-to-white") // co mau trang
            {
                this.classList.remove("turn-icon-to-white");
                contentName = this.getAttribute("data-hienlen");
                contentId = document.getElementById(contentName);
                contentId.classList.remove("content-visible")

            } else //khong co mau trang
            {


                for (var k = 0; k < button.length; k++) {
                    button[k].classList.remove("turn-icon-to-white")
                }
                this.classList.toggle("turn-icon-to-white");

                //get data
                contentName = this.getAttribute("data-hienlen");
                contentId = document.getElementById(contentName);
                console.log(contentId);
                // => contentId=contentName

                for (var i = 0; i < content.length; i++) {
                    content[i].classList.remove("content-visible");
                }
                contentId.classList.toggle("content-visible")

            }










        }
    }








}, false)