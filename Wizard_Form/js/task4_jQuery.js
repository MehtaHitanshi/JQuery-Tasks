$(document).ready(function () {
    var fName, lName, gender, mail, contact_no, dob, sport, terms, about, step_len, index_no, table_index = 0, tab_i, hours, money, zipcode, ipAdd;
    var ubtn = false;

    $(".step1").hide().first().show();
    $(".prev, .sub, .update, .cancel").hide();
    $(".tab1").eq(0).css({"background-color":"cornflowerblue","color":"white"});
    $(".tab1").not($(".tab1").eq(0)).css({"background-color":"lightgrey","color":"white"});

    // -----------------tabs-----------------------
    $(".tab1").click(function () {
        tab_i = $(this).index();
        console.log(tab_i);
        tab_color(tab_i);
        redirect();
    });

    function tab_color(tab_i) {
        $(".tab1").eq(tab_i).css({"background-color":"cornflowerblue","color":"white"});
        $(".tab1").not($(".tab1").eq(tab_i)).css("background-color", "lightgrey");
    }

    function redirect() {
        $(".step1").hide();
        $(".step1").hide().eq(tab_i).show();
        step_len = $(".step1").length;

        if (tab_i == 0) {
            $(".save").show();
            $(".prev, .sub").hide();
        }
        else if (step_len == tab_i + 1) {
            $(".sub,.prev").show();
            $(".save").hide();
        }
        else {
            $(".save,.prev").show();
            $(".sub").hide();
        }
        update_btn();
    }

    // -------------save and next--------------------
    $(".save").click(function () {
        step_len = $('.step1').length;
        $(".step1").hide();
        if (tab_i == null) {
            tab_i = 0;
        }
        tab_i++;
        if (tab_i == step_len - 1) {
            $(".sub").show();
            $(".save").hide();
        }
        tab_color(tab_i);
        update_btn();

        $(".prev").show();
        $(".step1").eq(tab_i).show();
    });

    // ------------Form validate plugin----------------
    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Only alphabetical characters");

    $.validator.addMethod('IP4Checker', function (value) {
        return value.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/);
    }, 'Invalid IP address');


    $("#myform").validate({
        ignore: [],
        rules: {
            fname: {
                lettersonly: true,
                required: true
            },
            lname: {
                lettersonly: true,
                required: true
            },
            gender: "required",
            email: {
                required: true,
                email: true
            },
            contact: {
                required: true,
                minlength: 12,
                maxlength: 12
            },
            dob: "required",
            sports: "required",
            about: {
                required: true,
                lettersonly: true
            },
            hours: {
                required: true,
                min: 1,
                max: 24

            },
            money: "required",
            zipcode: {
                required: true,
                minlength: 7,
                maxlength: 7
            },
            ipAddress: {
                required: true,
                IP4Checker: true
            },
            terms: "required"
        },
        messages: {
            fname: {
                required: "Please Enter First Name",
                fname: "Pleasae Enter Letters only"
            },
            lname: {
                required: "Please Enter Last Name",
                lname: "Pleasae Enter Letters only"
            },
            gender: "Please Select Gender",
            email: "Please Enter your E-mail",
            contact: {
                required: "Please Enter your Contact Number",
                contact: "Please Enter valid Mobile Number",
                minlength: "Please Enter 10 digit Mobile Number"
            },
            dob: "Please Select Date of Birth",
            sports: "Please Select your Favourite Sport",
            about: "Please Say Something About You",
            hours: {
                required: "Please Enter Hours",
                min: "Please Enter Hours b/w 1-24"
            },
            money: "Please Enter Money",
            zipcode: {
                required: "Please Enter ZipCode",
                minlength: "Please Enter 6 digit ZipCode"
            },
            ipAddress: {
                required: "Please Enter IP Address",
                minlength: "Please Enter minimum 4 digit IP Address",
                maxlength: "Please Enter maximum 12 digit IP Address"
            },
            terms: "Please Agree to T & C"
        }
    });

    // --------------calendar-----------------
    $(function () {
        $("#date_of_birth").datepicker({
            dateFormat: 'dd/mm/yy',
            changeMonth: true,
            changeYear: true,
            yearRange: '-100y:c+nn',
            maxDate: '-1d'
        }).on('change', function () {
            $(this).valid();
        });
    });


    // ------------------Masking-------------------
    $('input[name="zipcode"]').inputmask('999-999');
    $('input[name="contact"]').inputmask('99 9999 9999');
    $('input[name="dob"]').inputmask();

    $('#money').mask("#,##0,00", { reverse: true });
    $('input[name="ipAddress"]').inputmask({
        alias: "ip",
        greedy: false,
        placeholder: "",
        jitMasking: true
    });

    $('input[name="dob"]').keydown(function (e) {
        e.preventDefault();
    });

    // ------------------submit----------------------
    $(".sub").click(function (e) {

        if ($("#myform").valid()) {
            get_data();
            $(".table_content").append(`<tr><td class="row_t">${index_no}</td>,
            <td class="fname_t">${fName}</td>,
            <td class="lname_t">${lName}</td>,
            <td class="gender_t">${gender}</td>,
            <td class="mail_t">${mail}</td>,
            <td class="contact_t">${contact_no}</td>,
            <td class="dob_t">${dob}</td>,
            <td class="sport_t">${sport}</td>,
            <td class="about_t">${about}</td>,
            <td class="hours_t">${hours}</td>,
            <td class="money_t">${money}</td>,
            <td class="zipcode_t">${zipcode}</td>,
            <td class="ipAdd_t">${ipAdd}</td>,
            <td class="terms_t">${terms}</td>,
            <td><button class="edit">Edit</button></td>,
            <td><button class="del">Delete</button></td></tr>`
            );
            tab_i = 0;
            clear();
            redirect(tab_i = 0);
            $(".tab1").eq(tab_i).css("background-color", "cornflowerblue");
            $(".tab1").not($(".tab1").eq(tab_i)).css("background-color", "lightgrey");
        }
        else {
            var er = $("input.error").first().parents(".step1").index();
            $(".step1").not($(".step1").eq(er).show()).hide();
            step_len = $(".step1").length;

            var error_tab = $(".step1").eq(er).index();
            tab_i = error_tab
            console.log(error_tab);
            console.log(er);
            if (error_tab == 0) {
                $(".save").show();
                $(".prev, .sub").hide();
                console.log("if1");
            }
            else if (step_len == error_tab + 1) {
                $(".step1").eq(step_len - 1).show();
                $(".sub,.prev").show();
                $(".save").hide();
                console.log("if2");
            }
            else {
                $(".save,.prev").show();
                $(".sub").hide();
                console.log("if3");
            }
            $("label.error").css("color", "red");
            $(".tab1").eq(tab_i).css({"background-color":"cornflowerblue","color":"white"});
            $(".tab1").not($(".tab1").eq(tab_i)).css("background-color", "lightgrey");
        }
        e.preventDefault();
    });


    // ----------------Previous--------------------
    $(".prev").click(function () {
        $(".step1").hide();
        tab_i--;
        tab_color(tab_i);
        if (tab_i == 0) {
            $(".prev").hide();
        }
        $(".step1").eq(tab_i).show();

        $(".sub").hide();
        $(".save").show();
        update_btn();
    });


    // -------------------Delete---------------------
    $(document).on("click", ".del", function () {
        var agree = confirm("Are you sure that you want to delete this item?");

        if (agree) {
            $(this).parents("tr").remove();
        }

        $(".table_content tr").each(function (i) {
            $($(this).find("td")[0]).html(i + 1);
        })
        return false;
    });

    // --------------------Edit-----------------------
    $(document).on("click", ".edit", function () {
        $("label.error").text("");
        table_index = $(this).closest("tr").index();
        console.log("table_index", table_index);
        ubtn = true;
        update_btn();

        $(".del").prop("disabled", false);
        $(".del").eq($(this).closest('tr').index()).prop("disabled", true);

        var fname_t = $(".fname_t").eq(table_index).text();
        $("#fname").val(fname_t);

        var lname_t = $(".lname_t").eq(table_index).text();
        $("#lname").val(lname_t);

        var gender_t = $(".gender_t").eq(table_index).text();
        if (gender_t == "male") {
            $("#male").prop("checked", true);
        }
        else if (gender_t == "female") {
            $("#female").prop("checked", true);
        }
        else {
            $("#female").prop("checked", false);
            $("#male").prop("checked", false);
        }

        var mail_t = $(".mail_t").eq(table_index).text();
        $("#mail").val(mail_t);

        var contact_t = $(".contact_t").eq(table_index).text();
        $("#contact").val(contact_t);

        var dob_t = $(".dob_t").eq(table_index).text();
        $("#date_of_birth").val(dob_t);

        var sport_t = $(".sport_t").eq(table_index).text();
        if (sport_t == "cricket") {
            $('option[value=cricket]').prop('selected', true);
        }
        else if (sport_t == "football") {
            $('option[value=football]').prop('selected', true);
        }
        else if (sport_t == "vollyball") {
            $('option[value=vollyball]').prop('selected', true);
        }
        else if (sport_t == "badminton") {
            $('option[value=badminton]').prop('selected', true);
        }

        var about_t = $(".about_t").eq(table_index).text();
        $("#about").val(about_t);

        var hours_t = $(".hours_t").eq(table_index).text();
        $("#hours").val(hours_t);

        var money_t = $(".money_t").eq(table_index).text();
        $("#money").val(money_t);

        var zipcode_t = $(".zipcode_t").eq(table_index).text();
        $("#zipcode").val(zipcode_t);

        var ipAdd_t = $(".ipAdd_t").eq(table_index).text();
        $("#ipAddress").val(ipAdd_t);

        var terms_t = $(".terms_t").eq(table_index).text();
        if (terms_t == "accepted") {
            $("#term").prop('checked', true);
        }
        else {
            $("#term").prop('checked', false);
        }
    });



    // ------------------Update---------------------
    $(document).on("click", ".update", function (e) {

        if ($("#myform").valid()) {
            $(".update, .cancel").hide();
            $(".sub").show();
            get_data();
            $(".table_content tr").eq(table_index).html(`<td class="row_t">${table_index + 1}</td>,
            <td class="fname_t">${fName}</td>,
            <td class="lname_t">${lName}</td>,
            <td class="gender_t">${gender}</td>,
            <td class="mail_t">${mail}</td>,
            <td class="contact_t">${contact_no}</td>,
            <td class="dob_t">${dob}</td>,
            <td class="sport_t">${sport}</td>,
            <td class="about_t">${about}</td>,
            <td class="hours_t">${hours}</td>,
            <td class="money_t">${money}</td>,
            <td class="zipcode_t">${zipcode}</td>,
            <td class="ipAdd_t">${ipAdd}</td>,
            <td class="terms_t">${terms}</td>,
            <td><button class="edit">Edit</button></td>,
            <td><button class="del">Delete</button></td>`
            );
            clear();
            $(".del").prop("disabled", false);
            ubtn = false;
            $(".update, .cancel").hide();
            $(".sub").show();
            redirect(tab_i = 0);
            $(".tab1").eq(tab_i).css({"background-color":"cornflowerblue","color":"white"});
            $(".tab1").not($(".tab1").eq(tab_i)).css("background-color", "lightgrey");
        }
        else {
            var er = $("input.error").first().parents(".step1").index();
            $(".step1").not($(".step1").eq(er).show()).hide();

            var error_tab = $(".step1").eq(er).index();
            console.log(error_tab);
            tab_i = error_tab
            if (error_tab == 0) {
                $(".save").show();
                $(".prev, .sub").hide();
            }
            else if (error_tab == tab_i + 1) {
                $(".sub,.prev").show();
                $(".save").hide();
            }
            else {
                $(".save,.prev").show();
                $(".sub").hide();
            }
            update_btn();
            $(".tab1").eq(tab_i).css({"background-color":"cornflowerblue","color":"white"});
            $(".tab1").not($(".tab1").eq(tab_i)).css("background-color", "lightgrey");
        }
        e.preventDefault();
    });

    // -----------------Cancel-----------------------
    $(document).on("click", ".cancel", function () {
        $(".del").prop("disabled", false);
        $(".update, .cancel").hide();
        $(".sub").show();
        clear();
        redirect(tab_i = 0);
        ubtn = false;
        $(".update, .cancel").hide();
    });

    // -------------Update-Cancel button--------------
    function update_btn() {
        if (ubtn == true) {
            if (step_len == tab_i + 1) {
                $(".update, .cancel").show();
                $(".save, .sub").hide();
            }
            else {
                $(".update, .cancel").hide();
                $(".save").show();
            }
        }
    }

    // ----------Clear form------------------
    function clear() {
        $("#myform").trigger("reset");
    }

    // ------------Get Data -----------------------------
    function get_data() {
        fName = $("#fname").val();
        lName = $("#lname").val();
        gender = $('input[type="radio"]:checked').val();
        mail = $("#mail").val();
        contact_no = $("#contact").val();
        dob = $("#date_of_birth").val();
        sport = $("#sports").val();
        about = $("#about").val();
        hours = $("#hours").val();
        money = $("#money").val();
        zipcode = $("#zipcode").val();
        ipAdd = $("#ipAddress").val();
        index_no = $("#form_data tr").length;

        if ($('#term').is(":checked"))
            terms = "accepted";
        else
            terms = "denied";
    }
});