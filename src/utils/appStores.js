import MobileDetect from "mobile-detect";

const ios = "ios";
const android = "android";
const md = new MobileDetect((typeof window !== "undefined") ? window.navigator.userAgent : "");
const mobileOs = md.os('iOS') || md.match('Mac') ? ios : android;

const defaultApp = "default";
const storeLinks = {
    uber: {
        ios: "https://itunes.apple.com/us/app/uber/id368677368?mt=8",
        android: "https://play.google.com/store/apps/details?id=com.ubercab&hl=en"
    },
    cabify: {
        ios: "https://itunes.apple.com/us/app/cabify/id476087442?mt=8",
        android: "https://play.google.com/store/apps/details?id=com.cabify.rider"
    },
    taxify: {
        ios: "https://itunes.apple.com/us/app/taxify/id675033630?mt=8",
        android: "https://play.google.com/store/apps/details?id=ee.mtakso.client"
    },
    lyft: {
        ios: "https://itunes.apple.com/cy/app/lyft/id529379082?mt=8",
        android: "https://play.google.com/store/apps/details?id=me.lyft.android&hl=en"
    },
    grab: {
        ios: "https://itunes.apple.com/sg/app/grab-app/id647268330?mt=8",
        android: "https://play.google.com/store/apps/details?id=com.grabtaxi.passenger"
    },
    gojek: {
        ios: "https://itunes.apple.com/us/app/go-jek/id944875099?mt=8",
        android: "https://play.google.com/store/apps/details?id=com.gojek.app"
    },
    mytaxi: {
        ios: "https://itunes.apple.com/us/app/mytaxi-tap-move-freely/id357852748?mt=8",
        android: "https://play.google.com/store/apps/details?id=taxi.android.client"
    },
    chauffeurprive: {
        ios: "https://itunes.apple.com/us/app/chauffeur-priv%C3%A9/id504597178?mt=8",
        android: "https://play.google.com/store/apps/details?id=fr.chauffeurprive"
    },
    beat: {
        ios: "https://itunes.apple.com/us/app/beat-ride-app/id436031420?mt=8",
        android: "https://play.google.com/store/apps/details?id=gr.androiddev.taxibeat"
    },
    blacklane: {
        ios: "https://itunes.apple.com/us/app/blacklane-airport-transfers/id524123600?mt=8",
        android: "https://play.google.com/store/apps/details?id=com.blacklane.passenger&hl=en"
    },
    default: {
        ios: "#",
        android: "#"
    }
};

export const getAppStoreLink = (app) => storeLinks[app.toLowerCase() || defaultApp][mobileOs];