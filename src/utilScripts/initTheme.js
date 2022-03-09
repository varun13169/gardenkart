const initTheme = () => {
    localStorage.setItem("isDarkModeEn", "1");
    const isDarkModeEn = localStorage.getItem("isDarkModeEn");
    if(isDarkModeEn === null || isDarkModeEn === "0") {
        // darModeImg.style.display = "none";
        // lgtModeImg.style.display = "block";
        return ""
    }
    else if(isDarkModeEn === "1") {
        // darModeImg.style.display = "block";
        // lgtModeImg.style.display = "none";
        return "dark-theme"
    }
    else {
        console.error("Error in theme mode, please debug")
    }
}

export { initTheme }
