function enviar() {
  let durationValue = document.getElementById("inFilmDuration").value;
  let filmName = document.getElementById("inFilmName").value;
  let transformInHours = (durationValue / 60).toFixed(2);
  let answer = (document.getElementById(
    "outNameAndDuration"
  ).textContent = `O filme '${filmName}' tem duração de ${Number(
    transformInHours
  )} hora(s)`);
}
