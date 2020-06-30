var colourOff = {r: 0, g:0, b:0}
var blue = {r: 0.26, g:0.26, b:1}
var red = {r: 1, g:0.1, b:0.1}
var green = {r: 0.1, g:1, b:0.1}
var darkGreen = {r: 0.1, g:0.5, b:0.1}
var purple = {r: 0.6, g:0.1, b:0.6}
var cyan = {r: 0.1, g:0.8, b:0.8}
var white = {r:1, g:1, b:1}
var yellow = {r: 1, g:1, b:0.1}
var pink = {r: 0.82, g:0.37, b:0.93}
var orange = {r: 1, g:0.55, b:0.1};
var indianRed = {r: 0.93, g:0.39, b:0.39};
var cerulean = {r: 0.2, g:0.72, b:0.80};
var antiqueWhite = {r: 0.98, g:0.92, b:0.84};

var houseLightsInOp1 = false;
var houseLightsInOp = false;
var lightCue1 = false;
var lightCue2 = false;
var lightCue3 = false;
var lightCue4 = false;
var lightCue5 = false;
var lightCue6 = false;
var lightCue7 = false;
var lightCue8 = false;
var lightCue9 = false;
var lightCue10 = false;
var lightCue11 = false;
var lightCue12 = false;
var lightCue13 = false;
var lightCue14 = false;
var lightCue15 = false;
var lightCue16 = false;
var lightCue17 = false;
var lightCue18 = false;
var lightCue19 = false;
var lightCue20 = false;
var lightCue21 = false;
var lightCue22 = false;
var lightCue23 = false;
var lightCue24 = false;
var lightCue25 = false;
var lightCue26 = false;
var lightCue27 = false;
var lightCue28 = false;
var lightCue29 = false;
var lightCue30 = false;
var lightCue31 = false;
var lightCue32 = false;
var lightCue33 = false;
var lightCue34 = false;
var lightCue35 = false;
var lightCue36 = false;
var lightCue37 = false;
var lightCue38 = false;
var lightCue39 = false;
var lightCue40 = false;
var lightCue41 = false;
var lightCue42 = false;
var lightCue43 = false;
var lightCue44 = false;
var lightCue45 = false;
var lightCue46 = false;
var lightCue47 = false;
var lightCue48 = false;
var lightCue49 = false;
var lightCue50 = false;
var lightCue51 = false;
var lightCue52 = false;
var lightCue53 = false;
var lightCue54 = false;
var lightCue55 = false;
var lightCue56 = false;
var lightCue57 = false;
var lightCue58 = false;
var lightCue59 = false;
var lightCue60 = false;
var lightCue61 = false;
var lightCue62 = false;
var lightCue63 = false;








function updateStartLights () {

        //////////// Pre Countdown


    if (video.currentTime == 0) {
        testLight.intensity = 10;
        testLight1.intensity = 10;
        testLight2.intensity = 10;
        testLight3.intensity = 10;
        testLight4.intensity = 10;
        testLight5.intensity = 10;

        testLight6.intensity = 0;
        testLight7.intensity = 0;
        testLight8.intensity = 0;

        //testLight6.color = blue;
        //testLight7.color = blue;
        //testLight8.color = blue;

        stagesurfacemtl.emissive = colourOff



    }
    //////////// Countdown

    if (video.currentTime >= 2 && video.currentTime <= 67) {
        testLight.intensity = 3;
        testLight1.intensity = 3;
        testLight2.intensity = 3;
        testLight3.intensity = 3;
        testLight4.intensity = 3;
        testLight5.intensity = 3;

        testLight6.intensity = 0;
        testLight7.intensity = 0;
        testLight8.intensity = 0;

        //testLight6.color = blue;
        //testLight7.color = blue;
        //testLight8.color = blue;

        stagesurfacemtl.emissive = colourOff


    }


    ///////// ACT 1

    if (video.currentTime >= 60 && video.currentTime <= 290) {
        testLight.intensity = 1;
        testLight1.intensity = 1;
        testLight2.intensity = 1;
        testLight3.intensity = 1;
        testLight4.intensity = 1;
        testLight5.intensity = 1;

        testLight6.intensity = 18;
        testLight7.intensity = 18;
        testLight8.intensity = 18;

        //testLight6.color = blue;
        //testLight7.color = blue;
        //testLight8.color = blue;

        stagesurfacemtl.emissive = blue;


    }

    ///////////  INTERVAL 1

    if (video.currentTime >= 291 && video.currentTime <= 304) {
        testLight.intensity = 1;
        testLight1.intensity = 1;
        testLight2.intensity = 1;
        testLight3.intensity = 1;
        testLight4.intensity = 1;
        testLight5.intensity = 1;

        testLight6.intensity = 0;
        testLight7.intensity = 0;
        testLight8.intensity = 0;

        //testLight6.color = blue;
        //testLight7.color = blue;
        //testLight8.color = blue;

        stagesurfacemtl.emissive = colourOff;


    }


    ///////// ACT 2

    
    if (video.currentTime >= 304 && video.currentTime <= 515) {
        testLight.intensity = 1;
        testLight1.intensity = 1;
        testLight2.intensity = 1;
        testLight3.intensity = 1;
        testLight4.intensity = 1;
        testLight5.intensity = 1;

        testLight6.intensity = 18;
        testLight7.intensity = 18;
        testLight8.intensity = 18;

        testLight6.color = red;
        testLight7.color = red;
        testLight8.color = red;

        //stagesurfacemtl.emissive = red;
    }

    ///////////  INTERVAL 2

    if (video.currentTime >= 515 && video.currentTime <= 533) {
        testLight.intensity = 1;
        testLight1.intensity = 1;
        testLight2.intensity = 1;
        testLight3.intensity = 1;
        testLight4.intensity = 1;
        testLight5.intensity = 1;
    
        testLight6.intensity = 0;
        testLight7.intensity = 0;
        testLight8.intensity = 0;
    
        //testLight6.color = blue;
        //testLight7.color = blue;
        //testLight8.color = blue;
    
        stagesurfacemtl.emissive = colourOff;
    
    
    }
    

    ///////// ACT 3


    if (video.currentTime >= 533 && video.currentTime <= 797) {
        testLight.intensity = 1;
        testLight1.intensity = 1;
        testLight2.intensity = 1;
        testLight3.intensity = 1;
        testLight4.intensity = 1;
        testLight5.intensity = 1;

        testLight6.intensity = 18;
        testLight7.intensity = 18;
        testLight8.intensity = 18;

        testLight6.color = antiqueWhite;
        testLight7.color = antiqueWhite;
        testLight8.color = antiqueWhite;
        stagesurfacemtl.emissive = antiqueWhite;



    }

    ///////// After Show

    if (video.currentTime >= 800) {
        testLight.intensity = 10;
        testLight1.intensity = 10;
        testLight2.intensity = 10;
        testLight3.intensity = 10;
        testLight4.intensity = 10;
        testLight5.intensity = 10;

        testLight6.intensity = 0;
        testLight7.intensity = 0;
        testLight8.intensity = 0;

        stagesurfacemtl.emissive = colourOff


    }

}



function startLightingCues() {
    videoTime = Math.round(video.currentTime);
    console.log(videoTime, testLight6.intensity,testLight6.decay)

    




    /////////////////////  House Lights Down

    if (videoTime == 1 & houseLightsInOp1 == false) {
        houseLightsInOp1 = true;

        houseLightsIntensity(10, 4);
        //lightFade(3, blue, blue, blue, "fade" )

        //stageLightsIntensity(10, 0);
        //floorColour(0,colourOff);

        stageBlackout(10);




        
    }


    ///////////////////   Speech



    if (videoTime == 60 & houseLightsInOp == false) {
        houseLightsInOp = true;



        
    }

    ////////////////    SWEAT    /////////////////////////


    /////////////////  INTRO

    if (videoTime == 89 & lightCue1 == false) {
        lightCue1 = true;

        
    }

    /////////////////  V1

    if (videoTime == 108 & lightCue2 == false) {
        lightCue2 = true;
    
            
    }
    /////////////////  V1 1/2

    if (videoTime == 118 & lightCue3 == false) {
        lightCue3 = true;

        
    }
    /////////////////  BRIDGE

    if (videoTime == 127 & lightCue4 == false) {
        lightCue4 = true;

        
    }
    /////////////////  C1

    if (videoTime == 137 & lightCue5 == false) {
        lightCue5 = true;

        
    }
    /////////////////  C1 1/2

    if (videoTime == 146 & lightCue6 == false) {
        lightCue6 = true;

        
    }
    /////////////////  STOP

    if (videoTime == 154 & lightCue7 == false) {
        lightCue7 = true;

        
    }
    /////////////////  V2

    if (videoTime == 166 & lightCue8 == false) {
        lightCue8 = true;

        
    }
    /////////////////  V2 1/2

    if (videoTime == 176 & lightCue9 == false) {
        lightCue9 = true;

        
    }
    /////////////////  BRIDGE

    if (videoTime == 194 & lightCue10 == false) {
        lightCue10 = true;

        
    }
    /////////////////  BRIDGE 1/2

    if (videoTime == 204 & lightCue11 == false) {
        lightCue11 = true;

        
    }
    /////////////////  C2

    if (videoTime == 213 & lightCue12 == false) {
        lightCue12 = true;

        
    }
    /////////////////  C2 1/4

    if (videoTime == 223 & lightCue13 == false) {
        lightCue13 = true;

        
    }
    /////////////////  C2 1/2

    if (videoTime == 232 & lightCue14 == false) {
        lightCue14 = true;

        
    }
    /////////////////  C2 3/4

    if (videoTime == 241 & lightCue15 == false) {
        lightCue15 = true;

        
    }
    /////////////////  C2 STOP

    if (videoTime == 248 & lightCue16 == false) {
        lightCue16 = true;

        
    }
    /////////////////  OUTRO

    if (videoTime == 251 & lightCue17 == false) {
        lightCue17 = true;
    
            
    }

    /////////////////  END

    if (videoTime == 291 & lightCue17 == false) {
        lightCue17 = true;

        stageBlackout(0);
        floorColour(0,colourOff)

        
                
    }

    ////////////////    JESS WINTER    /////////////////////////


    /////////////////  INTRO

    if (videoTime == 304 & lightCue18 == false) {
        lightCue18 = true;

        lightFade(0, red, red, red, 'flash');



        
    }

    /////////////////  INTRO 1/2

    if (videoTime == 311 & lightCue19 == false) {
        lightCue19 = true;

        sideLightsColour(0,red, blue, red, blue)
        sideLightsStrobe(1.1,8);
        sideLightsIntensity(5, 20, 20)

    
            
    }
    /////////////////  PRE

    if (videoTime == 334 & lightCue20 == false) {
        lightCue20 = true;

        sideLightsPulse(0.6, 27, 0);

        
    }
    /////////////////  END OF PRE

    if (videoTime == 352 & lightCue21 == false) {
        lightCue21 = true;

        //spotsPanUp(0.5,300,-400,'once',1);

        
    }
    /////////////////  V2

    if (videoTime == 351 & lightCue22 == false) {
        lightCue22 = true;

        lightFade(0, blue, blue, blue,'fade');
        spotsPanUp(0.5,300,-400,'once',1);



        
    }
    /////////////////  PRE

    if (videoTime == 364 & lightCue23 == false) {
        lightCue23 = true;
        spotsPanUp(0.5,-400,300,'stagger',29);
        sideLightsPulse(0.6, 23, 0);



        
    }
    /////////////////  DROP

    if (videoTime == 382 & lightCue24 == false) {
        lightCue24 = true;

        stageBlackout(0);
        floorColour(0,colourOff);
        sideLightsColour(0,red, blue, red, blue)

        sideLightsIntensity(0, 20, 20);

        sideLightsPulse(0.05, 320, 0);
        spotsPanUp(19,-400,1400,'once',1);




        
    }
    /////////////////  BUILD

    if (videoTime == 392 & lightCue25 == false) {
        lightCue25 = true;

        
    }
    /////////////////  INST

    if (videoTime == 399 & lightCue26 == false) {
        lightCue26 = true;


        lightFade(0, red, red, red, 'fade');


        stageLightsPulse(1,15, red,red,red);

        
    }
    /////////////////  V3

    if (videoTime == 416 & lightCue27 == false) {
        lightCue27 = true;


        lightFade(0, blue, blue, blue, 'fade');

        
    }
    /////////////////  PRE

    if (videoTime == 434 & lightCue28 == false) {
        lightCue28 = true;

        lightFade(0, red, red, red, 'fade');
        sideLightsColour(0,red, blue, red, blue)

        sideLightsIntensity(10,4,20)
        sideLightsStrobe(1.1,6);

        spotsPanUp(0.5,-400,300,'stagger',29);
        //sideLightsPulse(0.6, 23, 0);



        
    }
    /////////////////  DROP

    if (videoTime == 443 & lightCue29 == false) {
        lightCue29 = true;

        stageBlackout(0);
        floorColour(0,colourOff);
        //sideLightsColour(0,blue, red, blue, red)

        sideLightsIntensity(0, 20, 20);

        sideLightsPulse(0.05, 320, 0);
        spotsPanUp(19,-400,1400,'once',1);


        
    }
    /////////////////  DROP 1/2

    if (videoTime == 460 & lightCue30 == false) {
        lightCue30 = true;

        sideLightsColour(0,red, red, red, red);

        sideLightsIntensity(0, 20, 20);

        sideLightsPulse(0.05, 320, 0);
        spotsPanUp(19,-400,1400,'once',1);


        
    }
    /////////////////  STOP

    if (videoTime == 477 & lightCue31 == false) {
        lightCue31 = true;

        
    }
    /////////////////  INST

    if (videoTime == 479 & lightCue32 == false) {
        lightCue32 = true;

        stageLightsPulse(1,35, red,red,red);
        floorColour (2, red);



        
    }
    /////////////////  SAD

    if (videoTime == 498 & lightCue33 == false) {
        lightCue33 = true;

        sideLightsPulse(1, 1, 20);
        sideLightsColour(0,blue, blue, blue, blue)

        spotsPanUp(1,-400,1000,'once',1);



        
    }
    /////////////////  SAD

    if (videoTime == 503 & lightCue34 == false) {
        lightCue34 = true;

        sideLightsPulse(1, 1, 20);
        sideLightsColour(0,blue, blue, blue, blue)

        spotsPanUp(1,-400,1000,'once',1);


    
            
    }

    /////////////////  END

    if (videoTime == 515 & lightCue35 == false) {
        lightCue35 = true;

        stageBlackout(0);
        floorColour(0,colourOff)

        
                
    }

    ////////////////    HAICH BER NA   /////////////////////////


    /////////////////  INTRO

    if (videoTime == 533 & lightCue36 == false) {
        lightCue36 = true;

        stageLightsIntensity(0, 18);

        lightFade(0, antiqueWhite, antiqueWhite, antiqueWhite, 'fade')



        stageLightsPulse(1, 9,antiqueWhite,antiqueWhite,antiqueWhite )

        
    }

    /////////////////  V1

    if (videoTime == 546 & lightCue37 == false) {
        lightCue37 = true;

        lightFade(2, indianRed, indianRed, indianRed, 'fade')

    
            
    }
    /////////////////  BEAT IN

    if (videoTime == 553 & lightCue38 == false) {
        lightCue38 = true;

        stageLightStrobe(0.05, 9)

        lightFade(2, antiqueWhite, antiqueWhite, antiqueWhite, 'fade')

        
    }

    /////////////////  BEAT IN

    if (videoTime == 560 & lightCue60 == false) {
        lightCue60 = true;
    
        stageLightStrobe(0.05, 9)
    
        lightFade(2, indianRed, indianRed, indianRed, 'fade')
    
            
    }

    if (videoTime == 567 & lightCue62 == false) {
        lightCue62 = true;
    
        stageLightStrobe(0.05, 9)
    
    
            
    }

    
    /////////////////  DROP

    if (videoTime == 574 & lightCue39 == false) {
        lightCue39 = true;

        stageBlackout(1);

        sideLightsPulse(7, 1,3);

        sideLightsColour(0,indianRed,indianRed,indianRed,indianRed);

        spotsPanUp(2,0,1000,'yoyo',16);

        //sideLightsIntensity(7,0,5);

        //sideLightsStrobe(0.2, 99)







        
    }
    /////////////////  BUILD

    if (videoTime == 587 & lightCue40 == false) {
        lightCue40 = true;

        lightFade(8, cerulean, cerulean, cerulean, 'fade')


        stageLightsIntensity(1, 18);


        
    }
    /////////////////  C1

    if (videoTime == 588 & lightCue41 == false) {
        lightCue41 = true;





        stageLightsPulse(0.2, 141)
        

        


        
    }
    /////////////////  'TIME ALONE'

    if (videoTime == 600 & lightCue42 == false) {
        lightCue42 = true;

        lightFade(2, indianRed, indianRed, indianRed, 'fade')

        sideLightsColour(0,antiqueWhite,antiqueWhite,antiqueWhite,antiqueWhite);

        //sideLightsStrobe(0.05, 19)
        //sideLightsIntensity(1,0,20);
        sideLightsPulse(0.5, 1,10);

        spotsPanUp(1,0,1000,'once');





        
    }
    /////////////////  V2

    if (videoTime == 616 & lightCue43 == false) {
        lightCue43 = true;

        lightFade(0, cerulean, cerulean, cerulean, 'fade')

        //stageLightsIntensity(3,5);


        
    }

    /////////////////  BEAT

    if (videoTime == 619 & lightCue61 == false) {
        lightCue61 = true;
        stageLightsPulse(1, 25,antiqueWhite,antiqueWhite,antiqueWhite )

            
    }
    
    /////////////////  PRE

    if (videoTime == 629 & lightCue44 == false) {
        lightCue44 = true;

        sideLightsColour(0,indianRed,indianRed,indianRed,indianRed);

        //sideLightsStrobe(0.05, 19)
        //sideLightsIntensity(1,0,20);
        sideLightsPulse(0.5, 1,10);

        spotsPanUp(1,0,1000,'once');


        
    }
    /////////////////  DROP

    if (videoTime == 644 & lightCue45 == false) {
        lightCue45 = true;

        stageBlackout(1);

        //sideLightsPulse(7, 1,5);

        sideLightsColour(0,indianRed,indianRed,indianRed,indianRed);

        spotsPanUp(0.7,300,1000,'stagger',16);

        sideLightsIntensity(0,0,5);

        sideLightsStrobe(0.2, 99)



        
    }
    /////////////////  BUILD

    if (videoTime == 655 & lightCue46 == false) {
        lightCue46 = true;

        //stageLightsIntensity(1, 18);

        //lightFade(8, cerulean, cerulean, cerulean, 'fade')

        
    }
    /////////////////  C2

    if (videoTime == 657 & lightCue47 == false) {
        lightCue47 = true;

        stageLightsIntensity(0, 18);


        lightFade(8, cerulean, cerulean, cerulean, 'fade')

        stageLightsPulse(0.2, 141)

    }
    /////////////////  'TIME ALONE'

    if (videoTime == 670 & lightCue48 == false) {
        lightCue48 = true;

        lightFade(2, indianRed, indianRed, indianRed, 'fade')

        sideLightsColour(0,cerulean,cerulean,cerulean,cerulean);

        sideLightsStrobe(0.2, 77)


        
    }
    /////////////////  CHORDS FADE IN

    if (videoTime == 680 & lightCue49 == false) {
        lightCue49 = true;

        
    }
    /////////////////  DROP - SPACEY

    if (videoTime == 686 & lightCue50 == false) {
        lightCue50 = true;

        stageLightsIntensity(2,2)

        lightFade(1, antiqueWhite, antiqueWhite, antiqueWhite, 'fade')




        
    }
    /////////////////  BEAT

    if (videoTime == 699 & lightCue51 == false) {
        lightCue51 = true;

        stageLightsIntensity(0,5)

        stageLightsPulse(2,11,antiqueWhite,antiqueWhite,antiqueWhite)
        spotsPanUp(0.7,600,1000,'stagger',23);

        sideLightsPulse(0.5, 23,5);

        
    }
    /////////////////  QUIET PRE

    if (videoTime == 713 & lightCue52 == false) {
        lightCue52 = true;

        spotsPanUp(16,300,1200,'once');


        sideLightsColour(0,indianRed,indianRed,indianRed,indianRed);

        sideLightsPulse(0.5, 29,5);

        stageBlackout(5);




    
            
    }

    /////////////////  BUILD

    if (videoTime == 725 & lightCue53 == false) {
        lightCue53 = true;
        
                
    }
    /////////////////  DROP

    if (videoTime == 726 & lightCue54 == false) {
        lightCue54 = true;

        spotsPanUp(0.7,2000,-300,'once');



            
                    
    }
    /////////////////  C3

    if (videoTime == 732 & lightCue55 == false) {
        lightCue55 = true;

        stageLightsIntensity(0,20)

        lightFade(8, cerulean, cerulean, cerulean, 'fade')

        stageLightsPulse(0.2, 313)

        spotsPanUp(0,300,300,'once');


        sideLightsPulse(0.2, 3,20);





        
                
    }

    if (videoTime == 742 & lightCue63 == false) {
        lightCue63 = true;
        sideLightsPulse(0.2, 3,20);

    }
    /////////////////  C3 1/2

    if (videoTime == 755 & lightCue56 == false) {
        lightCue56 = true;

        spotsPanUp(0.7,600,1000,'stagger',47);

        sideLightsStrobe(0.2, 99)

        sideLightsIntensity(10, 0, 25)

        
                
    }
    /////////////////  C3 OUTRO

    if (videoTime == 770 & lightCue57 == false) {
        lightCue57 = true;
        
                
    }
    /////////////////  BEAT CUT

    if (videoTime == 784 & lightCue58 == false) {
        lightCue58 = true;
        
                
    }
    /////////////////  END

    if (videoTime == 797 & lightCue59 == false) {
        lightCue59 = true;

        stageBlackout(0);
        floorColour(0,colourOff)

        
                
    }
    


    
    
    




}

function lightFade(_speed, _colour1, _colour2, _colour3, _flash) {

    switch (_flash) {
        case 'fade':
            TweenMax.to(testLight6.color, _speed, {r: _colour1.r , g:_colour1.g, b:_colour1.b, ease: Expo.easeOut},0);
            TweenMax.to(testLight7.color, _speed, {r: _colour2.r , g:_colour2.g, b:_colour2.b, ease: Expo.easeOut},0);
            TweenMax.to(testLight8.color, _speed, {r: _colour3.r , g:_colour3.g, b:_colour3.b, ease: Expo.easeOut},0);
            TweenMax.to(stagesurfacemtl.emissive, _speed, {r: _colour1.r , g:_colour1.g, b:_colour1.b, ease: Expo.easeOut},0);
        
            break;
        case 'flash':

            TweenMax.to(testLight6.color, _speed, {r: _colour1.r , g:_colour1.g, b:_colour1.b, ease: Expo.easeOut},0);
            TweenMax.to(testLight7.color, _speed, {r: _colour2.r , g:_colour2.g, b:_colour2.b, ease: Expo.easeOut},0);
            TweenMax.to(testLight8.color, _speed, {r: _colour3.r , g:_colour3.g, b:_colour3.b, ease: Expo.easeOut},0);
            TweenMax.to(stagesurfacemtl.emissive, _speed, {r: _colour1.r , g:_colour1.g, b:_colour1.b, ease: Expo.easeOut},0);


            TweenMax.to(testLight6, 0.1, {intensity: 150, distance: 600, ease: Expo.easeOut},);
            TweenMax.to(testLight7, 0.1, {intensity: 150, distance: 600, ease: Expo.easeOut},);
            TweenMax.to(testLight8, 0.1, {intensity: 150, distance: 600, ease: Expo.easeOut},);
            

            TweenMax.to(testLight6, 2, {intensity: 18, distance: 450, delay: 0.5, ease: Expo.easeOut},0);
            TweenMax.to(testLight7, 2, {intensity: 18, distance: 450, delay: 1, ease: Expo.easeOut},0);
            TweenMax.to(testLight8, 2, {intensity: 18, distance: 450, delay: 1.5, ease: Expo.easeOut},0);

            break;
        default:
    }

}

function houseLightsIntensity(_speed, _intensity) {

    TweenMax.to(testLight, _speed, {intensity : _intensity,  ease: Expo.easeOut},);
    TweenMax.to(testLight1, _speed, {intensity : _intensity, ease: Expo.easeOut},);
    TweenMax.to(testLight3, _speed, {intensity : _intensity, ease: Expo.easeOut},);
    TweenMax.to(testLight4, _speed, {intensity : _intensity, ease: Expo.easeOut},);
    TweenMax.to(testLight5, _speed, {intensity : _intensity, ease: Expo.easeOut},);
    TweenMax.to(testLight2, _speed, {intensity : _intensity, ease: Expo.easeOut},);

}

function stageLightsIntensity(_speed, _intensity) {

    TweenMax.to(testLight6, _speed, {intensity : _intensity,  ease: Expo.easeOut, overwrite: true},);
    TweenMax.to(testLight7, _speed, {intensity : _intensity, ease: Expo.easeOut, overwrite: true},);
    TweenMax.to(testLight8, _speed, {intensity : _intensity, ease: Expo.easeOut, overwrite: true},);

}

function sideLightsStrobe(_speed, _length) {

    //TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 1,  ease: "none", overwrite: true});


    TweenMax.to(stageSpot, _speed,  {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 1, ease:Linear.easeNone},);
    TweenMax.to(stageSpot1, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 2, ease:Linear.easeNone},);
    TweenMax.to(stageSpot2, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 3, ease:Linear.easeNone},);
    TweenMax.to(stageSpot3, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 4, ease:Linear.easeNone},);
    
    

}

/*function sideLightsColourStrobe(_length, _speed, ) {

    TweenMax.to(stageSpot.color, _speed,  {decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 1, ease:Linear.easeNone},);
    TweenMax.to(stageSpot1.color, _speed, {decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 2, ease:Linear.easeNone},);
    TweenMax.to(stageSpot2.color, _speed, {decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 3, ease:Linear.easeNone},);
    TweenMax.to(stageSpot3.color, _speed, {decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 4, ease:Linear.easeNone},);

}*/


function sideLightsIntensity(_speed, _fromintensity, _tointensity) {

    TweenMax.to(stageSpot, _speed,  {startAt: {intensity: _fromintensity}, intensity : _tointensity,  ease: "expo.in"},);
    TweenMax.to(stageSpot1, _speed, {startAt: {intensity: _fromintensity},intensity : _tointensity, ease: "expo.in"},);
    TweenMax.to(stageSpot2, _speed, {startAt: {intensity: _fromintensity},intensity : _tointensity, ease: "expo.in"},);
    TweenMax.to(stageSpot3, _speed, {startAt: {intensity: _fromintensity},intensity : _tointensity, ease: "expo.in"},);


}

function stageLightsPulse(_speed, _length, _colour1, _colour2, _colour3 ) {
    TweenMax.allTo([testLight8, testLight7, testLight6], _speed, {startAt: {intensity: 18}, repeat: _length, delay: 0.1, repeatDelay: 0, repeatRefresh: true, yoyo: true, stagger: _speed/2, intensity: 0, ease: Expo.easeOut, overwrite: true});

}

function stageBlackout(_speed) {
    TweenMax.allTo([testLight8, testLight7, testLight6], _speed, {intensity: 0, ease: Expo.easeOut},);
    TweenMax.to(stagesurfacemtl.emissive, 0, {r: 0 , g:0, b:0, ease: Expo.easeOut},0);
}

function sideLightsColour(_speed, _colour1,_colour2,_colour3,_colour4) {
    TweenMax.to(stageSpot.color, _speed, {r: _colour1.r , g:_colour1.g, b:_colour1.b, ease: Expo.easeOut},0);
    TweenMax.to(stageSpot1.color, _speed, {r: _colour2.r , g:_colour2.g, b:_colour2.b, ease: Expo.easeOut},0);
    TweenMax.to(stageSpot2.color, _speed, {r: _colour3.r , g:_colour3.g, b:_colour3.b, ease: Expo.easeOut},0);
    TweenMax.to(stageSpot3.color, _speed, {r: _colour4.r , g:_colour4.g, b:_colour4.b, ease: Expo.easeOut},0);

}


function stageLightStrobe(_speed, _length) {
    TweenMax.allTo([testLight8, testLight7, testLight6], _speed, { intensity: 0, repeat: _length, yoyo: true,  ease: "none", overwrite: true});
    TweenMax.to(stagesurfacemtl.emissive, _speed, {r: 0 , g:0, b:0, repeat: _length, yoyo: true, ease: "none", overwrite: true});
}

function houseLightsUp(_speed) {
    TweenMax.allTo([testLight, testLight1, testLight2, testLight3, testLight4, testLight5], _speed, {intensity: 10, stagger: _speed, ease: Expo.easeOut},);


}

function floorColour (_speed, _colour) {
    TweenMax.to(stagesurfacemtl.emissive, _speed, {r: _colour.r , g:_colour.g, b:_colour.b, ease: Expo.easeOut, overwrite: true});


}

function sideLightsPulse (_speed, _length, _intensity) {


    TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 0,  ease: "none", overwrite: true});
    TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], _speed, { intensity: _intensity, repeat: _length, yoyo: true,  ease: "none", overwrite: true});


}

function spotsPanUp (_speed, _startheight,_endheight, _repeat, _length) {
    //stageSpot.target.position.set

    switch (_repeat) {
        case 'once' :
            TweenMax.allTo([stageSpot.target.position, stageSpot1.target.position, stageSpot2.target.position, stageSpot3.target.position], _speed, { startAt: {y: _startheight},y: _endheight, ease: "expo.in"});
            break;

        case 'yoyo' :
            TweenMax.allTo([stageSpot.target.position, stageSpot1.target.position, stageSpot2.target.position, stageSpot3.target.position], _speed, { startAt: {y: _startheight},y: _endheight, repeat: _length, yoyo: true, ease: "expo.in"});
            break;
        case 'stagger' :
            TweenMax.allTo([stageSpot.target.position, stageSpot1.target.position, stageSpot2.target.position, stageSpot3.target.position], _speed, { startAt: {y: _startheight},y: _endheight, stagger: _speed, repeat: _length, yoyo: true, ease: "expo.in"});
            break;
    
        default:
    }

}