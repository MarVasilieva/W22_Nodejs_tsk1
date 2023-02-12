const moment = require('moment');
let now = moment();
moment.locale('ru');
console.log(now.format('dddd, MMMM DD YYYY'));
document.getElementById('moment').innerHTML = now;

const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Пнд', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье'],
    datasets: [{
      label: '# количество потерянного веса в день',
      data: [300, 100, 100, 200, 200, 0, 100],
      borderWidth: 3
    }]
  },    
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const ctx1 = document.getElementById('myChart1');

new Chart(ctx1, {
type: 'line',
data: {
  labels: ['Пнд', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье'],
  datasets: [{
    label: '# количество потерянного веса в день',
    data: [500, 190, 30, 50, 20, 30, 20],
    borderWidth: 3
  }]
},    
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});
const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
type: 'bar',
data: {
  labels: ['Пнд', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье'],
  datasets: [{
    label: '# количество сьеденных углеводов в день',
    data: [400, 190, 130, 50, 120, 30, 20],
    borderWidth: 3
  }]
},    
options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
}
});
var emblaNode = document.querySelector('.embla')
    var options = {
      loop: false
    }

    var embla = EmblaCarousel(emblaNode, options)




