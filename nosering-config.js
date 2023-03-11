// This file needs to be linked on each site using the webring
// after hatring.js

// *********** Config for webring moderator *********** 
// Modifiable variables for each webring
// ALL are required
var ring2 = new webring(
    // indexLink = 
    "https://22ru.github.io/webring/template.html",

    // webringName = 
    "Super Dollfie nosering",

    // webringID = 
    "nosering",

// These icons will likely not be shown on any member's site
// It should be okay to use a relative link
    // siteList = 
    [
        new webringMember("site1", "img/membericon/hat.gif", "https://www.youtube.com/watch?v=-w7vsJqsRs4"),
        new webringMember("site2", "img/membericon/pompon.gif", "https://denofangels.com/"),
        new webringMember("site3", "img/membericon/tigercarnival.png", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Method_definitions")
    ],

// *********** Customizable per member section *********** 

// webringIcon should be directly linked in the code given to the members
// Call loadCustomizations() before buildWebringWidget() if any of these are modified from defaults
    // webringIcon = 
    "https://22ru.github.io/webring/img/hh_88x31.jpg"
);

ring2.loadCustomizations("pr", "nx", "ran", "_");