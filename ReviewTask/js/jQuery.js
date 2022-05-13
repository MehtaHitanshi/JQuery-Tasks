$(document).ready(function () {
    var tabIndex;
    $('input[id="clean"]').prop("checked", true);
    $('.standardArea').hide();

    $(".tabContent").hide().first().show();
    $(".tab").eq(0).css({ "background-color": "cornflowerblue", "color": "black" });
    $(".tab").not($(".tab").eq(0)).css({ "background-color": "white", "color": "black" });
    $(".tab").click(function () {
        tabIndex = $(this).index();
        $(".tabContent").hide().eq(tabIndex).show();
        tab_color(tabIndex);
    });

    function tab_color(tabIndex) {
        $(".tab").eq(tabIndex).css({ "background-color": "cornflowerblue", "color": "black" });
        $(".tab").not($(".tab").eq(tabIndex)).css("background-color", "white");
    }

    function colorResetClean() {
        $("#primaryColor").val("#ff0000");
        $("#secondaryColor").val("#000000");
        $("#tertiaryColor").val("#0000ff");
    }
    function colorResetStandard() {
        $("#primaryColor").val("#541154");
        $("#secondaryColor").val("#FF6347");
        $("#tertiaryColor").val("#ffffff");
    }

    $('input[type="radio"]').click(function () {
        if ($('input[id=clean]').is(":checked")) {
            $(".cleanArea").show()
            $(".standardArea").hide();
            colorResetClean();
        }
        else if ($('input[id=standard]').is(":checked")) {
            $(".cleanArea").hide()
            $(".standardArea").show();
            colorResetStandard();
        }
    });

    // function valueReset() {
    //     $(".nameOfCompany h2").text(`Company<br>Name`);
    //     $(".comName h2").text("Company Name");
    //     $(".companyLogo, .stdLogo").hmtl(<i class="fa fa-bolt" aria-hidden="true"></i>);
    //     $(".web label, .web label.webb").text("www.example.com");
    //     $(".name label.fullnm, .name2 label.fullnm").text("Full Name Here");
    //     $(".name label.deg").text("Your Designation");
    //     $(".name2 label.deg").text("TO CONTACT");
    //     $(".phone label, .phone label.number").text("123 456 7890");
    //     $("mail label, .mail label.mails").text("example@gmail.com");
    // }

    $(".resetBtn").click(function () {
        $("#customDetails").trigger("reset");
        $(".colorResetBtn").trigger("click");
        $(".tabContent").hide().first().show();
        tab_color(tabIndex = 0);
    });

    jQuery.validator.addMethod("lettersonly", function (value, element) {
        return this.optional(element) || /^[a-z\s]+$/i.test(value);
    }, "Only alphabetical characters");


    $("#customDetails").validate({
        ignore: [],
        rules: {
            companyName: {
                lettersonly: true,
                required: true,
                minlength: 2,
                maxlength: 20
            },
            logo: {
                required: true,
                minlength: 2,
                maxlength: 20
            },
            website: {
                required: true,
                url: true
            },
            fullName: {
                required: true,
                lettersonly: true,
                minlength: 2,
                maxlength: 20
            },
            designation: {
                required: true,
                lettersonly: true,
                minlength: 2,
                maxlength: 20
            },
            contactNumber: {
                required: true,
                minlength: 10,
                maxlength: 10
            },
            emailAddress: {
                required: true,
                email: true
            }
        },
        messages: {
            companyName: {
                required: "Please Enter Company Name",
                companyName: "Pleasae Enter Letters only",
                maxlength: "Please Enter 2-20 digit."
            },
            logo: {
                required: "Please Enter Logo",
                maxlength: "Please Enter 2-20 digit."
            },
            website: {
                required: "Please Enter Website",
                website: "Please Enter valid URL"
            },
            fullName: {
                required: "Please Enter Your Full Name",
                maxlength: "Please Enter 2-20 digit."
            },
            designation: {
                required: "Please Enter Designation",
                maxlength: "Please Enter 2-20 digit."
            },
            contactNumber: {
                required: "Please Enter your Contact no.",
                contact: "Please Enter valid Mobile Number",
                minlength: "Please Enter 10 digit Mobile Number"
            },
            emailAddress: {
                required: "Please Enter your E-mail"
            }
        }
    });

    $(".downloadBtn").click(function () {
        if ($("#customDetails").valid()) {
            let pdf = new jsPDF();
            let section = $('.cleanArea');
            let page = function () {
                pdf.save('BusinessCard.pdf');
            };
            pdf.addHTML(section, page);
            pdf.addImage("https://chart.googleapis.com/chart?cht=qr&chl=Hello+World&chs=160x160&chld=L|0", 'JPEG', 100, 50, 18, 18);
        }
        else {
            $("label.error").css("color", "red");
        }
    });


    $("#primaryColor").click(function () {
        let primaryColor = document.getElementById('primaryColor');

        setInterval(() => {
            let color = primaryColor.value;
            $(".backCard").css("background-color", color);
            $(".companyLogo i").css("color", color);
            $(".standardFront, .stdDetail, .bottom2").css("background-color", color);
        }, 200);
    });

    $("#secondaryColor").click(function () {
        let secondaryColor = document.getElementById('secondaryColor');

        setInterval(() => {
            let color = secondaryColor.value;
            $(".name label,.info label, .backCard .generate").css("color", color);
            $(".bottom, .bacck").css("background-color", color);
        }, 200);
    });

    $("#tertiaryColor").click(function () {
        let tertiaryColor = document.getElementById('tertiaryColor');

        setInterval(() => {
            let color = tertiaryColor.value;
            $(".comName h2, .bacck i, .stdLogo i, .stdDetail i").css("color", color);
        }, 200);
    });

    $(".colorResetBtn").click(function () {
        if ($('input[id=clean]').is(":checked")) {
            colorResetClean();
        }
        else if ($('input[id=standard]').is(":checked")) {
            colorResetStandard();
        }
        $(".backCard").css("background-color", "red");
        $(".companyLogo i").css("color", "black");
        $(".standardFront, .stdDetail, .bottom2").css("background-color", "rgb(54, 11, 54)");
        $(".name label,.info label, .backCard .generate").css("color", "black");
        $(".bottom, .bacck").css("background-color", "tomato");
        $(".comName h2, .bacck i, .stdLogo i, .stdDetail i").css("color", "white");
    });
});

$(document).on('keyup', '#companyName', function () {
    var companyName = $("#companyName").val();
    $(".nameOfCompany h2,.comName h2").text(companyName);
});

$(document).on('keyup', '#logo', function () {
    var logo = $("#logo").val();
    $(".companyLogo, .stdLogo").html(`<i class="fa ${logo}" aria-hidden="true"></i>`)
});

$(document).on('keyup', '#website', function () {
    var website = $("#website").val();
    $(".web label, .web label.webb").text(website);
});

$(document).on('keyup', '#fullName', function () {
    var fullName = $("#fullName").val();
    $(".name label.fullnm, .name2 label.fullnm").text(fullName);
});

$(document).on('keyup', '#designation', function () {
    var designation = $("#designation").val();
    $(".name label.deg, .name2 label.deg").text(designation);
});

$(document).on('keyup', '#contactNumber', function () {
    var contactNo = $("#contactNumber").val();
    $(".phone label, .phone label.number").text(contactNo);
});

$(document).on('keyup', '#emailAddress', function () {
    var emailAdd = $("#emailAddress").val();
    $(".mail label, .mail label.mails").text(emailAdd);
});



$(document).on('click', '#generate', function () {
    function htmlEncode(value) {
        return $('<div/>').text(value)
            .html();
    }
    let finalURL = 'https://chart.googleapis.com/chart?cht=qr&chl=' + htmlEncode($('#website').val()) + '&chs=160x160&chld=L|0'
    $('.qr-code').attr('src', finalURL);
});