exports.convert = function (allSeconds) {
  var hours = Math.floor(allSeconds / 3600);
  var minutes = Math.floor(allSeconds % 3600 / 60);
  var seconds = allSeconds % 60;
  return '' + hours + ' godz. ' + minutes + ' min. ' + seconds + ' sek.';
}
