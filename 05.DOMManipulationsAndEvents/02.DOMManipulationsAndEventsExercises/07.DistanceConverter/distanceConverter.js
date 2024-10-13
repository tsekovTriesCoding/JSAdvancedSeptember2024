function attachEventsListeners() {
    const convertButton = document.getElementById('convert');
    const inputDistance = document.getElementById('inputDistance');
    const inputUnitsSelectElement = document.getElementById('inputUnits');
    const outputUnitsSelectElement = document.getElementById('outputUnits');
    const outputDistance = document.getElementById('outputDistance');

    let converterToMeters = {
        km: function (value) {
            return value * 1000;
        },
        m: function (value) {
            return value;
        },
        cm: function (value) {
            return value / 100;
        },
        mm: function (value) {
            return value / 1000;
        },
        mi: function (value) {
            return value * 1609.344;
        },
        yrd: function (value) {
            return value * 0.9144;
        },
        ft: function (value) {
            return value * 0.3048;
        },
        in: function (value) {
            return value * 0.0254;
        },
    };

    let converterToWantedDistance = {
        km: function (value) {
            return value / 1000;
        },
        m: function (value) {
            return value;
        },
        cm: function (value) {
            return value * 100;
        },
        mm: function (value) {
            return value * 1000;
        },
        mi: function (value) {
            return value / 1609.344;
        },
        yrd: function (value) {
            return value / 0.9144;
        },
        ft: function (value) {
            return value / 0.3048;
        },
        in: function (value) {
            return value / 0.0254;
        },
    };

    convertButton.addEventListener('click', onConvertButtonClickHandler);

    function onConvertButtonClickHandler() {
        const selectedInputUnitValue = inputUnitsSelectElement.options[inputUnitsSelectElement.selectedIndex].value;
        const selectedOutputUnitValue = outputUnitsSelectElement.options[outputUnitsSelectElement.selectedIndex].value;
    
        const inputDistanceInMeters = converterToMeters[selectedInputUnitValue](Number(inputDistance.value));
        const wantedDistanceConverted = converterToWantedDistance[selectedOutputUnitValue](inputDistanceInMeters);
        outputDistance.value = wantedDistanceConverted;
    }
}