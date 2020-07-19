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













var countdownDuration = 30;
var introDuration = 83; //15
var act1Duration = 170;
var interval1Duration = 2;
var act2Duration = 369;
var interval2Duration = 6;
var act3Duration = 275;

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

        testLight6.color = red;
        testLight7.color = red;
        testLight8.color = red;

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
    
    
        if (videoTime == act1Time + 163 & lightCue10 == false) {
            lightCue10 = true;

            stageBlackout(5);
            floorColour(5,colourOff);
    
            
        }
    


    
    
    
    
    
    
    
    
    
        ///////////////////     WATERBABY

    if (videoTime == act2Time + 5 & lightCue75 == false) { 
        lightCue75 = true;

        stageBlackout(0);
        floorColour(0,colourOff);


        spotsPanUp(1.36,0,550,'yoyo', 41);

        sideLightsPulse(1.36,41,7);

        sideLightColourChange(2.72,35,blue,blue,blue,blue,red,red,red,red,'fade');
        sideLightsAngle(0,0.1,0.1,'once',1)
    
            
    }

    if (videoTime == act2Time + 16 & lightCue76 == false) { 
        lightCue76 = true;

        //setTimeout(function(){stageLightsIntensity(0,18)},400);
        //setTimeout(function(){stageLightStrobe(0.05,30)},400);

        sideLightsAngle(3,0.1,0.3,'once',1);
        stageBlackout(0);
        floorColour(0,colourOff);


        
    }


    if (videoTime == act2Time + 36 & lightCue78 == false) { 
        lightCue78 = true;

        stageLightsPulse(1.36,17)



    }

    if (videoTime == act2Time + 50 & lightCue77 == false) { 
        lightCue77 = true;

        
    }

    /////////////////////  V1


    if (videoTime == act2Time + 61 & lightCue73 == false) { 
        lightCue73 = true;

        stageLightsFade(3,red,red,red,'fade');

    }

    if (videoTime == act2Time + 71 & lightCue29 == false) { 
        lightCue29 = true;

        stageLightStrobe(0.05,15);

        setTimeout(function(){stageLightsFade(0,blue,blue,blue,'fade')},500);



        
    }


    if (videoTime == act2Time + 82 & lightCue24 == false) { 
        lightCue24 = true;

        stageLightStrobe(0.05,15);

        setTimeout(function(){stageLightsFade(0,red,red,red,'fade')},500);


        
    }

    if (videoTime == act2Time + 92 & lightCue72 == false) { 
        lightCue72 = true;

        stageLightStrobe(0.05,15);

        setTimeout(function(){stageLightsFade(0,blue,blue,blue,'fade')},500);



    
            
    }
    

    if (videoTime == act2Time + 99 & lightCue25 == false) { 
        lightCue25 = true;

        stageBlackout(4);

        sideLightsColour(0,red,red,red,red);


        sideLightsOn(0);
        sideLightsIntensity(0,2,2);

        spotsPanUp(3, 500,50,'once',1)

        
    }

    if (videoTime == act2Time + 104 & lightCue28 == false) { 
        lightCue28 = true;

        stageLightsFade(0,red,red,red,'fade')

        stageLightsIntensity(0,5);

        setTimeout(function(){stageLightsIntensity(5,0)},900);
        setTimeout(function(){floorColour(5,colourOff)},900)

        sideLightsOff(0);






    }


    if (videoTime == act2Time + 108 & lightCue26 == false) { 
        lightCue26 = true;

        sideLightsColour(0,white,white,white,white);

        sideLightsIntensity(0,15,15);

        setTimeout(function(){sideLightsStrobe(0.085,7,'togetherfast')},500);
        setTimeout(function(){spotsPanUp(2,0,1000,'yoyo',17)},500);

        
    }

    //////////////////// C1

    if (videoTime == act2Time + 110 & lightCue27 == false) { 
        lightCue27 = true;

        stageLightsPulse(1.36,7);
        sideLightsIntensity(0,10,10);
        stageLightsFade(0,blue,blue,blue,'fade');

        sideLightsColour(0,red,red,red,red);

        setTimeout(function(){sideLightsStrobe(0.682,6,'togetherfast')},0);

        floorColour(0,blue);




        
    }


    ///////////////////////  V2

    if (videoTime == act2Time + 121 & lightCue30 == false) { 
        lightCue30 = true;

        sideLightsAngle(3,0.3,0.1,'once',1);

        stageLightsIntensity(0,5);







        
    }

    if (videoTime == act2Time + 143 & lightCue31 == false) { 
        lightCue31 = true;

        stageLightsFade(3,red,red,red,'fade');

        setTimeout(function(){spotsPanUp(2,0,1000,'stagger',13)},0);

        sideLightsColour(3,blue,blue,blue,blue)


        
    }

    /////////////////  DROP

    if (videoTime == act2Time + 162 & lightCue32 == false) { 
        lightCue32 = true;

        stageBlackout(4);

        sideLightsColour(0,red,red,red,red);


        sideLightsOn(0);
        sideLightsIntensity(0,2,2);

        spotsPanUp(3, 500,50,'once',1);

        sideLightsAngle(3,0.1,0.3,'once',1);

        
    }



    if (videoTime == act2Time + 167 & lightCue33 == false) { 
        lightCue33 = true;

        stageLightsFade(0,blue,blue,blue,'fade')

        stageLightsIntensity(0,5);

        setTimeout(function(){stageLightsIntensity(5,0)},900);
        setTimeout(function(){floorColour(5,colourOff)},900)

        sideLightsOff(0);


    }


    if (videoTime == act2Time + 171 & lightCue11 == false) {
        lightCue11 = true;

        sideLightsColour(0,white,white,white,white);

        sideLightsIntensity(0,15,15);

        setTimeout(function(){sideLightsStrobe(0.085,7,'togetherfast')},200);
        setTimeout(function(){spotsPanUp(2,0,1000,'yoyo',13)},200);


        
    }


    ///////////////////  C2



    if (videoTime == act2Time + 173 & lightCue12 == false) {
        lightCue12 = true;

        stageLightsPulse(1.36,7);
        sideLightsIntensity(0,10,10);
        stageLightsFade(0,red,red,red,'fade');

        sideLightsColour(0,blue,blue,blue,blue);

        setTimeout(function(){sideLightsStrobe(0.682,6,'togetherfast')},600);

        floorColour(0,red);


        
    }
    if (videoTime == act2Time + 185 & lightCue13 == false) {
        lightCue13 = true;

        stageBlackout(5);
        floorColour(5,colourOff)

        spotsPanUp(2.5,200,700,'yoyo', 9)

        sideLightsAngle(2,0.3,0,'yoyo',9)


        
    }


    if (videoTime == act2Time + 205 & lightCue14 == false) {
        lightCue14 = true;

        stageLightStrobe(3,7);
        //sideLightsOn(0);

        spotsPanUp(1.5,200,700,'yoyo', 9)


        
    }
    if (videoTime == act2Time + 227 & lightCue15 == false) {
        lightCue15 = true;

        stageLightsPulse(0.5,59);

        stageLightColour(3,7,pink,pink,pink,red,red,red,'fade');


    }


    if (videoTime == act2Time + 249 & lightCue16 == false) {
        lightCue16 = true;

        //stageLightsPulse(1,13);

        //stageLightColour(3,7,pink,pink,pink,red,red,red,'fade');

        
    }


    if (videoTime == act2Time + 249 & lightCue17 == false) {
        lightCue17 = true;

        stageBlackout(0);
        floorColour(0,colourOff)



        
    }

    if (videoTime == act2Time + 251 & lightCue18 == false) {
        lightCue18 = true;


        setTimeout(function(){stageLightsIntensity(0,18)},100);
        setTimeout(function(){stageLightStrobe(0.05,30)},100);






    }

    if (videoTime == act2Time + 252 & lightCue19 == false) {
        lightCue19 = true;

        sideLightsIntensity(0,6,6);

        sideLightsOn(0);

        sideLightColourChange(0.682,15,purple,purple,purple,purple,pink,pink,pink,pink,'fade');

        spotsPanUp(1.364,200,1500,'repeat',15);


        setTimeout(function(){sideLightsAngle(1.364,0.7,0.1,'repeat',19)},400);

        stageLightsIntensity(0,10);

        stageLightColour(0.682,19, purple,purple,purple,white,white,white,'fade');

        stageLightStrobe(0.682,32)

        //floorColour(0,purple);
    }

    if (videoTime == act2Time + 272 & lightCue20 == false) {
        lightCue20 = true;

        spotsPanUp(1.364,1500,200,'repeat',19);

        stageLightColour(0.682,19,white,white,white, purple,purple,purple,'fade');

        setTimeout(function(){sideLightsAngle(1.364,0.7,0.1,'repeat',19)},400);

        stageLightStrobe(0.682,30)





        
    }

    if (videoTime == act2Time + 292 & lightCue21 == false) {
        lightCue21 = true;

        setTimeout(function(){

            spotsPanUp(0.5,1500,100,'stagger',299);

            sideLightsStrobe(0.1,299,'togetherfast')

            sideLightsAngle(0,0.1,0.1,'once',1);

            sideLightsIntensity(2,0,7);

        },3200);

        

        stageBlackout(4);
        floorColour(4,colourOff)





        
    }

    if (videoTime == act2Time + 298 & lightCue22 == false) {
        lightCue22 = true;

        stageLightsPulse(0.7,499);

        stageLightsFade(4,pink,pink,pink,'fade');

        sideLightsAngle(0.5,0.1,0.3,'stagger',77);


        
    }



    if (videoTime == act2Time + 310 & lightCue23 == false) {
        lightCue23 = true;

        stageLightColour(2,7,white,white,white,pink,pink,pink,'stagger');
        sideLightColourChange(2,19,pink,pink,pink,pink,white,white,white,white,'stagger')

        
    }

    if (videoTime == act2Time + 320 & lightCue79 == false) {
        lightCue79 = true;

    }



    /////////////////  END

    if (videoTime == act2Time + 363 & lightCue35 == false) { //515
        lightCue35 = true;

        stageBlackout(0);
        floorColour(0,colourOff);

        
                
    }


















    ////////////////    LUNCH MONEY   /////////////////////////


    /////////////////  

    if (videoTime == act3Time & lightCue36 == false) { //533
        lightCue36 = true;

        stageBlackout(0);
        floorColour(0,colourOff)



        
    }

    /////////////////  

    if (videoTime == act3Time + 4 & lightCue37 == false) { //546
        lightCue37 = true;

        sideLightsPulse(3,18,5);
        spotsPanUp(2.668,0,400,'yoyo',20);
        sideLightsColour(0,red,red,red,red);
        //sideLightsIntensity(0,3,3)



    }

    /////////////////  

    if (videoTime == act3Time + 4 & lightCue40 == false) { //587
        lightCue40 = true;

        setTimeout(function(){
            stageLightsFade(0,red,red,red,'fade')
            stageLightsIntensity(0,20);
        },700)

        setTimeout(function(){
            stageLightsIntensity(5,0)
            floorColour(5,colourOff)
        },800)

    
            
    }


    if (videoTime == act3Time + 10 & lightCue38 == false) { //553
        lightCue38 = true;

        setTimeout(function(){
            stageLightsFade(0,red,red,red,'fade')
            stageLightsIntensity(0,20);

        },500)


        setTimeout(function(){
            stageLightsIntensity(5,0)
            floorColour(5,colourOff)
        },600)


    }


    if (videoTime == act3Time + 16 & lightCue62 == false) { //567
        lightCue62 = true;

        setTimeout(function(){
            stageLightsFade(0,red,red,red,'fade')
            stageLightsIntensity(0,20)
        },600)

        setTimeout(function(){
            stageLightsIntensity(5,0)
            floorColour(5,colourOff)
        },700)

            
    }

    /////////////////  

    if (videoTime == act3Time + 22 & lightCue42 == false) { //587
        lightCue42 = true;
        setTimeout(function(){

            stageLightsFade(0,red,red,red,'fade')

            stageLightsIntensity(0,20);

        },700)

        setTimeout(function(){
            stageLightsIntensity(5,0)
            floorColour(5,colourOff)
        },800)

        
    }
    /////////////////  SPENCE

    if (videoTime == act3Time + 29 & lightCue60 == false) { //560
        lightCue60 = true;

        spotsPanUp(1,1500,250,'once',1);

        sideLightsOn(0);
        sideLightsIntensity(0,7,7);

        sideLightsColour(1,blue,blue,blue,blue)

        setTimeout(function(){
            spotsPanUp(20,250,700,'once',1);
        },1200)


            
    }

    /////////////////  Q1

    if (videoTime == act3Time + 52 & lightCue39 == false) { //574
        lightCue39 = true;

        sideLightsOn(0);
        sideLightsIntensity(0,7,7);

        sideLightsAngle(3,0.5,0.1,'once',1);


        spotsPanUp(1,400,800,'once',1);

        setTimeout(function(){
            spotsPanUp(20,800,500,'once',1);
        },1200)

        stageLightColour(2,7,red,red,red,blue,blue,blue,'fade');

        stageLightsIntensity(4,15)




    
    
            
    }

    /////////////////  

    if (videoTime == act3Time + 55 & lightCue41 == false) { //587
        lightCue41 = true;

        sideLightsColour(0,white,white,white,white)


        setTimeout(function(){

            stageBlackout(0);
            floorColour(0,colourOff)

        },700);

        setTimeout(function(){

            sideLightsAngle(3,0.1,0,'once',1);


        },7000)

    }

    


    if (videoTime == act3Time + 66 & lightCue43 == false) { //616
        lightCue43 = true;


        stageLightsIntensity(0,15)
        stageLightStrobe(0.02,19);
        stageLightsFade(0,red,red,red,'fade');

    }

    

    if (videoTime == act3Time + 85 & lightCue44 == false) { //629
        lightCue44 = true;

        sideLightsOn(0);
        sideLightsIntensity(0,7,7);

        sideLightsAngle(3,0.5,0.2,'once',1);

        spotsPanUp(1,400,800,'once',1);

        setTimeout(function(){
            spotsPanUp(20,800,450,'once',1);
        },1200)

        //stageLightColour(2,7,red,red,red,blue,blue,blue,'fade');

        //stageLightsIntensity(4,15)

        stageBlackout(0);
        floorColour(0,colourOff);

        setTimeout(function(){
            sideLightsIntensity(5,7,0);
        },14000)



       
    }



    ///////////////////  RIFF

    if (videoTime == act3Time + 107 & lightCue47 == false) { //657
        lightCue47 = true;

        sideLightsAngle(0,0.5,0.5,'once',1);

        stageBlackout(0);
        floorColour(0,colourOff);


        sideLightsColour(0,white,white,white,white);

        sideLightsIntensity(0,30,30);


        setTimeout(function(){
            sideLightsStrobe(0.05,5,'togetherfast')
            spotsPanUp(2,0,1000,'yoyo',17)
        },0);


    }


    if (videoTime == act3Time + 108 & lightCue45 == false) { //636
        lightCue45 = true;

        setTimeout(function(){
            stageLightsFade(0,red,red,red,'fade')
            stageLightsIntensity(0,20);
        },500)

        setTimeout(function(){
            stageLightsIntensity(5,0)
            floorColour(5,colourOff)
        },600)



        setTimeout(function(){
            sideLightsStrobe(0.05,5,'togetherfast')
            spotsPanUp(2,0,1000,'yoyo',17);

            sideLightsColour(0,white,white,white,white);
            sideLightsIntensity(0,30,30);
    
        },5000);


            
    }
    
    if (videoTime == act3Time + 114 & lightCue46 == false) { //655
        lightCue46 = true;

        setTimeout(function(){
            stageLightsFade(0,red,red,red,'fade')
            stageLightsIntensity(0,20);
        },500)

        setTimeout(function(){
            stageLightsIntensity(5,0)
            floorColour(5,colourOff)
        },600)

        setTimeout(function(){
            sideLightsStrobe(0.05,5,'togetherfast')
            spotsPanUp(2,0,1000,'yoyo',17);

            sideLightsColour(0,white,white,white,white);
            sideLightsIntensity(0,30,30);
    
        },5000);


            
    }
    

    if (videoTime == act3Time + 120 & lightCue48 == false) { //670
        lightCue48 = true;

        setTimeout(function(){
            stageLightsFade(0,red,red,red,'fade')
            stageLightsIntensity(0,20);
        },500)

        setTimeout(function(){
            stageLightsIntensity(5,0)
            floorColour(5,colourOff)
        },600)

        setTimeout(function(){
            sideLightsStrobe(0.05,5,'togetherfast')
            spotsPanUp(2,0,1000,'yoyo',17);

            sideLightsColour(0,white,white,white,white);
            sideLightsIntensity(0,30,30);
    
        },5000);






        
    }

    if (videoTime == act3Time + 126 & lightCue49 == false) { //680
        lightCue49 = true;

        setTimeout(function(){
            stageLightsFade(0,red,red,red,'fade')
            stageLightsIntensity(0,20);
        },500)

        setTimeout(function(){
            stageLightsIntensity(5,0)
            floorColour(5,colourOff)
        },600)

        setTimeout(function(){
            sideLightsStrobe(0.05,5,'togetherfast')
            spotsPanUp(2,0,1000,'yoyo',17);

            sideLightsColour(0,white,white,white,white);
            sideLightsIntensity(0,30,30);
    
        },5000);




        
    }


    if (videoTime == act3Time + 132 & lightCue34 == false) { //503
        lightCue34 = true;

        setTimeout(function(){
            stageLightsFade(0,white,white,white,'fade')
            stageLightsIntensity(0,15);
        },500)

        setTimeout(function(){
            //stageLightsIntensity(5,0)
            //floorColour(5,colourOff)
        },600)



    }
    



    if (videoTime == act3Time + 146 & lightCue50 == false) { //686
        lightCue50 = true;

        spotsPanUp(2,0,1000,'yoyo',17);

        stageLightsFade(3,blue,blue,blue,'fade');

        sideLightsPulse(2,9,7);

        sideLightsColour(0,red,red,red,red)


    }

    if (videoTime == act3Time + 158 & lightCue51 == false) { //699
        lightCue51 = true;

        stageLightsPulse(1,9);

        sideLightsPulse(1,9,7);

        stageLightColour(1,9,red,red,red,white,white,white,'fade');


        
    }
    

    if (videoTime == act3Time + 167 & lightCue52 == false) { //713
        lightCue52 = true;

            stageLightsIntensity(0,0)
            floorColour(0,colourOff)



        setTimeout(function(){
            sideLightsStrobe(0.05,5,'togetherfast')
            spotsPanUp(2,0,1000,'yoyo',17);

            sideLightsColour(0,white,white,white,white);
            sideLightsIntensity(0,30,30);
    
        },0);

        setTimeout(function(){
            stageLightsFade(0,blue,blue,blue,'fade');
            stageLightsIntensity(0,10)

        },1000);





            
    }


    if (videoTime == act3Time + 177 & lightCue53 == false) { //725
        lightCue53 = true;

        setTimeout(function(){
            sideLightsStrobe(0.05,5,'togetherfast')
            spotsPanUp(2,0,1000,'yoyo',17);

            sideLightsColour(0,white,white,white,white);
            sideLightsIntensity(0,30,30);
    
        },600);


                
    }

    if (videoTime == act3Time + 180 & lightCue54 == false) { //726
        lightCue54 = true;
            
                    
    }

    if (videoTime == act3Time + 188 & lightCue55 == false) { //732
        lightCue55 = true;

        stageLightsIntensity(0,0)
        floorColour(0,colourOff)


        setTimeout(function(){
            sideLightsStrobe(0.05,5,'togetherfast')
            spotsPanUp(2,0,1000,'yoyo',17);

            sideLightsColour(0,white,white,white,white);
            sideLightsIntensity(0,30,30);
    
        },300);

        setTimeout(function(){
            stageLightsFade(0,orange,orange,orange,'fade');

            stageLightsPulse(1,17)
            //stageLightsIntensity(0,10)

        },1000);


        
                
    }


    if (videoTime == act3Time + 190 & lightCue63 == false) { //742
        lightCue63 = true;

        spotsPanUp(0.5,100,400,'stagger',19);
        sideLightsIntensity(0,7,7);

        sideLightsStrobe(0.659,19,'stagger');
        sideLightColourChange(3,5,red,red,red,red,orange,orange,orange,orange,'fade');
        stageLightColour(3,17,orange,orange,orange,yellow,yellow,yellow,'fade');



    }


    if (videoTime == act3Time + 199 & lightCue30 == false) { //460
        lightCue30 = true;

        setTimeout(function(){
            sideLightsStrobe(0.05,5,'togetherfast')
            spotsPanUp(2,0,1000,'yoyo',17);

            sideLightsColour(0,white,white,white,white);
            sideLightsIntensity(0,30,30);

            spotsPanUp(1,100,1500,'once',1);
    
        },100);
        setTimeout(function(){

            sideLightsStrobe(0.659,19,'stagger');
            sideLightColourChange(3,5,red,red,red,red,orange,orange,orange,orange,'fade');
            stageLightColour(3,17,orange,orange,orange,yellow,yellow,yellow,'fade');
            spotsPanUp(2,0,1000,'yoyo',17);


        },600);





        
    }




    if (videoTime == act3Time + 209 & lightCue56 == false) { //755
        lightCue56 = true;

        setTimeout(function(){
            sideLightsStrobe(0.05,5,'togetherfast')
            spotsPanUp(2,0,1000,'yoyo',17);

            sideLightsColour(0,white,white,white,white);
            sideLightsIntensity(0,30,30);

            spotsPanUp(1,100,1500,'once',1);
    
        },800);
        setTimeout(function(){

            sideLightsStrobe(0.659,19,'stagger');
            sideLightColourChange(3,5,red,red,red,red,orange,orange,orange,orange,'fade');
            stageLightColour(3,17,orange,orange,orange,yellow,yellow,yellow,'fade');
            spotsPanUp(2,0,1000,'yoyo',17);
            stageLightsPulse(0.659,79);



        },1200);


        
                
    }

    if (videoTime == act3Time + 215 & lightCue57 == false) { //770
        lightCue57 = true;
        stageLightsPulse(0.5,49);

        setInterval(function(){

            sideLightsStrobe(0.05,9,'stagger');

        },5000);


        
                
    }

    if (videoTime == act3Time + 232 & lightCue58 == false) { //784
        lightCue58 = true;

        sideLightsIntensity(20,7,0);

        
                
    }

    if (videoTime == act3Time + 248 & lightCue59 == false) { //797
        lightCue59 = true;

        stageLightsIntensity(20,0);
        floorColour(20,0)                
    }


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
