$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");
  var btn_surprise = $("#surprise");

  envelope.click(function () {
      open();
  });
  btn_open.click(function () {
    $("body > *").not("#loading-screen").fadeOut(); // Oculta todo excepto el loading
    $("#loading-screen").fadeIn(); // Muestra el loading

    setTimeout(function () {
        window.location.href = "card love.html"; // Cambia de página después de 3 segundos
    }, 3000);
  });
  btn_reset.click(function () {
      close();
  });

  btn_surprise.click(function () {
    $("body > *").not("#loading-screen").fadeOut(); // Oculta todo excepto el loading
    $("#loading-screen").fadeIn(); // Muestra el loading

    setTimeout(function () {
        window.location.href = "surprise.html"; // Cambia de página después de 3 segundos
    }, 3000);
});

  function open() {
      envelope.addClass("open").removeClass("close");
      window.location.href = "card love.html";
  }

  function close() {
      envelope.addClass("close").removeClass("open");
  }
});