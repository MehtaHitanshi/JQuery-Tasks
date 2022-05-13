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
                    <input type="text" name="title" class="title" placeholder="Title">
                    <button type="button" class="addChildBtn">Add Child</button>
                    <button type="button" class="submitBtn">Submit</button>
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
                <input type="text" name="subTitle" class="subTitle" placeholder="Subtitle">
                <input type="text" name="value" class="value" placeholder="Value">
                <button type="button" class="childDeleteBtn">Delete</button>
                </div>`);
                $(".specTable").append(`<table><thead><tr></tr></thead><tbody></tbody></table>`);
            }
        }
    });
});

// Submit Button
$(document).on('click', '.submitBtn', function () {
    var currentSubmitBtn = this;

    var subIndex = $(".submitBtn").index(currentSubmitBtn);
    var innerBox = $(this).parents(".inputSection").find(".addChild").length;

    $("table").eq(subIndex).find("th").remove();
    $("table").eq(subIndex).find("tbody").empty();

    var ntitle = $(this).parents(".inputSection").find(".title").val();

    $(this).parents().find("table thead tr").eq(subIndex).append(`<th colspan="2">${ntitle}</th>`)

    for (i = 0; i < innerBox; i++) {
        var nsubTitle = $(this).parents(".inputSection").find(".subTitle").eq(i).val();
        var nvalue = $(this).parents(".inputSection").find(".value").eq(i).val();
        $("table").eq(subIndex).find("tbody").append(`<tr><td>${nsubTitle}</td><td>${nvalue}</td></tr>`);
    }
});

// Delete Button
$(document).on('click', '.deleteBtn', function () {
    var currentDel = this;
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
                // console.log(delIndex);
            }
        }
    });
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
            }
        }
    });        
});
