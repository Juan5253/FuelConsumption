/*The amount of kilometers per liter is in terms on fuel consumption, 
the range in kilometers that a vehicle can travel while consuming one liter of gas.*/
function calculateFuelComsumption(liters, kms)
{
    const kmPerLiter = kms/liters;
    return kmPerLiter;
}

function onClickButtonCalculateKmPerLiter()
{
    //#region "Capture and convert values into float"
    const inputLiters = document.getElementById("inputLiters");
    const litersValue = parseFloat(inputLiters.value);
    const inputKms = document.getElementById("inputKms");
    const kmsValue = parseFloat(inputKms.value);
    //#endregion
    //#region "Execute the calculation and validate decimals"
    const kmsPerLiter = calculateFuelComsumption(litersValue, kmsValue);
    const kmsPerLiterFixed = kmsPerLiter.toFixed(1);
    //#endregion
    //#region "Print values"
    const kmPerLiterResult = document.getElementById("kmsPerLiterResult");
    kmPerLiterResult.innerText = kmsPerLiterFixed + " km/l";
    //#endregion
}