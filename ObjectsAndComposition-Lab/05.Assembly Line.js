function createAssemblyLine(){
    function hasClima(inputObj){
        inputObj.temp = Number(21);
        inputObj.tempSettings = Number(21);
        inputObj.adjustTemp = () => {
            if (inputObj.temp > inputObj.tempSettings){
                inputObj.temp -= 1;
            }else if (inputObj.tempSettings > inputObj.temp){
                inputObj.temp += 1
            }
        }
    }
    function hasAudio(inputObj){
        inputObj.currentTrack = {
            name: null,
            artist: null
        }
        inputObj.nowPlaying = () => {
            console.log(`Now playing ${inputObj.currentTrack.name} by ${inputObj.currentTrack.artist}`);
        }
    }
    function hasParktronic(inputObj){
        inputObj.checkDistance = (distance) => {
            let outputMessage = '';
            if (distance < 0.1){
                outputMessage = "Beep! Beep! Beep!";
            }else if (distance < 0.25){
                outputMessage = "Beep! Beep!";
            }else if (distance < 0.5){
                outputMessage = "Beep!";
            }
            console.log(outputMessage);
        }
    }
    let decorators = {
        hasClima,
        hasAudio,
        hasParktronic
    };
    return decorators;
    
}
const assemblyLine = createAssemblyLine();

const myCar = {make: 'Toyota', model: 'Avensis'};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {name: 'Never Gonna Give You Up', artist: 'Rick Astley'};
myCar.nowPlaying();
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);


