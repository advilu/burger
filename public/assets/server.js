import { puts } from "util";

$(document).ready(function() {
    $(_____).on("submit", (event) => {
        event.preventDefault();

        const b_id = $(this).children(".burger_id").val();
        console.log(b_id);

        $.ajax({
            method: "PUT",
            url: "/burgers/" + b_id
        }).then(data => location.reload)
    });
});