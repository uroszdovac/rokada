$('#dekiBlank').mouseenter(function(){
    $(this).attr('src', '../PICS/deki_full.png')
    $('#milica').replaceWith("<div class='milica' id='deki'><h3>Dejan Živadinović</h3><hr><p>Accounting, finance, banking, office/project/process management... might sound boring to you but Dejan loves it and he makes every project runs smoothly.</p></div>");
    $('#milicaBlank').attr('src', '../PICS/milica_blank1.png');
    $('#milicaBlank').attr('height', '301px');

})

$('#dekiBlank').mouseleave(function(){
    $(this).attr('src', '../PICS/deki_blank.png');
    $('#deki').replaceWith("<div class='milica' id='milica' ><h3>Milica Bojić</h3><hr><p>Curious explorer in the fields of human capital development and business optimization. Specializes in harmonizing humanity, innovation and environment in lucrative business solutions.</p></div>");
    $('#milicaBlank').attr('src', '../PICS/milica_full1.png');
})

$('#marijaBlank').mouseenter(function(){
    $(this).attr('src', '../PICS/marija_full.png')
    $('#milica').replaceWith("<div class='milica' id='marija'><h3>Marija Mitić</h3><hr><p>Driven by strong passion for human side of business development, Marija is commited to guiding strenght-based transformations. Her HR startegies and interventions bring measurable value to business and financial well-being</p></div>");
    $('#milicaBlank').attr('src', '../PICS/milica_blank1.png');
})

$('#marijaBlank').mouseleave(function(){
    $(this).attr('src', '../PICS/marija_blank.png');
    $('#marija').replaceWith("<div class='milica' id='milica' ><h3>Milica Bojić</h3><hr><p>Curious explorer in the fields of human capital development and business optimization. Specializes in harmonizing humanity, innovation and environment in lucrative business solutions.</p></div>");
    $('#milicaBlank').attr('src', '../PICS/milica_full1.png');
    
})

$('#igorBlank').mouseenter(function(){
    $(this).attr('src', '../PICS/igor_full.png');
    $('#milica').replaceWith("<div class='milica' id='igor'><h3>Igor Obradović</h3><hr><p>Igor synergizes technology and business optimization through his IT expertise. He's an artful organizer and sharp thinker with agile approach to project management and strategic development.</p></div>");
    $('#milicaBlank').attr('src', '../PICS/milica_blank1.png');
    
})

$('#igorBlank').mouseleave(function(){
    $(this).attr('src', '../PICS/igor_blank.png');
    $('#igor').replaceWith("<div class='milica' id='milica' ><h3>Milica Bojić</h3><hr><p>Curious explorer in the fields of human capital development and business optimization. Specializes in harmonizing humanity, innovation and environment in lucrative business solutions.</p></div>");
    $('#milicaBlank').attr('src', '../PICS/milica_full1.png');
    
})

$('#eminBlank').mouseenter(function(){
    $(this).attr('src', '../PICS/emin_full.png');
    $('#milica').replaceWith("<div class='milica' id='emin'><h3>Emin Grbo</h3><hr><p>In need of creation? Emin is your man. With a penchant for design, graphics and animations, he has an imitable talent for converting complex ideas into simple graphics..</p></div>");
    $('#milicaBlank').attr('src', '../PICS/milica_blank1.png');
    
})

$('#eminBlank').mouseleave(function(){
    $(this).attr('src', '../PICS/emin_blank.png');
    $('#emin').replaceWith("<div class='milica' id='milica' ><h3>Milica Bojić</h3><hr><p>Curious explorer in the fields of human capital development and business optimization. Specializes in harmonizing humanity, innovation and environment in lucrative business solutions.</p></div>");
    $('#milicaBlank').attr('src', '../PICS/milica_full1.png');
    
})

$('#developButton').click(function(){
    $('#developDiv').css('display', 'none');
    $('#developDivShow').css('display', 'block')
})

$('#closeDev').click(function(){
    $('#developDivShow').css('display', 'none');
    $('#developDiv').css('display', 'block');
    $('#developDiv').css('visibility', 'visible');
})

$('#talentButton').click(function(){
    $('#talentDiv').css('display', 'none');
    $('#talentDivShow').css('display', 'block')
})

$('#closeTalent').click(function(){
    $('#talentDivShow').css('display', 'none');
    $('#talentDiv').css('display', 'block');
    $('#talentDiv').css('visibility', 'visible');
})

$('#leaderButton').click(function(){
    $('#leaderDiv').css('display', 'none');
    $('#leaderDivShow').css('display', 'block')
})

$('#closeLeader').click(function(){
    $('#leaderDivShow').css('display', 'none');
    $('#leaderDiv').css('display', 'block');
    $('#leaderDiv').css('visibility', 'visible');
})

$('#engagementMarija').mouseenter(function(){
    $('#engagementMilicaDiv').replaceWith("<div class='milica' id='engagementMarijaDiv'><h3>Marija Mitić</h3><hr><p>Driven by strong passion for human side of business development, Marija is commited to guiding strenght-based transformations. Her HR startegies and interventions bring measurable value to business and financial well-being</p></div>");
    $('#engagementMarija').attr('src', '../PICS/marija_full.png');
    $('#engagementMilica').attr('src', '../PICS/milica_blank1.png');
    $('#pin').css('margin-top', '4.7%');
})


$('#engagementMarija').mouseleave(function(){
    $('#engagementMarijaDiv').replaceWith("<div class='milica' id='engagementMilicaDiv' ><h3>Milica Bojić</h3><hr><p>Curious explorer in the fields of human capital development and business optimization. Specializes in harmonizing humanity, innovation and environment in lucrative business solutions.</p></div>");
    $('#engagementMarija').attr('src', '../PICS/marija_blank.png');
    $('#engagementMilica').attr('src', '../PICS/milica_full1.png');
    $('#pin').css('margin-top', '11%');
    
})




// $ (window) .scroll (function () {
// 	$ ('.firstDiv'). each (function () {
// 	var elPosition = $ (this) .offset (). top; 	// Position of the element
// 	var elHeight = $ (this) .height (); 		// Height of the element
// 	var windowTop = $ (window) .scrollTop (); 	// Top of the window
// 	var windowHeight = $ (window) .height (); 	// Height of the window
// 	if (elPosition < windowTop + windowHeight - elHeight) {
// 		$ (this) .addClass ("animation fade-in-right");
// 	} 						                   // adds the class wheh the element is fully in the visible area of the window
// 	if (elPosition > windowTop + windowHeight) {
// 		$ (this) .removeClass ("animation fade-in-right");
// 	} 						                   // removes the class when the element is not visible in the window
// 	if (elPosition + elHeight < windowTop) {
// 		$ (this) .removeClass ("animation fade-in-right");
// 	} 					                   // removes the class when the element is not visible in the window
// 	});
//     });
    
// $ (window) .scroll (function () {
//     $ ('.secondDiv'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     if (elPosition < windowTop + windowHeight - elHeight) {
//         $ (this) .addClass ("animation fade-in-left");
//     } 						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ (this) .removeClass ("animation fade-in-left");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ (this) .removeClass ("animation fade-in-left");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });

// $ (window) .scroll (function () {
//     $ ('.whatDivs'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     if (elPosition < windowTop + windowHeight - elHeight) {
//         $ (this) .addClass ("animation flip-in-y");
//     } 						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ (this) .removeClass ("animation flip-in-y");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ (this) .removeClass ("animation flip-in-y");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });

// $ (window) .scroll (function () {
//     $ ('#empowerLeftDiv'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     if (elPosition < windowTop + windowHeight - elHeight) {
//         $ (this) .addClass ("animation fade-in-right");
//     } 						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ (this) .removeClass ("animation fade-in-right");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ (this) .removeClass ("animation fade-in-right");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });

// $ (window) .scroll (function () {
//     $ ('#weCan'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     if (elPosition < windowTop + windowHeight - elHeight) {
//         $ (this) .addClass ("animation fade-in-left");
//     } 						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ (this) .removeClass ("animation fade-in-left");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ (this) .removeClass ("animation fade-in-left");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });



// $ (window) .scroll (function () {
//     $ ('.pickOurDiv > div'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     if (elPosition < windowTop + windowHeight - elHeight) {
//         $ (this) .addClass ("animation flip-in-y");
//     } 						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ (this) .removeClass ("animation flip-in-y");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ (this) .removeClass ("animation flip-in-y");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });

// $ (window) .scroll (function () {
//     $ ('#wherePDesctop'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     if (elPosition < windowTop + windowHeight - elHeight) {
//         $ (this) .addClass ("animation fade-in-right");
//         $ ('#peopleAndMilica').addClass ("animation fade-in-left");
//     } 						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ (this) .removeClass ("animation fade-in-right");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ (this) .removeClass ("animation fade-in-right");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });

// $ (window) .scroll (function () {
//     $ ('#desktopP'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     if (elPosition < windowTop + windowHeight - elHeight) {
//         $ (this) .addClass ("animation fade-in-right");
//         $ ('#peopleAndMilica').addClass ("animation fade-in-left");
//     } 						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ (this) .removeClass ("animation fade-in-right");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ (this) .removeClass ("animation fade-in-right");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });

// $ (window) .scroll (function () {
//     $ ('#peopleAndMilica'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ ('#peopleAndMilica') .removeClass ("animation fade-in-left");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ ('#peopleAndMilica') .removeClass ("animation fade-in-left");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });



// $ (window) .scroll (function () {
//     $ ('#contactIllus'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ (this) .removeClass ("animation fade-in-left");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ (this) .removeClass ("animation fade-in-left");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });

// $ (window) .scroll (function () {
//     $ ('#getInTouch'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     if (elPosition < windowTop + windowHeight - elHeight) {
//         $ (this) .addClass ("animation fade-in-right");
//         $ ('#contactIllus') .addClass ("animation fade-in-left");
//     } 						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ (this) .removeClass ("animation fade-in-right");
//         // $ ('#contactIllus') .removeClass ("animation fade-in-left");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ (this) .removeClass ("animation fade-in-right");
//         // $ ('#contactIllus') .removeClass ("animation fade-in-left");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });

// $ (window) .scroll (function () {
//     $ ('#icons1 div'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     if (elPosition < windowTop + windowHeight - elHeight) {
//         $ (this) .addClass ("animation flip-in-y");
//     } 						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ (this) .removeClass ("animation flip-in-y");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ (this) .removeClass ("animation flip-in-y");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });

// $ (window) .scroll (function () {
//     $ ('#weOffer h2'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     if (elPosition < windowTop + windowHeight - elHeight) {
//         $ ('#pyramid1') .addClass ("animation fade-in-right");
//         $ ('#weOfferDiv > div') .addClass ("animation fade-in-left");
//     } 						                   // adds the class wheh the element is fully in the visible area of the window
//     // if (elPosition > windowTop + windowHeight) {
//     //     $ ('#pyramid1') .removeClass ("animation fade-in-right");
//     //     $ ('#weOfferDiv > div') .removeClass ("animation fade-in-left");
//     // } 						                   // removes the class when the element is not visible in the window
//     // if (elPosition + elHeight < windowTop) {
//     //     $ ('#pyramid1') .removeClass ("animation fade-in-right");
//     //     $ ('#weOfferDiv > div') .removeClass ("animation fade-in-left");
//     // } 					                   // removes the class when the element is not visible in the window
//     });
//     });

// $ (window) .scroll (function () {
//     $ ('#weOfferDiv > div'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//    						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ ('#pyramid1') .removeClass ("animation fade-in-right");
//         $ ('#weOfferDiv > div') .removeClass ("animation fade-in-left");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ ('#pyramid1') .removeClass ("animation fade-in-right");
//         $ ('#weOfferDiv > div') .removeClass ("animation fade-in-left");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });

// $ (window) .scroll (function () {
//     $ ('#icons2 div'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     if (elPosition < windowTop + windowHeight - elHeight) {
//         $ (this) .addClass ("animation flip-in-y");
//     } 						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ (this) .removeClass ("animation flip-in-y");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ (this) .removeClass ("animation flip-in-y");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });

// $ (window) .scroll (function () {
//     $ ('#pyramid2'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     if (elPosition < windowTop + windowHeight - elHeight) {
//         $ (this) .addClass ("animation fade-in-right");
//     } 						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ (this) .removeClass ("animation fade-in-right");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ (this) .removeClass ("animation fade-in-right");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });

// $ (window) .scroll (function () {
//     $ ('#mobileP'). each (function () {
//     var elPosition = $ (this) .offset (). top; 	// Position of the element
//     var elHeight = $ (this) .height (); 		// Height of the element
//     var windowTop = $ (window) .scrollTop (); 	// Top of the window
//     var windowHeight = $ (window) .height (); 	// Height of the window
//     if (elPosition < windowTop + windowHeight - elHeight) {
//         $ (this) .addClass ("animation fade-in-right");
//     } 						                   // adds the class wheh the element is fully in the visible area of the window
//     if (elPosition > windowTop + windowHeight) {
//         $ (this) .removeClass ("animation fade-in-right");
//     } 						                   // removes the class when the element is not visible in the window
//     if (elPosition + elHeight < windowTop) {
//         $ (this) .removeClass ("animation fade-in-right");
//     } 					                   // removes the class when the element is not visible in the window
//     });
//     });

//     $ (window) .scroll (function () {
//         $ ('#contactIllus2'). each (function () {
//         var elPosition = $ (this) .offset (). top; 	// Position of the element
//         var elHeight = $ (this) .height (); 		// Height of the element
//         var windowTop = $ (window) .scrollTop (); 	// Top of the window
//         var windowHeight = $ (window) .height (); 	// Height of the window
//         if (elPosition < windowTop + windowHeight - elHeight) {
//             $ (this) .addClass ("animation fade-in-left");
//         } 						                   // adds the class wheh the element is fully in the visible area of the window
//         if (elPosition > windowTop + windowHeight) {
//             $ (this) .removeClass ("animation fade-in-left");
//         } 						                   // removes the class when the element is not visible in the window
//         if (elPosition + elHeight < windowTop) {
//             $ (this) .removeClass ("animation fade-in-left");
//         } 					                   // removes the class when the element is not visible in the window
//         });
//         });


