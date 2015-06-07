
//Storlek på nav-knappar
$(document).ready(function() {
   $('#nav a img').mouseenter(function() {
       $(this).animate({
           height: '+=10px'
       });
   });
   $('#nav a img').mouseleave(function() {
       $(this).animate({
           height: '-=10px'
       }); 
   });
});

// scrolla till start
jQuery(document).ready(function(){
	// 'catTopPosition' is the amount of pixels #cat
	// is from the top of the document
	var catTopPosition1 = jQuery('#one').offset().top;
	
	// When #scroll is clicked
	jQuery('#scroll1').click(function(){
		// Scroll down to 'catTopPosition'
		jQuery('html, body').animate({scrollTop:catTopPosition1}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
});
// scrolla till Process
jQuery(document).ready(function(){
	// 'catTopPosition' is the amount of pixels #cat
	// is from the top of the document
	var catTopPosition1 = jQuery('#two').offset().top;
	
	// When #scroll is clicked
	jQuery('#scroll2').click(function(){
		// Scroll down to 'catTopPosition'
		jQuery('html, body').animate({scrollTop:catTopPosition1}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
});
// scrolla till Bildarkiv
jQuery(document).ready(function(){
	// 'catTopPosition' is the amount of pixels #cat
	// is from the top of the document
	var catTopPosition1 = jQuery('#three').offset().top;
	
	// When #scroll is clicked
	jQuery('#scroll3').click(function(){
		// Scroll down to 'catTopPosition'
		jQuery('html, body').animate({scrollTop:catTopPosition1}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
});
// scrolla till Kontakt
jQuery(document).ready(function(){
	// 'catTopPosition' is the amount of pixels #cat
	// is from the top of the document
	var catTopPosition = jQuery('#four').offset().top;
	
	// When #scroll is clicked
	jQuery('#scroll4').click(function(){
		// Scroll down to 'catTopPosition'
		jQuery('html, body').animate({scrollTop:catTopPosition}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
});

//Radio slideUp/Down
document.getElementById("radio").style.display = "none";
$(document).ready(function(){
        $(".radioButton").mouseenter(function(){
                $(this).fadeOut(1000,function(){
                        $("#radio").slideDown(1000);
                        });
                });
        });
$(document).ready(function(){
        $("#radio").mouseleave(function(){
                $(this).slideUp(1000, function(){
                        $(".radioButton").fadeIn(1000);
                        });
                });
        });
//end Radio slideIn/Out

//Process
document.getElementById("ProcessArt2").style.display = "none";
document.getElementById("ProcessArt3").style.display = "none";
document.getElementById("ProcessArt4").style.display = "none";

var page = 1;
$(document).ready(function(){
        $('.ProcessKnappLeft').click(function(){
                page--;
                if (page < 1) {
                page = 4;
        }
                swapPage(page);
        });
        $('.ProcessKnappRight').click(function(){
                page++;
        if (page > 4) {
                page = 1;
        }
        swapPage(page);
        });

});
function swapPage(page) {       
        if (page === 1) {
                document.getElementById("ProcessArt1").style.display = "block";
                document.getElementById("ProcessArt2").style.display = "none";
                document.getElementById("ProcessArt3").style.display = "none";
                document.getElementById("ProcessArt4").style.display = "none";
        }
        else if (page === 2) {
                document.getElementById("ProcessArt1").style.display = "none";
                document.getElementById("ProcessArt2").style.display = "block";
                document.getElementById("ProcessArt3").style.display = "none";
                document.getElementById("ProcessArt4").style.display = "none";
        }
        else if (page === 3) {
                document.getElementById("ProcessArt1").style.display = "none";
                document.getElementById("ProcessArt2").style.display = "none";
                document.getElementById("ProcessArt3").style.display = "block";
                document.getElementById("ProcessArt4").style.display = "none";
        }
        else if (page === 4) {
                document.getElementById("ProcessArt1").style.display = "none";
                document.getElementById("ProcessArt2").style.display = "none";
                document.getElementById("ProcessArt3").style.display = "none";
                document.getElementById("ProcessArt4").style.display = "block";
        }
       }

//BildArkiv
document.getElementById("bildArt2").style.display = "none";

$(document).ready(function(){
        var check = true;
        $('.BildKnappLeft, .BildKnappRight').click(function(){
                if (check === true) {
                        document.getElementById("bildArt1").style.display = "none";
                        document.getElementById("bildArt2").style.display = "block";
                }
                else{
                        document.getElementById("bildArt1").style.display = "block";
                        document.getElementById("bildArt2").style.display = "none";
                }
        check = !check;
        });
});


