if(!window.location.href.includes("champMatchUp") && !window.location.href.includes("personalMatchUps")){
    document.getElementById('searchBar').addEventListener('keyup', searchbar);
    // Its as its says it the function for the search bar
    function searchbar(){
        let input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("searchBar");
        filter = input.value.toUpperCase();
        ul = document.getElementById("container");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    }
}