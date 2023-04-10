// hatring object file
// by fran hat
// Written March 9, 2023
// Last modified April 9, 2023

// Needs to be linked on each site using the webring
// This file MUST be linked before the config file is linked
// For more info, see https://22ru.github.io/webring/index.html

class webringMember {
    constructor(name, icon, link) {
        this.name = name;
        this.icon = icon;
        this.link = link;
    }
}

// I chose to encapsulate this in an object because I wanted multiple webrings using this file to be able to be shown on one page.
class webring {
    constructor(indexLink, webringName, webringID, siteList, webringIcon) {
        this.indexLink = indexLink;
        this.webringName = webringName;
        this.webringID = webringID;
        this.webringIcon = webringIcon;
        this.siteList = siteList;
        this.prevStr = "prev";
        this.nextStr = "next";
        this.indexStr = "index";
        this.randStr = "random";
        this.separator = " ";
    }

    loadNavCustomizations(prevStr, nextStr, randStr, separator) {
        this.prevStr = prevStr;
        this.nextStr = nextStr;
        this.randStr = randStr;
        this.separator = separator;
    }

    loadCustomIcon(iconLink) {
        this.webringIcon = iconLink;
    }

    // Build a display of member icons on the webring info page
    displayMembers() {
        var container = document.getElementById("memberDisplay");
        for (var i = 0; i < this.siteList.length; i++) {
            var a = document.createElement("a");
            a.setAttribute("target", "_blank");
            a.setAttribute("rel", "noopener noreferrer")
            a.href = this.siteList[i].link;
            if (this.siteList[i].icon.length > 1) {
                var icon = document.createElement("img");
                icon.src = this.siteList[i].icon;
                a.appendChild(icon);
                icon.title = this.siteList[i].name;
            } else {
                a.innerText = this.siteList[i].name;
            }
            container.appendChild(a);
        }
    }

    getCurrIndex() {
        var i, hostName;
        hostName = window.location.hostname;

        // for testing purposes only
        if (hostName == "localhost") return 0;

        if (!hostName) return -1;
    
        for (i = 0; i < this.siteList.length; i++) {
            if (this.siteList[i].link.includes(hostName)) {
                return i;
            }
        }
        return -1;
    }

    // Creates a widget in a div with the ID webringID,
    // or creates that div and appends it to the end of the body
    buildWidget() {
        var container = document.getElementById(this.webringID);
        if (container == null) {
            container = document.createElement("div");
            container.id = this.webringID;
            document.body.appendChild(container);
        }
        if (container == null) {
            console.log("No widget container exists with the ID " + this.webringID);
        }
        var currIndex = this.getCurrIndex();
        if (currIndex  == -1) {
            container.innerText = "This site isn't in the " + this.webringName + "!";
            return;
        }
    
        var icon = document.createElement("a");
        icon.class = this.webringID + "Icon";
        icon.setAttribute("target", "_blank");
        icon.setAttribute("rel", "noopener noreferrer");
        icon.href = this.indexLink;
        var iconImg = document.createElement("img");
        iconImg.src = this.webringIcon;
        iconImg.title = this.webringName;
        icon.appendChild(iconImg);
        container.appendChild(icon);
    
        var ringName = document.createElement("a");
        ringName.class = this.webringID + "Name";
        ringName.setAttribute("target", "_blank");
        ringName.setAttribute("rel", "noopener noreferrer");
        ringName.href = this.indexLink;
        ringName.innerText = this.webringName;
        ringName.className = this.webringID + "Name";
        container.appendChild(ringName);
    
        var controls = document.createElement("div");
        controls.className = this.webringID + "Nav";
        
        controls.appendChild(this.createPrevLink(currIndex));
        controls.append(this.separator);
        controls.appendChild(this.createRandLink());
        controls.append(this.separator);
        controls.appendChild(this.createNextLink(currIndex));
    
        container.appendChild(controls);
    }

    createPrevLink(currIndex) {
        var prev = document.createElement("a");
        prev.setAttribute("target", "_blank");
        prev.setAttribute("rel", "noopener noreferrer");
        var prevIndex;
        // surely there is a more beautiful way to do this
        if (currIndex == 0) prevIndex = this.siteList.length - 1;
        else prevIndex =  currIndex - 1;
        prev.href = this.siteList[prevIndex].link;
        prev.title = this.siteList[prevIndex].name;
        prev.innerText = this.prevStr;
        return prev;
    }

    createNextLink(currIndex) {
        var next = document.createElement("a");
        next.setAttribute("target", "_blank");
        next.setAttribute("rel", "noopener noreferrer");
        var nextIndex = (currIndex + 1) % this.siteList.length;
        next.href = this.siteList[nextIndex].link;
        next.title = this.siteList[nextIndex].name;
        next.innerText = this.nextStr;
        return next;
    }

    createRandLink() {
        var rand = document.createElement("a");
        rand.setAttribute("target", "_blank");
        rand.setAttribute("rel", "noopener noreferrer");
        var index = Math.floor(Math.random()*this.siteList.length);
        rand.href = this.siteList[index].link;
        rand.title = this.siteList[index].name;
        rand.innerText = this.randStr;
        return rand;
    }

    // Add navigation links to previously created webring div
    createLinks() {
        var target, index;
        var currIndex = this.getCurrIndex();
        if (currIndex  == -1) {
            console.log("Hatring Error! No links created. This site isn't in the " + webringName + "!");
            return;
        }
        target = document.getElementById(this.webringID + "Next");
        if (target != null) {
            index = (currIndex + 1) % this.siteList.length;
            target.href = this.siteList[index].link;
            target.title = this.siteList[index].name;
        }
        target = document.getElementById(this.webringID + "Prev");
        if (target != null) {
            if (currIndex == 0) index = this.siteList.length - 1;
            else index =  currIndex - 1;
            target.href = this.siteList[index].link;
            target.title = this.siteList[index].name;
        }
        target = document.getElementById(this.webringID + "Rand");
        if (target != null) {
            index = Math.floor(Math.random()*this.siteList.length);
            target.href = this.siteList[index].link;
            target.title = this.siteList[index].name;
        }
        target = document.getElementById(this.webringID + "Index");
        if (target != null) {
            target.href = this.indexLink;
        }
    }
}