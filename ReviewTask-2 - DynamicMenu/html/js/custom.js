$(document).ready(function () {
    $('.update').hide();
    var idIncre = 1;
    $("#add").click(function () {
        var inputVal = $('#inputValue').val();
        if ($("#all-dropdown").find('select').length > 1) {
            var targetSel = $("#all-dropdown").find('select').last();
            if (targetSel.val() == 'none') {
                var targetEle = $(`#menu-list`).find(`li[data-id=${targetSel.prev().val()}]`);
                targetEle.find('>ul').append(`<li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p><button type="button" class=editBtn>Edit</button><button type="button" class=removeBtn>Remove</button></li>`);
                $("#all-dropdown").find('select').last().append(`<option value='${idIncre}'>${inputVal}</option>`);
            } else {
                var targetEle = $(`#menu-list`).find(`li[data-id=${targetSel.val()}]`);
                $("#all-dropdown").append(`<select><option value='none'>None</option><option value='${idIncre}'>${inputVal}</option></select>`);
                targetEle.append(`<ul><li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p><button type="button" class=editBtn>Edit</button><button type="button" class=removeBtn>Remove</button></li></ul>`);
            }

        } else {
            if ($('.parent-dropdown').val() == 'none') {
                $('#menu-list>ul').append(`<li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p><button type="button" class=editBtn>Edit</button><button type="button" class=removeBtn>Remove</button></li>`);
                $('.parent-dropdown').append(`<option value='${idIncre}'>${inputVal}</option>`);
            } else {
                var targetEle = $(`#menu-list`).find(`li[data-id=${$('.parent-dropdown').val()}]`);
                if (targetEle.find('ul').length > 0) {
                    targetEle.find('>ul').append(`<li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p><button type="button" class=editBtn>Edit</button><button type="button" class=removeBtn>Remove</button></li>`);
                    $("#all-dropdown").find('select').last().append(`<option value='${idIncre}'>${inputVal}</option>`);
                } else {
                    $("#all-dropdown").append(`<select><option value='none'>None</option><option value='${idIncre}'>${inputVal}</option></select>`);
                    targetEle.append(`<ul><li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p><button type="button" class=editBtn>Edit</button><button type="button" class=removeBtn>Remove</button></li></ul>`);
                }
            }
        }
        console.log($('.parent-dropdown').val())

        $('#inputValue').val("");
        idIncre++;
    });
    $(document).on('change', 'select', function () {
        $(this).nextAll().remove();
        if ($(this).val() != 'none') {
            var targetEle = $(`#menu-list`).find(`li[data-id=${$(this).val()}]`);
            if (targetEle.find('ul').length > 0) {
                $("#all-dropdown").append(`<select><option value='none'>None</option></select>`);
                for (i = 0; i < targetEle.find('ul:first').children().length; i++) {
                    var dataId = targetEle.find('ul:first').children().eq(i).attr('data-id')
                    var dataText = targetEle.find('ul:first').children().eq(i).attr('data-text')
                    $("#all-dropdown").find('select').last().append(`<option value='${dataId}'>${dataText}</option>`);
                }
            }
        }
    });

    $(document).on('click', '.editBtn', function () {
        $('#add').hide();
        $('.update').show();
        dText = $(this).closest("li").attr('data-text')
        dId = $(this).closest("li").attr('data-id')
        // console.log("text" + dText + "id" + dId);
        $("#inputValue").val(dText);
        $('.editBtn, .removeBtn').prop("disabled", true);
    });

    $(document).on('click', '.update', function () {
        $('.update').hide();
        $('#add').show();
        $('.editBtn, .removeBtn').prop("disabled", false);
        inputVal = $("#inputValue").val();
        // console.log($("#menu-list ul").find("li").attr('data-id'))
        $(`option[value="${dId}"]`).text(inputVal);
        $('#menu-list').find(`li[data-id=${dId}]`).attr('data-text', `${inputVal}`);
        $('#menu-list').find(`li[data-id=${dId}]`).find(">p").text(inputVal);
        $('#inputValue').val("");
    });

    $(document).on('click', '.removeBtn', function () {
        // console.log($(this).parent("li").attr('data-id'));
        var dataId = $(this).closest("li").attr('data-id');
        $(this).parent().remove();
        $(`select option[value="${dataId}"]`).remove();
        $("ul").not(":has(li), .ulClass").remove();
        $('select').trigger('change');
    });
});