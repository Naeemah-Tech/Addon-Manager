const toggles = document.querySelectorAll(".toggle-on-off-btn");

toggles.forEach(function(toggle) {
    toggle.addEventListener("click", function() {
        if (toggle.classList.contains("active-btn")) {
            toggle.classList.remove("active-btn");
            toggle.classList.add("inactive-btn");
        } else {
            toggle.classList.remove("inactive-btn");
            toggle.classList.add("active-btn");
        }
    })
})

const allBtn = document.querySelector("#all");
const activeBtn = document.querySelector("#active");
const inactiveBtn = document.querySelector("#inactive");

const extensions = document.querySelectorAll(".extension-box");

allBtn.addEventListener("click", function () {

    showAllExtensions();

    selectFilter(allBtn);

});

function showAllExtensions() {
    extensions.forEach(function(extension) {
        if(!extension.classList.contains("hidden")) {
            extension.style.display = "flex";
        }
    })
}

activeBtn.addEventListener("click", function() {

    selectFilter(activeBtn);

    extensions.forEach(function (extension) {
        const toggle = extension.querySelector(".toggle-on-off-btn");

        if (toggle.classList.contains("active-btn") &&
            !extension.classList.contains("hidden")
        ) {
            extension.style.display = "flex";
        } else {
            extension.style.display = "none"
        }
    });

});

inactiveBtn.addEventListener("click", function() {

    selectFilter(inactiveBtn);
    
    extensions.forEach(function (extension) {
        const toggle = extension.querySelector(".toggle-on-off-btn");

        if (toggle.classList.contains("inactive-btn") &&
            !extension.classList.contains("hidden")
        ) {
            extension.style.display = "flex";
        } else {
            extension.style.display = "none"
        }
    });

});

function selectFilter(button) {

    allBtn.classList.remove("selected");
    activeBtn.classList.remove("selected");
    inactiveBtn.classList.remove("selected");

    button.classList.add("selected")

}

const removeBtns = document.querySelectorAll(".remove-btn");

removeBtns.forEach(function (removeBtn) {
      removeBtn.addEventListener("click", function() {
                const extension = removeBtn.closest(".extension-box");
                extension.remove();
      });
});

const themeIcon = document.querySelector(".theme-icon-container");
const icon = themeIcon.querySelector("img");

themeIcon.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        icon.src = "assets/images/icon-sun.svg";
        icon.alt = "Switch to light mode";

    } else {

        icon.src = "assets/images/icon-moon.svg";
        icon.alt = "Switch to dark mode"
    }
})

const searchBar = document.body.querySelector("#search-bar");

searchBar.addEventListener("input", function() {

    const searchTerm = searchBar.value.toLowerCase();

    extensions.forEach(function(extension) {
        const name = extension.querySelector("h3");
        const description = extension.querySelector("p");
        const extensionName = name.textContent.toLowerCase() ;
        const extensionDescription = description.textContent.toLowerCase(); 

        if (extensionName.includes(searchTerm) ||
            extensionDescription.includes(searchTerm)
        ) {
            extension.style.display = "flex";
        } else {
            extension.style.display = "none";
        };
    });
})