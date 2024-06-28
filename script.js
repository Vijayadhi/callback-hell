const countdownDiv = document.getElementById("timer");
const text_wishes = document.getElementById("text-wishes");
const popper = document.getElementById("popper");

setTimeout(function () {
    countdownDiv.innerText = "10";
    setTimeout(function () {
        countdownDiv.innerText = "9";
        setTimeout(function () {
            countdownDiv.innerText = "8";
            setTimeout(function () {
                countdownDiv.innerText = "7";
                setTimeout(function () {
                    countdownDiv.innerText = "6";
                    setTimeout(function () {
                        countdownDiv.innerText = "5";
                        setTimeout(function () {
                            countdownDiv.innerText = "4";
                            setTimeout(function () {
                                countdownDiv.innerText = "3";
                                setTimeout(function () {
                                    countdownDiv.innerText = "2";
                                    setTimeout(function () {
                                        countdownDiv.innerText = "1";
                                        setTimeout(function () {
                                            const giftBox = document.getElementById('gift-box');
                                            const music = document.getElementById('music');
                                            giftBox.innerHTML = ''; // Clear the contents of the gift box div
                                            const wish_img = document.getElementById("wish-img");
                                            text_wishes.innerText = "Happy Independence Day!";
                                            wish_img.innerHTML = `<img src="./assets/idw.gif" alt="" srcset="" height="360px" width="75%" style="margin-left:1rem">`;
                                            popper.innerHTML = `<img src="./assets/gif_5-2268096233.gif" alt="" srcset="" height="150px" style="margin-left:1rem" >`;
                                            music.play();
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);



