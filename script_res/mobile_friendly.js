function HidePokemon1()
{
    HideDisplay("pokemon1-display", "hide-pokemon1-button");
}

function HidePokemon2()
{
    HideDisplay("pokemon2-display", "hide-pokemon2-button");
}

function HideField()
{
    HideDisplay("field-display", "hide-field-button");
}

function HideDisplay(displayID, buttonID)
{
    var displayToHide = document.getElementById(displayID);
    var buttonToUpdate = document.getElementById(buttonID);
    if (displayToHide.style.display === "none")
    {
        displayToHide.style.display = "";
        buttonToUpdate.textContent = "▼";
    } else {
        displayToHide.style.display = "none";
        buttonToUpdate.textContent = "▲";
    }
}