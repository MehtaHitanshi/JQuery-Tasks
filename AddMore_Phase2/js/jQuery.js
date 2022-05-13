$(document).ready(function () {
    $(".specTable").append(`<table><thead class="thead_class"><tr></tr></thead><tbody></tbody></table>`);

    $(".addMorebtn").click(function () {
        bootbox.confirm({
            message: "Do You Want to Add More ???",
            buttons: {
                confirm: {
                    label: 'Yes',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if (result == true) {
                    $(".box").append(` <div class="inputSection">
                    <input type="text" name="title" class="title" placeholder="Title" autocomplete="off">
                    <button type="button" class="addChildBtn">Add Child</button>
                    <button type="button" class="deleteBtn">Delete</button></div>`);

                    $(".specTable").append(`<table><thead><tr></tr></thead><tbody></tbody></table>`);
                }
            }
        });
    });
});

// Add Child
$(document).on('click', '.addChildBtn', function () {
    var currentAddChild = this;
    bootbox.confirm({
        message: "Do You Want to Add More Child ???",
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result == true) {
                var index = $(".addChildBtn").index(currentAddChild);
                $(".inputSection").eq(index).append(` <div class="addChild">
                <input type="text" name="subTitle" class="subTitle" placeholder="Subtitle" autocomplete="off">
                <input type="text" name="value" class="value" placeholder="Value" autocomplete="off">
                <button type="button" class="childDeleteBtn">Delete</button>
                </div>`);
                $(".specTable").append(`<table><thead><tr></tr></thead><tbody></tbody></table>`);
            }
        }
    });
});

$(document).on('keyup', '.title', function () {
    var index = $(this).parent().index();
    var ntitle = "";
    ntitle = $(this).val();
    $("table").eq(index).find("th").remove();
    if (ntitle == "")
        $("table").eq(index).find("th").remove();
    else
        $(this).parents().find("table thead tr").eq(index).append(`<th colspan="2">${ntitle}</th>`);

});

$(document).on('keyup', '.addChild', function () {
    var pIndex = $(this).parent().index();
    console.log(pIndex);

    var innerBox = $(this).parents(".inputSection").find(".addChild").length;
    $("table").eq(pIndex).find("tbody").empty();

    for (i = 0; i < innerBox; i++) {
        var sub = $(this).parents(".inputSection").find(".subTitle").eq(i).val();
        var val = $(this).parents(".inputSection").find(".value").eq(i).val();
        if (sub == "" && val == "")
            $(this).eq(pIndex).find("td").empty();
        else
            $("table").eq(pIndex).find("tbody").append(`<tr><td>${sub}</td><td>${val}</td></tr>`);
    }

});

var del;
// Delete Button
$(document).on("mouseenter", ".deleteBtn", function () {
    del = $(".deleteBtn").length;
    console.log(del);
});

$(document).on('click', '.deleteBtn', function () {
    var currentDel = this;
    var innerBox = $(this).parents(".inputSection").find(".addChild").length;

    if (innerBox == 0 && del > 1) {
        $(".deleteBtn").prop("disabled", false);
        bootbox.confirm({
            message: "Are you Sure Do You Want to Delete ???",
            buttons: {
                confirm: {
                    label: 'Yes',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-danger'
                }
            },
            callback: function (result) {
                if (result == true) {
                    var delIndex = $(".deleteBtn").index(currentDel);
                    $(".inputSection").eq(delIndex).remove();
                    $("table").eq(delIndex).remove();
                }
            }
        });
    }
});

// Delete Child Button
$(document).on('click', '.childDeleteBtn', function () {
    var currentChildBtn = this;
    bootbox.confirm({
        message: "Are you Sure Do You Want to Delete Child ???",
        buttons: {
            confirm: {
                label: 'Yes',
                className: 'btn-success'
            },
            cancel: {
                label: 'No',
                className: 'btn-danger'
            }
        },
        callback: function (result) {
            if (result == true) {
                var childDelIndex = $(".childDeleteBtn").index(currentChildBtn);
                $(".addChild").eq(childDelIndex).remove();
                $("tbody tr").eq(childDelIndex).remove();
                $(".addChild").trigger('keyup');
            }
        }
    });
});

// Html-pdf
$(document).on('click', '#pdf', function () {

    let pdf = new jsPDF();
    let section = $('body');
    let page = function () {
        pdf.save('sample.pdf');
    };
    pdf.addHTML(section, page);

});