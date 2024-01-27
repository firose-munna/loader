var time;

async function myDisplay() {
    document.getElementById("loader").style.display = "block";
    const response = await apiRequest();
    console.log("response ", response);
    actionColor();
}

async function apiRequest() {
    const myPromise = new Promise(function (resolve) {
        setTimeout(resolve, 2000);
    });
    await myPromise;

}


function actionColor() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("leading").style.background = "black";
    document.getElementById("leading").style.color = "white";


}

function resetBG() {
    document.getElementById("leading").style.background = "none";
    document.getElementById("leading").style.color = "red";
}