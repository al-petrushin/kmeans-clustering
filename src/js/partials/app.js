$(document).ready(function(){

    fastPopUpHide();

    let chartBox = document.getElementById('chart').getContext('2d');

    let chart = new Chart(chartBox, {  // начальный chart
        type: 'bubble',
        data: {
            datasets:
                [{
                    label: "ALL DOTS",
                    backgroundColor: "#1db2f5",
                    borderColor: "#1db2f5",
                    borderWidth: 7,
                    data: coords
                }]
        },
        options: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    fontColor: '#87faff'
                },
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        color: "#a3a3a3",
                        zeroLineWidth: 3,
                        zeroLineColor: "#a3a3a3",
                        drawTicks: true,
                        tickMarkLength: 3
                    },
                    ticks: {
                        fontSize: 15,
                        fontStyle: "bold",
                        fontColor: "#a3a3a3",
                        padding: 10
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: "#a3a3a3",
                        zeroLineWidth: 3,
                        zeroLineColor: "#a3a3a3",
                        drawTicks: true,
                        tickMarkLength: 3
                    },
                    ticks: {
                        fontSize: 15,
                        fontStyle: "bold",
                        fontColor: "#a3a3a3",
                        padding: 10
                    }
                }]
            },
            title: {
                display: true,
                text: 'K-means Clustering',
                color: "#ff746d",
                fontSize: 25
            },
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                    top: 60,
                    bottom: 0
                }
            }
        }
    });

    $("#buttonAddNewDots").click(function () {
        PopUpShow();
    });

    $("#addNewCoord").click(function () { // добавление ширины и увеличение ширина контейнера
        addCoordsBlock();

        let popUpWrap = $('#popUp-content-wrap'),
            widthWrap = popUpWrap.width();
        popUpWrap.animate({
                width: widthWrap + 88,
                maxWidth: 1200
            }, 'fast');

        let coordsDiv = $('#popUp-content-center-wrap'),
            widthDiv = coordsDiv.width();
        coordsDiv.animate({
            width: widthDiv + 90,
            maxWidth: 1130
        }, 'fast');

    });

    $("#buttonClosePopUp").click(function () {
        addNewDots(); // добавляем новые точки
        chart.update(); // обновляем график
        defaultPopUp(); // уводим popUp в стандартный вид
        PopUpHide(); // скрываем его
    });

    $("#buttonStartClustering").click(function () {
        distanceToCentroids();
        do{   // цикл итераций
            centroidsPoints(0, k1.length, k2.length);
            distanceToCentroids();
            copyArray(copyk1, k1);
        }
        while(arraysEqual(copyk1,k1) === true);{   // если вылетаем в совпадения массивов, то выводим их пользователю
            chart.data.datasets = [{
                    label: "DOTS OF FIRST CLUSTER",
                    backgroundColor: "#9ff57a",
                    borderColor: "#54f556",
                    borderWidth: 7,
                    data: k1
                },
                {
                    label: "DOTS OF SECOND CLUSTER",
                    backgroundColor: "#f53334",
                    borderColor: "#f52039",
                    borderWidth: 7,
                    data: k2
                },
                {
                    label: "CENTROIDS",
                    backgroundColor: "#f5ec19",
                    borderColor: "#f5ed17",
                    borderWidth: 3,
                    data: e
                },
                {
                    label: "NONCLUSTERED DOTS",
                    backgroundColor: "#1db2f5",
                    borderColor: "#1db2f5",
                    borderWidth: 7,
                    data: nonClusteredDot
                },
            ];
            chart.update();
            console.log(k1);
            console.log(k2);
        }
    })

});