// This file needs to be linked on each site using the webring
// after hatring.js

// *********** Config for webring moderator *********** 
// Modifiable variables for each webring
// ALL are required
var ring = new webring(
    // indexLink = 
    "https://22ru.github.io/webring/index.html",

    // webringName = 
    "Super Dollfie WebHandHold",

    // webringID = 
    "SDHandHold",

// These icons will likely not be shown on any member's site
// It should be okay to use a relative link
    // siteList = 
    [
        new webringMember("hat's nekocomiccon", "img/membericon/hat.gif", "https://hat.neocities.org/cafe"),
        new webringMember("pompon", "img/membericon/pompon.gif", "https://pompon.neocities.org/"),
        new webringMember("tiger carnival", "img/membericon/tigercarnival.png", "https://bisuko.neocities.org/softplastic/dollroom"),
        new webringMember("zucchini", "img/membericon/zucchini.gif", "http://zucchini.cc/")
    ],

// *********** Customizable per member section *********** 

// webringIcon should be directly linked in the code given to the members
// Call loadCustomizations() before buildWebringWidget() if any of these are modified from defaults
    // webringIcon = 
    "https://22ru.github.io/webring/img/hh_100x100.jpg"
);

// You should be able to comment out or delete these lines without issue.
ring.loadCustomizations(
    // prevStr
    "⏮︎", 
    // nextStr
    "⏭︎", 
    // randStr
    "⏯︎", 
    // separator
    "🌸"
    );