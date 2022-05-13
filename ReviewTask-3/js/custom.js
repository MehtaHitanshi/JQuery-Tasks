$(document).ready(function () {
    $(".refreshBtn").hide();
    var iconsArr = ['cube', 'car', 'truck', 'coffee', 'diamond', 'bicycle', 'cubes', 'quora', 'calendar', 'camera', 'flag', 'gear', 'bookmark', 'bug', 'bus', 'tag', 'bell', 'check', 'bank', 'building', 'arrows', 'fire', 'flash', 'eye', 'frown', 'futbol', 'gavel', 'flask', 'feed', 'gift', 'globe', 'hand-paper', 'key', 'info', 'hashtag', 'image', 'glass', 'gamepad', 'pencil', 'plug', 'random', 'mobile', 'map-marker', 'phone', 'question', 'reply', 'remove', 'tint', 'road', 'shopping-bag'];
    var arr = [];
    var emptyArr = [];
    var temp = [];
    var count = 0;
    var newRandomArr = [];

    while (arr.length < 24) {
        emptyArr = iconsArr[(Math.floor(Math.random() * 12))];
        if (arr.includes(emptyArr))
            continue;
        else {
            arr.push(emptyArr);
            arr.push(emptyArr);
        }
        // console.log(emptyArr);
        // console.log(arr);
    }

    while (arr.length > 0) {
        var random = Math.floor(Math.random() * arr.length);
        var value = arr[random];
        arr.splice(random, 1);
        newRandomArr.push(value);
        console.log(value, "value");
    }

    for (i = 1; i < 5; i++) {
        $("table").append(`<tr></tr>`);
        for (j = 1; j < 7; j++) {
            $("tr").last().append(`<td><i data-text ="${newRandomArr[count]}" class="fa fa-${newRandomArr[count]}" aria-hidden="true"></i></td>`);
            count++;
        }
    }


    $("td i").hide();
    $("td").click(function () {
        $(this).find("i").show();
        var text = $(this).find(">i").attr("data-text");
        console.log(text, "text");
        temp.push(text);
        // console.log(temp,"t");

        if (temp.length == 2) {
            $("td").prop("disabled", true);
            if (temp[0] == temp[1]) {
                $(`i[data-text=${temp[0]}]`).parent().prop("disabled", true);
                $(`i[data-text=${temp[1]}]`).parent().prop("disabled", true);
                $(`i[data-text=${temp[0]}]`).parent().css("background-color", "pink");
                $(`i[data-text=${temp[1]}]`).parent().css("background-color", "pink");
                temp = [];
            }
            else {
                $(`i[data-text=${temp[0]}]`).hide(200);
                $(`i[data-text=${temp[1]}]`).hide(200);
                $(`i[data-text=${temp[0]}]`).parent().prop("disabled", false);
                $(`i[data-text=${temp[1]}]`).parent().prop("disabled", false);
                temp = [];
            }
        }
    });
});