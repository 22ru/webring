// keeping for support until new script is finished and everyone has updated

var siteList = [
    ["hat's nekocomiccon", "https://hat.neocities.org/"],
    ["pompon", "https://pompon.neocities.org/"],
    ["tiger carnival", "https://bisuko.neocities.org/"],
    ["zucchini", "http://zucchini.cc/"]
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
    prev = document.getElementById("webringPrev"); // Required
    if (current == 0) {
        prev.href = siteList[siteList.length - 1][1];
    } else {
        prev.href = siteList[current - 1][1];
    }
    next = document.getElementById("webringNext"); // Required
    if (current == siteList.length - 1) {
        next.href = siteList[0][1];
    } else {
        next.href = siteList[current + 1][1];
    }
    fullList = document.getElementById("webringList"); // Optional
    if (fullList) {
        fullList.href = "https://22ru.github.io/webring/index.html";
    }
    rand = document.getElementById("webringRand"); // Optional
    if (rand) {
        rand.href = siteList[Math.floor(Math.random()*siteList.length)][1];
    }
}