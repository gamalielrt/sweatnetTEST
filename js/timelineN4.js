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
var lightCue81 = false;
var lightCue82 = false;
var lightCue83 = false;
var lightCue84 = false;
var lightCue85 = false;
var lightCue86 = false;
var lightCue87 = false;
var lightCue88 = false;
var lightCue89 = false;
var lightCue90 = false;
var lightCue91 = false;
var lightCue92 = false;
var lightCue93 = false;
var lightCue94 = false;
var lightCue95 = false;
var lightCue96 = false;
var lightCue97 = false;
var lightCue98 = false;
var lightCue99 = false;
var lightCue100 = false;
var lightCue101 = false;
var lightCue102 = false;
var lightCue103 = false;
var lightCue104 = false;
var lightCue105 = false;
var lightCue106 = false;
var lightCue107 = false;



















var countdownDuration = 60;
var introDuration = 35; //33
var act1Duration = 247; //251
var interval1Duration = 7; //5
var act2Duration = 326; //326
var interval2Duration = 6; //6
var act3Duration = 608; //608

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

        //stagesurfacemtl.emissive = colourOff



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

        //stagesurfacemtl.emissive = colourOff


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

        //testLight6.color = blue;
        //testLight7.color = blue;
        //testLight8.color = blue;

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

        testLight6.intensity = 0;
        testLight7.intensity = 0;
        testLight8.intensity = 0;

        //testLight6.color = purple;
        //testLight7.color = purple;
        //testLight8.color = purple;

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

        //stagesurfacemtl.emissive = colourOff;


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
    
        //stagesurfacemtl.emissive = colourOff;
    
    
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

        //testLight6.color = scarlett;
        //testLight7.color = scarlett;
        //testLight8.color = scarlett;
        //stagesurfacemtl.emissive = scarlett;



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

        //stagesurfacemtl.emissive = colourOff


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

        stageLightsIntensity(0, 0);
        floorColour(0,lightOff);
        houseLightsIntensity(0, 1);


        spotsPanUp(1,100,750,'stagger',45);

        sideLightsAngle(1,0,0.3,'yoyo',45);

        sideLightsColour(0,red,red,red,red);

    }

    /////////////////////  Beat

    

    if (videoTime == act1Time + 8 & lightCue80 == false) {
        lightCue80 = true;
        //sideLightsStrobe(0.3,32,'togetherfast');

        sideLightsOn(0);
        sideLightColourChange(0.2,70,colourOff,colourOff,colourOff,colourOff,red,red,red,red,'stagger');
        sideLightsIntensity(0,15,15);




    
    
    }

    /////////////////////  V1

    if (videoTime == act1Time + 17 & lightCue1 == false) {
        lightCue1 = true;


        setTimeout(function(){

            sideLightsAngle(1,0.5,0.1,'once',1);




            stageLightsPulse(0.594,45);

            stageLightColour(0.2,100,colourOff,colourOff,colourOff,red,red,red,'fade');

            sideLightColourChange(0.2,100,white,white,white,white,red,red,red,red,'stagger');

        
    
    
        },900);
    
    
    
            
    }

    /////////////////////  inst
    
    if (videoTime == act1Time + 32 & lightCue2 == false) {
        lightCue2 = true;

        stageLightsIntensity(0,18);
    

            
    }

    /////////////////////  v2

    if (videoTime == act1Time + 35 & lightCue3 == false) {
        lightCue3 = true;

        stageLightStrobe(0.05,19);

        setTimeout(function(){


            stageLightColour(0.2,86,colourOff,colourOff,colourOff,red,red,red,'fade');

            sideLightColourChange(0.2,86,red,red,red,red,darkMagenta,darkMagenta,darkMagenta,darkMagenta,'stagger');

            spotsPanUp(1,100,750,'stagger',32);

            sideLightsAngle(1,0,0.5,'yoyo',32);

            stageLightsPulse(0.594,30);

            sideLightsOn(0);
            sideLightsIntensity(0,15,15);
    

            

    

        },1500);

            
    }

    /////////////////////  pre

    if (videoTime == act1Time + 55 & lightCue4 == false) {
        lightCue4 = true;

        setTimeout(function(){


            sideLightsStrobe(0.15,58,'togetherfast');

            floorColour(0,colourOff);

            sideLightColourChange(0.2,80,red,red,red,red,purple,purple,purple,purple,'stagger');


            spotsPanUp(1,100,1100,'yoyo',32);


            //sideLightsStrobe(0.075,64,'togetherfast');

        },500);



    
            
    }

    /////////////////////  out

    if (videoTime == act1Time + 72 & lightCue5 == false) {
        lightCue5 = true;


        setTimeout(function(){


            stageLightsIntensity(0,25);
            sideLightsOff()


            setTimeout(function(){

                stageLightsIntensity(0.3,0);

            },100);

        },400);

        setTimeout(function(){

            stageLightsIntensity(0,25);

            setTimeout(function(){

                stageLightsIntensity(0.3,0);

            },100);

        },800);

        setTimeout(function(){

            stageLightsIntensity(0,25);

            setTimeout(function(){

                stageLightsIntensity(0.3,0);

            },100);

        },1200);

            
    }

    /////////////////////  C1
    
    
    if (videoTime == act1Time + 76 & lightCue6 == false) {
        lightCue6 = true;

        stageLightsIntensity(0,15);
        stageLightStrobe(0.3,75);

        stageLightColour(0.2,110,white,white,white,red,red,red,'fade');


        spotsPanUp(1,100,600,'stagger',45);

        sideLightsAngle(1,0,0.5,'yoyo',45)



        sideLightsOn(0);
        sideLightColourChange(0.2,10,white,white,white,white,red,red,red,red,'stagger');
        sideLightsIntensity(0,15,15);

    
            
    }

    /////////////////////  v3
    
    
    if (videoTime == act1Time + 98 & lightCue7 == false) {
        lightCue7 = true;

        sideLightsOn(0);
        sideLightsIntensity(0,0,0);


        setTimeout(function(){

            stageLightStrobe(0.05,18);


        },1000);

        //sideLightsIntensity(0,15,15)

        spotsPanUp(1,600,0,'once',1);

        setTimeout(function(){

            sideLightsColour(0,blue,blue,blue,blue);

            spotsPanUp(30,0,1100,'once',1);

            sideLightsPulse(0.6,30,12);

            sideLightsAngle(3,0.1,0.4,'yoyo',15);


        },1700);
            
    }

    /////////////////////  inst
    
    if (videoTime == act1Time + 114 & lightCue8 == false) {
        lightCue8 = true;
    
    }

    /////////////////////  pre
    
    
    if (videoTime == act1Time + 118 & lightCue9 == false) {
        lightCue9 = true;

        setTimeout(function(){


    
            sideLightsStrobe(0.15,58,'togetherfast');
        
            floorColour(0,colourOff);
        
            sideLightColourChange(0.2,80,red,red,red,red,white,white,white,white,'stagger');
        
        
            spotsPanUp(1,100,1100,'yoyo',32);
    
    
            //sideLightsStrobe(0.075,64,'togetherfast');
    
        },500);
    
            
    }

    /////////////////////  out
    
    
    
    if (videoTime == act1Time + 135 & lightCue10 == false) {
        lightCue10 = true;

        setTimeout(function(){


            stageLightsIntensity(0,25);
            sideLightsOff()


            setTimeout(function(){

                stageLightsIntensity(0.3,0);

            },100);

        },400);

        setTimeout(function(){

            stageLightsIntensity(0,25);

            setTimeout(function(){

                stageLightsIntensity(0.3,0);

            },100);

        },900);

        setTimeout(function(){

            stageLightsIntensity(0,25);

            setTimeout(function(){

                stageLightsIntensity(0.3,0);

            },100);

        },1300);

    
            
    }

    /////////////////////  C2

    if (videoTime == act1Time + 139 & lightCue11 == false) {
        lightCue11 = true;

        setTimeout(function(){


            stageLightsIntensity(0,15);
            stageLightStrobe(0.3,75);

            stageLightColour(0.2,110,white,white,white,purple,purple,purple,'fade');


            spotsPanUp(1,100,600,'stagger',25);

            sideLightsAngle(1,0,0.5,'yoyo',25)



            sideLightsOn(0);
            sideLightColourChange(0.2,120,white,white,white,white,purple,purple,purple,purple,'stagger');
            sideLightsIntensity(0,15,15);

        },800);


    
            
    }

    /////////////////////  bridge


    if (videoTime == act1Time + 163 & lightCue12 == false) {
        lightCue12 = true;

        setTimeout(function(){


            stageLightsIntensity(1,0);
            floorColour(1,colourOff);

            sideLightsOn(0);
            sideLightsIntensity(0,0,0);

            sideLightsPulse(0.6,30,12);


            spotsPanUp(1,1000,400,'once',1);

            sideLightsAngle(1,0.4,0.2,'once',1);

            sideLightsColour(0,white,white,white,white);

        },500);





    
            
    }

    /////////////////////  bridge


    if (videoTime == act1Time + 178 & lightCue13 == false) {
        lightCue13 = true;

        sideLightsColour(1,blue,blue,blue,blue);

        spotsPanUp(1,400,0,'once',1);

        setTimeout(function(){

            spotsPanUp(30,0,1100,'once',1);

            sideLightsPulse(0.6,30,12);

            sideLightsAngle(3,0.1,0.4,'yoyo',15);

            sideLightsStrobe(0.3,60,'stagger');


        },1200);

    
            
    }

    /////////////////////  outro
    
    
    if (videoTime == act1Time + 187 & lightCue14 == false) {
        lightCue14 = true;

        stageLightsIntensity(0,15);
        stageLightStrobe(0.3,85);

        stageLightColour(0.2,140,red,red,red,purple,purple,purple,'fade');

        spotsPanUp(10,0,1100,'yoyo',20);




    
            
    }

    /////////////////////  outro

    if (videoTime == act1Time + 207 & lightCue15 == false) {
        lightCue15 = true;
    
    }

    /////////////////////  outro1/4

    
    
    if (videoTime == act1Time + 216 & lightCue16 == false) {
        lightCue16 = true;

        sideLightsOn(0);
        sideLightsIntensity(0,10,10)
        sideLightsColour(1,blue,blue,blue,blue);

        stageLightsIntensity(0,15);
        stageLightStrobe(0.3,85);



        stageLightColour(0.2,110,red,red,red,purple,purple,purple,'fade');

        sideLightsStrobe(0.075,299,'togetherfast');

        spotsPanUp(5,0,1100,'yoyo',30);

        sideLightsAngle(3,0.1,0.4,'yoyo',8);






    
            
    }

    /////////////////////  outro1/2
    
    
    if (videoTime == act1Time + 226 & lightCue17 == false) {
        lightCue17 = true;
    
    
            
    }

    /////////////////////  outro3/4

    if (videoTime == act1Time + 235 & lightCue18 == false) {
        lightCue18 = true;

        sideLightsOn(0);
        sideLightsIntensity(0,10,10)
        sideLightsColour(1,blue,blue,blue,blue);


        stageLightsIntensity(0,15);
        stageLightStrobe(0.3,85);

        stageLightColour(0.2,110,red,red,red,white,white,white,'fade');

        sideLightsStrobe(0.075,99,'togetherfast');

        spotsPanUp(5,0,1100,'yoyo',10);


    
    }

    /////////////////////  end
    
    if (videoTime == act1Time + 181 & lightCue19 == false) {
        lightCue19 = true;
    }

    /////////////////////  inst
    
    if (videoTime == act1Time + 189 & lightCue20 == false) {
        lightCue20 = true;
    
            
    }

    /////////////////////  inst
    
    if (videoTime == act1Time + 197 & lightCue21 == false) {
        lightCue21 = true;
    
            
    }

    /////////////////////  inst
    
    if (videoTime == act1Time + 205 & lightCue22 == false) {
        lightCue22 = true;
    
            
    }

    /////////////////////  inst
    
    
    
    
    
    if (videoTime == act1Time + 212 & lightCue23 == false) {
        lightCue23 = true;
    
            
    }

    /////////////////////  inst

    if (videoTime == act1Time + 244 & lightCue79 == false) {
        lightCue79 = true;

        stageBlackout(0);

        sideLightsIntensity(0,0,0);
        floorColour(0,colourOff);
    



    }

    


    ///////////////////     PVA

    if (videoTime == act2Time + 2 & lightCue81 == false) { //311
        lightCue81 = true;

        stageBlackout(0);
        floorColour(0,colourOff);


        setTimeout(function(){

            sideLightsOn(0);

            sideLightsIntensity(22,1,15);

            sideLightsColour(0,pink,pink,pink,pink);
            sideLightsAngle(0,0.25,0.25,'once',1);

        },300);

        spotsPanUp(30,200,900,'once',1);

    
            
    }
    if (videoTime == act2Time + 24 & lightCue82 == false) { //311
        lightCue82 = true;

        //stageLightStrobe(0.5,99);

        

        //stageLightsFade(0,blue,blue,blue,'fade');

        sideLightsPulse(0.5,199,0);

        spotsPanUp(10,900,500,'yoyo',7);

    
            
    }
    if (videoTime == act2Time + 48 & lightCue83 == false) { //311
        lightCue83 = true;

        setTimeout(function(){
            stageLightsIntensity(1,10);


            //stageLightsFade(0,blue,blue,blue,'fade');
            stageLightColour(0.125,48,blue,blue,blue,colourOff,colourOff,colourOff,'fade');

            
            spotsPanUp(10,900,500,'yoyo',7);
            sideLightsOn(0);

            sideLightsIntensity(0,15,15);

            sideLightsColour(0,pink,pink,pink,pink);
            sideLightsAngle(0,0.2,0.2,'once',1);
            sideLightsPulse(0.5,199,0);

    


        },900);


        setTimeout(function(){
            stageLightsIntensity(1,0);

            floorColour(1,colourOff);

        },8000);

    
            
    }
    if (videoTime == act2Time + 72 & lightCue84 == false) { //311
        lightCue84 = true;

        setTimeout(function(){
            stageLightsIntensity(1,10);
            floorColour(1,blue);

            stageLightColour(0.125,48,blue,blue,blue,colourOff,colourOff,colourOff,'fade');



        },600);


        setTimeout(function(){
            stageLightsIntensity(1,0);
            floorColour(1,colourOff);


        },7500);

    
            
    }


    if (videoTime == act2Time + 96 & lightCue85 == false) { //311
        lightCue85 = true;

        setTimeout(function(){
            stageLightsIntensity(1,10);
            floorColour(1,blue);

            stageLightColour(0.125,48,blue,blue,blue,colourOff,colourOff,colourOff,'fade');



        },600);


        setTimeout(function(){
            stageLightsIntensity(1,0);
            floorColour(1,colourOff);


        },7000);

        setTimeout(function(){
            stageLightsIntensity(1,10);
            floorColour(1,blue);

            stageLightColour(0.125,48,blue,blue,blue,colourOff,colourOff,colourOff,'fade');



        },9000);


        //setTimeout(function(){
        //    stageLightsIntensity(1,0);
        //
        //},2000);




    
            
    }


    if (videoTime == act2Time + 113 & lightCue76 == false) { //334
        lightCue76 = true;

        stageLightColour(1,3,blue,blue,blue,purple,purple,purple,'fade');

        stageLightStrobe(1,15);

        spotsPanUp(1,400,950,'once',1);

        sideLightsOn(0);

        sideLightsIntensity(0,15,15);

        sideLightsColour(0,pink,pink,pink,pink);
        sideLightsAngle(0,0.2,0.2,'once',1);
        sideLightsPulse(0.5,99,0);

    



        
    }

    if (videoTime == act2Time + 128 & lightCue77 == false) { //352
        lightCue77 = true;

        stageBlackout(0);
        floorColour(0,colourOff);

        setTimeout(function(){
            sideLightsStrobe(0.5,59,'togetherfast');
            spotsPanUp(0.6,100,700,'yoyo',69);

            sideLightsColour(0,white,white,white,white);
            sideLightsIntensity(0,15,15);
            sideLightsAngle(0,0.2,0.2,'once',1);



        },200);


        setTimeout(function(){

            stageLightsIntensity(0,15);

            stageLightColour(0.05,18,blue,blue,blue,colourOff,colourOff,colourOff,'fade');

        },1200);

        setTimeout(function(){

            stageLightColour(0.05,18,blue,blue,blue,colourOff,colourOff,colourOff,'fade');

        },4800);

        setTimeout(function(){

            stageLightColour(0.05,18,blue,blue,blue,colourOff,colourOff,colourOff,'fade');

        },8400);

        setTimeout(function(){

            stageLightColour(0.05,18,blue,blue,blue,colourOff,colourOff,colourOff,'fade');

        },12000);

        setTimeout(function(){

            stageLightColour(0.05,18,blue,blue,blue,colourOff,colourOff,colourOff,'fade');

        },15600);












        
    }

    if (videoTime == act2Time + 151 & lightCue78 == false) { //351
        lightCue78 = true;




        
    }

    if (videoTime == act2Time + 153 & lightCue73 == false) { 
        lightCue73 = true;

        stageLightsIntensity(0,15);
        stageLightsFade(0,purple,purple,purple,'fade')
        floorColour(0,purple)


        setTimeout(function(){

            stageLightsIntensity(0,0);
            floorColour(0,colourOff)


        },500);

        

        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },1000);

        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },2000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },3000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },4000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },5000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },6000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },7000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },8000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },9000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },10000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },11000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },12000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },13000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },14000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },15000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },16000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },17000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },18000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },19000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },20000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },21000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },22000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },23000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },24000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },25000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },26000);
        setTimeout(function(){

            stageLightsIntensity(0,15);
            floorColour(0,purple)



            setTimeout(function(){

                stageLightsIntensity(0,0);
                floorColour(0,colourOff)


            },500);
        },27000);

        
    }

    if (videoTime == act2Time + 160 & lightCue24 == false) { //382
        lightCue24 = true;

        spotsPanUp(0.3,100,700,'yoyo',199);

        sideLightsColour(5,blue,blue,blue,blue);
        sideLightsStrobe(0.5,89,'togetherfast');
        sideLightsIntensity(0,15,15);
        sideLightsAngle(0,0.2,0.2,'once',1);




        
    }

    if (videoTime == act2Time + 168 & lightCue25 == false) { //392
        lightCue25 = true;


        
    }

    if (videoTime == act2Time + 180 & lightCue26 == false) { //399
        lightCue26 = true;


        setTimeout(function(){

            stageLightsIntensity(0,15);

            stageLightColour(0.05,18,purple,purple,purple,colourOff,colourOff,colourOff,'fade');

        },1200);

        setTimeout(function(){

            stageLightColour(0.05,18,purple,purple,purple,colourOff,colourOff,colourOff,'fade');

        },4800);

        setTimeout(function(){

            stageLightColour(0.05,18,purple,purple,purple,colourOff,colourOff,colourOff,'fade');

        },8400);

        setTimeout(function(){

            stageLightColour(0.05,18,purple,purple,purple,colourOff,colourOff,colourOff,'fade');

        },12000);

        setTimeout(function(){

            stageLightColour(0.05,18,purple,purple,purple,colourOff,colourOff,colourOff,'fade');

        },15600);

        setTimeout(function(){

            stageLightColour(0.05,18,purple,purple,purple,colourOff,colourOff,colourOff,'fade');

        },19200);
        setTimeout(function(){

            stageLightColour(0.05,18,purple,purple,purple,colourOff,colourOff,colourOff,'fade');

        },22800);
        setTimeout(function(){

            stageLightColour(0.05,18,purple,purple,purple,colourOff,colourOff,colourOff,'fade');

        },26400);
        setTimeout(function(){

            stageLightColour(0.05,18,purple,purple,purple,colourOff,colourOff,colourOff,'fade');

        },30000);
        setTimeout(function(){

            stageLightColour(0.05,18,purple,purple,purple,colourOff,colourOff,colourOff,'fade');

        },33600);
        setTimeout(function(){

            stageLightColour(0.05,18,purple,purple,purple,colourOff,colourOff,colourOff,'fade');

            console.log("last")

        },37200);


        
    }

    if (videoTime == act2Time + 201 & lightCue27 == false) { //416
        lightCue27 = true;


        
    }


    if (videoTime == act2Time + 214 & lightCue72 == false) { //416
        lightCue72 = true;
        spotsPanUp(30,100,900);


    
            
    }
    

    if (videoTime == act2Time + 223 & lightCue28 == false) { //434
        lightCue28 = true;


        stageLightsFade(0,cyan,cyan,cyan,'fade');
        sideLightsColour(0,purple,purple,purple,purple);


        stageLightStrobe(3,9);




    }

    if (videoTime == act2Time + 232 & lightCue86 == false) { //311
        lightCue86 = true;

        sideLightsColour(0,cyan,cyan,cyan,cyan);
        stageLightsFade(0,purple,purple,purple,'fade');

        floorColour(3,colourOff);


    
            
    }


    if (videoTime == act2Time + 247 & lightCue29 == false) { //443
        lightCue29 = true;


        stageBlackout(0);
        floorColour(0,colourOff);

        houseLightsIntensity(0,0);

        
    }

    if (videoTime == act2Time + 248 & lightCue30 == false) { //460
        lightCue30 = true;

        spotsPanUp(0.1,0,1500,'stagger',300);



        sideLightsColour(0,white,white,white,white);

        sideLightsAngle(0.06,0.1,0.3,'yoyo',359)

        setTimeout(function(){sideLightsStrobe(0.5,48,'togetherfast')},600);

        sideLightsIntensity(0,15,15);



        //stageLightsIntensity(0,25);
        setTimeout(function(){stageLightsPulse(0.1,599)},400);


        
    }

    if (videoTime == act2Time + 280 & lightCue31 == false) { //477
        lightCue31 = true;

        sideLightsAngle(20,0.1,0.5,'once',1);

        spotsPanUp(0.1,0,1500,'stagger',250);

        

        
    }

    if (videoTime == act2Time + 305 & lightCue32 == false) { //479
        lightCue32 = true;

        sideLightsIntensity(20,15,0);

        stageLightStrobe(1,7);

        spotsPanUp(0.1,0,1500,'stagger',200);


        
    }

    if (videoTime == act2Time + 319 & lightCue33 == false) { //498
        lightCue33 = true;



    }

    /////////////////  END

    if (videoTime == act2Time + 325 & lightCue35 == false) { //515
        lightCue35 = true;

        stageBlackout(0);
        floorColour(0,colourOff)

        
                
    }

    ////////////////   LYNKS AFFRIKA   /////////////////////////


    /////////////////  HOW TO BE SUCCESSFUL

    if (videoTime == act3Time & lightCue36 == false) { //533
        lightCue36 = true;

        stageBlackout(0);
        floorColour(0,colourOff);

        sideLightsAngle(0,0,0,'once',1);


        setTimeout(function(){

            sideLightsOn(0)
            sideLightsIntensity(0,3,3);
            sideLightsAngle(6,0,0.3,'once',1);
            sideLightsColour(0,antiqueWhite,antiqueWhite,antiqueWhite,antiqueWhite);

            spotsPanUp(0,550,550,'once',1);

        },1600);

        setTimeout(function(){

            sideLightColourChange(0.462,99,purple,purple,purple,purple,blue,blue,blue,blue,'fade')

        },5800);







        
    }

    /////////////////  BEAT

    if (videoTime == act3Time + 20 & lightCue37 == false) { //546
        lightCue37 = true;

        setTimeout(function(){

            sideLightsPulse(0.462,29,18);


        },500);


    }

    /////////////////  OUT

    if (videoTime == act3Time + 33 & lightCue40 == false) { //587
        lightCue40 = true;

        //sideLightsOff();

        floorColour(0,colourOff);

    
    
    
            
    }

    /////////////////  PRE

    if (videoTime == act3Time + 35 & lightCue41 == false) { //587
        lightCue41 = true;

        spotsPanUp(0.5,500,1000,'once',1);

        sideLightsOn(0);
        sideLightsIntensity(0,15,15);
        sideLightColourChange(0.462,99,purple,purple,purple,purple,blue,blue,blue,blue,'fade')



        setTimeout(function(){

            sideLightsAngle(0.462,0,0.3,'yoyo',26);

        },700);



        stageLightsIntensity(0,15);

        stageLightColour(1.846,6,hotPink,hotPink,hotPink,colourOff,colourOff,colourOff,'fade');



    }

    
    /////////////////  OUT

    if (videoTime == act3Time + 48 & lightCue38 == false) { //553
        lightCue38 = true;

        stageLightsIntensity(0,0);
        floorColour(0,colourOff);
        sideLightsOff();
    }

    /////////////////  BEAT

    if (videoTime == act3Time + 49 & lightCue96 == false) {
        lightCue96 = true;

        setTimeout(function(){

            sideLightsOn(0);
            sideLightsIntensity(0,15,15);

            stageLightsFade(0,purple,purple,purple,'fade');
            stageLightsIntensity(0,15);

            stageLightStrobe(0.462,26);

            spotsPanUp(0.462,0,500,'yoyo',27);

            sideLightsStrobe(0.462,18,'together');

        },400);




    }    
    /////////////////  V2

    if (videoTime == act3Time + 63 & lightCue87 == false) {
        lightCue87 = true;
        spotsPanUp(0.462,300,1000,'once',1);
        stageLightsFade(0,colourOff,colourOff,colourOff,'fade');


        setTimeout(function(){
            spotsPanUp(0.462,1000,100,'stagger',62);
            sideLightsPulse(0.6,50,15);
            sideLightsAngle(2,0.3,0.2,'once',0);

        },1500);




    }
    /////////////////  UNI

    if (videoTime == act3Time + 79 & lightCue88 == false) {
        lightCue88 = true;

        stageLightsFade(0,blue,blue,blue,'fade');
        stageLightsPulse(0.462,26);



    }
    /////////////////  OUT

    if (videoTime == act3Time + 92 & lightCue89 == false) {
        lightCue89 = true;

        stageLightsIntensity(0,0);
        floorColour(0,colourOff);
        sideLightsOff();




    }
    /////////////////  PRE

    if (videoTime == act3Time + 94 & lightCue90 == false) {
        lightCue90 = true;

        spotsPanUp(0.5,500,1000,'once',1);

        sideLightsOn(0);
        sideLightsIntensity(0,15,15);
        sideLightColourChange(0.462,99,purple,purple,purple,purple,blue,blue,blue,blue,'fade')



        setTimeout(function(){

            sideLightsAngle(0.462,0,0.3,'yoyo',58);
            spotsPanUp(0.5,1000,800,'yoyo',58);


        },700);



        stageLightsIntensity(0,15);

        stageLightColour(1.846,12,hotPink,hotPink,hotPink,colourOff,colourOff,colourOff,'fade');




    }
    /////////////////  OUT

    if (videoTime == act3Time + 121 & lightCue91 == false) {
        lightCue91 = true;

        stageLightsIntensity(0,0);
        floorColour(0,colourOff);
        sideLightsOff();




    }
    ///////////////// BEAT 

    if (videoTime == act3Time + 123 & lightCue92 == false) {
        lightCue92 = true;

        setTimeout(function(){

            sideLightsOn(0);
            sideLightsIntensity(0,15,15);

            stageLightsFade(0,purple,purple,purple,'fade');
            stageLightsIntensity(0,15);

            stageLightStrobe(0.462,26);

            spotsPanUp(0.462,0,500,'yoyo',27);

            sideLightsStrobe(0.462,18,'together');

        },400);




    }
    /////////////////  RIFF

    if (videoTime == act3Time + 138 & lightCue93 == false) {
        lightCue93 = true;

        setTimeout(function(){

            sideLightsOn(0);
            sideLightsIntensity(0,15,15);

            stageLightsFade(0,purple,purple,purple,'fade');
            stageLightsIntensity(0,15);

            stageLightStrobe(0.462,26);

            spotsPanUp(0.231,0,1000,'yoyo',54);

            sideLightsStrobe(0.231,40,'together');

            sideLightsAngle(0.462,0,0.5,'stagger',36)

        },400);




    }
    ///////////////// V3 

    if (videoTime == act3Time + 153 & lightCue94 == false) {
        lightCue94 = true;

        stageLightsIntensity(0,0);
        floorColour(0,colourOff);

        sideLightsPulse(0.462,29,18);
        sideLightColourChange(0.462,99,purple,purple,purple,purple,blue,blue,blue,blue,'fade');

        sideLightsOn(0)
        sideLightsIntensity(0,3,3);
        sideLightsAngle(6,0,0.3,'once',1);

        spotsPanUp(0,550,550,'once',1);






    }
    ///////////////// OUT 

    if (videoTime == act3Time + 167 & lightCue95 == false) {
        lightCue95 = true;

        sideLightsAngle(0.5,0.3,00,'once',1);

        stageBlackout(0);
        floorColour(0,colourOff);

    }

    


    
    
    
    
    
    
    /////////////////  SUCCESS END

    if (videoTime == act3Time + 168 & lightCue60 == false) { //560
        lightCue60 = true;

        stageBlackout(0);
        floorColour(0,colourOff);

        setTimeout(function(){

            sideLightsOn(0)
            sideLightsIntensity(0,3,3);
            sideLightsAngle(0,0,0.3,'once',1);
            sideLightsColour(0,antiqueWhite,antiqueWhite,antiqueWhite,antiqueWhite);

            spotsPanUp(0,550,550,'once',1);

        },1000);





            
    }

    if (videoTime == act3Time + 185 & lightCue39 == false) { //574
        lightCue39 = true;

        spotsPanUp(4,100,900,'once',1);

        sideLightsColour(0,red,red,red,red);

        sideLightsStrobe(0.1,27,'together');







    }




    //////////////////  HOT STR8 BEAT

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

            stageLightColour(0.21,199,purple,purple,purple,green,green,green,'stagger')


    

        },400);

    }

    

    /////////////////  V1 1/2

    if (videoTime == act3Time + 216 & lightCue42 == false) { 
        lightCue42 = true;








        
    }
    /////////////////  C1

    if (videoTime == act3Time + 228 & lightCue43 == false) { 
        lightCue43 = true;

        stageLightsIntensity(0,0);
        floorColour(0,colourOff);

        setTimeout(function () {

            stageLightsIntensity(0,25);

            stageLightStrobe(0.5,99);

            sideLightsIntensity(0,0,15);

            sideLightColourChange(0.3,99,yellow,red,blue,cyan,red,orange,hotPink,green,'stagger');



            sideLightsStrobe(0.21,74,'togetherfast');
            spotsPanUp(3,1500,100,'yoyo',9);


            stageLightsIntensity(0,25);
            stageLightStrobe(0.6,60);

            stageLightColour(0.21,199,purple,purple,purple,green,green,green,'stagger')

    


        },1000);


    }
    /////////////////  C1 1/2

    if (videoTime == act3Time + 242 & lightCue97 == false) { 
        lightCue97 = true;
    
    }

    /////////////////  BREAKDOWN

    if (videoTime == act3Time + 255 & lightCue98 == false) { 
        lightCue98 = true;

        stageLightsIntensity(0,0);
        sideLightsAngle(0.5,0.5,0.25,'once',1);
        stageLightColour(0.21,199,purple,purple,purple,green,green,green,'stagger');

        sideLightsOn(0);

    }
    /////////////////  V2

    if (videoTime == act3Time + 258 & lightCue99 == false) { 
        lightCue99 = true;

        spotsPanUp(0.411,1500,100,'yoyo',99);

        stageLightColour(0.21,199,purple,purple,purple,green,green,green,'stagger');

        stageLightsIntensity(0,25);

        stageLightStrobe(0.5,99);

        sideLightsIntensity(0,0,15);

        sideLightColourChange(0.3,99,yellow,red,blue,cyan,red,orange,hotPink,green,'stagger');

        


    }
    /////////////////  V2 1/2

    if (videoTime == act3Time + 273 & lightCue100 == false) { 
        lightCue100 = true;

    }
    /////////////////  BREAKDOWN

    if (videoTime == act3Time + 285 & lightCue101 == false) { 
        lightCue101 = true;

        spotsPanUp(0.822,0,500,'yoyo',99);

        stageLightsFade(0,red,red,red,'fade');

        sideLightColourChange(0.3,99,yellow,red,blue,cyan,red,red,red,red,'once');



    }
    ///////////////// OUT 

    if (videoTime == act3Time + 297 & lightCue102 == false) { 
        lightCue102 = true;

    }
    /////////////////  C2

    if (videoTime == act3Time + 297 & lightCue103 == false) { 
        lightCue103 = true;

        stageLightsIntensity(0,0);
        floorColour(0,colourOff);

        setTimeout(function () {

            stageLightsIntensity(0,25);

            stageLightStrobe(0.5,99);

            sideLightsIntensity(0,0,15);

            sideLightColourChange(0.3,99,yellow,red,blue,cyan,red,orange,hotPink,green,'stagger');



            sideLightsStrobe(0.21,74,'togetherfast');
            spotsPanUp(0.21,1500,100,'yoyo',106);


            stageLightsIntensity(0,25);
            stageLightStrobe(0.6,60);

            stageLightColour(0.21,120,purple,purple,purple,green,green,green,'stagger')

    


        },1000);


    }
    /////////////////  C2 1/2

    if (videoTime == act3Time + 311 & lightCue104 == false) { 
        lightCue104 = true;

    }
    /////////////////  BEAT

    if (videoTime == act3Time + 324 & lightCue105 == false) { 
        lightCue105 = true;

        stageLightsIntensity(0,0);

        floorColour(0,colourOff);


        sideLightsIntensity(0,0,15);

        sideLightColourChange(0.3,99,green,purple,blue,cyan,red,blue,hotPink,green,'stagger');



        sideLightsStrobe(0.1,299,'togetherfast');
        spotsPanUp(0.21,100,1500,'stagger',99);

        sideLightsAngle(0.05,0,0.3,'stagger',299)





    }
    /////////////////  V3

    if (videoTime == act3Time + 337 & lightCue106 == false) { 
        lightCue106 = true;

        stageLightsIntensity(0,25);
        stageLightStrobe(0.6,29);

        stageLightColour(0.21,199,purple,purple,purple,colourOff,colourOff,colourOff,'stagger');

        sideLightsAngle(1,0.3,0,'stagger',299)





    }
    /////////////////  OUT

    if (videoTime == act3Time + 348 & lightCue107 == false) { 
        lightCue107 = true;

    }
    

    
    /////////////////  SOLO

    if (videoTime == act3Time + 349 & lightCue44 == false) { 
        lightCue44 = true;

        
    }
    /////////////////  OUT BUILD

    if (videoTime == act3Time + 363 & lightCue47 == false) { 
        lightCue47 = true;

        stageLightColour(0.21,199,green,green,green,colourOff,colourOff,colourOff,'stagger');

        sideLightColourChange(0.3,99,green,purple,blue,cyan,red,blue,hotPink,green,'stagger');

        sideLightsAngle(7,0,0.7,'once',1)





    }



    
    
    
    /////////////////  C3 

    if (videoTime == act3Time + 376 & lightCue45 == false) { 
        lightCue45 = true;

        stageLightsIntensity(0,0);
        floorColour(0,colourOff);

        setTimeout(function () {

            stageLightsIntensity(0,25);

            stageLightStrobe(0.5,99);

            sideLightsIntensity(0,0,15);

            sideLightColourChange(0.3,129,yellow,red,blue,cyan,red,orange,hotPink,green,'stagger');



            sideLightsStrobe(0.21,90,'togetherfast');
            spotsPanUp(0.21,1500,100,'yoyo',178);


            stageLightsIntensity(0,25);
            stageLightStrobe(0.6,85);

            stageLightColour(0.21,199,purple,purple,purple,green,green,green,'stagger')

    


        },1000);

            
    }
    /////////////////  C3 1/2
    
    if (videoTime == act3Time + 403 & lightCue46 == false) { 
        lightCue46 = true;
            
    }


    
    /////////////////  STR8 END

    if (videoTime == act3Time + 416 & lightCue48 == false) { 
        lightCue48 = true;

        stageBlackout(0);
        floorColour(0,colourOff);

        sideLightsColour(0,colourOff,colourOff,colourOff,colourOff);

        setTimeout(function(){

            sideLightsOn(0)
            sideLightsIntensity(0,3,3);
            sideLightsAngle(0,0.3,0.3,'once',1);
            sideLightsColour(0,antiqueWhite,antiqueWhite,antiqueWhite,antiqueWhite);

            spotsPanUp(0,550,550,'once',1);

        },1000);



        
    }
    /////////////////  PANDEMIC

    if (videoTime == act3Time + 422 & lightCue49 == false) { //680
        lightCue49 = true;

        stageBlackout(0);
        floorColour(0,colourOff);

        sideLightsOn(0)
        sideLightsIntensity(0,3,3);
        sideLightsAngle(0,0.3,0.3,'once',1);



        sideLightsStrobe(0.15,29,'togetherfast');
        sideLightsColour(0,red,red,red,red);

        spotsPanUp(20,100,900,'yoyo',3)



        
    }

    /////////////////  V1

    if (videoTime == act3Time + 431 & lightCue34 == false) { //503
        lightCue34 = true;

        stageLightsIntensity(0,5)

        stageLightColour(1.2,29,darkGreen,darkGreen,darkGreen,green,green,green,'stagger');

        stageLightsPulse(1.2,29)


    }
    


    /////////////////  V1 1/2

    if (videoTime == act3Time + 450 & lightCue50 == false) { //686
        lightCue50 = true;

        sideLightsStrobe(0.6,29,'togetherfast');
        spotsPanUp(2.4,100,600,'yoyo',19)
        sideLightsColour(0,red,red,red,red);






    }

    ////////////////////  C1

    if (videoTime == act3Time + 460 & lightCue53 == false) { //725
        lightCue53 = true;

        stageLightsPulse(0.6,29);
        stageLightColour(0.6,29,darkGreen,darkGreen,darkGreen,red,red,red,'stagger');



                
    }
    /////////////////  DROP + BEAT

    if (videoTime == act3Time + 469 & lightCue54 == false) { //726
        lightCue54 = true;
            
                    
    }
    /////////////////  DROP VOX

    if (videoTime == act3Time + 480 & lightCue55 == false) { //732
        lightCue55 = true;
        
                
    }

    /////////////////  HOOK

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

        sideLightsStrobe(0.15,60,'togetherfast');


        sideLightColourChange(1.2,5,orange,orange,orange,orange,yellow,yellow,yellow,yellow,'fade')

        spotsPanUp(1.2,100,1500,'yoyo',20);








            
    }


    if (videoTime == act3Time + 487 & lightCue53 == false) { //725
        lightCue53 = true;






                
    }
    /////////////////  V2

    if (videoTime == act3Time + 508 & lightCue54 == false) { //726
        lightCue54 = true;

        stageLightStrobe(1.2,29);

        stageLightColour(0.6,29,purple,purple,purple,red,red,red,'stagger');

        spotsPanUp(1.2,100,1500,'yoyo',30);

        sideLightsAngle(1,0.5,0.1,'once',1);

            
                    
    }
    /////////////////  V2 1/2

    if (videoTime == act3Time + 527 & lightCue55 == false) { //732
        lightCue55 = true;

        sideLightsAngle(1,0.1,0.25,'once',1);

        sideLightColourChange(1.2,5,orange,orange,orange,orange,green,green,green,green,'fade')


        
                
    }

    ////////////////  DROP + BEAT

    if (videoTime == act3Time + 537 & lightCue63 == false) { //742
        lightCue63 = true;

        stageLightsFade(0,red,red,red,'fade');

        stageLightsIntensity(0,18)

        stageLightStrobe(1.2,19);



        spotsPanUp(0.5,500,100,'once',1);

        setTimeout(function () {


            //stageBlackout(0);
            //floorColour(0,colourOff);

            sideLightsOn(0)
            sideLightsIntensity(0,3,3);
            sideLightsAngle(0,0.3,0.3,'once',1);



            sideLightsStrobe(0.15,29,'togetherfast');
            sideLightsColour(0,darkGreen,darkGreen,darkGreen,darkGreen);

            spotsPanUp(20,100,900,'yoyo',3)

        },600);





    }

    ////////////////  BEAT

    if (videoTime == act3Time + 546 & lightCue30 == false) { //460
        lightCue30 = true;

        stageLightsFade(0,red,red,red,'fade');

        stageLightsIntensity(0,18)

        stageLightStrobe(1.2,19);


        spotsPanUp(0.5,500,100,'once',1);

        setTimeout(function () {


            //stageBlackout(0);
            //floorColour(0,colourOff);

            sideLightsOn(0)
            sideLightsIntensity(0,3,3);
            sideLightsAngle(0,0.3,0.3,'once',1);



            sideLightsStrobe(0.075,58,'togetherfast');
            sideLightsColour(0,darkGreen,darkGreen,darkGreen,darkGreen);

            spotsPanUp(20,100,900,'yoyo',3)

        },600);



        
    }



    /////////////////  DROP + RAP

    if (videoTime == act3Time + 558 & lightCue56 == false) { //755
        lightCue56 = true;

        stageLightStrobe(1.2,29);

        sideLightsOn(0);

        stageLightsIntensity(0,4)

        stageLightColour(0.6,12,green,green,green,red,red,red,'stagger');

        spotsPanUp(1.2,100,1500,'yoyo',7);

        sideLightsAngle(1,0.5,0.1,'once',1);

        
                
    }
    /////////////////  END

    if (videoTime == act3Time + 569 & lightCue57 == false) { //770
        lightCue57 = true;

        setTimeout(function () {

            stageLightsIntensity(0,0);
            sideLightsOff();

            floorColour(0,lightOff);

        },400);


        
                
    }
    /////////////////  OUT CHAT

    if (videoTime == act3Time + 571 & lightCue58 == false) { //784
        lightCue58 = true;

        stageLightsIntensity(0,0);

        floorColour(0,colourOff);


        sideLightsOn(0)
        sideLightsIntensity(0,3,3);
        sideLightsAngle(0,0.2,0.2,'once',1);
        sideLightsColour(0,antiqueWhite,antiqueWhite,antiqueWhite,antiqueWhite);

        spotsPanUp(0,700,700,'once',1);


        
                
    }
    /////////////////  OUT

    if (videoTime == act3Time + 593 & lightCue59 == false) { //797
        lightCue59 = true;

        spotsPanUp(2,700,300,'once',1);

        setTimeout(function () {


            sideLightsAngle(2,0.2,0,'once',1);


        },2000);


                
    }

    //////////////// HOUSE LIGHTS UP

    if (videoTime == act3Time + 602 & lightCue67 == false) { //797
        lightCue67 = true;

        houseLightsIntensity(10, 18);

        floorColour(3,colourOff);

        stageLightsIntensity(3,0);

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
    
    
            TweenMax.to(stageSpot, _speed,  {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: 'none' , ease:Linear.easeNone},);
            TweenMax.to(stageSpot1, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: 'none' , ease:Linear.easeNone},);
            TweenMax.to(stageSpot2, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: 'none' , ease:Linear.easeNone},);
            TweenMax.to(stageSpot3, _speed, {startAt: {decay: 1},decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: 'none' , ease:Linear.easeNone},);
    
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

function stageFadeOut(_speed) {
    TweenMax.to(stagesurfacemtl.emissive, _speed, {r: 0 , g:0, b:0, ease: Expo.easeOut},0);

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
