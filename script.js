const body = document.querySelector("body");
const darkLight = document.querySelector("#darkLight");
const sidebar = document.querySelector(".sidebar");
const submenuItems = document.querySelectorAll(".submenu_item");
const sidebarOpen = document.querySelector("#sidebarOpen");
const sidebarClose = document.querySelector(".collapse_sidebar");
const sidebarExpand = document.querySelector(".expand_sidebar");
const sectionsPrincipal = document.querySelector(".sectionsPrincipal");
const sectionsContent = document.querySelector(".sectionsAbout");
const sectionsPortfolio = document.querySelector(".sectionsPortfolio");
const sectionsContact = document.querySelector(".sectionsContact");
// const titleSection = document.querySelector(".title-section");

sidebarOpen.addEventListener("click", () => sidebar.classList.toggle("close"));

sidebarClose.addEventListener("click", () => {
  sidebar.classList.add("close", "hoverable");
});
sidebarExpand.addEventListener("click", () => {
  sidebar.classList.remove("close", "hoverable");
});

sidebar.addEventListener("mouseenter", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
    sectionsPrincipal.classList.remove("expanded");
    sectionsContent.classList.remove("expanded");
    sectionsPortfolio.classList.remove("expanded");
    sectionsContact.classList.remove("expanded");
    // titleSection.classList.remove("expanded");
  }
});
sidebar.addEventListener("mouseleave", () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
    sectionsPrincipal.classList.add("expanded");
    sectionsContent.classList.add("expanded");
    sectionsPortfolio.classList.add("expanded");
    sectionsContact.classList.add("expanded");
    // titleSection.classList.add("expanded");
  }
});

darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI;
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});

submenuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.toggle("show_submenu");
    submenuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show_submenu");
      }
    });
  });
});

if (window.innerWidth < 768) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

// ------Audio -----

var audio = document.getElementById("myAudio");
var playPauseButton = document.getElementById("playPauseButton");
var playPauseIcon = document.getElementById("playPauseIcon");
var isPlaying = false;

playPauseButton.addEventListener("click", function () {
  if (isPlaying) {
    audio.pause();
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
  } else {
    audio.play();
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
  }

  isPlaying = !isPlaying;
});

// ------SKILLS------
$(document).ready(function () {
  if (
    !$("#myCanvas").tagcanvas(
      {
        textColour: "#B32136",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        weight: true,
      },
      "tags"
    )
  ) {
    // something went wrong hide the canvas container,
    $("#myCanvasContainer");
  }
});

// ------FORMULARIO------

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_89lvv6p";
  const templateID = "template_dmu83hm";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      // alert('Email enviado!');
      // Swal.fire('Email enviado!')
      const Toast = Swal.mixin({
        toast: true,
        position: "center-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Email enviado con éxito",
      });
      this.reset();
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

 // ------Boton volver arriba------
  var toTopButton = document.getElementById('toTopButton');
  
  window.addEventListener('scroll', toggleToTopButton);
  
  function toggleToTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTopButton.style.display = 'block';
    } else {
      toTopButton.style.display = 'none';
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  //------Obtener clima local------

 // function getWeather() {
    // Obtener la ubicación actual del dispositivo
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   var latitude = position.coords.latitude;
    //   var longitude = position.coords.longitude;

      // Llamar a la API de OpenWeatherMap con la ubicación actual
      // var apiKey = "0f6930562b3d19669a548c5e885d4df6"; // Reemplaza con tu clave de API de OpenWeatherMap
      // var apiUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=es`;

      // fetch(apiUrl)
      //   .then((response) => response.json())
      //   .then((data) => {
          // Extraer información del clima actual
          // var city = data.name;
          // var temperature = data.main.temp;
          // var weatherDescription = data.weather[0].description;
          // var iconCode = data.weather[0].icon;

          // Mostrar los resultados en la barra de navegación

          // document.getElementById("city").textContent = `${city}`;
          // document.getElementById(
          //   "temperature"
          // ).textContent = `${temperature}ºC`;
          // document.getElementById(
          //   "weather-description"
          // ).textContent = `${weatherDescription}`;

          // Mostrar el icono del clima
  //         var iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  //         var weatherIcon = document.getElementById("weather-icon");
  //         weatherIcon.src = iconUrl;
  //         weatherIcon.alt = weatherDescription;
  //       });
  //   });
  // }

  // Llamar a la función getWeather al cargar la página
  // window.onload = getWeather;