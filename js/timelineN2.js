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
var introDuration = 37; //15
var act1Duration = 265;
var interval1Duration = 10;
var act2Duration = 209;
var interval2Duration = 15;
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

            houseLightsIntensity(5, 1);

            floorColour(3,lightOff);

            stageLightsIntensity(3, 0);

            sideLightsAngle(3,0.1,0.1,'once',8)





    
    
        }
    


        if (videoTime == act1Time + 8 & lightCue80 == false) {
            lightCue80 = true;
    
            houseLightsIntensity(5, 1);
            stageLightsIntensity(7, 2);
            floorColour(0,red);

            spotsPanUp(20,1000,100,'yoyo',5);
            //sideLightsAngle(3,0,0,'once',8)
            sideLightsPulse(3,10,15);
            sideLightsColour(0,red,red,red,red);
    
    
            
        }
    
        ////////////////    Intro 1/2
    
        if (videoTime == act1Time + 23 & lightCue1 == false) {
            lightCue1 = true;
    
            stageLightsFade(3, red, red, red, "fade" )
            
        }
    
        ////////////////   V1
    
    
        if (videoTime == act1Time + 41 & lightCue2 == false) {
            lightCue2 = true;
    
            stageLightsFade(3, blue, blue, blue, "fade" );
            stageLightsIntensity(7, 15);


            
        }
        if (videoTime == act1Time + 49 & lightCue3 == false) {
            lightCue3 = true;
    
            stageLightsFade(3, red, red, red, "fade" )
            
        }
        if (videoTime == act1Time + 66 & lightCue4 == false) {
            lightCue4 = true;
    
            stageLightsFade(3, blue, blue, blue, "fade" )
            
        }
        if (videoTime == act1Time + 64 & lightCue5 == false) {
            lightCue5 = true;
    
            stageLightsFade(3, blue, blue, blue, "fade" )
            
        }
    
    
        ///////////////////     Drop
    
    
        if (videoTime == act1Time + 70 & lightCue6 == false) {
            lightCue6 = true;
    
            stageBlackout(0);
            sideLightsIntensity(9, 0, 4)
            sideLightsOn(0);
            sideLightsStrobe(0.05, 19);     
            spotsPanUp(1,100,1000,'once',1)   
            
        }
    
        ////////////////////    Chorus
    
    
        if (videoTime == act1Time + 71 & lightCue7 == false) {
            lightCue7 = true;
    
            stageLightsFade(2, blue, blue, blue, "flash" )
            sideLightsColour(0,blue,blue,blue,blue);
    
            sideLightsStrobe(0.5, 13)        
    
            //stageLightsPulse(2, 400, pink, pink, pink )

            sideLightsAngle(1,0.1,0.5,'once',1);
    
            
        }
    
    
        /////////////////////   Last Hit
    
        if (videoTime == act1Time + 87 & lightCue8 == false) {
            lightCue8 = true;
    
            //stageLightsFade(2, red, cyan, purple, "fade" )
            stageBlackout(0);
    
            
        }
    
    
        //////////////////////    Instrumental
    
        if (videoTime == act1Time + 91 & lightCue9 == false) {
            lightCue9 = true;
            stageLightsIntensity(1, 18);
            stageLightsFade(2, red, red, red, "fade" )
            
        }
    
    
        /////////////////////    V2
    
    
        if (videoTime == act1Time + 100 & lightCue10 == false) {
            lightCue10 = true;
    
            stageLightsFade(2, pink, cyan, purple, "fade" )
            
        }
        if (videoTime == act1Time + 108 & lightCue11 == false) {
            lightCue11 = true;
    
            stageLightsFade(2, purple, pink, cyan, "fade" )
            
        }
        if (videoTime == act1Time + 115 & lightCue12 == false) {
            lightCue12 = true;
    
            stageLightsFade(2, cyan, purple, pink, "fade" )
            
        }
        if (videoTime == act1Time + 124 & lightCue13 == false) {
            lightCue13 = true;
    
            stageLightsFade(2, pink, cyan, purple, "fade" )
            
        }
    
    
        /////////////////////     Middle 8
    
    
        if (videoTime == act1Time + 129 & lightCue14 == false) {
            lightCue14 = true;
    
            stageLightsFade(6, red, red, red, "fade" )
    
            stageSpot.intensity = 0
            stageSpot1.intensity = 0
            stageSpot2.intensity = 0
            stageSpot3.intensity = 0
    
            testLight6.intensity = 35;
            testLight7.intensity = 35;
            testLight8.intensity = 35;
    
            stageLightsPulse(2, 4 )
            
        }
        if (videoTime == act1Time + 139 & lightCue15 == false) {
            lightCue15 = true;
            sideLightsColour(0,red,red,red,red);
    
            sideLightsPulse (3, 1, 1.5);
            spotsPanUp(5,100,1000,'once',1)        
        }
    
    
        //////////////////////      Strings
    
    
        if (videoTime == act1Time + 140 & lightCue16 == false) {
            lightCue16 = true;
    
            //stageLightsFade(2, red, cyan, purple, "fade" )
            stageBlackout(5)
            
    
    
            
        }
    
    
        /////////////////////   Drop down
    
    
        if (videoTime == act1Time + 146 & lightCue17 == false) {
            lightCue17 = true;
    
            //stageBlackout(20)
            stageLightsIntensity(0, 1)
            stageLightsFade(2, white, white, white, "fade" )
    
            //stageSpot.intensity = 0
            //stageSpot1.intensity = 0
            //stageSpot2.intensity = 0
            //stageSpot3.intensity = 0
    
    
            stageLightsPulse(2, 11 )
    
            
        }
    
    
        /////////////////////     Strobe
    
    
    
        if (videoTime == act1Time + 170 & lightCue18 == false) {
            lightCue18 = true;
    
            sideLightsColour(0,white,white,white,white);

    
            //stageSpot.decay = 1
            //stageSpot1.decay = 1
            //stageSpot2.decay = 1
            //stageSpot3.decay = 1
    
    
            sideLightsIntensity(25, 1, 17)
            sideLightsStrobe(0.05, 105);
            

            stageLightsFade(2, colourOff, colourOff, colourOff, "fade" )

            spotsPanUp(25,0,1500,'once',1);
            sideLightsAngle(2,0.1,0.5,'yoyo',18);       

    
        }
    
    
        ////////////////////////  Chorus 2
    
    
        if (videoTime == act1Time + 181 & lightCue19 == false) {
            lightCue19 = true;
            //stageLightsIntensity(0,18);
            stageLightsFade(2, red, yellow, blue, "flash" )        
        }
    
        if (videoTime == act1Time + 189 & lightCue20 == false) {
            lightCue20 = true;
    
            stageLightsFade(2, blue, cyan, purple, "flash" )
            
        }
    
        if (videoTime == act1Time + 197 & lightCue21 == false) {
            lightCue21 = true;
    
            stageLightsFade(2, pink, yellow, green, "flash" )
            
        }
    
        if (videoTime == act1Time + 205 & lightCue22 == false) {
            lightCue22 = true;
    
            stageLightsFade(2, orange, red, yellow, "flash" )
            sideLightsColour(0,blue,blue,blue,blue);
            
        }
    
    
        ///////////////////    Last Hit
    
    
    
        if (videoTime == act1Time + 212 & lightCue23 == false) {
            lightCue23 = true;
            floorColour(0,blue)
    
            stageLightsFade(1, red, red, red, "fade" )
            sideLightsColour(0,blue,blue,blue,blue);
    
    
    
            sideLightsIntensity(40, 2, 0)
            sideLightsStrobe(0.5, 79);
            stageLightStrobe(0.5, 79)
    
            
        }

        if (videoTime == act1Time + 266 & lightCue79 == false) {
            lightCue79 = true;

            stageLightsIntensity(5,0);
            floorColour(5,colourOff);
        }

    


    /*

    /////////////////  INTRO

    if (videoTime == act1Time & lightCue1 == false) {
        lightCue1 = true;


        stageLightsFade(0,purple,purple,purple, 'fade');
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

        stageLightsFade(0,purple,purple,purple, 'fade');

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
        stageLightsFade(0,purple,purple,purple, 'fade');
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
        //stageLightsFade(0,cyan,cyan,cyan, 'fade');

    }

    /////////////////  DROPOUT

    if (videoTime == act1Time + 121 & lightCue66 == false) { //204
        lightCue66 = true;

        stageBlackout(0);
        //stageLightsFade(0,purple,purple,purple, 'fade');


        
    
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

        stageLightsFade(0,orange,orange,orange, 'fade');

        floorColour(0,purple);
        stageLightStrobe(0.297, 33);


        sideLightsPulse(0.297, 33, 26);
        spotsPanUp(0.594,-400,300,'yoyo',15);


        
    }
    /////////////////  C2 3/4

    if (videoTime == act1Time + 152 & lightCue15 == false) { //241
        lightCue15 = true;

        //sideLightsColour(0,purple,purple,purple,purple);

        //stageLightsFade(0,orange,orange,orange, 'fade');

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
        
        //stageLightsFade(0,purple,purple,purple, 'fade');
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

    */

    ////////////////    KELORA    /////////////////////////


    /////////////////  INTRO

    if (videoTime == act2Time & lightCue74 == false) { //304
        lightCue74 = true;

        stageLightsFade(0, blue, blue, blue, 'fade');

        stageLightsIntensity(5, 18);






        
    }

    /////////////////  INTRO 1/2

    if (videoTime == act2Time + 5 & lightCue75 == false) { //311
        lightCue75 = true;

        //stageLightColour(9,9 ,blue,blue,blue, darkMagenta ,darkMagenta ,darkMagenta, 'stagger');


    
            
    }
    /////////////////  PRE

    if (videoTime == act2Time + 30 & lightCue76 == false) { //334
        lightCue76 = true;

        stageLightColour(9,9 ,blue,blue,blue, darkMagenta ,darkMagenta ,darkMagenta, 'stagger');


        
    }
    /////////////////  END OF PRE

    if (videoTime == act2Time + 47 & lightCue77 == false) { //352
        lightCue77 = true;


        
    }
    /////////////////  V2

    if (videoTime == act2Time + 60 & lightCue78 == false) { //351
        lightCue78 = true;
        stageLightColour(9,9 ,blue,blue,blue, darkMagenta ,darkMagenta ,darkMagenta, 'stagger');




        
    }
    /////////////////  PRE

    if (videoTime == act2Time + 90 & lightCue73 == false) { //364
        lightCue73 = true;
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

        stageLightsFade(5,scarlett, scarlett,scarlett, 'fade');   
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
        sideLightsColour(0,blue,blue,blue,blue);

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
        sideLightColourChange(3,1,blue,blue,blue,blue,darkGreen,darkGreen,darkGreen,darkGreen,'fade');


        stageLightsIntensity(1,0);

        floorColour(1, colourOff);








        
    }
    /////////////////  

    if (videoTime == act3Time + 112 & lightCue42 == false) { //587
        lightCue42 = true;

        stageLightsFade(0, darkGreen, darkGreen, darkGreen, 'flash');

        sideLightsColour(0,blue,blue,blue,blue);

        sideLightsStrobe(0.21,71);
        sideLightsIntensity(1,10,10)



        
    }
    /////////////////  

    if (videoTime == act3Time + 141 & lightCue43 == false) { //616
        lightCue43 = true;

        stageLightsFade(3, red, red, red, 'fade');

        spotsPanUp(9,0,1000,'yoyo',9);

        //sideLightColourChange(3,19,red,red,red,red,colourOff,colourOff,colourOff,colourOff,'fade');

        sideLightsColour(0,red,red,red,red)

        sideLightsPulse(3, 9, 15);

    }

    
    /////////////////  

    if (videoTime == act3Time + 171 & lightCue44 == false) { //629
        lightCue44 = true;

        stageLightStrobe(1.64,19)

        spotsPanUp(0.5,1000,0,'once',9);
        sideLightsStrobe(0.21,71);
        sideLightsIntensity(0,10,10)
        sideLightColourChange(3,19,red,red,red,red,blue,blue,blue,blue,'fade');

        setTimeout(function(){spotsPanUp(18,0,1000,'yoyo',2)},600);


        



        
    }
    /////////////////  

    if (videoTime == act3Time + 205 & lightCue47 == false) { //657
        lightCue47 = true;

        stageLightsIntensity(25,0);
        floorColour(25,colourOff);



    }



    
    
    
    /////////////////   SONG 2

    if (videoTime == act3Time + 228 & lightCue45 == false) { //636
        lightCue45 = true;

        stageLightsIntensity(0,0);
        floorColour(0,colourOff);


        setTimeout(function(){sideLightsIntensity(0,20,15)},500);
        setTimeout(function(){sideLightsOn(0)},500);
        setTimeout(function(){spotsPanUp(0.5,2000,0,'once',1)},500);
        setTimeout(function(){spotsPanUp(15,0,750,'yoyo',3)},1000);

        sideLightsAngle(0,0.5,0.1,'once',1);

        sideLightsColour(0, purple,purple,purple,purple);



    
    
    
            
    }
    /////////////////  INTRO
    
    if (videoTime == act3Time + 238 & lightCue46 == false) { //655
        lightCue46 = true;

        sideLightsAngle(9,0.1,0.4,'once',1);

    
    
            
    }
    
    /////////////////  VOX

    if (videoTime == act3Time + 246 & lightCue48 == false) { //670
        lightCue48 = true;

        sideLightsPulse(0.556, 59,0);
        spotsPanUp(10,750,200,'yoyo',3)



        
    }
    /////////////////  V1 1/2

    if (videoTime == act3Time + 264 & lightCue49 == false) { //680
        lightCue49 = true;

        stageLightsIntensity(15,10);
        stageLightsFade(10,cyan,cyan,cyan,'fade');


        
    }

    /////////////////  DROP

    if (videoTime == act3Time + 280 & lightCue34 == false) { //503
        lightCue34 = true;
        //stageBlackout(0);
        stageLightsIntensity(0,0);
        floorColour(0,colourOff);
        //sideLightsIntensity(0,0,0);
        sideLightsOff()
        sideLightsColour(0,white,white,white,white);


    }
    


    /////////////////  C1

    if (videoTime == act3Time + 281 & lightCue50 == false) { //686
        lightCue50 = true;

        sideLightsColour(0,white,white,white,white);
        sideLightsIntensity(0,10,20);
        sideLightsStrobe(0.05,169)
        spotsPanUp(7,200,750,'yoyo',9)
        //sideLightsOn(0);

    }
    /////////////////  V2

    if (videoTime == act3Time + 298 & lightCue51 == false) { //699
        lightCue51 = true;

        stageLightsIntensity(5,18);
        stageLightColour(3,19,purple,purple,purple,cyan,cyan,cyan, 'stagger');
        //stageLightsPulse(3,10);

        sideLightsIntensity(0,2,2);
        sideLightsColour(0,cyan,cyan,cyan,cyan);

        setTimeout(function(){sideLightsPulse(2,19,10)},1000);

        spotsPanUp(5,200,500,'yoyo',19)



        
    }
    
    /////////////////  V2 1/2

    if (videoTime == act3Time + 340 & lightCue52 == false) { //713
        lightCue52 = true;
        stageLightStrobe(0.05,19)





    
            
    }

    /////////////////  BLACKOUT

    if (videoTime == act3Time + 341 & lightCue53 == false) { //725
        lightCue53 = true;

        spotsPanUp(0.5,300,2000,'once',19)


        //stageBlackout(0);
        stageLightsIntensity(0,0);
        floorColour(0,colourOff);
        //sideLightsIntensity(0,0,0);
        sideLightsOff()
        //sideLightsColour(0,white,white,white,white);
        


                
    }
    /////////////////  C2

    if (videoTime == act3Time + 342 & lightCue54 == false) { //726
        lightCue54 = true;

        sideLightsColour(0,white,white,white,white);
        sideLightsIntensity(0,10,20);
        sideLightsStrobe(0.05,169)
        spotsPanUp(0.5,1400,0,'yoyo',49)





            
                    
    }
    /////////////////  V3

    if (videoTime == act3Time + 359 & lightCue55 == false) { //732
        lightCue55 = true;

        stageLightsIntensity(5,18);
        stageLightColour(3,19,purple,purple,purple,cyan,cyan,cyan, 'stagger');
        //stageLightsPulse(3,10);

        sideLightsIntensity(0,2,2);
        sideLightsColour(0,cyan,cyan,cyan,cyan);

        setTimeout(function(){sideLightsPulse(2,19,10)},1000);

        spotsPanUp(5,200,500,'yoyo',19)







        
                
    }

    ////////////////  V3 1/2

    if (videoTime == act3Time + 377 & lightCue63 == false) { //742
        lightCue63 = true;

        stageLightStrobe(0.05,19)


    }

    ////////////////  BLACKOUT

    if (videoTime == act3Time + 393 & lightCue30 == false) { //460
        lightCue30 = true;

        spotsPanUp(0.5,300,2000,'once',19)


        //stageBlackout(0);
        setTimeout(function(){stageLightsIntensity(0,0)},300);
        setTimeout(function(){floorColour(0,colourOff)},300);
        //sideLightsIntensity(0,0,0);
        setTimeout(function(){sideLightsOff()},300);
        //sideLightsColour(0,white,white,white,white);

        
    }



    /////////////////  C3

    if (videoTime == act3Time + 394 & lightCue56 == false) { //755
        lightCue56 = true;


        sideLightsColour(0,white,white,white,white);
        sideLightsIntensity(0,10,20);
        //sideLightsStrobe(0.05,169)

        sideLightsStrobe(0.05,169)

        spotsPanUp(0.5,1400,0,'stagger',103)


        
                
    }
    /////////////////  BRIDGE

    if (videoTime == act3Time + 411 & lightCue57 == false) { //770
        lightCue57 = true;

        sideLightsIntensity(10,20,6);
        sideLightsOn(0);

        setTimeout(function(){sideLightsAngle(0.8,0.5,0.1,'yoyo',43),500});
        //setTimeout(function(){sideLightsStrobe(0.05,331),0});

        sideLightsStrobe(0.05,353)


        stageLightsIntensity(0,15);
        stageLightsFade(11,purple,purple,purple,'fade');

        setTimeout(function(){stageLightsPulse(1,33),1000});



        
                
    }
    /////////////////  END TRACK

    if (videoTime == act3Time + 447 & lightCue58 == false) { //784
        lightCue58 = true;

        stageLightsIntensity(1,0);

        sideLightsAngle(0,0.5,0.1,'once',1)

        floorColour(1,colourOff);

        sideLightsIntensity(10,20,6);
        sideLightsOn(0);

        spotsPanUp(7,300,1600,'once',1)





        
                
    }
    /////////////////  END NOISE

    if (videoTime == act3Time + 453 & lightCue59 == false) { //797
        lightCue59 = true;

        stageBlackout(0);
        floorColour(0,colourOff);

        sideLightsOff();

        
                
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
