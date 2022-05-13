$(document).ready(function () {

    $("#calc_input").keypress(function (e) {
        e.preventDefault();
    });

    $("#val_7, #val_8, #val_9, #val_divide, #val_4, #val_5, #val_6, #val_multiply, #val_square, #val_sqrt, #val_open_parentheses, #val_close_parentheses, #val_1, #val_2,#val_3,#val_subtract,#val_0,#val_dot,#val_modulo,#val_add").click(function () {
        var a = $(this).val();
        $("#calc_input").val($("#calc_input").val() + a);
    });

    $('#val_backspace').click(function () {
        $('#calc_input').val($('#calc_input').val().substring(0, $('#calc_input').val().length - 1));
        var s = $('#calc_input').val().substring(0, $('#calc_input').val().length - 1);
        console.log(s);
    });

    $("#val_clear").click(function () {
        $("#calc_input").val("");
    });


    $("#val_equal").click(function () {
        try {
            var v = $("#calc_input").val();
            var mul_v = v.replace(/x/g, "*");
            var div_v = mul_v.replace(/÷/g, "/");
            var sq = div_v.replace(/²/g, "**2 ");
            var sqr = sq.replace(/√/g, "**0.5 ");
            var zero = sqr.replace(/^0+/g, "");
            var t = zero;
            for (var i = 0; i < t.length; i++) {
                if (t.charAt(i) == '/' && t.charAt(i + 1) == '/') {
                    throw "Malformed expression";
                }
            }
            var res = eval(zero);
            $("#calc_input").val(res);
            var err = $("#calc_input").val();
            if (err == 'Infinity') throw "Malformed expression";
        }
        catch (err) {
            if (err instanceof ReferenceError)
                $("#calc_input").val("Malformed expression");
            else if (err instanceof SyntaxError)
                $("#calc_input").val("Malformed expression");
            else if (err instanceof TypeError)
                $("#calc_input").val("Malformed expression");
            else
                $("#calc_input").val(err);
        }
    });

    $(document).on('keydown', function (e) {
        var key = $("#calc_input").val();

        if (e.shiftKey == true && e.keyCode == 57) {
            $("#calc_input").val(key + "(");
        } else if (e.shiftKey == true && e.keyCode == 48) {
            $("#calc_input").val(key + ")");
        } else if (e.shiftKey == true && e.keyCode == 56 || e.keyCode == 106) {
            $("#calc_input").val(key + "*");
        } else if (e.shiftKey == true && e.keyCode == 187 || e.keyCode == 107) {
            $("#calc_input").val(key + "+");
        } else if (e.keyCode == 53 && e.shiftKey == true) {
            $("#calc_input").val(key + "%");
        } else if (e.keyCode == 13 || e.keyCode == 187) {
            $("#val_equal").trigger('click');
        } else if (e.keyCode == 27) {
            $("#val_clear").trigger('click');
        } else if (e.keyCode == 8) {
            $('#val_backspace').trigger('click');
            e.preventDefault();
        } else if (e.keyCode == 48 || e.keyCode == 96) {
            $("#calc_input").val(key + "0");
        } else if (e.keyCode == 49 || e.keyCode == 97) {
            $("#calc_input").val(key + "1");
        } else if (e.keyCode == 50 || e.keyCode == 98) {
            $("#calc_input").val(key + "2");
        } else if (e.keyCode == 51 || e.keyCode == 99) {
            $("#calc_input").val(key + "3");
        } else if (e.keyCode == 52 || e.keyCode == 100) {
            $("#calc_input").val(key + "4");
        } else if (e.keyCode == 53 || e.keyCode == 101) {
            $("#calc_input").val(key + "5");
        } else if (e.keyCode == 54 || e.keyCode == 102) {
            $("#calc_input").val(key + "6");
        } else if (e.keyCode == 55 || e.keyCode == 103) {
            $("#calc_input").val(key + "7");
        } else if (e.keyCode == 56 || e.keyCode == 104) {
            $("#calc_input").val(key + "8");
        } else if (e.keyCode == 57 || e.keyCode == 105) {
            $("#calc_input").val(key + "9");
        } else if (e.keyCode == 190 || e.keyCode == 110) {
            $("#calc_input").val(key + ".");
        } else if (e.keyCode == 189 || e.keyCode == 109) {
            $("#calc_input").val(key + "-");
        } else if (e.keyCode == 191 || e.keyCode == 111) {
            $("#calc_input").val(key + "÷");
        } else if (e.keyCode == 116) {
            location.reload();
        }
    });
});

$(document).on('click', '#pdf', function () {
    let pdf = new jsPDF("landscape");
    // let pdf = new jsPDF();
    let section = $('body');
    let page = function () {
        pdf.save('pagename.pdf');

    };
    pdf.addHTML(section, page);
});