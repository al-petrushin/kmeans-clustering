
    class storeCoordinate {  // класс для массива координат начальных точек
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }

    let e = [], coords = []; // e - массив с начальными центроидами кластеров (первые две точки).

    coords.push(new storeCoordinate(-2, 0));
    coords.push(new storeCoordinate(-2, 1));               // наш массив на входе с координатами
    coords.push(new storeCoordinate(-3, 0));
    coords.push(new storeCoordinate(4, 0));
    coords.push(new storeCoordinate(3, 0));
    coords.push(new storeCoordinate(0, 0));
    coords.push(new storeCoordinate(-1, 1));
    coords.push(new storeCoordinate(2, 6));
    coords.push(new storeCoordinate(-2, -1));
    coords.push(new storeCoordinate(4, 2));
    coords.push(new storeCoordinate(-7, 11));
    coords.push(new storeCoordinate(10, 1));
    coords.push(new storeCoordinate(2, 7));
    coords.push(new storeCoordinate(4, -3));
    coords.push(new storeCoordinate(7, 4));
    coords.push(new storeCoordinate(-3, 1));
    coords.push(new storeCoordinate(-1, 13));
    coords.push(new storeCoordinate(4, -6));
    coords.push(new storeCoordinate(-1, -1));
    coords.push(new storeCoordinate(-4, -2));
    coords.push(new storeCoordinate(-2, 0));
    coords.push(new storeCoordinate(-12, 11));               // наш массив на входе с координатами
    coords.push(new storeCoordinate(-3, 3));
    coords.push(new storeCoordinate(7, -7));
    coords.push(new storeCoordinate(-7, 7));
    coords.push(new storeCoordinate(1, 1));
    coords.push(new storeCoordinate(-5, 9));
    coords.push(new storeCoordinate(13, -6));
    coords.push(new storeCoordinate(-6, -3));
    coords.push(new storeCoordinate(14, 12));
    coords.push(new storeCoordinate(-6, 4));
    coords.push(new storeCoordinate(0, -4));
    coords.push(new storeCoordinate(-3, 0));
    coords.push(new storeCoordinate(12, 12));
    coords.push(new storeCoordinate(-7, 4));
    coords.push(new storeCoordinate(-11, 1));
    coords.push(new storeCoordinate(8, 13));
    coords.push(new storeCoordinate(-8, -4));
    coords.push(new storeCoordinate(-5, -5));
    coords.push(new storeCoordinate(5, 2));
    coords.push(new storeCoordinate(-12, 12));
    coords.push(new storeCoordinate(10, 5));

    e.push(new storeCoordinate(coords[0].x, coords[0].y));                     // начальные центроиды кластеров
    e.push(new storeCoordinate(coords[1].x, coords[1].y));


