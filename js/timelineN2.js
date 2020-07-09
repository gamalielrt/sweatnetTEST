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










var countdownDuration = 60;
var introDuration = 40; //15
var act1Duration = 223;
var interval1Duration = 20;
var act2Duration = 209;
var interval2Duration = 13;
var act3Duration = 527;

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
    console.log(videoTime, stageSpot.intensity)

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
        //stageLightFade(3, blue, blue, blue, "fade" )

        //stageLightsIntensity(10, 0);
        //floorColour(0,colourOff);

        stageBlackout(10);




        
    }


    ///////////////////   Speech



    if (videoTime == introTime+4 & houseLightsInOp == false) {
        houseLightsInOp = true;
        stageLightsIntensity(3, 7);
        floorColour(3,blue);
        stageLightFade(0,blue,blue,blue,blue,'fade');


    }

    if (videoTime == introTime + 21 & lightCue68 == false) {
        lightCue68 = true;

        stageLightsIntensity(3, 0);
        floorColour(3,lightOff);
        houseLightsIntensity(7, 1);

    }
    if (videoTime == introTime + 31 & lightCue70 == false) {
        lightCue70 = true;

        spotsPanUp(3,-200,-400,'once',1);
        sideLightsPulse(0.594,11,9);
        sideLightsColour(0, orange,orange,orange,orange);

    }



    ////////////////    SWEAT    /////////////////////////


    /////////////////  INTRO

    if (videoTime == act1Time & lightCue1 == false) {
        lightCue1 = true;


        stageLightFade(0,purple,purple,purple, 'fade');
        stageLightsIntensity(0, 5);
        //floorColour(0,purple);


        
    }
    /////////////////  V1

    if (videoTime == act1Time + 19 & lightCue2 == false) { //108
        lightCue2 = true;

        stageLightsPulse(0.594,31,cyan,cyan,cyan);
            
    }
    /////////////////  V1 1/2

    if (videoTime == act1Time + 29 & lightCue3 == false) { //118
        lightCue3 = true;

        
    }
    /////////////////  BRIDGE

    if (videoTime == act1Time + 38 & lightCue4 == false) { //127
        lightCue4 = true;
        stageLightsIntensity(0.5, 0);
        floorColour(0.5,colourOff);


        spotsPanUp(10,1400,600,'once',1);
        //sideLightsIntensity(1,0,10);
        //sideLightsOn(0);
        sideLightsColour(0.5,cyan,cyan,cyan,cyan);
        sideLightsPulse(1,6,5)
        floorColour(0.5,colourOff);




        
    }

    /////////////////  DROP OUT


    if (videoTime == act1Time + 47 & lightCue65 == false) { //135
        lightCue65 = true;

        //stageLightsIntensity(0.5, 0);
        sideLightsColour(0.5,colourOff,colourOff,colourOff,colourOff);
        //floorColour(0.5,colourOff);
        spotsPanUp(0.3,600,-400,'once',1);

        stageBlackout(0);

        //stageLightsIntensity(0, 18);


        
    }


    /////////////////  C1

    if (videoTime == act1Time + 48 & lightCue5 == false) { //137
        lightCue5 = true;

        stageLightsIntensity(0, 18);

        stageLightFade(0,purple,purple,purple, 'fade');

        stageLightStrobe(0.297, 56);


        sideLightsColour(0,orange,orange,orange,orange);
        sideLightsPulse(0.297, 32, 20);
        spotsPanUp(0.594,-400,300,'yoyo',30);




        
    }
    /////////////////  C1 1/2

    if (videoTime == act1Time + 56 & lightCue6 == false) { //146
        lightCue6 = true;

        
    }
    /////////////////  STOP

    if (videoTime == act1Time + 65 & lightCue7 == false) { //154
        lightCue7 = true;

        spotsPanUp(0.594,300,2000,'once',1);
        


        
    }
    /////////////////  V2

    if (videoTime == act1Time + 67 & lightCue8 == false) { //156
        lightCue8 = true;
        spotsPanUp(0.594,1800,300,'stagger',60);
        sideLightsIntensity(0,10,10);
        sideLightsColour(0,orange,orange,orange,orange);



        
    }
    /////////////////  DROP OUT

    if (videoTime == act1Time + 85 & lightCue64 == false) { //174
        lightCue64 = true;
        stageLightsIntensity(0.5, 0);
        sideLightsColour(0.5,colourOff,colourOff,colourOff,colourOff);

        
    }
    /////////////////  V2 1/2


    if (videoTime == act1Time + 86 & lightCue9 == false) { //175
        lightCue9 = true;
        stageLightFade(0,purple,purple,purple, 'fade');
        sideLightsColour(0,orange,orange,orange,orange);

        stageLightsIntensity(0, 10);
        
        sideLightsPulse(0.6, 56, 0);
        
    }
    /////////////////  BRIDGE

    if (videoTime == act1Time + 104 & lightCue10 == false) { //194
        lightCue10 = true;
        spotsPanUp(0.594,1000,0,'once',1);
        stageLightsIntensity(0.5, 0);
        sideLightsColour(0,cyan,cyan,cyan,cyan);
        floorColour(0, lightOff);
    }

    /////////////////  BRIDGE 1

    if (videoTime == act1Time + 107 & lightCue69 == false) { //194
        lightCue69 = true;
            spotsPanUp(20,0,600,'once',1);
    }
    


    /////////////////  BRIDGE 1/2

    if (videoTime == act1Time + 114 & lightCue11 == false) { //204
        lightCue11 = true;

        stageLightsPulse(0.594,12,cyan,cyan,cyan);
        //stageLightFade(0,cyan,cyan,cyan, 'fade');

    }

    /////////////////  DROPOUT

    if (videoTime == act1Time + 121 & lightCue66 == false) { //204
        lightCue66 = true;

        stageBlackout(0);
        //stageLightFade(0,purple,purple,purple, 'fade');


        
    
    }
    


    /////////////////  C2

    if (videoTime == act1Time + 123 & lightCue12 == false) { //213
        lightCue12 = true;

        stageLightsIntensity(0, 18);


        floorColour(0,purple);
        stageLightStrobe(0.297, 31);


        sideLightsColour(0,orange,orange,orange,orange);
        sideLightsPulse(0.297, 64, 24);
        spotsPanUp(0.594,-400,300,'yoyo',30);


        
    }
    /////////////////  C2 1/4

    if (videoTime == act1Time + 133 & lightCue13 == false) { //223
        lightCue13 = true;

        stageLightStrobe(0.297, 31);

  

        
    }
    /////////////////  C2 1/2

    if (videoTime == act1Time + 143 & lightCue14 == false) { //232
        lightCue14 = true;
        sideLightsColour(0,purple,purple,purple,purple);

        stageLightFade(0,orange,orange,orange, 'fade');

        floorColour(0,purple);
        stageLightStrobe(0.297, 33);


        sideLightsPulse(0.297, 33, 26);
        spotsPanUp(0.594,-400,300,'yoyo',15);


        
    }
    /////////////////  C2 3/4

    if (videoTime == act1Time + 152 & lightCue15 == false) { //241
        lightCue15 = true;

        //sideLightsColour(0,purple,purple,purple,purple);

        //stageLightFade(0,orange,orange,orange, 'fade');

        floorColour(0,purple);
        stageLightStrobe(0.297, 19);


        sideLightsPulse(0.297, 21, 24);
        spotsPanUp(0.594,-400,300,'yoyo',15);


        
    }
    /////////////////  C2 STOP

    if (videoTime == act1Time + 159 & lightCue16 == false) { //248
        lightCue16 = true;

        spotsPanUp(0.594,-400,2000,'once',15);

        stageLightsIntensity(0, 0);





        
    }
    /////////////////  OUTRO

    if (videoTime == act1Time + 161 & lightCue17 == false) { //251
        lightCue17 = true;
        
        //stageLightFade(0,purple,purple,purple, 'fade');
        stageLightsPulse(0.594,99,orange,orange,orange);
        //stageLightsIntensity(0, 18);
        //stageLightStrobe(1.118, 20);

        //sideLightsColour(20,orange,orange,orange,orange);

        spotsPanUp(1.118,2000,0,'stagger',48);

            
    }

    /////////////////  END

    if (videoTime == act1Time + 222 & lightCue71 == false) { //291
        lightCue71 = true;

        stageBlackout(0);
        floorColour(0,lightOff);
        //sideLightsOff();
        sideLightsIntensity(0,0,0);

        
                
    }

    ////////////////    KELORA    /////////////////////////


    /////////////////  INTRO

    if (videoTime == act2Time & lightCue18 == false) { //304
        lightCue18 = true;

        stageLightFade(0, blue, blue, blue, 'fade');

        stageLightsIntensity(5, 18);






        
    }

    /////////////////  INTRO 1/2

    if (videoTime == act2Time + 5 & lightCue19 == false) { //311
        lightCue19 = true;

        //stageLightColour(9,9 ,blue,blue,blue, darkMagenta ,darkMagenta ,darkMagenta, 'stagger');


    
            
    }
    /////////////////  PRE

    if (videoTime == act2Time + 30 & lightCue20 == false) { //334
        lightCue20 = true;

        stageLightColour(9,9 ,blue,blue,blue, darkMagenta ,darkMagenta ,darkMagenta, 'stagger');


        
    }
    /////////////////  END OF PRE

    if (videoTime == act2Time + 47 & lightCue21 == false) { //352
        lightCue21 = true;


        
    }
    /////////////////  V2

    if (videoTime == act2Time + 60 & lightCue22 == false) { //351
        lightCue22 = true;
        stageLightColour(9,9 ,blue,blue,blue, darkMagenta ,darkMagenta ,darkMagenta, 'stagger');




        
    }
    /////////////////  PRE

    if (videoTime == act2Time + 90 & lightCue23 == false) { //364
        lightCue23 = true;
        stageLightColour(9,9 ,blue,blue,blue, darkMagenta ,darkMagenta ,darkMagenta, 'stagger');




        
    }
    /////////////////  DROP

    if (videoTime == act2Time + 123 & lightCue24 == false) { //382
        lightCue24 = true;

        stageLightColour(9,9 ,blue,blue,blue, darkMagenta ,darkMagenta ,darkMagenta, 'stagger');
        sideLightsColour(0,darkGreen,darkGreen,darkGreen,darkGreen)
        sideLightsPulse(6,9,5);








        
    }
    /////////////////  BUILD

    if (videoTime == act2Time + 145 & lightCue25 == false) { //392
        lightCue25 = true;

        spotsPanUp(20,300,1000,'once');

        

        
    }
    /////////////////  INST

    if (videoTime == act2Time + 95 & lightCue26 == false) { //399
        lightCue26 = true;


        
    }
    /////////////////  V3

    if (videoTime == act2Time + 112 & lightCue27 == false) { //416
        lightCue27 = true;



        
    }

    /////////////////  V3 1/2

    if (videoTime == act2Time + 122 & lightCue72 == false) { //416
        lightCue72 = true;

    
    
    
            
    }
    
    /////////////////  PRE

    if (videoTime == act2Time + 129 & lightCue28 == false) { //434
        lightCue28 = true;




        
    }
    /////////////////  DROP

    if (videoTime == act2Time + 138 & lightCue29 == false) { //443
        lightCue29 = true;



        
    }
    /////////////////  DROP 1/2

    if (videoTime == act2Time + 156 & lightCue30 == false) { //460
        lightCue30 = true;


        
    }
    /////////////////  STOP

    if (videoTime == act2Time + 173 & lightCue31 == false) { //477
        lightCue31 = true;

        
    }
    /////////////////  INST

    if (videoTime == act2Time + 175 & lightCue32 == false) { //479
        lightCue32 = true;




        
    }
    /////////////////  SAD

    if (videoTime == act2Time + 194 & lightCue33 == false) { //498
        lightCue33 = true;




        
    }
    /////////////////  SAD

    if (videoTime == act2Time + 198 & lightCue34 == false) { //503
        lightCue34 = true;



    
            
    }

    /////////////////  END

    if (videoTime == act2Time + 210 & lightCue35 == false) { //515
        lightCue35 = true;

        stageBlackout(0);
        floorColour(0,colourOff)

        
                
    }

    ////////////////    NUHA RUBY RA   /////////////////////////


    /////////////////  

    if (videoTime == act3Time & lightCue36 == false) { //533
        lightCue36 = true;

        stageLightFade(5,scarlett, scarlett,scarlett, 'fade');   
        stageLightsIntensity(20, 8)   ; 
        //sideLightsStrobe(1.64,18);
        //sideLightsOn(0)
        //sideLightsIntensity(0,0,15);
        //sideLightsColour(0,red,red,red,red);
        //sideLightColourChange(3,18,blue,blue,blue,blue,colourOff,colourOff,colourOff,colourOff,'fade');
        //spotsPanUp(9,0,1000,'yoyo',99);

        
    }

    /////////////////  

    if (videoTime == act3Time + 1 & lightCue37 == false) { //546
        lightCue37 = true;
        sideLightsStrobe(1.64,9);
        //sideLightsOn(0)
        sideLightsIntensity(0,0,15);
        //sideLightsColour(0,red,red,red,red);
        sideLightColourChange(3,18,blue,blue,blue,blue,colourOff,colourOff,colourOff,colourOff,'fade');
        spotsPanUp(9,0,1000,'yoyo',9);

    }

        /////////////////  

        if (videoTime == act3Time + 36 & lightCue40 == false) { //587
            lightCue40 = true;

            sideLightsStrobe(1.64,11);
            //sideLightsOn(0)
            sideLightsIntensity(0,0,15);
            //sideLightsColour(0,red,red,red,red);
            sideLightColourChange(3,18,blue,blue,blue,blue,red,red,red,red,'fade');
            spotsPanUp(9,0,1000,'yoyo',9);
    
    
    
    
            
        }

        /////////////////  

        if (videoTime == act3Time + 77 & lightCue41 == false) { //587
            lightCue41 = true;
            sideLightsIntensity(0,15,0);
            sideLightsOn(0)



        }

    
    /////////////////  HEAVY

    if (videoTime == act3Time + 79 & lightCue38 == false) { //553
        lightCue38 = true;
        sideLightsColour(0,orange,orange,orange,orange);

        sideLightsPulse(0.3, 9,20);
        
    }

    /////////////////  HEAVY

    if (videoTime == act3Time + 88 & lightCue60 == false) { //560
        lightCue60 = true;

        setTimeout(function(){sideLightsPulse(0.3, 9,20)},600);

    
            
    }

    //////////////////  STICKY

    if (videoTime == act3Time + 98 & lightCue62 == false) { //567
        lightCue62 = true;
    
        setTimeout(function(){sideLightsPulse(0.3, 9,20)},600);

    
            
    }

    
    /////////////////  

    if (videoTime == act3Time + 108 & lightCue39 == false) { //574
        lightCue39 = true;

        setTimeout(function(){sideLightsPulse(0.3, 9,20)},600);
        sideLightColourChange(3,1,orange,orange,orange,orange,darkGreen,darkGreen,darkGreen,darkGreen,'fade');


        stageLightsIntensity(1,0);

        floorColour(1, colourOff);








        
    }
    /////////////////  

    if (videoTime == act3Time + 112 & lightCue40 == false) { //587
        lightCue40 = true;

        stageLightFade(0, darkGreen, darkGreen, darkGreen, 'flash');

        sideLightsColour(0,blue,blue,blue,blue);

        sideLightsStrobe(0.21,71);
        sideLightsIntensity(1,10,10)



        
    }
    /////////////////  


    if (videoTime == act3Time + 67 & lightCue42 == false) { //600
        lightCue42 = true;






        
    }
    /////////////////  

    if (videoTime == act3Time + 141 & lightCue43 == false) { //616
        lightCue43 = true;

        stageLightFade(3, red, red, red, 'fade');





        
    }

    /////////////////  

    if (videoTime == act3Time + 86 & lightCue61 == false) { //619
        lightCue61 = true;

            
    }
    
    /////////////////  

    if (videoTime == act3Time + 172 & lightCue44 == false) { //629
        lightCue44 = true;



        
    }
    /////////////////  

    if (videoTime == act3Time + 111 & lightCue45 == false) { //636
        lightCue45 = true;



        
    }
    /////////////////  

    if (videoTime == act3Time + 124 & lightCue46 == false) { //655
        lightCue46 = true;


        
    }
    /////////////////  

    if (videoTime == act3Time + 125 & lightCue47 == false) { //657
        lightCue47 = true;


    }
    /////////////////  

    if (videoTime == act3Time + 137 & lightCue48 == false) { //670
        lightCue48 = true;



        
    }
    /////////////////  

    if (videoTime == act3Time + 147 & lightCue49 == false) { //680
        lightCue49 = true;

        
    }
    /////////////////  

    if (videoTime == act3Time + 153 & lightCue50 == false) { //686
        lightCue50 = true;






        
    }
    /////////////////  

    if (videoTime == act3Time + 166 & lightCue51 == false) { //699
        lightCue51 = true;


        
    }
    
    /////////////////  

    if (videoTime == act3Time + 181 & lightCue52 == false) { //713
        lightCue52 = true;





    
            
    }

    /////////////////  

    if (videoTime == act3Time + 192 & lightCue53 == false) { //725
        lightCue53 = true;
        
                
    }
    /////////////////  

    if (videoTime == act3Time + 193 & lightCue54 == false) { //726
        lightCue54 = true;




            
                    
    }
    /////////////////  

    if (videoTime == act3Time + 199 & lightCue55 == false) { //732
        lightCue55 = true;






        
                
    }

    if (videoTime == act3Time + 209 & lightCue63 == false) { //742
        lightCue63 = true;

    }
    /////////////////  

    if (videoTime == act3Time + 222 & lightCue56 == false) { //755
        lightCue56 = true;


        
                
    }
    /////////////////  

    if (videoTime == act3Time + 237 & lightCue57 == false) { //770
        lightCue57 = true;
        
                
    }
    /////////////////  

    if (videoTime == act3Time + 251 & lightCue58 == false) { //784
        lightCue58 = true;
        
                
    }
    /////////////////  END

    if (videoTime == act3Time + 527 & lightCue59 == false) { //797
        lightCue59 = true;

        stageBlackout(0);
        floorColour(0,colourOff)

        
                
    }

    //////////////// HOUSE LIGHTS UP

    if (videoTime == act3Time + 529 & lightCue67 == false) { //797
        lightCue67 = true;

        houseLightsIntensity(10, 18);

    }

    


    
    
    




}

function stageLightFade(_speed, _colour1, _colour2, _colour3, _flash) {

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

    TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 1,  ease: "none", overwrite: true});


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


/*function sideLightsColourStrobe(_length, _speed, ) {

    TweenMax.to(stageSpot.color, _speed,  {decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 1, ease:Linear.easeNone},);
    TweenMax.to(stageSpot1.color, _speed, {decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 2, ease:Linear.easeNone},);
    TweenMax.to(stageSpot2.color, _speed, {decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 3, ease:Linear.easeNone},);
    TweenMax.to(stageSpot3.color, _speed, {decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 4, ease:Linear.easeNone},);

}*/


function sideLightsIntensity(_speed, _fromintensity, _tointensity) {

    //TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 0,  ease: "none", overwrite: true});


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
            TweenMax.allTo([stageSpot.target.position, stageSpot1.target.position, stageSpot2.target.position, stageSpot3.target.position], _speed, { startAt: {y: _startheight},y: _endheight, repeat: _length, yoyo: true, ease: "expo.in"});
            break;
        case 'stagger' :
            TweenMax.allTo([stageSpot.target.position, stageSpot1.target.position, stageSpot2.target.position, stageSpot3.target.position], _speed, { startAt: {y: _startheight},y: _endheight, stagger: _speed, repeat: _length, yoyo: true, ease: "expo.in"});
            break;
    
        default:
    }

}