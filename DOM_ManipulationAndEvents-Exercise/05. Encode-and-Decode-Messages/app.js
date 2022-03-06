function encodeAndDecodeMessages() {
    let sendBtn = document.getElementsByTagName('button')[0];
    let readBtn = document.getElementsByTagName('button')[1];
    let text1 = document.getElementsByTagName('textarea')[0];
    let text2 = document.getElementsByTagName('textarea')[1];
    sendBtn.addEventListener('click', encode);
    readBtn.addEventListener('click', decode);
    let arr1 = [];
    let array2 = [];
    function encode(ev) {
        let input = text1.value;
        let output1 = '';
        for (let c = 0; c < input.length; c++) {
            output1 += String.fromCharCode(input.charCodeAt(c) + 1);
        }
        text2.value = output1;
        text1.value = '';
    }
    function decode(ev) {
        let input = text2.value;
        let output = '';
        for (let c = 0; c < input.length; c++) {
            output += String.fromCharCode(input.charCodeAt(c) - 1);
        }
        text2.value = output;
        
    }
}