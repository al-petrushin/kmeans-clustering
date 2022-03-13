
let nonClusteredDot = []; // массив точек не входящих в кластеры

const addNewDots = () => { // функция добавления точек
    let coordsX = [];
    let coordsY = [];


    $('input[name^="taskx"]').each(function () { // из input Х в массив
        coordsX.push($(this).val());
    });
    $('input[name^="tasky"]').each(function () { // из input Y в массив
        coordsY.push($(this).val());
    });

    for(i=0; i<=coordsX.length-1; i++){
        let xCoords = parseFloat(coordsX[i].replace(/^"(.+(?="$))"$/, '$1')); //парсим координаты в массивы точек
        let yCoords = parseFloat(coordsY[i].replace(/^"(.+(?="$))"$/, '$1'));
        nonClusteredDot.push(new storeCoordinate(xCoords, yCoords));
        coords.push(new storeCoordinate(xCoords, yCoords));
    }
};

const arraysEqual = (a, b) => {   // функция для проверки одинаковы ли массивы
    return JSON.stringify(a) === JSON.stringify(b);
};

const copyArray = (copiedArr, ArrToCopy) => { // копирование массива
    copiedArr.push.apply(copiedArr, ArrToCopy);
};

const PopUpShow = () => {
    $('#popupAddDots').fadeIn(300);
};

const PopUpHide = () => {
    $('#popupAddDots').fadeOut(300);
};

const fastPopUpHide = () => {
    $('#popupAddDots').hide();
};

const addCoordsBlock = () => { // добавление блока с координатами
    $("#container-div-coords").append('<div class="coords-block">\n' +
        '<input class="coords-block__coords-container" placeholder=" " minlength="1" maxlength="10" type="number" name="taskx[]" />\n' +
        '<input class="coords-block__coords-container" placeholder=" " minlength="1" maxlength="10" type="number" name="tasky[]" />\n' +
        '</div>');
};

const defaultPopUp = () => {
    $('#popUp-content-center-wrap').animate({
        width: 90
    }, 'fast');

    $('#popUp-content-wrap').animate({
        width: 200
    }, 'fast');

    $(".coords-block").remove();
    addCoordsBlock();
};

jQuery(function($){ // функция закрытия popUp окна
    $(document).mouseup(function (e){
        const div = $("#popUp-content-wrap");
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            PopUpHide(); // скрываем его
            defaultPopUp();
        }
    });
});


