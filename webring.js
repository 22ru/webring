

var siteList = [
    ["hat", "https://hat.neocities.org/"],
    ["pompon", "https://pompon.neocities.org/"]
];

function displayList () {
    for (var i = 0; i < siteList.length; i++) {
        var a = document.createElement('a');
        a.innerText = siteList[i][0];
        a.href = siteList[i][1];
        document.getElementById("siteListDisplay").appendChild(a);
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
    prev = document.getElementById("previous");
    prev.href = siteList[(current - 1)%siteList.length][1];
    next = document.getElementById("next");
    prev.href = siteList[(current + 1)%siteList.length][1];
}