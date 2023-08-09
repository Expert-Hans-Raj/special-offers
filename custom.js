  $(".custom-add-cart-frequently_bought span").click(function (event) {
    console.log("dddd");
    event.preventDefault();
    var parent_class = $(this).parent().parent();
    var parent_id = $(this)
      .parent()
      .parent()
      .parent()
      .find(".frequently_bought")
      .val();
    console.log("parent_id" + parent_id);

    $.ajax({
      type: "POST",
      url: "/cart/add.js",
      dataType: "json",
      data: {
        quantity: 1,
        id: parent_id,
      },
      beforeSend: function () {
        // Show image container

        parent_class.find(".loader_custom").show();
      },
      success: function () {
        // Hide image container
        $(".loader_custom").hide();
        parent_class.find(".cart-added-succes").show();
        $.ajax({
          type: "GET",
          url: "/cart",
          dataType: "html",
          success: function (data) {},
        });

        // raj
        $.ajax({
          type: "GET",
          url: "/cart",
          dataType: "html",
          success: function (data) {
            console.log("ffff", data);
            var newhtml = $(data).find(".cart-item").html();
            //           	console.log('tetsig',newhtml);
            $(".cart-notification-product").html(newhtml);
            $(".cutom-cart").addClass("active");
          },
        });
        // raj
      },
    });
  });
