var siteList = [
    ["hat", "https://hat.neocities.org/"],
    ["pompon", "https://pompon.neocities.org/"],
    ["youtube", "https://www.youtube.com/"],
    ["volksusa", "https://volksusastore.com/webstores/dollfie/index.php"]
];

function displayList () {
    for (var i = 0; i < siteList.length; i++) {
        var a = document.createElement('a');
        a.innerText = siteList[i][0];
        a.href = siteList[i][1];
        document.getElementById("siteListDisplay").appendChild(a);
        var br = document.createElement("br");
        document.getElementById("siteListDisplay").appendChild(br);
    }
}

function getCurrent(siteName) {
    for (var i = 0; i < siteList.length; i++) {
        if (siteName == siteList[i][0])
            return i;
    }
}

function createLinks(siteName) {
    var current = getCurrent(siteName);
    prev = document.getElementById("webringPrev");
    if (current == 0) {
        prev.href = siteList[siteList.length - 1][1];
    } else {
        prev.href = siteList[current - 1][1];
    }
    next = document.getElementById("webringNext");
    if (current == siteList.length - 1) {
        next.href = siteList[0][1];
    } else {
        next.href = siteList[current + 1][1];
    }
}
