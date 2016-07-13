


(function() {
    window.onload = function () {
        var b = document.getElementById("new-note");
        b.onclick = function () {
            console.log("Button clicked");
            makeRequest(
                function (respText) {
                    var tbody = document.getElementById("notes-rows");
                    tbody.innerHTML += respText;
                },

                function (err, text) {
                    alert("Error on request!");
                    console.log(err + " - " + text);
                }
            );
            return false;
        }
    }

    function makeRequest(cbSuccess, cbError) {
        var xhr = new XMLHttpRequest();

        xhr.open("POST", "/notes/partial");
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        var title = document.getElementById("title").value;
        var content = document.getElementById("content").value;

        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status == 200)
                    return cbSuccess(xhr.responseText);
                cbError(xhr.status, xhr.responseText);
            }
        }

        xhr.send("title=" + title + "&content=" + content);
    }
})();



