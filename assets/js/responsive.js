var toggleButtonList = document.getElementsByClassName('toggle-button')[0];
var navigation = document.getElementsByClassName('navigation')[0];
const navClasses = navigation.classList;
const display = document.getElementById('navid')

toggleButtonList.addEventListener('click', () => {
    toggleButtonList = document.getElementsByClassName('toggle-button')[0];

    console.log("main nav: " + navigation)
    const result = navClasses.toggle("hidden")
    /*
    navigation.textContent = `'display: ' ${
    result ? "flex" : "none"
        }; display: "${navClasses}".`;*/
})