
$(function () {


    // console.log($("#div  img").length)

    $("#drag").draggable({

        // revert : "invalid"
    })

    // var d = $('drop')

    $(".drop").droppable({

        accept: "#drag",
        drop: function (event) {
            if ($(".drop").length <= 5) {
                var img = $('<img >',
                    {
                        class: "drop",
                        src: 'imgs/2.jpg',
                        width: 100,
                        height: 50
                    }
                ).appendTo($('#div'));
                // img.attr('class','drop')


            }
        }
    });


    // $('.drop').on('drop',  function (event) {
    //                 //  accept: "#drag",

    //                 var img = $('<img >',
    //                     {
    //                         class: "drop",
    //                         src: 'imgs/2.jpg',
    //                         width: 100,
    //                         height: 50
    //                     }
    //                 ).appendTo($('#div'));
    //                  img.attr('class','drop')


    //         })


})



