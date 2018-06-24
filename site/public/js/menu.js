$("#hamburger_menu").on("click", function (event) {
    $("#hamburger_menu").css("display", "none");
    $("#titles").css("margin-top", "192px");
    $("#name").replaceWith('<img id="star" src="public/images/STAR.png" alt="star">');
    $("#slogan").text("designed by space."); 
})