/*

Links:

  whatsapp: https://wa.me/55019994122340
  github:   https://github.com/Marcelo-Marinho
  linkedin: https://www.linkedin.com/in/marcelo-marinho/
  celular:
  email:    https://mail.google.com/mail/u/0/?fs=1&to=marcelohenrique0050@gmail&tf=cm&cc=marcelohenrique0050@gmail.com
  fiverr:
  itch.io:

*/

function link_open(url) {
  window.open(url, '_blank').focus();
}

function read_get(var_get) {

  //Definindo variaveis
  var result = null,
      tmp = [];

  //Loop para pegar o que está no link através do método GET
  location.search
      .substr(1)
      .split("&")
      .forEach(function (item) {
        tmp = item.split("=");
        if (tmp[0] === var_get) result = decodeURIComponent(tmp[1]);
      });
  return result;
}