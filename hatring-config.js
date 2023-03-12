// blank hatring config file
// by fran hat
// Written March 10, 2023
// Last modified March 11, 2023

// This file needs to be linked on each site using the webring after hatring.js
// For more info, see https://22ru.github.io/webring/index.html

// *********** Config for webring moderator *********** 
// Modifiable variables for each webring
// ALL are required
var 

// Change this unless you want your members to be limited to only ONE hatring on their site
// NO special characters or spaces. This is a Javascript variable name
WEBRING_NAME

= new webring(
    // indexLink
    // A link the the info page about the webring
    "INFO_SITE_INDEX",

    // webringName
    // The full name of the webring
    "FULL_NAME_OF_WEBRING",

    // webringID
    // Shorter version of the webring name. Probably best to use the same name as on line 16. Do not include special characters including spaces. This will also be used as the container ID in which the widget is inserted.
    "WEBRING_NAME",

    // siteList
    // These icons will likely not be shown on any member's site
    // It should be okay to use a relative link if they are hosted on the index site
    // The order is: site name, site icon, site link
    [
        new webringMember("SITE1NAME", "SITE1ICON", "SITE1LINK"),
        new webringMember("SITE2NAME", "SITE2ICON", "SITE2LINK")
    ],

    // webringIcon
    // The image should be directly linked here because it will likely be hotlinked
    "WEBRING_ICON_LINK"
);