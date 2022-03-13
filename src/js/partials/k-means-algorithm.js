
let k1 = [], k2 = [], i, copyk1 = []; // k1, k2 - массивы кластеров, copyk1 - копия массива k1.
let d_1, d_2;      // d_1 и d_2 - в них будем считать расстояние до центроидов.

const centroidsPoints = (start, del_1, del_2) => {                        // функция итерации

    for (i = start; i <= coords.length - 1; i++) {      // считаем центроиды начиная с эталонных точек
        d_1 = Math.sqrt(Math.pow((coords[i].x - e[0].x), 2) + Math.pow((coords[i].y - e[0].y), 2));
        d_2 = Math.sqrt(Math.pow((coords[i].x - e[1].x), 2) + Math.pow((coords[i].y - e[1].y), 2));
        if (d_1 < d_2) {
            let new_x_e1 = (coords[i].x + e[0].x) / del_1;
            let new_y_e1 = (coords[i].y + e[0].y) / del_1;
            e[0].x = new_x_e1;
            e[0].y = new_y_e1;
        }
        else if (d_1 > d_2) {
            let new_x_e2 = (coords[i].x + e[1].x) / del_2;
            let new_y_e2 = (coords[i].y + e[1].y) / del_2;
            e[1].x = new_x_e2;
            e[1].y = new_y_e2;
        }
    }                                                   // на выходе получаем массив "e" с центроидами

};

const distanceToCentroids = () => {
    k1.length = 0;                                      // обнуляем длины массивов кластеров
    k2.length = 0;
    for (i = 0; i <= coords.length - 1; i++) {          // распихиваем по условию в кластеры наши координаты
        d_1 = Math.sqrt(Math.pow((coords[i].x - e[0].x), 2) + Math.pow((coords[i].y - e[0].y), 2));
        d_2 = Math.sqrt(Math.pow((coords[i].x - e[1].x), 2) + Math.pow((coords[i].y - e[1].y), 2));
        if (d_1 < d_2) {
            k1.push(new storeCoordinate(coords[i].x, coords[i].y));
        }
        else if (d_1 > d_2) {
            k2.push(new storeCoordinate(coords[i].x, coords[i].y));
        }
    }
    };
