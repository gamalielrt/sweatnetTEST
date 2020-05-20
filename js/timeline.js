//const syncVideo = () => {
//    videoalpha.currentTime = 1;
//    video.currentTime = 1;
//    console.log("syncVideo");
//}


function startTimeline() {
    var tl = new TimelineMax();
    tl.add(playVideo);
    //tl.add(canvasOpacity);

    tl.add(gesturesOpacity,3);


    //tl.to(count1, 10, {var: 10, ease: Expo.easeOut});
    //tl.to(lightCount, 5, {var: 100, onUpdate: updateLights, ease: Expo.easeOut});
    tl.to(testLight, 5, {intensity: 1, /*onComplete:socialsOpacity1,*/ ease: Expo.easeOut},8);
    tl.to(testLight1, 5, {intensity: 1, ease: Expo.easeOut},8);
    tl.to(testLight3, 5, {intensity: 1, ease: Expo.easeOut},8);
    tl.to(testLight4, 5, {intensity: 1, ease: Expo.easeOut},8);
    tl.to(testLight5, 5, {intensity: 1, ease: Expo.easeOut},8);
    tl.to(testLight2, 5, {intensity: 1, ease: Expo.easeOut},8);

    tl.to(testLight6, 7, {intensity: 18, ease: Expo.easeOut},8);
    tl.to(testLight7, 7, {intensity: 18, ease: Expo.easeOut},8);
    tl.to(testLight8, 7, {intensity: 18, ease: Expo.easeOut},8);
    tl.add(socialsOpacity1,8);

    //var socials = document.getElementById( "socials" );

    //tl.add(socialsOpacity1,8);
    //tl.to(socials.style, 1, {opacity: 1, ease: Expo.easeOut},8);



    //tl.to(testLight9, 7, {intensity: 50, ease: Expo.easeOut},8);

    //onUpdate:socialsOpacity1();


    //tl.add(socialsOpacity1,40);

    tl.to(testLight6.color, 3, {r: 1, g:0.1, b:0.1 ,ease: Expo.easeOut},40);
    tl.to(testLight7.color, 3, {r: 1, g:0.1, b:0.1, /*onComplete: syncVideo(),*/ ease: Expo.easeOut},40);
    tl.to(testLight8.color, 3, {r: 1, g:0.1, b:0.1, ease: Expo.easeOut},40);
    tl.to(stagesurfacemtl.emissive, 3, {r: 1, g:0.1, b:0.1, ease: Expo.easeOut},40);

    //tl.add(socialsOpacity1,50);


    tl.to(testLight6.color, 3, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},54);
    tl.to(testLight7.color, 3, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},54);
    tl.to(testLight8.color, 3, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},54);
    tl.to(stagesurfacemtl.emissive, 3, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},54);


    tl.to(testLight6, 1, {intensity: 0, ease: Expo.easeOut},70);
    tl.to(testLight7, 1, {intensity: 0, ease: Expo.easeOut},70);
    tl.to(testLight8, 1, {intensity: 0, ease: Expo.easeOut},70);
    tl.to(stagesurfacemtl.emissive, 1, {r: 0, g:0, b:0, ease: Expo.easeOut},70);


    tl.to(stageSpot, 0.001, {intensity: 30, ease:Linear.easeNone},72);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},72.05);
    tl.to(stageSpot1, 0.001, {intensity: 30, ease:Linear.easeNone},72.05);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},72.1);
    tl.to(stageSpot2, 0.001, {intensity: 30, ease:Linear.easeNone},72.1);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},72.15);
    tl.to(stageSpot3, 0.001, {intensity: 30, ease:Linear.easeNone},72.15);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},72.2);
    tl.to(stageSpot, 0.001, {intensity: 30, ease:Linear.easeNone},72.2);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},72.25);
    tl.to(stageSpot1, 0.001, {intensity: 30, ease:Linear.easeNone},72.25);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},72.30);
    tl.to(stageSpot2, 0.001, {intensity: 30, ease:Linear.easeNone},72.30);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},72.35);
    tl.to(stageSpot3, 0.001, {intensity: 30, ease:Linear.easeNone},72.35);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},72.40);

    tl.to(testLight6, 0.001, {intensity: 70, ease: Expo.easeOut},);
    tl.to(testLight7, 0.001, {intensity: 70, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 70, ease: Expo.easeOut},);
    tl.to(testLight6, 0.001, {distance: 600, ease: Expo.easeOut},);
    tl.to(testLight7, 0.001, {distance: 600, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {distance: 600, ease: Expo.easeOut},);

    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},);

    tl.to(testLight6, 0.04, {intensity: 18, ease: Expo.easeOut},);
    tl.to(testLight7, 0.04, {intensity: 18, ease: Expo.easeOut},);
    tl.to(testLight8, 0.04, {intensity: 18, ease: Expo.easeOut},);
    tl.to(testLight6, 0.04, {distance: 450, ease: Expo.easeOut},);
    tl.to(testLight7, 0.04, {distance: 450, ease: Expo.easeOut},);
    tl.to(testLight8, 0.04, {distance: 450, ease: Expo.easeOut},);

    //tl.to(stagesurfacemtl.emissive, 18, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},);







    //tl.add(socialsOpacity1,90);


    tl.to(testLight6.color, 3, {r: 1, g:0.1, b:0.1, /*onUpdate:socialsOpacity1*/ ease: Expo.easeOut},91);
    tl.to(testLight7.color, 3, {r: 1, g:0.1, b:0.1, ease: Expo.easeOut},91);
    tl.to(testLight8.color, 3, {r: 1, g:0.1, b:0.1, ease: Expo.easeOut},91);
    tl.to(stagesurfacemtl.emissive, 3, {r: 1, g:0.1, b:0.1, ease: Expo.easeOut},91);

    tl.to(testLight6.color, 3, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},100);
    tl.to(testLight7.color, 3, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},100);
    tl.to(testLight8.color, 3, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},100);
    tl.to(stagesurfacemtl.emissive, 3, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},100);

    tl.to(testLight6.color, 3, {r: 1, g:0.1, b:0.1, /*onUpdate:socialsOpacity2*/ ease: Expo.easeOut},131);
    tl.to(testLight7.color, 3, {r: 1, g:0.1, b:0.1, ease: Expo.easeOut},131);
    tl.to(testLight8.color, 3, {r: 1, g:0.1, b:0.1, ease: Expo.easeOut},131);
    tl.to(stagesurfacemtl.emissive, 3, {r: 1, g:0.1, b:0.1, ease: Expo.easeOut},131);





    


    tl.to(testLight6, 15, {intensity: 0, ease: Expo.easeOut},142);
    tl.to(testLight7, 15, {intensity: 0, ease: Expo.easeOut},142);
    tl.to(testLight8, 15, {intensity: 0, ease: Expo.easeOut},142);
    tl.to(stagesurfacemtl.emissive, 15, {r: 0, g:0, b:0, ease: Expo.easeOut},142);

    tl.to(stageSpot, 7, {intensity: 0.5, ease:Linear.easeNone},145);
    tl.to(stageSpot2, 7, {intensity: 0.5, ease:Linear.easeNone},145);


/* 
    tl.to(stageSpot, 0.001, {intensity: 1, ease:Linear.easeNone},171);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.08");
    tl.to(stageSpot1, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.08");
    tl.to(stageSpot2, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");


    tl.to(stageSpot, 0.001, {intensity: 1, ease:Linear.easeNone},176);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.08");
    tl.to(stageSpot1, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.08");
    tl.to(stageSpot2, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.08");
    tl.to(stageSpot3, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.08");


    tl.to(stageSpot, 0.001, {intensity: 1, ease:Linear.easeNone},183);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.08");
    tl.to(stageSpot1, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");


    tl.to(stageSpot, 0.001, {intensity: 1, ease:Linear.easeNone},186);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.08");
    tl.to(stageSpot1, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.08");
    tl.to(stageSpot2, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.08");
    tl.to(stageSpot3, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.08");


*/


     ////////////// Buildup
     
    tl.to(stageSpot, 0.001, {intensity: 1, ease:Linear.easeNone},179);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 1, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 1, ease:Linear.easeNone},);
    
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot, 0.001, {intensity: 2, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 2, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 2, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 2, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 4, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 4, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 4, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 4, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 5, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 5, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 5, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 20, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 10, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 10, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 10, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 10, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 12, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 12, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 12, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 12, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 15, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 15, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 15, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 15, ease:Linear.easeNone},);
    
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot, 0.001, {intensity: 18, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 18, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 18, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 18, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 20, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 20, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 20, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 15, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 20, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 20, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 20, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 20, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 23, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 23, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 23, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 23, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 26, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 26, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 26, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 26, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 28, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 28, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 28, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 28, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 30, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 30, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 30, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 30, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 33, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 33, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 33, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 33, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 36, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 36, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 36, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 36, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 40, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 40, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 40, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 40, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");

    tl.to(stageSpot, 0.001, {intensity: 40, ease:Linear.easeNone},);
    tl.to(stageSpot, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot1, 0.001, {intensity: 40, ease:Linear.easeNone},);
    tl.to(stageSpot1, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot2, 0.001, {intensity: 40, ease:Linear.easeNone},);
    tl.to(stageSpot2, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");
    tl.to(stageSpot3, 0.001, {intensity: 40, ease:Linear.easeNone},);
    tl.to(stageSpot3, 0.001, {intensity: 0, ease:Linear.easeNone},"+=0.05");


    tl.to(testLight6.color, 0.001, {r: 1, g:0.1, b:0.1, /*onUpdate:socialsOpacity3*/ ease: Expo.easeOut},);
    tl.to(testLight7.color, 0.001, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},);
    tl.to(testLight8.color, 0.001, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 1, g:0.1, b:0.1, ease: Expo.easeOut},);

    

    

    tl.to(testLight6, 0.1, {intensity: 150, ease: Expo.easeOut},);
    tl.to(testLight7, 0.1, {intensity: 150, ease: Expo.easeOut},);
    tl.to(testLight8, 0.1, {intensity: 150, ease: Expo.easeOut},);
    
    tl.to(testLight6, 1, {intensity: 18, ease: Expo.easeOut},"+=0.1");
    tl.to(testLight7, 1, {intensity: 18, ease: Expo.easeOut},);
    tl.to(testLight8, 1, {intensity: 18, ease: Expo.easeOut},);

    tl.to(testLight6.color, 0.001, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},"+=4");
    tl.to(testLight7.color, 0.001, {r: 0.1, g:1, b:0.1, ease: Expo.easeOut},);
    tl.to(testLight8.color, 0.001, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0.1, g:1, b:0.1, ease: Expo.easeOut},);

    tl.to(testLight6, 0.1, {intensity: 150, ease: Expo.easeOut},);
    tl.to(testLight7, 0.1, {intensity: 150, ease: Expo.easeOut},);
    tl.to(testLight8, 0.1, {intensity: 150, ease: Expo.easeOut},);
    
    tl.to(testLight6, 1, {intensity: 18, ease: Expo.easeOut},"+=0.1");
    tl.to(testLight7, 1, {intensity: 18, ease: Expo.easeOut},);
    tl.to(testLight8, 1, {intensity: 18, ease: Expo.easeOut},);


    tl.to(testLight6.color, 0.001, {r: 1, g:0.1, b:0.1, ease: Expo.easeOut},"+=4");
    tl.to(testLight7.color, 0.001, {r: 1, g:0.1, b:0.1, ease: Expo.easeOut},);
    tl.to(testLight8.color, 0.001, {r: 0.1, g:1, b:0.1, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 1, g:0.1, b:0.1, ease: Expo.easeOut},);

    tl.to(testLight6, 0.1, {intensity: 150, ease: Expo.easeOut},);
    tl.to(testLight7, 0.1, {intensity: 150, ease: Expo.easeOut},);
    tl.to(testLight8, 0.1, {intensity: 150, ease: Expo.easeOut},);
    
    tl.to(testLight6, 1, {intensity: 18, ease: Expo.easeOut},"+=0.1");
    tl.to(testLight7, 1, {intensity: 18, ease: Expo.easeOut},);
    tl.to(testLight8, 1, {intensity: 18, ease: Expo.easeOut},);


    tl.to(testLight6.color, 0.001, {r: 0.1, g:1, b:0.1, ease: Expo.easeOut},"+=4");
    tl.to(testLight7.color, 0.001, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},);
    tl.to(testLight8.color, 0.001, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0.1, g:0.1, b:1, ease: Expo.easeOut},);

    tl.to(testLight6, 0.1, {intensity: 150, ease: Expo.easeOut},);
    tl.to(testLight7, 0.1, {intensity: 150, ease: Expo.easeOut},);
    tl.to(testLight8, 0.1, {intensity: 150, ease: Expo.easeOut},);
    
    tl.to(testLight6, 1, {intensity: 18, ease: Expo.easeOut},"+=0.1");
    tl.to(testLight7, 1, {intensity: 18, ease: Expo.easeOut},);
    tl.to(testLight8, 1, {intensity: 18, ease: Expo.easeOut},);


    tl.to(testLight6.color, 0.001, {r: 0.1, g:1, b:0.1, ease: Expo.easeOut},"+=4");
    tl.to(testLight7.color, 0.001, {r: 0.1, g:1, b:0.1, ease: Expo.easeOut},);
    tl.to(testLight8.color, 0.001, {r: 0.1, g:1, b:0.1, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0.1, g:1, b:0.1, ease: Expo.easeOut},);

    tl.to(testLight6, 0.01, {intensity: 150, ease: Expo.easeOut},);
    tl.to(testLight7, 0.01, {intensity: 150, ease: Expo.easeOut},);
    tl.to(testLight8, 0.01, {intensity: 150, ease: Expo.easeOut},);
    
    tl.to(testLight6, 0.1, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.1, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.1, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 1, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    //strobe
    //
    //
    //
    //
    //
    //

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 10, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 10, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:10, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});


    //strobe 9
    //
    //
    //
    //
    //
    //
    //
    //



    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

        tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
    
    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

        tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
    
    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 9, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 9, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:9, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});


    //strobe 8
    //
    //
    //
    //
    //
    //
    //
    //



    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 8, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 8, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:8, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    //strobe 7
    //
    //
    //
    //
    //
    //

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
    
    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 7, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 7, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:7, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});


    //strobe 6
    //
    //
    //
    //
    //
    //

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 6, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 6, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:6, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});


    //strobe 5
    //
    //
    //
    //
    //
    //

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 5, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 5, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:5, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});


    //strobe 4
    //
    //
    //
    //
    //

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 4, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 4, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:4, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    //strobe 3
    //
    //
    //
    //
    //
    //

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 3, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 3, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:3, b:0, ease: Expo.easeOut});

    tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
    tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
    tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

// strobe 2
//
//
//
//

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 2, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 2, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:2, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

// strobe 1
//
//
//
//
//
//

tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});
tl.to(testLight6, 0.001, {intensity: 1, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 1, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:1, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

//strobe 0.5
//
//
//
//
//
//

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0.5, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0.5, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0.5, b:0, ease: Expo.easeOut});

tl.to(testLight6, 0.001, {intensity: 0, ease: Expo.easeOut},"+=0.05");
tl.to(testLight7, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(testLight8, 0.001, {intensity: 0, ease: Expo.easeOut},);
tl.to(stagesurfacemtl.emissive, 0.001, {r: 0, g:0, b:0, ease: Expo.easeOut});




































    tl.to(testLight, 5, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight1, 5, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight3, 5, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight4, 5, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight5, 5, {intensity: 10, ease: Expo.easeOut},);
    tl.to(testLight2, 5, {intensity: 10, ease: Expo.easeOut},);

    
     

 }
