// form内でEnterキーを押した時、submitされない。
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('form');

  form.addEventListener('keypress', function (event) {
    if(event.key === 'Enter') {
      event.preventDefault();
    }
  });
});