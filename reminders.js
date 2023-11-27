
const popupTry = () => {
    alert("this is a popup")
}

popupTry()


const makeNotificationDisappear = () => {
    //document.getElementsByClassName("buttonClose")
    // this.parentElement.style.display = 'none';
    // let notification = document.getElementsByClassName("buttonClose");
    // for (let i = 0; i < notification.length; i++) {
    //     notification[i].style.display = 'none';
    // }
    //alert("Is this working?") // not working
    //document.getElementsByClassName("buttonClose").innerHTML = "Y"; // not working either
    document.getElementsByClassName("buttonClose").style.display = 'none';
}
document.getElementsByClassName("buttonClose").addEventListener("click", makeNotificationDisappear())

//makeNotificationDisappear()
