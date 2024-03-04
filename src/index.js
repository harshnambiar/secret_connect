async function connect_keplr() {
    if (!window.keplr) {
        throw ("Please install keplr extension");
    } else {
        try {
            const chainId = "cosmoshub-4";

            await window.keplr.enable(chainId);
        
            const offlineSigner = window.keplr.getOfflineSigner(chainId);
        
            const accounts = await offlineSigner.getAccounts();
            console.log(accounts[0].address);
        
        } catch (err){
            console.log(err);
        }
    }
}
window.connect_keplr = connect_keplr;


async function connect_leap() {
    if (!window.leap) {
        throw ("Please install leap extension");
    } else {
        try {
            const chainId = "cosmoshub-4";

            await window.leap.enable(chainId);
        
            const offlineSigner = window.leap.getOfflineSigner(chainId);
        
            const accounts = await offlineSigner.getAccounts();
            console.log(accounts[0].address);
        
        } catch (err){
            console.log(err);
        }
    }
}
window.connect_leap = connect_leap;



async function connect_cosmostation() {
    if (!window.cosmostation) {
        throw ("Please install cosmostation extension");
    } else {
        try {
            const chainId = "cosmoshub-4";
            const account = await window.cosmostation.cosmos.request({
                method: "cos_requestAccount",
                params: { chainName: chainId },
              });
            console.log(account.address);
        
        } catch (err){
            console.log(err);
        }
    }
}
window.connect_cosmostation = connect_cosmostation;




async function createCaptcha() {
    //document.getElementById("cap_form").style.diplay = "block";
    clearScreen();
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lengthOtp = 9;
    var captcha = "";
    for (var i = 0; i < lengthOtp; i++) {
        var index = Math.floor(Math.random() * charsArray.length); //get the next character from the array
        captcha = captcha.concat(charsArray[index]);
    }

    console.log(captcha);
    addTextToImage('https://5.imimg.com/data5/GL/TG/MY-45342195/wall-textures.jpg', captcha);
    
  }
  window.createCaptcha = createCaptcha;


  function addTextToImage(imagePath, text) {
    var circle_canvas = document.getElementById("captcha");
    var context = circle_canvas.getContext("2d");

    console.log(text);
    var order = Math.floor(Math.random() * 6);
    var img = new Image();
    img.src = imagePath;
    img.height = 600;
    img.width = 600;
    var shift1 = 55 + Math.floor(Math.random() * 5);
    var shift2 = 35 + shift1 - Math.floor(Math.random() * 5);
    if (order == 0) {
        var text1 = text.substring(0, 3);
        var text2 = text.substring(3, 6);
        var text3 = text.substring(6, 9);
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "#FFFFFF";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text1, 5, 35);
            context.fillStyle = "indigo";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text2, 70, shift1);
            context.fillStyle = "#FF0000";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text3, 140, shift2);
        };
    }

    
    else if (order == 1) {
        var text1 = text.substring(0, 3);
        var text3 = text.substring(3, 6);
        var text2 = text.substring(6, 9);
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "#FFFFFF";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text1, 5, 35);
            context.fillStyle = "#FF0000";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text2, 70, shift1);
            context.fillStyle = "indigo";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text3, 140, shift2);
        };

    }
    else if (order == 2) {
        var text3 = text.substring(0, 3);
        var text1 = text.substring(3, 6);
        var text2 = text.substring(6, 9);
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "#FF0000";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text1, 5, 35);
            context.fillStyle = "#FFFFFF";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text2, 70, shift1);
            context.fillStyle = "indigo";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text3, 140, shift2);
        };

    }
    else if (order == 3) {
        var text2 = text.substring(0, 3);
        var text1 = text.substring(3, 6);
        var text3 = text.substring(6, 9);
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "indigo";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text1, 5, 35);
            context.fillStyle = "#FFFFFF";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text2, 70, shift1);
            context.fillStyle = "#FF0000";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text3, 140, shift2);
        };

    }
    else if (order == 4) {
        var text2 = text.substring(0, 3);
        var text3 = text.substring(3, 6);
        var text1 = text.substring(6, 9);
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "indigo";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text1, 5, 35);
            context.fillStyle = "#FF0000";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text2, 70, shift1);
            context.fillStyle = "#FFFFFF";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text3, 140, shift2);
        };

    }
    else {
        var text3 = text.substring(0, 3);
        var text2 = text.substring(3, 6);
        var text1 = text.substring(6, 9);
        img.onload = function () {
            context.drawImage(img, 0, 0);
            context.lineWidth = 1;
            context.fillStyle = "#FF0000";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text1, 5, 35);
            context.fillStyle = "indigo";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text2, 70, shift1);
            context.fillStyle = "#FFFFFF";
            context.lineStyle = "#ffff00";
            context.font = "25px bold courier";
            context.fillText(text3, 140, shift2);
        };

    }
}
    

function clearScreen() {
    const canvas=document.getElementById('captcha');
    const ctx=canvas.getContext('2d');
    ctx.fillStyle= 'black';// make screen black
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);

}