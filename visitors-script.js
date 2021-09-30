function popupFunction() {
    let buttonPopupOpen = document.getElementById("fixed-button");

    if (localStorage.getItem('visit-counter') == null) {
        localStorage.setItem('visit-counter', 0);
    }
    let currentVisitNumber = localStorage.getItem('visit-counter');
    currentVisitNumber = Number(currentVisitNumber);

    currentVisitNumber = currentVisitNumber + 1;
    localStorage.setItem('visit-counter', currentVisitNumber);


    if (currentVisitNumber < 2) {
        buttonPopupOpen.click();
    }
}

popupFunction();







    
   