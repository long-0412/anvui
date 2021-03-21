window.addEventListener("load", function() {
    const tab = document.querySelectorAll(".tab");
    for (let i = 0; i < tab.length; i++) {
        tab[i].addEventListener("click", function(e) {
            const tabActive = document.querySelector(".tab.active");
            const contentActive = document.querySelector(".tab-content.active");
            //
            tabActive.classList.remove("active");
            contentActive.classList.remove("active");
            e.target.classList.add("active");
            document.getElementById(this.href.split("#").pop()).classList.add("active");
        });
    }
});