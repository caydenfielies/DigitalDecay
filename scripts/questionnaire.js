const ctx = document.getElementById('question1').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Yes', 'No'],
        datasets: [{
            label: 'Percentage of participants',
            data: [66.67, 33.33],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    }
});

const ctx2 = document.getElementById('question2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Yes', 'No'],
        datasets: [{
            label: 'Percentage of participants',
            data: [56.67, 43.33],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    }
});

const ctx3 = document.getElementById('question3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: ['Rarely', 'Occasionally', 'Frequently', 'Almost always'],
        datasets: [{
            label: 'Percentage of participants',
            data: [26.67, 63.33, 10, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
});

const ctx4 = document.getElementById('question4').getContext('2d');
const myChart4 = new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: ['Not knowledgeable', 'Somewhat knowledgeable', 'Knowledgeable', 'Very knowledgeable'],
        datasets: [{
            label: 'Percentage of participants',
            data: [20, 56.67, 20, 3.33],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
});

const ctx5 = document.getElementById('question5').getContext('2d');
const myChart5 = new Chart(ctx5, {
    type: 'pie',
    data: {
        labels: ['1 (Not concerned)', '2', '3', '4', '5', '6', '7', '8', '9', '10 (Extremely concerned)'],
        datasets: [{
            label: 'Percentage of participants',
            data: [10, 0, 3.33, 10, 26.67, 20, 20, 10, 0, 0],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
});

const ctx6 = document.getElementById('question6').getContext('2d');
const myChart6 = new Chart(ctx6, {
    type: 'pie',
    data: {
        labels: ['Rarely', 'Occasionally', 'Frequently', 'Almost always'],
        datasets: [{
            label: 'Percentage of participants',
            data: [86.67, 13.33, 0, 0],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
});

const ctx7 = document.getElementById('question7').getContext('2d');
const myChart7 = new Chart(ctx7, {
    type: 'pie',
    data: {
        labels: ['Rarely', 'Occasionally', 'Frequently', 'Almost always'],
        datasets: [{
            label: 'Percentage of participants',
            data: [66.67, 20, 6.67, 6.67],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
});

const ctx8 = document.getElementById('question8').getContext('2d');
const myChart8 = new Chart(ctx8, {
    type: 'pie',
    data: {
        labels: ['1 (Not willing)', '2', '3', '4', '5', '6', '7', '8', '9', '10 (Extremely willing)'],
        datasets: [{
            label: 'Percentage of participants',
            data: [6.67, 6.67, 3.33, 3.33, 13.33, 13.33, 10, 13.33, 13.33, 16.67],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
});