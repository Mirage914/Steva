document.addEventListener('DOMContentLoaded', function () {
    console.log('Page loaded!');
});

let woodDictionary = {
    "Bukvu": 200,
    "Cer": 300,
    "Bagrem": 150,
    "Orah": 330,
    "Orah1": 120
};
let tableLegDictionary = {
    "First Choice": 800,
    "Second Choice": 850,
    "Third Choice": 900
};

let tableSurface = 0;
let selectedWood = null;
let selectedTableLeg = null;

function selectWood(text, card) {
    selectedWood = text;
    var imageSrc = card.querySelector('.card-img-top').src;

    var textForSelectedWood = 'Izabrali ste ' + text + ' kao drvo za sto.';

    displayImageAndText(imageSrc, textForSelectedWood, "selectedWood");
    showButtonForCalculate();
}

function selectTableLeg(text, card) {

    selectedTableLeg = text;

    var textForSelectedWood = 'Izabrali ste ' + text + ' kao nogar za sto.';
    var imageSrc = card.querySelector('.card-img-top').src;

    displayImageAndText(imageSrc, textForSelectedWood, "textForTableLeg");
    showButtonForCalculate();
}

function calculateTableSurface() {



    const tableLengthCm = document.getElementById('tableLength').value;
    const tableWidthCm = document.getElementById('tableWeight').value;

    console.log('Sirina - ' + tableWidthCm);
    console.log('visina - ' + tableLengthCm);



    if (!isNaN(tableLengthCm) && !isNaN(tableWidthCm) && tableLengthCm != 0 && tableWidthCm != 0) {
        var areaInSquareMeters = (tableLengthCm * tableWidthCm) / 10000;
        tableSurface = areaInSquareMeters;
        document.getElementById('valueForTableSurface').innerHTML = '<p>Povrsina stola: ' + areaInSquareMeters.toFixed(2) + ' m²</p>';
        showButtonForCalculate();
    } else {
        document.getElementById('valueForTableSurface').innerHTML = '';
        tableSurface=0;
        showButtonForCalculate();
    }
}

function calculateAmountPrice() {

    if (tableSurface != 0 && selectedWood != null && selectedTableLeg != null) {
        var getWoodPrice = woodDictionary[selectedWood];
        var getTableLegPrice = tableLegDictionary[selectedTableLeg];

        var result = tableSurface * (getWoodPrice + getTableLegPrice);

        document.getElementById('tablePrice').innerHTML = '<p>Cena stola: ' + '<b>' + result + '<b/>' + ' €</p>';

        showButtonForCalculate();
    } else {
        document.getElementById('tablePrice').innerHTML = '';
    }

}

function displayImageAndText(imageSrc, text, itemId) {
    var imageElement = document.createElement("img");
    imageElement.src = imageSrc;
    imageElement.style.width = "50%"; // Set width as needed
    imageElement.style.height = "250px";
    imageElement.style.objectFit = "cover"; //

    var container = document.getElementById(itemId);
    container.innerHTML = ''; // Clear previous content
    container.innerHTML += '<p>' + text + '</p>';
    container.appendChild(imageElement);
}
function showButtonForCalculate() {
    var myButton = document.getElementById("calculateButton");
    if (tableSurface != 0 && selectedWood != null && selectedTableLeg != null) {
        myButton.style.display = "block";
    }
    else{
        myButton.style.display = "none";
    }
}

