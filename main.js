//show sidenav

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("shadowBox").style.width = "100%"
  }


//hide mobile sidenav
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("shadowBox").style.width = "0"
}

//show list of site features
function listFeatures(){
    document.getElementById('featuresBox').classList.toggle('hidden')
    document.getElementById('featuresArrow').classList.toggle('open')
}

function listCompany(){
    document.getElementById('companyBox').classList.toggle('hidden')
    document.getElementById('companyArrow').classList.toggle('open')
}

function listFeaturesTop(){
    document.getElementById('popupFeatures').classList.toggle('hidden')
    document.getElementById('featuresArrowTop').classList.toggle('open')
}

function listCompanyTop(){
    document.getElementById('popupCompany').classList.toggle('hidden')
    document.getElementById('companyArrowTop').classList.toggle('open')
}