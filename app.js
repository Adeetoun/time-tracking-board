async function loadJSON() {
  const res = await fetch('data.json');
  data = await res.json();
  console.log(data);
}

function UpdateEvent(timeframes) {
  console.log(timeframes);
  console.log(data);
  const previousLabel = getPreviousLabel(timeframes);

  document.getElementById('work-current').innerHTML = (data[0].timeframes[timeframes].current +'hrs');
  document.getElementById('work-previous').innerHTML = (previousLabel + " - " + data[0].timeframes[timeframes].previous  +'hrs');

  document.getElementById('play-current').innerHTML = (data[1].timeframes[timeframes].current  + 'hrs');
  document.getElementById('play-previous').innerHTML = (previousLabel  + " - " + data[1].timeframes[timeframes].previous  +'hrs');

  document.getElementById('study-current').innerHTML = (data[2].timeframes[timeframes].current  + 'hrs');
  document.getElementById('study-previous').innerHTML = (previousLabel  + " - " + data[2].timeframes[timeframes].previous  +'hrs');

  document.getElementById('exercise-current').innerHTML = (data[3].timeframes[timeframes].current  +'hrs');
  document.getElementById('exercise-previous').innerHTML = (previousLabel  + " - " + data[3].timeframes[timeframes].previous  +'hrs');

  document.getElementById('social-current').innerHTML = (data[4].timeframes[timeframes].current  +'hrs');
  document.getElementById('social-previous').innerHTML = (previousLabel  + " - " + data[4].timeframes[timeframes].previous  +'hrs');

  document.getElementById('care-current').innerHTML = (data[5].timeframes[timeframes].current  +'hrs');
  document.getElementById('care-previous').innerHTML = previousLabel + " - " + data[5].timeframes[timeframes].previous  +'hrs';
}

function getPreviousLabel(timeframe) {
  switch(timeframe) {
    case 'daily':
    return 'Yesterday';
    case 'weekly':
      return 'Last week';
      case 'monthly':
        return 'Last month';
        default: 
        return "last" + timeframe;
  }
}

document.getElementById('daily-btn').addEventListener('click', function() {
  console.log('daily button');
  UpdateEvent('daily');
});

document.getElementById('weekly-btn').addEventListener('click', function() {
  console.log('weekly button');
  UpdateEvent('weekly');
});

document.getElementById('monthly-btn').addEventListener('click', function() {
  console.log('monthly button');
  UpdateEvent('monthly');
});

window.onload = loadJSON;