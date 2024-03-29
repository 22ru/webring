// Needs to be linked on each site using the webring

class webringMember {
    constructor(name, icon, webmaster, link, description, rating) {
        this.name = name;
        this.icon = icon;
        this.webmaster = webmaster;
        this.link = link;
        this.description = description;
        this.rating = rating;
    }
}

// I seriously can't overload functions?! I'm very upset
//function buildWebringWidget() {
//    buildWebringWidget(0);
//}

function buildWebringWidget(iconNum) {
    container = document.getElementById(widgetContainerID);
    currIndex = getCurrIndex();
    if (currIndex  == -1) {
        container.innerText = "This site isn't in the " + webringName + "!";
        return;
    }
    if (iconNum < 0 || iconNum > webringIcon.length - 1) iconNum = 0;

    var icon = document.createElement("a");
    icon.class = widgetContainerID + "Icon";
    icon.setAttribute("target", "_blank");
    icon.setAttribute("rel", "noopener noreferrer");
    icon.href = indexLink;
    var iconImg = document.createElement("img");
    iconImg.src = webringIcon[iconNum];
    iconImg.title = webringName;
    icon.appendChild(iconImg);
    container.appendChild(icon);

    var ringName = document.createElement("div");
    ringName.innerText = webringName;
    ringName.className = webringName + "Name";
    container.appendChild(ringName);

    var controls = document.createElement("div");
    controls.className = widgetContainerID + "Controls";

    var prev = document.createElement("a");
    prev.setAttribute("target", "_blank");
    prev.setAttribute("rel", "noopener noreferrer");
    if (currIndex == 0) { // surely there is a more beautiful way to do this
        prev.href = siteList[siteList.length - 1].link;
        prev.title = siteList[siteList.length - 1].name;
    } else {
        prev.href = siteList[currIndex - 1].link;
        prev.title = siteList[currIndex - 1].name;
    }
    prev.innerText = prevStr;
    controls.appendChild(prev);
    controls.append(separator);

    var next = document.createElement("a");
    next.setAttribute("target", "_blank");
    next.setAttribute("rel", "noopener noreferrer");
    next.href = siteList[(currIndex + 1) % siteList.length].link;
    next.title = siteList[(currIndex + 1) % siteList.length].name;
    next.innerText = nextStr;
    controls.appendChild(next);
    controls.append(separator);

    var rand = document.createElement("a");
    rand.setAttribute("target", "_blank");
    rand.setAttribute("rel", "noopener noreferrer");
    rand.href = siteList[Math.floor(Math.random()*siteList.length)].link;
    rand.title = randTitle;
    rand.innerText = randStr;
    controls.appendChild(rand);

    container.appendChild(controls);
}

function getCurrIndex() {
    var i, hostName;
    hostName = window.location.hostname;

    if (!hostName) return -1;

    for (i = 0; i < siteList.length; i++) {
        if (siteList[i].link.includes(hostName)) {
            return i;
        }
    }

    return -1;
}