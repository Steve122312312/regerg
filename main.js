
Webcam.attach("#camera")

Webcam.set({
    width: 500,
    height: 400,
    image_format: "png",
    png_quality: 90
})

function captureimage() {
    Webcam.snap(function (datauri) {
        document.getElementById("result").innerHTML = "<img src='" + datauri + "' id='snapshot'>"
    })
}

console.log(ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dXrrjnmpt/model.json", modelLoaded)

function modelLoaded() {
    console.log("HELLO")
}

function gotResults(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        console.log(results[0].label,results[0].confidence)
        document.getElementById("objectName").innerHTML = 
        document.getElementById("accuracy").innerHTML =
        

    }
}


function takeSnapshot(){
    Save()
}