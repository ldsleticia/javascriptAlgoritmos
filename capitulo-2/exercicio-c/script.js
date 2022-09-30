function send() {
  const durationValue = document.getElementById("inFilmDuration").value;
  const filmName = document.getElementById("inFilmName").value;

  const hours = Math.floor(durationValue / 60);
  const minutes = durationValue % 60;
  const hoursText = `00${hours}`.slice(-2);
  const minutesText = `00${minutes}`.slice(-2);


  const answer = document.getElementById('outNameAndDuration').textContent = `O filme '${filmName}' tem duração de ${hoursText} hora(s) e ${minutesText} minutos`
}
