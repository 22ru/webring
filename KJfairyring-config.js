// hatring config file
// by fran hat
// Written March 10, 2023
// Last modified March 11, 2023

// This file needs to be linked on each site using the webring after hatring.js
// For more info, see https://22ru.github.io/webring/index.html

// *********** Config for webring moderator *********** 
var KJfairyring = new webring(
    // indexLink
    // A link the the info page about the webring
    "https://22ru.github.io/webring/index.html",

    // webringName
    // The full name of the webring
    "Kinoko Juice Fairyring",

    // webringID
    // Shorter version of the webring name. Do not include special characters like spaces. This will also be used as the container ID in which the widget is inserted
    "KJfairyring",

    // siteList
    // These icons will likely not be shown on any member's site
    // It should be okay to use a relative link
    // The order is: site name, site icon, site link
    [
        new webringMember("sylum", "img/membericon/sylum.png", "https://sylum.web.fc2.com/"),
        new webringMember("pompon", "img/membericon/pompon.gif", "https://pompon.neocities.org/"),
        new webringMember("top hat cafe", "img/membericon/hat.gif", "https://22ru.github.io/tophatcafe/"),
        new webringMember("zucchini", "img/membericon/zucchini.gif", "https://zucchini.cc/")
    ],

    // webringIcon
    // this image should be directly linked here because it will likely be hotlinked
    "https://22ru.github.io/webring/img/kj1.gif"
);