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
var scarlett = {r: 0.55, g:0.09, b:0.09};
var darkMagenta = {r: 0.55, g:0, b:0.55};
var hotPink = {r: 0.55, g:0.23, b:0.38};
var lightOff = '0%,0%,0%';


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
var lightCue64 = false;
var lightCue65 = false;
var lightCue66 = false;
var lightCue67 = false;
var lightCue68 = false;
var lightCue69 = false;
var lightCue70 = false;
var lightCue71 = false;
var lightCue72 = false;
var lightCue73 = false;
var lightCue74 = false;
var lightCue75 = false;
var lightCue76 = false;
var lightCue77 = false;
var lightCue78 = false;
var lightCue79 = false;
var lightCue80 = false;













var countdownDuration = 60;
var introDuration = 33; //15
var act1Duration = 251;
var interval1Duration = 5;
var act2Duration = 326;
var interval2Duration = 6;
var act3Duration = 598;

introTime = countdownDuration;
act1Time = introTime + introDuration;
interval1Time = act1Time + act1Duration; 
act2Time = interval1Time + interval1Duration; 
interval2Time = act2Time + act2Duration; 
act3Time = interval2Time + interval2Duration; 
aftershowTime = act3Time + act3Duration; 

console.log(introTime,act1Time,interval1Time,act2Time,interval2Time,act3Time,aftershowTime );






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

        testLight6.color = purple;
        testLight7.color = purple;
        testLight8.color = purple;

        stagesurfacemtl.emissive = colourOff



    }
    //////////// Countdown

    if (video.currentTime >= 2 && video.currentTime < introTime) {
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

    ////////////// Introduction Chat

    if (video.currentTime >= introTime && video.currentTime < act1Time) {
        testLight.intensity = 3;
        testLight1.intensity = 3;
        testLight2.intensity = 3;
        testLight3.intensity = 3;
        testLight4.intensity = 3;
        testLight5.intensity = 3;

        testLight6.intensity = 7;
        testLight7.intensity = 7;
        testLight8.intensity = 7;

        testLight6.color = blue;
        testLight7.color = blue;
        testLight8.color = blue;

        //stagesurfacemtl.emissive = blue;


    }



    ///////// ACT 1

    if (video.currentTime >= act1Time && video.currentTime < interval1Time) {
        testLight.intensity = 1;
        testLight1.intensity = 1;
        testLight2.intensity = 1;
        testLight3.intensity = 1;
        testLight4.intensity = 1;
        testLight5.intensity = 1;

        testLight6.intensity = 18;
        testLight7.intensity = 18;
        testLight8.intensity = 18;

        testLight6.color = purple;
        testLight7.color = purple;
        testLight8.color = purple;

        //stagesurfacemtl.emissive = purple;


    }

    ///////////  INTERVAL 1

    if (video.currentTime >= interval1Time && video.currentTime < act2Time) {
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

    
    if (video.currentTime >= act2Time && video.currentTime < interval2Time) {
        testLight.intensity = 1;
        testLight1.intensity = 1;
        testLight2.intensity = 1;
        testLight3.intensity = 1;
        testLight4.intensity = 1;
        testLight5.intensity = 1;

        testLight6.intensity = 18;
        testLight7.intensity = 18;
        testLight8.intensity = 18;

        //testLight6.color = darkGreen;
        //testLight7.color = darkGreen;
        //testLight8.color = darkGreen;

        //stagesurfacemtl.emissive = red;
    }

    ///////////  INTERVAL 2

    if (video.currentTime >= interval2Time && video.currentTime < act3Time) {
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


    if (video.currentTime >= act3Time && video.currentTime < aftershowTime) {
        testLight.intensity = 1;
        testLight1.intensity = 1;
        testLight2.intensity = 1;
        testLight3.intensity = 1;
        testLight4.intensity = 1;
        testLight5.intensity = 1;

        testLight6.intensity = 18;
        testLight7.intensity = 18;
        testLight8.intensity = 18;

        testLight6.color = scarlett;
        testLight7.color = scarlett;
        testLight8.color = scarlett;
        stagesurfacemtl.emissive = scarlett;



    }

    ///////// After Show

    if (video.currentTime >= aftershowTime) {
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
    console.log(stageSpot.intensity, stageSpot.decay)

    if (videoTime > introTime & videoTime < act1Time) {
        console.log('countdown and intro', videoTime, videoTime);
    }

    if (videoTime >= act1Time & videoTime < interval1Time) {
        console.log('act 1', videoTime-act1Time, videoTime);
    }

    if (videoTime >= interval1Time & videoTime < act2Time) {
        console.log('interval 1', videoTime-interval1Time, videoTime);
    }

    if (videoTime >= act2Time & videoTime < interval2Time) {
        console.log('act 2', videoTime-act2Time, videoTime);
    }

    if (videoTime >= interval2Time & videoTime < act3Time) {
        console.log('interval 2', videoTime-interval2Time, videoTime);
    }

    if (videoTime >= act3Time & videoTime < aftershowTime) {
        console.log('act 3', videoTime-act3Time, videoTime);
    }

    if (videoTime >= aftershowTime) {
        console.log('aftershow', videoTime-act1Time, videoTime);
    }







    




    /////////////////////  House Lights Down

    if (videoTime == 1 & houseLightsInOp1 == false) {
        houseLightsInOp1 = true;

        houseLightsIntensity(10, 4);
        //stageLightsFade(3, blue, blue, blue, "fade" )

        //stageLightsIntensity(10, 0);
        //floorColour(0,colourOff);

        stageBlackout(10);




        
    }


    ///////////////////   Speech



    if (videoTime == introTime & houseLightsInOp == false) {
        houseLightsInOp = true;
        stageLightsIntensity(3, 7);
        floorColour(3,blue);
        stageLightsFade(0,blue,blue,blue,blue,'fade');


    }

    if (videoTime == introTime + 36 & lightCue68 == false) {
        lightCue68 = true;

        stageLightsIntensity(3, 0);
        floorColour(3,lightOff);
        houseLightsIntensity(7, 1);

    }



    ////////////////    SWEAT    /////////////////////////

        /////////////////////  House Lights Down

        if (videoTime == act1Time & lightCue70 == false) {
            lightCue70 = true;

        }
    

        if (videoTime == act1Time + 8 & lightCue80 == false) {
            lightCue80 = true;
    
    
        }
        if (videoTime == act1Time + 23 & lightCue1 == false) {
            lightCue1 = true;
    
            
        }
    
        if (videoTime == act1Time + 41 & lightCue2 == false) {
            lightCue2 = true;
    

            
        }
        if (videoTime == act1Time + 49 & lightCue3 == false) {
            lightCue3 = true;
    
            
        }
        if (videoTime == act1Time + 66 & lightCue4 == false) {
            lightCue4 = true;
    
            
        }
        if (videoTime == act1Time + 64 & lightCue5 == false) {
            lightCue5 = true;
    
            
        }
    
    
        if (videoTime == act1Time + 70 & lightCue6 == false) {
            lightCue6 = true;
    
            
        }
    
    
        if (videoTime == act1Time + 71 & lightCue7 == false) {
            lightCue7 = true;
    
    
            
        }
    
        if (videoTime == act1Time + 87 & lightCue8 == false) {
            lightCue8 = true;
    
        }
    
    
        if (videoTime == act1Time + 91 & lightCue9 == false) {
            lightCue9 = true;
            
        }
    
    
        if (videoTime == act1Time + 100 & lightCue10 == false) {
            lightCue10 = true;
    
            
        }
        if (videoTime == act1Time + 108 & lightCue11 == false) {
            lightCue11 = true;
    
            
        }
        if (videoTime == act1Time + 115 & lightCue12 == false) {
            lightCue12 = true;
    
            
        }
        if (videoTime == act1Time + 124 & lightCue13 == false) {
            lightCue13 = true;
    
            
        }
    
    
        if (videoTime == act1Time + 129 & lightCue14 == false) {
            lightCue14 = true;
    
            
        }
        if (videoTime == act1Time + 139 & lightCue15 == false) {
            lightCue15 = true;
    
        }
    
    
        if (videoTime == act1Time + 140 & lightCue16 == false) {
            lightCue16 = true;
    
            
        }
    
    
        if (videoTime == act1Time + 146 & lightCue17 == false) {
            lightCue17 = true;
    
    
            
        }

        if (videoTime == act1Time + 170 & lightCue18 == false) {
            lightCue18 = true;

    
        }
    
        if (videoTime == act1Time + 181 & lightCue19 == false) {
            lightCue19 = true;
        }
    
        if (videoTime == act1Time + 189 & lightCue20 == false) {
            lightCue20 = true;
    
            
        }
    
        if (videoTime == act1Time + 197 & lightCue21 == false) {
            lightCue21 = true;
    
            
        }
    
        if (videoTime == act1Time + 205 & lightCue22 == false) {
            lightCue22 = true;
    
            
        }
    
    
    
    
    
        if (videoTime == act1Time + 212 & lightCue23 == false) {
            lightCue23 = true;
    
            
        }

        if (videoTime == act1Time + 266 & lightCue79 == false) {
            lightCue79 = true;

        }

    


    ///////////////////     PVA

    if (videoTime == act2Time + 5 & lightCue75 == false) { //311
        lightCue75 = true;
    
            
    }

    if (videoTime == act2Time + 30 & lightCue76 == false) { //334
        lightCue76 = true;



        
    }

    if (videoTime == act2Time + 47 & lightCue77 == false) { //352
        lightCue77 = true;


        
    }

    if (videoTime == act2Time + 60 & lightCue78 == false) { //351
        lightCue78 = true;




        
    }

    if (videoTime == act2Time + 90 & lightCue73 == false) { //364
        lightCue73 = true;




        
    }

    if (videoTime == act2Time + 123 & lightCue24 == false) { //382
        lightCue24 = true;

        
    }

    if (videoTime == act2Time + 145 & lightCue25 == false) { //392
        lightCue25 = true;


        
    }

    if (videoTime == act2Time + 99 & lightCue26 == false) { //399
        lightCue26 = true;


        
    }

    if (videoTime == act2Time + 112 & lightCue27 == false) { //416
        lightCue27 = true;

        
    }


    if (videoTime == act2Time + 122 & lightCue72 == false) { //416
        lightCue72 = true;

    
            
    }
    

    if (videoTime == act2Time + 129 & lightCue28 == false) { //434
        lightCue28 = true;


    }

    if (videoTime == act2Time + 246 & lightCue29 == false) { //443
        lightCue29 = true;


        stageBlackout(0);
        floorColour(0,colourOff);

        houseLightsIntensity(0,0);

        
    }

    if (videoTime == act2Time + 248 & lightCue30 == false) { //460
        lightCue30 = true;

        spotsPanUp(0.1,0,1500,'stagger',399);

        sideLightsAngle(0.06,0.1,0.3,'yoyo',100)

        setTimeout(function(){sideLightsStrobe(0.5,399,'togetherfast')},400);

        sideLightsIntensity(0,15,15);


        //stageLightsIntensity(0,25);
        setTimeout(function(){stageLightsPulse(0.1,399)},400);


        
    }

    if (videoTime == act2Time + 173 & lightCue31 == false) { //477
        lightCue31 = true;

        
    }

    if (videoTime == act2Time + 175 & lightCue32 == false) { //479
        lightCue32 = true;
        
    }

    if (videoTime == act2Time + 194 & lightCue33 == false) { //498
        lightCue33 = true;

    }

    /////////////////  END

    if (videoTime == act2Time + 326 & lightCue35 == false) { //515
        lightCue35 = true;

        stageBlackout(0);
        floorColour(0,colourOff)

        
                
    }

    ////////////////   LYNKS AFFRIKA   /////////////////////////


    /////////////////  

    if (videoTime == act3Time & lightCue36 == false) { //533
        lightCue36 = true;


        
    }

    /////////////////  

    if (videoTime == act3Time + 1 & lightCue37 == false) { //546
        lightCue37 = true;

    }

    /////////////////  

    if (videoTime == act3Time + 36 & lightCue40 == false) { //587
        lightCue40 = true;

    
    
    
            
    }

    /////////////////  

    if (videoTime == act3Time + 77 & lightCue41 == false) { //587
        lightCue41 = true;



    }

    
    /////////////////  HEAVY

    if (videoTime == act3Time + 79 & lightCue38 == false) { //553
        lightCue38 = true;
    }

    
    
    
    
    
    
    /////////////////  HEAVY

    if (videoTime == act3Time + 188 & lightCue60 == false) { //560
        lightCue60 = true;

        stageBlackout(0);
        floorColour(0,colourOff);



    
            
    }

    //////////////////  HOT STR8

    if (videoTime == act3Time + 190 & lightCue62 == false) { //567
        lightCue62 = true;

        stageLightsIntensity(0,25);

        stageLightStrobe(0.5,99);


        setTimeout(function () {

            sideLightsIntensity(0,0,15);

            sideLightColourChange(0.3,99,yellow,red,blue,cyan,red,orange,hotPink,green,'stagger');



            sideLightsStrobe(0.21,27,'togetherfast');
            spotsPanUp(3,1500,100,'yoyo',13);


            stageLightsIntensity(0,25);
            stageLightStrobe(0.6,29);

            stageLightColour(0.21,99,purple,purple,purple,green,green,green,'stagger')


    

        },400)


    

    
            
    }

    
    /////////////////  

    if (videoTime == act3Time + 200 & lightCue39 == false) { //574
        lightCue39 = true;




        
    }
    /////////////////  

    if (videoTime == act3Time + 112 & lightCue42 == false) { //587
        lightCue42 = true;



        
    }
    /////////////////  

    if (videoTime == act3Time + 141 & lightCue43 == false) { //616
        lightCue43 = true;

    }

    
    /////////////////  

    if (videoTime == act3Time + 171 & lightCue44 == false) { //629
        lightCue44 = true;

        
    }
    /////////////////  

    if (videoTime == act3Time + 205 & lightCue47 == false) { //657
        lightCue47 = true;


    }



    
    
    
    /////////////////   SONG 2

    if (videoTime == act3Time + 228 & lightCue45 == false) { //636
        lightCue45 = true;
            
    }
    /////////////////  INTRO
    
    if (videoTime == act3Time + 238 & lightCue46 == false) { //655
        lightCue46 = true;
            
    }
    
    /////////////////  VOX

    if (videoTime == act3Time + 246 & lightCue48 == false) { //670
        lightCue48 = true;




        
    }
    /////////////////  V1 1/2

    if (videoTime == act3Time + 264 & lightCue49 == false) { //680
        lightCue49 = true;


        
    }

    /////////////////  DROP

    if (videoTime == act3Time + 280 & lightCue34 == false) { //503
        lightCue34 = true;


    }
    


    /////////////////  C1

    if (videoTime == act3Time + 281 & lightCue50 == false) { //686
        lightCue50 = true;

    }
    /////////////////  

    if (videoTime == act3Time + 486 & lightCue51 == false) { //699
        lightCue51 = true;


        stageBlackout(0);
        floorColour(0,colourOff);

        setTimeout(function () {

            sideLightsIntensity(0,0,15);

            sideLightColourChange(2,1,white,white,white,white,blue,blue,blue,blue,'fade')

            sideLightsStrobe(0.05,25,'togetherfast');
            spotsPanUp(3,1500,100,'once',1);


        },500)


        
    }
    

    if (videoTime == act3Time + 489 & lightCue52 == false) { //
        lightCue52 = true;

        stageLightsFade(0,red,red,red,'fade');

        stageLightsIntensity(0,18)

        stageLightStrobe(1.2,19);

        sideLightsStrobe(0.6,25,'togetherfast');

        setInterval(function () {

            sideLightColourChange(0.6,1,yellow,yellow,yellow,yellow,blue,blue,blue,blue,'fade')

            //spotsPanUp(1.2,100,1500,'once',1);


        },600)






            
    }


    if (videoTime == act3Time + 487 & lightCue53 == false) { //725
        lightCue53 = true;

                
    }
    /////////////////  C2

    if (videoTime == act3Time + 342 & lightCue54 == false) { //726
        lightCue54 = true;
            
                    
    }
    /////////////////  V3

    if (videoTime == act3Time + 359 & lightCue55 == false) { //732
        lightCue55 = true;
        
                
    }

    ////////////////  V3 1/2

    if (videoTime == act3Time + 377 & lightCue63 == false) { //742
        lightCue63 = true;



    }

    ////////////////  BLACKOUT

    if (videoTime == act3Time + 393 & lightCue30 == false) { //460
        lightCue30 = true;


        
    }



    /////////////////  C3

    if (videoTime == act3Time + 394 & lightCue56 == false) { //755
        lightCue56 = true;

        
                
    }
    /////////////////  BRIDGE

    if (videoTime == act3Time + 411 & lightCue57 == false) { //770
        lightCue57 = true;

        
                
    }
    /////////////////  END TRACK

    if (videoTime == act3Time + 447 & lightCue58 == false) { //784
        lightCue58 = true;

        
                
    }
    /////////////////  END NOISE

    if (videoTime == act3Time + 453 & lightCue59 == false) { //797
        lightCue59 = true;
                
    }

    //////////////// HOUSE LIGHTS UP

    if (videoTime == act3Time + 457 & lightCue67 == false) { //797
        lightCue67 = true;

        houseLightsIntensity(10, 18);

    }

    


    
    
    




}


function stageLightsFade(_speed, _colour1, _colour2, _colour3, _flash) {

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

function stageLightColour(_speed, _length, _colour1, _colour2, _colour3, _colourto1, _colourto2, _colourto3, _fade  ) {

    switch (_fade) {
        case 'fade' :
            TweenMax.to(testLight6.color, _speed, {startAt: {r: _colour1.r , g:_colour1.g, b:_colour1.b}, r: _colourto1.r , g:_colourto1.g, b:_colourto1.b, repeat: _length, yoyo: true, ease: "none", overwrite: false},0);
            TweenMax.to(testLight7.color, _speed, {startAt: {r: _colour2.r , g:_colour2.g, b:_colour2.b}, r: _colourto2.r , g:_colourto2.g, b:_colourto2.b, repeat: _length, yoyo: true, ease: "none", overwrite: false},0);
            TweenMax.to(testLight8.color, _speed, {startAt: {r: _colour3.r , g:_colour3.g, b:_colour3.b}, r: _colourto3.r , g:_colourto3.g, b:_colourto3.b, repeat: _length, yoyo: true, ease: "none", overwrite: false},0);
            TweenMax.to(stagesurfacemtl.emissive, _speed, {startAt: {r: _colour1.r , g:_colour1.g, b:_colour1.b}, r: _colourto1.r , g:_colourto1.g, b:_colourto1.b, repeat: _length, yoyo: true, ease: "none", overwrite: false},0);


            break;

        case 'snap' :

            break;

        case 'stagger' : 
            TweenMax.allTo([testLight8.color, testLight7.color, testLight6.color], _speed, {startAt: {r: _colour1.r , g:_colour1.g, b:_colour1.b}, r: _colourto1.r , g:_colourto1.g, b:_colourto1.b, repeat: _length, delay: 0.1, repeatDelay: 0, repeatRefresh: true, yoyo: true, stagger: _speed/2, ease: "none", overwrite: true},0);
            TweenMax.to(stagesurfacemtl.emissive, _speed, {startAt: {r: _colourto1.r , g:_colourto1.g, b:_colourto1.b}, r: _colour1.r , g:_colour1.g, b:_colour1.b, repeat: _length, delay: 0.1, repeatDelay: 0, repeatRefresh: true, yoyo: true, stagger: _speed/2, ease: "none", overwrite: true},0);

        
        default:
    }

}

function sideLightColourChange(_speed, _length, _colour1, _colour2, _colour3, _colour4, _colourto1, _colourto2, _colourto3, _colourto4, _fade  ) {

    switch (_fade) {
        case 'fade' :
            TweenMax.to(stageSpot.color, _speed, {startAt: {r: _colour1.r , g:_colour1.g, b:_colour1.b}, r: _colourto1.r , g:_colourto1.g, b:_colourto1.b, repeat: _length, yoyo: true, ease: "none"},0);
            TweenMax.to(stageSpot1.color, _speed, {startAt: {r: _colour2.r , g:_colour2.g, b:_colour2.b}, r: _colourto2.r , g:_colourto2.g, b:_colourto2.b, repeat: _length, yoyo: true, ease: "none"},0);
            TweenMax.to(stageSpot2.color, _speed, {startAt: {r: _colour3.r , g:_colour3.g, b:_colour3.b}, r: _colourto3.r , g:_colourto3.g, b:_colourto3.b, repeat: _length, yoyo: true, ease: "none"},0);
            TweenMax.to(stageSpot3.color, _speed, {startAt: {r: _colour4.r , g:_colour4.g, b:_colour4.b}, r: _colourto4.r , g:_colourto4.g, b:_colourto4.b, repeat: _length, yoyo: true, ease: "none"},0);



            break;

        case 'snap' :

            break;

        case 'stagger' : 
            TweenMax.allTo([stageSpot.color, stageSpot1.color, stageSpot2.color, stageSpot3.color], _speed, {startAt: {r: _colour1.r , g:_colour1.g, b:_colour1.b}, r: _colourto1.r , g:_colourto1.g, b:_colourto1.b, repeat: _length, delay: 0.1, repeatDelay: 0, repeatRefresh: true, yoyo: true, stagger: _speed/2, ease: "none", overwrite: true},0);

        
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

function sideLightsStrobe(_speed, _length, _stagger) {

    switch (_stagger) {
        case 'stagger' :


            TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 1,  ease: "none"});


            TweenMax.to(stageSpot, _speed,  {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 1, ease:Linear.easeNone},);
            TweenMax.to(stageSpot1, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 2, ease:Linear.easeNone},);
            TweenMax.to(stageSpot2, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 3, ease:Linear.easeNone},);
            TweenMax.to(stageSpot3, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 4, ease:Linear.easeNone},);

            break;
        
        case 'together' :

            TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 1,  ease: "none"});


            TweenMax.to(stageSpot, _speed,  {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed , ease:Linear.easeNone},);
            TweenMax.to(stageSpot1, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed , ease:Linear.easeNone},);
            TweenMax.to(stageSpot2, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed , ease:Linear.easeNone},);
            TweenMax.to(stageSpot3, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed , ease:Linear.easeNone},);

            break;

        case 'togetherfast' :

            TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 1,  ease: "none"});
    
    
            TweenMax.to(stageSpot, _speed,  {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed/4 , ease:Linear.easeNone},);
            TweenMax.to(stageSpot1, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed/4 , ease:Linear.easeNone},);
            TweenMax.to(stageSpot2, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed/4 , ease:Linear.easeNone},);
            TweenMax.to(stageSpot3, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed/4 , ease:Linear.easeNone},);
    
            break;
    
    

        default:
    }

    
    

}

function sideLightsOn(_speed) {

    //TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 1,  ease: "none", overwrite: true});


    TweenMax.to(stageSpot, _speed,  {startAt: {decay: 1},decay: 0, repeatDelay: _speed, yoyo: true, delay: _speed * 1, ease:Linear.easeNone},);
    TweenMax.to(stageSpot1, _speed, {startAt: {decay: 1},decay: 0, repeatDelay: _speed, yoyo: true, delay: _speed * 2, ease:Linear.easeNone},);
    TweenMax.to(stageSpot2, _speed, {startAt: {decay: 1},decay: 0, repeatDelay: _speed, yoyo: true, delay: _speed * 3, ease:Linear.easeNone},);
    TweenMax.to(stageSpot3, _speed, {startAt: {decay: 1},decay: 0, repeatDelay: _speed, yoyo: true, delay: _speed * 4, ease:Linear.easeNone},);
    
    

}



function sideLightsIntensity(_speed, _fromintensity, _tointensity) {

    //TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 0,  ease: "none", overwrite: true});


    TweenMax.to(stageSpot, _speed,  {startAt: {intensity: _fromintensity}, intensity : _tointensity,  ease: "expo.in"},);
    TweenMax.to(stageSpot1, _speed, {startAt: {intensity: _fromintensity},intensity : _tointensity, ease: "expo.in"},);
    TweenMax.to(stageSpot2, _speed, {startAt: {intensity: _fromintensity},intensity : _tointensity, ease: "expo.in"},);
    TweenMax.to(stageSpot3, _speed, {startAt: {intensity: _fromintensity},intensity : _tointensity, ease: "expo.in"},);


}

function stageLightsPulse(_speed, _length ) {
    TweenMax.allTo([testLight8, testLight7, testLight6], _speed, {startAt: {intensity: 18}, repeat: _length, delay: 0.1, repeatDelay: 0, repeatRefresh: true, yoyo: true, stagger: _speed/2, intensity: 0, ease: Expo.easeOut, overwrite: false});

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
    TweenMax.to(stagesurfacemtl.emissive, _speed, {r: 0 , g:0, b:0, repeat: _length, yoyo: true, ease: "none", overwrite: false});
}

function stageLightStrobeStart(_speed, _length) {
    TweenMax.allTo([testLight8, testLight7, testLight6], _speed, { startAt: {intensity: 18},intensity: 0, repeat: _length, yoyo: true,  ease: "none", overwrite: true});
    TweenMax.to(stagesurfacemtl.emissive, _speed, {r: 0 , g:0, b:0, repeat: _length, yoyo: true, ease: "none", overwrite: true});
}


function houseLightsUp(_speed) {
    TweenMax.allTo([testLight, testLight1, testLight2, testLight3, testLight4, testLight5], _speed, {intensity: 10, stagger: _speed, ease: Expo.easeOut},);


}

function floorColour (_speed, _colour) {
    TweenMax.to(stagesurfacemtl.emissive, _speed, {r: _colour.r , g:_colour.g, b:_colour.b, ease: Expo.easeOut, overwrite: false});


}

function sideLightsPulse (_speed, _length, _intensity) {


    TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 0,  ease: "none", overwrite: true});
    TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], _speed, { intensity: _intensity, repeat: _length, yoyo: true,  ease: "none", overwrite: true});


}
function sideLightsOff () {


    TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 1,  ease: "none", overwrite: true});


}


function spotsPanUp (_speed, _startheight,_endheight, _repeat, _length) {
    //stageSpot.target.position.set

    switch (_repeat) {
        case 'once' :
            TweenMax.allTo([stageSpot.target.position, stageSpot1.target.position, stageSpot2.target.position, stageSpot3.target.position], _speed, { startAt: {y: _startheight},y: _endheight, ease: "expo.in"});
            break;

        case 'yoyo' :
            TweenMax.allTo([stageSpot.target.position, stageSpot1.target.position, stageSpot2.target.position, stageSpot3.target.position], _speed, { startAt: {y: _startheight},y: _endheight, repeat: _length, yoyo: true, ease: "none"});
            break;
        case 'stagger' :
            TweenMax.allTo([stageSpot.target.position, stageSpot1.target.position, stageSpot2.target.position, stageSpot3.target.position], _speed, { startAt: {y: _startheight},y: _endheight, stagger: _speed, repeat: _length, yoyo: true, ease: "expo.in"});
            break;

        case 'repeat' :
            TweenMax.allTo([stageSpot.target.position, stageSpot1.target.position, stageSpot2.target.position, stageSpot3.target.position], _speed, { startAt: {y: _startheight},y: _endheight, stagger: false, repeat: _length, yoyo: false, ease: "expo.in"});
            break;
    
    
        default:
    }

}

function sideLightsAngle (_speed, _startangle,_endangle, _repeat, _length) {
    //stageSpot.target.position.set

    switch (_repeat) {
        case 'once' :
            TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], _speed, { startAt: {angle: _startangle},angle: _endangle, ease: "expo.in"});
            break;

        case 'yoyo' :
            TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], _speed, { startAt: {angle: _startangle},angle: _endangle, repeat: _length, yoyo: true, ease: "none"});
            break;

        case 'stagger' :
            TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], _speed, { startAt: {angle: _startangle},angle: _endangle, stagger: _speed, repeat: _length, yoyo: true, ease: "expo.in"});
            break;

        case 'repeat' :
            TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], _speed, { startAt: {angle: _startangle},angle: _endangle, stagger: false, repeat: _length, yoyo: false, ease: "expo.in"});
            break;
    
    
        default:
    }
}










/*
function stageLightsFade(_speed, _colour1, _colour2, _colour3, _flash) {

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

function stageLightColour(_speed, _length, _colour1, _colour2, _colour3, _colourto1, _colourto2, _colourto3, _fade  ) {

    switch (_fade) {
        case 'fade' :
            TweenMax.to(testLight6.color, _speed, {startAt: {r: _colour1.r , g:_colour1.g, b:_colour1.b}, r: _colourto1.r , g:_colourto1.g, b:_colourto1.b, repeat: _length, yoyo: true, ease: "none", overwrite: true},0);
            TweenMax.to(testLight7.color, _speed, {startAt: {r: _colour2.r , g:_colour2.g, b:_colour2.b}, r: _colourto2.r , g:_colourto2.g, b:_colourto2.b, repeat: _length, yoyo: true, ease: "none", overwrite: true},0);
            TweenMax.to(testLight8.color, _speed, {startAt: {r: _colour3.r , g:_colour3.g, b:_colour3.b}, r: _colourto3.r , g:_colourto3.g, b:_colourto3.b, repeat: _length, yoyo: true, ease: "none", overwrite: true},0);
            TweenMax.to(stagesurfacemtl.emissive, _speed, {startAt: {r: _colour1.r , g:_colour1.g, b:_colour1.b}, r: _colourto1.r , g:_colourto1.g, b:_colourto1.b, repeat: _length, yoyo: true, ease: "none", overwrite: true},0);


            break;

        case 'snap' :

            break;

        case 'stagger' : 
            TweenMax.allTo([testLight8.color, testLight7.color, testLight6.color], _speed, {startAt: {r: _colour1.r , g:_colour1.g, b:_colour1.b}, r: _colourto1.r , g:_colourto1.g, b:_colourto1.b, repeat: _length, delay: 0.1, repeatDelay: 0, repeatRefresh: true, yoyo: true, stagger: _speed/2, ease: "none", overwrite: true},0);
            TweenMax.to(stagesurfacemtl.emissive, _speed, {startAt: {r: _colourto1.r , g:_colourto1.g, b:_colourto1.b}, r: _colour1.r , g:_colour1.g, b:_colour1.b, repeat: _length, delay: 0.1, repeatDelay: 0, repeatRefresh: true, yoyo: true, stagger: _speed/2, ease: "none", overwrite: true},0);

        
        default:
    }

}

function sideLightColourChange(_speed, _length, _colour1, _colour2, _colour3, _colour4, _colourto1, _colourto2, _colourto3, _colourto4, _fade  ) {

    switch (_fade) {
        case 'fade' :
            TweenMax.to(stageSpot.color, _speed, {startAt: {r: _colour1.r , g:_colour1.g, b:_colour1.b}, r: _colourto1.r , g:_colourto1.g, b:_colourto1.b, repeat: _length, yoyo: true, ease: "none", overwrite: true},0);
            TweenMax.to(stageSpot1.color, _speed, {startAt: {r: _colour2.r , g:_colour2.g, b:_colour2.b}, r: _colourto2.r , g:_colourto2.g, b:_colourto2.b, repeat: _length, yoyo: true, ease: "none", overwrite: true},0);
            TweenMax.to(stageSpot2.color, _speed, {startAt: {r: _colour3.r , g:_colour3.g, b:_colour3.b}, r: _colourto3.r , g:_colourto3.g, b:_colourto3.b, repeat: _length, yoyo: true, ease: "none", overwrite: true},0);
            TweenMax.to(stageSpot3.color, _speed, {startAt: {r: _colour4.r , g:_colour4.g, b:_colour4.b}, r: _colourto4.r , g:_colourto4.g, b:_colourto4.b, repeat: _length, yoyo: true, ease: "none", overwrite: true},0);



            break;

        case 'snap' :

            break;

        case 'stagger' : 
            TweenMax.allTo([stageSpot.color, stageSpot1.color, stageSpot2.color, stageSpot3.color], _speed, {startAt: {r: _colour1.r , g:_colour1.g, b:_colour1.b}, r: _colourto1.r , g:_colourto1.g, b:_colourto1.b, repeat: _length, delay: 0.1, repeatDelay: 0, repeatRefresh: true, yoyo: true, stagger: _speed/2, ease: "none", overwrite: true},0);

        
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

    TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 1,  ease: "none"});


    TweenMax.to(stageSpot, _speed,  {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 1, ease:Linear.easeNone},);
    TweenMax.to(stageSpot1, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 2, ease:Linear.easeNone},);
    TweenMax.to(stageSpot2, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 3, ease:Linear.easeNone},);
    TweenMax.to(stageSpot3, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 4, ease:Linear.easeNone},);
    
    

}

function sideLightsOn(_speed) {

    //TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 1,  ease: "none", overwrite: true});


    TweenMax.to(stageSpot, _speed,  {startAt: {decay: 1},decay: 0, repeatDelay: _speed, yoyo: true, delay: _speed * 1, ease:Linear.easeNone},);
    TweenMax.to(stageSpot1, _speed, {startAt: {decay: 1},decay: 0, repeatDelay: _speed, yoyo: true, delay: _speed * 2, ease:Linear.easeNone},);
    TweenMax.to(stageSpot2, _speed, {startAt: {decay: 1},decay: 0, repeatDelay: _speed, yoyo: true, delay: _speed * 3, ease:Linear.easeNone},);
    TweenMax.to(stageSpot3, _speed, {startAt: {decay: 1},decay: 0, repeatDelay: _speed, yoyo: true, delay: _speed * 4, ease:Linear.easeNone},);
    
    

}



function sideLightsIntensity(_speed, _fromintensity, _tointensity) {

    //TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 0,  ease: "none", overwrite: true});


    TweenMax.to(stageSpot, _speed,  {startAt: {intensity: _fromintensity}, intensity : _tointensity,  ease: "expo.in"},);
    TweenMax.to(stageSpot1, _speed, {startAt: {intensity: _fromintensity},intensity : _tointensity, ease: "expo.in"},);
    TweenMax.to(stageSpot2, _speed, {startAt: {intensity: _fromintensity},intensity : _tointensity, ease: "expo.in"},);
    TweenMax.to(stageSpot3, _speed, {startAt: {intensity: _fromintensity},intensity : _tointensity, ease: "expo.in"},);


}

function stageLightsPulse(_speed, _length ) {
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

function stageLightStrobeStart(_speed, _length) {
    TweenMax.allTo([testLight8, testLight7, testLight6], _speed, { startAt: {intensity: 18},intensity: 0, repeat: _length, yoyo: true,  ease: "none", overwrite: true});
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
function sideLightsOff () {


    TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 1,  ease: "none", overwrite: true});


}


function spotsPanUp (_speed, _startheight,_endheight, _repeat, _length) {
    //stageSpot.target.position.set

    switch (_repeat) {
        case 'once' :
            TweenMax.allTo([stageSpot.target.position, stageSpot1.target.position, stageSpot2.target.position, stageSpot3.target.position], _speed, { startAt: {y: _startheight},y: _endheight, ease: "expo.in"});
            break;

        case 'yoyo' :
            TweenMax.allTo([stageSpot.target.position, stageSpot1.target.position, stageSpot2.target.position, stageSpot3.target.position], _speed, { startAt: {y: _startheight},y: _endheight, repeat: _length, yoyo: true, ease: "none"});
            break;
        case 'stagger' :
            TweenMax.allTo([stageSpot.target.position, stageSpot1.target.position, stageSpot2.target.position, stageSpot3.target.position], _speed, { startAt: {y: _startheight},y: _endheight, stagger: _speed, repeat: _length, yoyo: true, ease: "expo.in"});
            break;
    
        default:
    }

}

function sideLightsAngle (_speed, _startangle,_endangle, _repeat, _length) {
    //stageSpot.target.position.set

    switch (_repeat) {
        case 'once' :
            TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], _speed, { startAt: {angle: _startangle},angle: _endangle, ease: "expo.in"});
            break;

        case 'yoyo' :
            TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], _speed, { startAt: {angle: _startangle},angle: _endangle, repeat: _length, yoyo: true, ease: "none"});
            break;
        case 'stagger' :
            TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], _speed, { startAt: {angle: _startangle},angle: _endangle, stagger: _speed, repeat: _length, yoyo: true, ease: "expo.in"});
            break;
    
        default:
    }
}

*/
