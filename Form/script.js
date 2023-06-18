function senddata() {
    var name = document.getElementById("nama").value
    var interest = document.querySelector("input[name=interest]:checked").value
    var fav = document.getElementById("fav").value
    var type = document.getElementById("type").value
    var seen = document.getElementById("seen").value
    var date = document.getElementById("dateInput").value;


    alert(
        "Name : " + name +
        "\nSeen : " + seen +
        "\nDate: " + date +
        "\nInterest : " + interest +
        "\nFavorite : " + fav +
        "\nType : " + type
    )
}