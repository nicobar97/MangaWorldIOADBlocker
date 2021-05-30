console.log("WaitingForADS by Nicobar")
waitForADS(function() {
    console.log("ADS Blocked by Nicobar")
    document.querySelector("iframe[style*='important']").style.display = "none"
})

function waitForADS(callback) {
    if (document.querySelector("iframe[style*='important']")) {
        callback();
    } else {
        setTimeout(function() {
            waitForADS(callback);
        }, 500);
    }
};