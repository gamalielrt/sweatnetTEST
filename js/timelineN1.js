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
var lightCue64 = false;
var lightCue65 = false;
var lightCue66 = false;
var lightCue67 = false;





var countdownDuration = 60;
var introDuration = 40; //15
var act1Duration = 223;
var interval1Duration = 12;
var act2Duration = 210;
var interval2Duration = 10;
var act3Duration = 267;

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

        testLight6.intensity = 0;
        testLight7.intensity = 0;
        testLight8.intensity = 0;

        //testLight6.color = blue;
        //testLight7.color = blue;
        //testLight8.color = blue;

        stagesurfacemtl.emissive = colourOff


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

        testLight6.color = red;
        testLight7.color = red;
        testLight8.color = red;

        stagesurfacemtl.emissive = red;
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

        testLight6.color = antiqueWhite;
        testLight7.color = antiqueWhite;
        testLight8.color = antiqueWhite;
        stagesurfacemtl.emissive = antiqueWhite;



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
    //console.log(videoTime, testLight6.intensity,testLight6.decay)

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
        //lightFade(3, blue, blue, blue, "fade" )

        //stageLightsIntensity(10, 0);
        //floorColour(0,colourOff);

        stageBlackout(10);




        
    }


    ///////////////////   Speech



    if (videoTime == introTime & houseLightsInOp == false) {
        houseLightsInOp = true;



        
    }

    ////////////////    SWEAT    /////////////////////////


    /////////////////  INTRO

    if (videoTime == act1Time & lightCue1 == false) {
        lightCue1 = true;

        houseLightsIntensity(10, 1);

        lightFade(0,purple,purple,purple, 'fade');
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


        spotsPanUp(10,2000,600,'once',1);
        //sideLightsIntensity(1,0,10);
        //sideLightsOn(0);
        sideLightsColour(0.5,cyan,cyan,cyan,cyan);
        sideLightsPulse(1,6,5)
        floorColour(0.5,colourOff);




        
    }

    /////////////////  DROP OUT


    if (videoTime == act1Time + 46 & lightCue65 == false) { //135
        lightCue65 = true;

        //stageLightsIntensity(0.5, 0);
        sideLightsColour(0.5,colourOff,colourOff,colourOff,colourOff);
        //floorColour(0.5,colourOff);
        spotsPanUp(0.3,600,-400,'once',1);

        stageBlackout(0);

        //stageLightsIntensity(0, 18);


        
    }


    /////////////////  C1

    if (videoTime == act1Time + 47 & lightCue5 == false) { //137
        lightCue5 = true;

        stageLightsIntensity(0, 18);

        lightFade(0,purple,purple,purple, 'fade');

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

    if (videoTime == act1Time + 64 & lightCue7 == false) { //154
        lightCue7 = true;

        spotsPanUp(0.594,300,2000,'once',1);


        
    }
    /////////////////  V2

    if (videoTime == act1Time + 67 & lightCue8 == false) { //156
        lightCue8 = true;
        spotsPanUp(0.594,1000,300,'stagger',60);


        
    }
    /////////////////  DROP OUT

    if (videoTime == act1Time + 84 & lightCue64 == false) { //174
        lightCue64 = true;
        stageLightsIntensity(0.5, 0);
        sideLightsColour(0.5,colourOff,colourOff,colourOff,colourOff);

        
    }
    /////////////////  V2 1/2


    if (videoTime == act1Time + 85 & lightCue9 == false) { //175
        lightCue9 = true;
        lightFade(0,purple,purple,purple, 'fade');
        sideLightsColour(0,orange,orange,orange,orange);

        stageLightsIntensity(0, 18);
        sideLightsPulse(0.6, 51, 0);
        
    }
    /////////////////  BRIDGE

    if (videoTime == act1Time + 104 & lightCue10 == false) { //194
        lightCue10 = true;
        spotsPanUp(0.594,1000,0,'once',1);
        stageLightsIntensity(0.5, 0);



        
    }
    /////////////////  BRIDGE 1/2

    if (videoTime == act1Time + 114 & lightCue11 == false) { //204
        lightCue11 = true;

        stageLightsPulse(0.594,12,cyan,cyan,cyan);
    }

    /////////////////  DROPOUT

    if (videoTime == act1Time + 122 & lightCue66 == false) { //204
        lightCue66 = true;

        stageBlackout(1);
    
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

        stageLightStrobe(0.297, 30);

  

        
    }
    /////////////////  C2 1/2

    if (videoTime == act1Time + 142 & lightCue14 == false) { //232
        lightCue14 = true;
        sideLightsColour(0,purple,purple,purple,purple);

        lightFade(0,orange,orange,orange, 'fade');

        floorColour(0,purple);
        stageLightStrobe(0.297, 33);


        sideLightsPulse(0.297, 32, 26);
        spotsPanUp(0.594,-400,300,'yoyo',15);


        
    }
    /////////////////  C2 3/4

    if (videoTime == act1Time + 152 & lightCue15 == false) { //241
        lightCue15 = true;

        //sideLightsColour(0,purple,purple,purple,purple);

        //lightFade(0,orange,orange,orange, 'fade');

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
        
        lightFade(0,purple,purple,purple, 'fade');
        stageLightsIntensity(0, 18);
        //stageLightStrobe(1.118, 20);

        //sideLightsColour(20,orange,orange,orange,orange);

        spotsPanUp(1.118,2000,0,'stagger',30);




    
            
    }

    /////////////////  END

    if (videoTime == act1Time + 222 & lightCue17 == false) { //291
        lightCue17 = true;

        stageBlackout(0);
        floorColour(0,colourOff)

        
                
    }

    ////////////////    JESS WINTER    /////////////////////////


    /////////////////  INTRO

    if (videoTime == act2Time & lightCue18 == false) { //304
        lightCue18 = true;

        lightFade(0, red, red, red, 'flash');
        //lightFade(0, red, red, red, 'fade');

        //sideLightsColour(0,red, blue, red, blue)
        //sideLightsStrobe(1.1,8);
        //sideLightsIntensity(5, 20, 20);

        //stageLightsPulse(0.2, 141);





        
    }

    /////////////////  INTRO 1/2

    if (videoTime == act2Time + 7 & lightCue19 == false) { //311
        lightCue19 = true;

        sideLightsColour(0,red, blue, red, blue)
        sideLightsStrobe(1.1,8);
        sideLightsIntensity(5, 20, 20)

    
            
    }
    /////////////////  PRE

    if (videoTime == act2Time + 30 & lightCue20 == false) { //334
        lightCue20 = true;

        sideLightsPulse(0.6, 27, 0);

        
    }
    /////////////////  END OF PRE

    if (videoTime == act2Time + 47 & lightCue21 == false) { //352
        lightCue21 = true;

        //spotsPanUp(0.5,300,-400,'once',1);

        
    }
    /////////////////  V2

    if (videoTime == act2Time + 48 & lightCue22 == false) { //351
        lightCue22 = true;

        lightFade(0, blue, blue, blue,'fade');
        spotsPanUp(0.5,300,-400,'once',1);



        
    }
    /////////////////  PRE

    if (videoTime == act2Time + 60 & lightCue23 == false) { //364
        lightCue23 = true;
        spotsPanUp(0.5,-400,300,'stagger',29);
        sideLightsPulse(0.6, 23, 0);



        
    }
    /////////////////  DROP

    if (videoTime == act2Time + 78 & lightCue24 == false) { //382
        lightCue24 = true;

        stageBlackout(0);
        floorColour(0,colourOff);
        sideLightsColour(0,red, blue, red, blue)

        sideLightsIntensity(0, 20, 20);

        sideLightsPulse(0.05, 320, 0);
        spotsPanUp(19,-400,1400,'once',1);




        
    }
    /////////////////  BUILD

    if (videoTime == act2Time + 88 & lightCue25 == false) { //392
        lightCue25 = true;

        
    }
    /////////////////  INST

    if (videoTime == act2Time + 95 & lightCue26 == false) { //399
        lightCue26 = true;


        lightFade(0, red, red, red, 'fade');


        stageLightsPulse(1,15, red,red,red);

        
    }
    /////////////////  V3

    if (videoTime == act2Time + 112 & lightCue27 == false) { //416
        lightCue27 = true;


        lightFade(0, blue, blue, blue, 'fade');

        
    }
    /////////////////  PRE

    if (videoTime == act2Time + 130 & lightCue28 == false) { //434
        lightCue28 = true;

        lightFade(0, red, red, red, 'fade');
        sideLightsColour(0,red, blue, red, blue)

        sideLightsIntensity(10,4,20)
        sideLightsStrobe(1.1,6);

        spotsPanUp(0.5,-400,300,'stagger',29);
        //sideLightsPulse(0.6, 23, 0);



        
    }
    /////////////////  DROP

    if (videoTime == act2Time + 139 & lightCue29 == false) { //443
        lightCue29 = true;

        stageBlackout(0);
        floorColour(0,colourOff);
        //sideLightsColour(0,blue, red, blue, red)

        sideLightsIntensity(0, 20, 20);

        sideLightsPulse(0.05, 320, 0);
        spotsPanUp(19,-400,1400,'once',1);


        
    }
    /////////////////  DROP 1/2

    if (videoTime == act2Time + 156 & lightCue30 == false) { //460
        lightCue30 = true;

        sideLightsColour(0,red, red, red, red);

        sideLightsIntensity(0, 20, 20);

        sideLightsPulse(0.05, 320, 0);
        spotsPanUp(19,-400,1400,'once',1);


        
    }
    /////////////////  STOP

    if (videoTime == act2Time + 173 & lightCue31 == false) { //477
        lightCue31 = true;

        
    }
    /////////////////  INST

    if (videoTime == act2Time + 175 & lightCue32 == false) { //479
        lightCue32 = true;

        stageLightsPulse(1,35, red,red,red);
        floorColour (2, red);



        
    }
    /////////////////  SAD

    if (videoTime == act2Time + 194 & lightCue33 == false) { //498
        lightCue33 = true;

        sideLightsPulse(1, 1, 20);
        sideLightsColour(0,blue, blue, blue, blue)

        spotsPanUp(1,-400,1000,'once',1);



        
    }
    /////////////////  SAD

    if (videoTime == act2Time + 199 & lightCue34 == false) { //503
        lightCue34 = true;

        sideLightsPulse(1, 1, 20);
        sideLightsColour(0,blue, blue, blue, blue)

        spotsPanUp(1,-400,1000,'once',1);


    
            
    }

    /////////////////  END

    if (videoTime == act2Time + 210 & lightCue35 == false) { //515
        lightCue35 = true;

        stageBlackout(0);
        floorColour(0,colourOff)

        
                
    }

    ////////////////    HAICH BER NA   /////////////////////////


    /////////////////  INTRO

    if (videoTime == act3Time & lightCue36 == false) { //533
        lightCue36 = true;

        stageLightsIntensity(0, 18);

        lightFade(0, antiqueWhite, antiqueWhite, antiqueWhite, 'fade')



        stageLightsPulse(1, 9,antiqueWhite,antiqueWhite,antiqueWhite )

        
    }

    /////////////////  V1

    if (videoTime == act3Time + 13 & lightCue37 == false) { //546
        lightCue37 = true;

        lightFade(2, indianRed, indianRed, indianRed, 'fade')

    
            
    }
    /////////////////  BEAT IN

    if (videoTime == act3Time + 20 & lightCue38 == false) { //553
        lightCue38 = true;

        stageLightStrobe(0.05, 9)

        lightFade(2, antiqueWhite, antiqueWhite, antiqueWhite, 'fade')

        
    }

    /////////////////  BEAT IN

    if (videoTime == act3Time + 27 & lightCue60 == false) { //560
        lightCue60 = true;
    
        stageLightStrobe(0.05, 9)
    
        lightFade(2, indianRed, indianRed, indianRed, 'fade')
    
            
    }

    if (videoTime == act3Time + 28 & lightCue62 == false) { //567
        lightCue62 = true;
    
        stageLightStrobe(0.05, 9)
    
    
            
    }

    
    /////////////////  DROP

    if (videoTime == act3Time + 41 & lightCue39 == false) { //574
        lightCue39 = true;

        stageBlackout(1);

        sideLightsPulse(7, 1,3);

        sideLightsColour(0,indianRed,indianRed,indianRed,indianRed);

        spotsPanUp(2,0,1000,'yoyo',16);

        //sideLightsIntensity(7,0,5);

        //sideLightsStrobe(0.2, 99)







        
    }
    /////////////////  BUILD

    if (videoTime == act3Time + 54 & lightCue40 == false) { //587
        lightCue40 = true;

        lightFade(8, cerulean, cerulean, cerulean, 'fade')


        stageLightsIntensity(1, 18);


        
    }
    /////////////////  C1

    if (videoTime == act3Time + 55 & lightCue41 == false) { //588
        lightCue41 = true;





        stageLightsPulse(0.2, 141)
        

        


        
    }
    /////////////////  'TIME ALONE'

    if (videoTime == act3Time + 67 & lightCue42 == false) { //600
        lightCue42 = true;

        lightFade(2, indianRed, indianRed, indianRed, 'fade')

        sideLightsColour(0,antiqueWhite,antiqueWhite,antiqueWhite,antiqueWhite);

        //sideLightsStrobe(0.05, 19)
        //sideLightsIntensity(1,0,20);
        sideLightsPulse(0.5, 1,10);

        spotsPanUp(1,0,1000,'once');





        
    }
    /////////////////  V2

    if (videoTime == act3Time + 83 & lightCue43 == false) { //616
        lightCue43 = true;

        lightFade(0, cerulean, cerulean, cerulean, 'fade')

        //stageLightsIntensity(3,5);


        
    }

    /////////////////  BEAT

    if (videoTime == act3Time + 86 & lightCue61 == false) { //619
        lightCue61 = true;
        stageLightsPulse(1, 25,antiqueWhite,antiqueWhite,antiqueWhite )

            
    }
    
    /////////////////  PRE

    if (videoTime == act3Time + 96 & lightCue44 == false) { //629
        lightCue44 = true;

        sideLightsColour(0,indianRed,indianRed,indianRed,indianRed);

        //sideLightsStrobe(0.05, 19)
        //sideLightsIntensity(1,0,20);
        sideLightsPulse(0.5, 1,10);

        spotsPanUp(1,0,1000,'once');


        
    }
    /////////////////  DROP

    if (videoTime == act3Time + 111 & lightCue45 == false) { //636
        lightCue45 = true;

        stageBlackout(1);

        //sideLightsPulse(7, 1,5);

        stageLightsIntensity(5, 2);

        stageLightsPulse(1, 141)



        sideLightsColour(0,indianRed,indianRed,indianRed,indianRed);

        spotsPanUp(0.7,300,1000,'stagger',16);

        sideLightsIntensity(0,0,5);

        sideLightsStrobe(0.2, 99)



        
    }
    /////////////////  BUILD

    if (videoTime == act3Time + 124 & lightCue46 == false) { //655
        lightCue46 = true;

        //stageLightsIntensity(1, 18);

        //lightFade(8, cerulean, cerulean, cerulean, 'fade')

        
    }
    /////////////////  C2

    if (videoTime == act3Time + 125 & lightCue47 == false) { //657
        lightCue47 = true;

        stageLightsIntensity(0, 18);


        lightFade(8, cerulean, cerulean, cerulean, 'fade')

        stageLightsPulse(0.2, 141)

    }
    /////////////////  'TIME ALONE'

    if (videoTime == act3Time + 137 & lightCue48 == false) { //670
        lightCue48 = true;

        lightFade(2, indianRed, indianRed, indianRed, 'fade')

        sideLightsColour(0,cerulean,cerulean,cerulean,cerulean);

        sideLightsStrobe(0.2, 77)


        
    }
    /////////////////  CHORDS FADE IN

    if (videoTime == act3Time + 147 & lightCue49 == false) { //680
        lightCue49 = true;

        
    }
    /////////////////  DROP - SPACEY

    if (videoTime == act3Time + 153 & lightCue50 == false) { //686
        lightCue50 = true;

        stageLightsIntensity(2,2)

        lightFade(1, antiqueWhite, antiqueWhite, antiqueWhite, 'fade');

        floorColour(5,colourOff);
        spotsPanUp(12,1000,600,'once',1);





        
    }
    /////////////////  BEAT

    if (videoTime == act3Time + 166 & lightCue51 == false) { //699
        lightCue51 = true;

        stageLightsIntensity(0,5)
        floorColour(0, cerulean);

        stageLightsPulse(2,11,antiqueWhite,antiqueWhite,antiqueWhite)
        spotsPanUp(0.7,600,1000,'stagger',23);

        sideLightsPulse(0.5, 23,5);

        
    }
    
    /////////////////  QUIET PRE

    if (videoTime == act3Time + 181 & lightCue52 == false) { //713
        lightCue52 = true;

        spotsPanUp(16,300,1200,'once');


        sideLightsColour(0,indianRed,indianRed,indianRed,indianRed);

        sideLightsPulse(0.5, 29,5);

        stageBlackout(5);




    
            
    }

    /////////////////  BUILD

    if (videoTime == act3Time + 192 & lightCue53 == false) { //725
        lightCue53 = true;
        
                
    }
    /////////////////  DROP

    if (videoTime == act3Time + 193 & lightCue54 == false) { //726
        lightCue54 = true;

        spotsPanUp(0.7,2000,-300,'once');



            
                    
    }
    /////////////////  C3

    if (videoTime == act3Time + 199 & lightCue55 == false) { //732
        lightCue55 = true;

        stageLightsIntensity(0,20)

        lightFade(8, cerulean, cerulean, cerulean, 'fade')

        stageLightsPulse(0.2, 313)

        spotsPanUp(0,300,300,'once');


        sideLightsPulse(0.2, 3,20);





        
                
    }

    if (videoTime == act3Time + 209 & lightCue63 == false) { //742
        lightCue63 = true;
        sideLightsPulse(0.2, 3,20);

    }
    /////////////////  C3 1/2

    if (videoTime == act3Time + 222 & lightCue56 == false) { //755
        lightCue56 = true;

        spotsPanUp(0.7,600,1000,'stagger',47);

        sideLightsStrobe(0.2, 99)

        sideLightsIntensity(10, 0, 25)

        
                
    }
    /////////////////  C3 OUTRO

    if (videoTime == act3Time + 237 & lightCue57 == false) { //770
        lightCue57 = true;
        
                
    }
    /////////////////  BEAT CUT

    if (videoTime == act3Time + 251 & lightCue58 == false) { //784
        lightCue58 = true;
        
                
    }
    /////////////////  END

    if (videoTime == act3Time + 264 & lightCue59 == false) { //797
        lightCue59 = true;

        stageBlackout(0);
        floorColour(0,colourOff)

        
                
    }

    //////////////// HOUSE LIGHTS UP

    if (videoTime == act3Time + 265 & lightCue67 == false) { //797
        lightCue67 = true;

        houseLightsIntensity(10, 18);

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

function sideLightsOn(_speed) {

    //TweenMax.allTo([stageSpot, stageSpot1, stageSpot2, stageSpot3], 0, { decay: 1,  ease: "none", overwrite: true});


    TweenMax.to(stageSpot, _speed,  {startAt: {decay: 0},decay: 1, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 1, ease:Linear.easeNone},);
    TweenMax.to(stageSpot1, _speed, {startAt: {decay: 0},decay: 1, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 2, ease:Linear.easeNone},);
    TweenMax.to(stageSpot2, _speed, {startAt: {decay: 0},decay: 1, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 3, ease:Linear.easeNone},);
    TweenMax.to(stageSpot3, _speed, {startAt: {decay: 0},decay: 1, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 4, ease:Linear.easeNone},);
    
    

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