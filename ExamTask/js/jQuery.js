var inputVal, len, dropDownIndex, i = 1, dropDownVal,dropDownChildIndex;

$(document).ready(function () {
    $(".addBtn").click(function () {

        dropDownVal = $(".dropDownParent option:selected").val();

        if (dropDownVal == "select-child") {
            inputVal = $(".inputField").val();

            $(".dropDownParent").append(`<option value="${inputVal}">${inputVal}</option>`);
            $(".right").append(`<ul class="parent"><li>${inputVal}</li><li class="btn"><button type="button" class="editBtn">EDIT</button></li><li class="btn"><button type="button" class="removeBtn">Remove</button></li></ul>`);
        }
        else {
            if (i == 1) {
                inputVal = $(".inputField").val();
                $(".left").append(`<br><select name="dropDownChild" id="dropDownChild" class="dropDownChild"><option value="none">None</option><option value=${inputVal}>${inputVal}</option></select>`);
                i = 0;

                $(".right .parent").eq(dropDownIndex - 1).append(`<ul class="child"><li>${inputVal}</li><li class="btn"><button type="button" class="editBtn">EDIT</button></li><li class="btn"><button type="button" class="removeBtn">Remove</button></li></ul>`);
            }
            else {
                inputVal = $(".inputField").val();
                $(".left .dropDownChild").append(`<option value="${inputVal}">${inputVal}</option>`);
                $(".right .parent").eq(dropDownIndex - 1).append(`<ul class="child"><li>${inputVal}</li><li class="btn"><button type="button" class="editBtn">EDIT</button></li><li class="btn"><button type="button" class="removeBtn">Remove</button></li></ul>`);
            }
        }
        $(".inputField").val("");
        console.log(inputVal);

    });

    $(".dropDownParent").change(function () {
        dropDownIndex = $("#dropDownParent option:selected").index();
        console.log(dropDownIndex + "parent");
    });
});

$(document).on('change', 'select.dropDownChild', function () {
    dropDownChildIndex = $(".dropDownChild option:selected").index();
    console.log(dropDownChildIndex + "child");
});

$(document).on('change', 'select.dropDownParent', function () {
    dropDownIndex = $(".dropDownParent option:selected").index();
    // console.log(dropDownIndex+"dropDownIndex");
    childLength = $(".right").find(".parent").eq(dropDownIndex - 1).find(".child").length;
});