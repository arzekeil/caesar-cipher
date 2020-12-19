//Seclectors
const encryptedMessage = document.getElementById('encryptedMessage');
const normalMessage = document.getElementById('normalMessage');
const encryptedShift = document.getElementById('encrypt-shift');
const decodeShift = document.getElementById('decode-shift');
const encrypt = document.getElementById('encrypt');
const decode = document.getElementById('decode');
const messageEncrypted = document.getElementById('messageEncrypted');
const messageDecoded = document.getElementById('messageDecoded');

//Event Listeners
encrypt.addEventListener('click', encryptMessage);
decode.addEventListener('click', decodeMessage);

//Functions
function encryptMessage(event){
    event.preventDefault();
    let caesarCipher = (str, key) => {
        return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
    }
    message = caesarCipher(encryptedMessage.value, Number(encryptedShift.value));
    messageEncrypted.innerText = message
}

function decodeMessage(event){
    event.preventDefault();
    let caesarCipher = (str, key) => {
        return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
    }
    message = caesarCipher(normalMessage.value, Number(decodeShift.value));
    messageDecoded.innerText = message
}

function checkEncryption(){
    if(encryptedMessage.value === '' || encryptedShift.value === ''){
        alert("One of the boxes are empty")
    }
}

function checkDecode(){
    if(normalMessage.value === '' || decodeShift.value === ''){
        alert("One of the boxes are empty")
    }
}