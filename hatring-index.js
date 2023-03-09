// Functions for building a display of members on the index page

function displayMembers() {
    container = document.getElementById("memberDisplay");
    for (var i = 0; i < siteList.length; i++) {
        var memCont = document.createElement("div");
        memCont.className = "memberContainer";

        var nameAndIcon = document.createElement("div");
        nameAndIcon.className = "siteName";
        var a = document.createElement("a");
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener noreferrer")
        a.href = siteList[i].link;
        a.innerText = siteList[i].name;
        var icon = document.createElement("img");
        icon.src = siteList[i].icon;
        a.appendChild(icon);
        nameAndIcon.appendChild(a);

        memCont.appendChild(nameAndIcon);

        var webmaster = document.createElement("div");
        webmaster.className = "siteWebmaster";
        webmaster.innerHTML = siteList[i].webmaster;
        memCont.appendChild(webmaster);

        var description = document.createElement("div");
        description.className = "siteDescription";
        description.innerHTML = siteList[i].description;
        memCont.appendChild(description);

        var rating = document.createElement("div");
        rating.className = "siteRating";
        rating.innerHTML = siteList[i].rating;
        memCont.appendChild(rating);

        container.appendChild(memCont);
    }
}