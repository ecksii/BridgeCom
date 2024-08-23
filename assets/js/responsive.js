const toggleButtonList = document.getElementsByClassName('toggle-button')[0];
const navigation = document.getElementsByClassName('navigation')[0];
const navClasses = navigation.classList;
const display = document.getElementById('navid')


toggleButtonList.addEventListener('click', () => {

    const result = navClasses.toggle("hidden")
    /*
    navigation.textContent = `'display: ' ${
    result ? "flex" : "none"
        }; display: "${navClasses}".`;*/
})