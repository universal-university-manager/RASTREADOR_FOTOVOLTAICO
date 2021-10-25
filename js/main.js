jQuery(document).ready(function ($) {
  window.onscroll = function () {
    if (window.pageYOffset > 140) {
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
    }
  };

  let btns = $("#services .button-group button");

  const fetchPokemon = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/25'
  
    fetch(url)
      .then(response => response.json())
      .then(pokemon => {
        console.log(pokemon)
      })
  }

  btns.click(function (e) {
    $("#services .button-group button").removeClass("active");
    e.target.classList.add("active");

    let selector = $(e.target).attr("data-filter");
    $("#services .grid").isotope({
      filter: selector,
    });
  });

  $(window).on("load", function () {
    $("#services .grid").isotope({
      filter: "*",
    });
  });

  $(".grid .popup-link").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
      tPrev: "Anterior",
      tNext: "Próxima",
      tCounter: "%curr% de %total%",
    },
  });

  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: true,
    lazyLoad: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
    },
  });

  function createtable() {
    fetchPokemon()
  }
});
