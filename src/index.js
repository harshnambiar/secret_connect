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
    var lengthOtp = 10;
    var captcha = "";
    for (var i = 0; i < lengthOtp; i++) {
        var index = Math.floor(Math.random() * charsArray.length); //get the next character from the array
        captcha = captcha.concat(charsArray[index]);
    }

    console.log(captcha);
    addTextToImage('./img/home.png', captcha);
    
  }
  window.createCaptcha = createCaptcha;


  function addTextToImage(imagePath, text) {
    var circle_canvas = document.getElementById("captcha");
    var context = circle_canvas.getContext("2d");

    // Draw Image function
    var img = new Image();
    img.src = imagePath;
    img.height = 300;
    img.width = 300;
    img.onload = function () {
        context.drawImage(img, 0, 0);
        context.lineWidth = 1;
        context.fillStyle = "#FFFFFF";
        context.lineStyle = "#ffff00";
        context.font = "18px sans-serif";
        context.fillText(text, 5, 20);
    };
}

function clearScreen() {
    const canvas=document.getElementById('captcha');
    const ctx=canvas.getContext('2d');
    ctx.fillStyle= 'black';// make screen black
    ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);

}