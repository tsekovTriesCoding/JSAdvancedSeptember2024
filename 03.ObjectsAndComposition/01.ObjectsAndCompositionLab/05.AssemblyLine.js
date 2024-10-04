function createAssemblyLine() {
    return {
        hasClima: (object) => {
            object.temp = 21,
                object.tempSettings = 21,
                object.adjustTemp = () => { object.temp < object.tempSettings ? object.temp++ : object.temp--; }
        },
        hasAudio: (object) => {
            object.currentTrack = null,
                object.nowPlaying = () => {
                    if (object.currentTrack != null) {
                        console.log(`Now playing '${object.currentTrack.name}' by ${object.currentTrack.artist}`);
                    }
                }
        },
        hasParktronic: (object) => {
            object.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log("Beep! Beep! Beep!");
                } else if (distance >= 0.1 && distance <= 0.25) {
                    console.log("Beep! Beep!");
                } else if (distance >= 0.25 && distance <= 0.5) {
                    console.log("Beep!");
                }
            }
        }
    }
}


const assemblyLine = createAssemblyLine();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};


assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();


assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
console.log(myCar);