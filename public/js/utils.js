function picSrc(link, size, dont_scale, size_direction) {
  if (link !== undefined && link.length != 0) {
    var fit = dont_scale ?  '&fit=scale' : '&fit=max',
        dir = size_direction || 'h';
    if (dir != 'w' && dir != 'h') dir = 'h';
    return link + '/convert?' + dir + '=' + size + fit;
  } else {
    return "";
  }
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
