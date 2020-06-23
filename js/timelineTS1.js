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
var indianRed = {r: 93, g:39, b:39};
var cerulean = {r: 2, g:72, b:80};
var antiqueWhite = {r: 98, g:92, b:84};

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





function updateStartLights () {

    //////////// Countdown

    if (video.currentTime >= 0 && video.currentTime <= 67) {
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

    if (video.currentTime >= 68 && video.currentTime <= 328) {
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

    ///////// ACT 2


    if (video.currentTime >= 329 && video.currentTime <= 544) {
        testLight.intensity = 1;
        testLight1.intensity = 1;
        testLight2.intensity = 1;
        testLight3.intensity = 1;
        testLight4.intensity = 1;
        testLight5.intensity = 1;

        testLight6.intensity = 18;
        testLight7.intensity = 18;
        testLight8.intensity = 18;

        testLight6.color = darkGreen;
        testLight7.color = darkGreen;
        testLight8.color = darkGreen;

        stagesurfacemtl.emissive = darkGreen;



    }

    ///////// ACT 3


    if (video.currentTime >= 545 && video.currentTime <= 915) {
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

    ///////// After Show

    if (video.currentTime >= 916) {
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
    console.log(videoTime)




    /////////////////////  House Lights Down

    if (videoTime == 1 & houseLightsInOp1 == false) {
        houseLightsInOp1 = true;

        houseLightsIntensity(10, 4);
        //lightFade(3, blue, blue, blue, "fade" )

        //stageLightsIntensity(10, 0);
        //floorColour(0,colourOff);

        stageBlackout(10);




        
    }



    if (videoTime == 68 & houseLightsInOp == false) {
        houseLightsInOp = true;


        lightFade(3, blue, blue, blue, "fade" )
        houseLightsIntensity(5, 1);
        stageLightsIntensity(7, 18);
        floorColour(0,blue);


        
    }

    ////////////////    Intro 1/2

    if (videoTime == 83 & lightCue1 == false) {
        lightCue1 = true;

        lightFade(3, red, red, red, "fade" )
        
    }

    ////////////////   V1


    if (videoTime == 101 & lightCue2 == false) {
        lightCue2 = true;

        lightFade(3, blue, blue, blue, "fade" )
        
    }
    if (videoTime == 109 & lightCue3 == false) {
        lightCue3 = true;

        lightFade(3, red, red, red, "fade" )
        
    }
    if (videoTime == 116 & lightCue4 == false) {
        lightCue4 = true;

        lightFade(3, blue, blue, blue, "fade" )
        
    }
    if (videoTime == 124 & lightCue5 == false) {
        lightCue5 = true;

        lightFade(3, blue, blue, blue, "fade" )
        
    }


    ///////////////////     Drop


    if (videoTime == 130 & lightCue6 == false) {
        lightCue6 = true;

        stageBlackout(0);
        sideLightsIntensity(9, 0, 4)
        sideLightsStrobe(0.05, 19)        
        
    }

    ////////////////////    Chorus


    if (videoTime == 132 & lightCue7 == false) {
        lightCue7 = true;

        lightFade(2, blue, blue, blue, "flash" )
        sideLightsColour(0,blue,blue,blue,blue);

        sideLightsStrobe(0.5, 13)        

        //stageLightsPulse(2, 400, pink, pink, pink )

        
    }


    /////////////////////   Last Hit

    if (videoTime == 148 & lightCue8 == false) {
        lightCue8 = true;

        //lightFade(2, red, cyan, purple, "fade" )
        stageBlackout(0);

        
    }


    //////////////////////    Instrumental

    if (videoTime == 152 & lightCue9 == false) {
        lightCue9 = true;
        stageLightsIntensity(1, 18);
        lightFade(2, red, red, red, "fade" )
        
    }


    /////////////////////    V2


    if (videoTime == 160 & lightCue10 == false) {
        lightCue10 = true;

        lightFade(2, pink, cyan, purple, "fade" )
        
    }
    if (videoTime == 168 & lightCue11 == false) {
        lightCue11 = true;

        lightFade(2, purple, pink, cyan, "fade" )
        
    }
    if (videoTime == 176 & lightCue12 == false) {
        lightCue12 = true;

        lightFade(2, cyan, purple, pink, "fade" )
        
    }
    if (videoTime == 184 & lightCue13 == false) {
        lightCue13 = true;

        lightFade(2, pink, cyan, purple, "fade" )
        
    }


    /////////////////////     Middle 8


    if (videoTime == 188 & lightCue14 == false) {
        lightCue14 = true;

        lightFade(6, red, red, red, "fade" )

        stageSpot.intensity = 0
        stageSpot1.intensity = 0
        stageSpot2.intensity = 0
        stageSpot3.intensity = 0

        testLight6.intensity = 35;
        testLight7.intensity = 35;
        testLight8.intensity = 35;

        stageLightsPulse(2, 4 )
        
    }
    if (videoTime == 199 & lightCue15 == false) {
        lightCue15 = true;
        sideLightsColour(0,red,red,red,red);

        sideLightsPulse (2, 1, 1.5)        
    }


    //////////////////////      Strings


    if (videoTime == 200 & lightCue16 == false) {
        lightCue16 = true;

        //lightFade(2, red, cyan, purple, "fade" )
        stageBlackout(20)
        


        
    }


    /////////////////////   Drop down


    if (videoTime == 206 & lightCue17 == false) {
        lightCue17 = true;

        //stageBlackout(20)
        stageLightsIntensity(0, 1)
        lightFade(2, white, white, white, "fade" )

        stageSpot.intensity = 0
        stageSpot1.intensity = 0
        stageSpot2.intensity = 0
        stageSpot3.intensity = 0


        stageLightsPulse(1, 29 )

        
    }


    /////////////////////     Strobe



    if (videoTime == 238 & lightCue18 == false) {
        lightCue18 = true;

        sideLightsColour(0,white,white,white,white);

        stageSpot.decay = 1
        stageSpot1.decay = 1
        stageSpot2.decay = 1
        stageSpot3.decay = 1


        sideLightsIntensity(10, 0, 7)
        sideLightsStrobe(0.05, 43);
        
        floorColour (5, colourOff);

    }


    ////////////////////////  Chorus 2


    if (videoTime == 243 & lightCue19 == false) {
        lightCue19 = true;
        lightFade(2, red, yellow, blue, "flash" )        
    }

    if (videoTime == 250 & lightCue20 == false) {
        lightCue20 = true;

        lightFade(2, blue, cyan, purple, "flash" )
        
    }

    if (videoTime == 258 & lightCue21 == false) {
        lightCue21 = true;

        lightFade(2, pink, yellow, green, "flash" )
        
    }

    if (videoTime == 266 & lightCue22 == false) {
        lightCue22 = true;

        lightFade(2, orange, red, yellow, "flash" )
        sideLightsColour(0,blue,blue,blue,blue);
        
    }

    if (videoTime == 270 & lightCue23 == false) {
        lightCue23 = true;

        lightFade(2, blue, blue, blue, "fade" )
        
    }



    ///////////////////    Last Hit



    if (videoTime == 274 & lightCue24 == false) {
        lightCue24 = true;
        floorColour(0,blue)

        sideLightsColour(0,blue,blue,blue,blue);



        sideLightsIntensity(40, 2, 0)
        sideLightsStrobe(0.5, 79);
        stageLightStrobe(0.5, 79)

        
    }



    ////////////////////    ACT 2


    if (videoTime == 330 & lightCue25 == false) {
        lightCue25 = true;

        stageLightsIntensity(10, 10)
        lightFade(10,darkGreen,darkGreen,darkGreen,"fade")

        
    }

    if (videoTime == 537 & lightCue26 == false) {
        lightCue26 = true;

        stageLightsIntensity(7, 0)
        floorColour(7,colourOff)


        
    }



    /////////////////////    ACT3

    if (videoTime == 549 & lightCue27 == false) {
        lightCue27 = true;

        stageLightsIntensity(1, 18)
        lightFade(1,red,red,red,"fade")

        
    }

    if (videoTime == 911 & lightCue28 == false) {
        lightCue28 = true;


        stageLightsIntensity(7, 0)
        floorColour(7,colourOff)
        houseLightsIntensity(10, 10);

        console.log("waterbaby finished")


        
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


    TweenMax.to(stageSpot, _speed,  {decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 1, ease:Linear.easeNone},);
    TweenMax.to(stageSpot1, _speed, {decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 2, ease:Linear.easeNone},);
    TweenMax.to(stageSpot2, _speed, {decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 3, ease:Linear.easeNone},);
    TweenMax.to(stageSpot3, _speed, {decay: 0, repeat: _length, repeatDelay: _speed, yoyo: true, delay: _speed * 4, ease:Linear.easeNone},);
    
    

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
    TweenMax.allTo([testLight8, testLight7, testLight6], _speed, {/*startAt: {intensity: 0},*/ repeat: _length, delay: 0.1, repeatDelay: 0, repeatRefresh: true, yoyo: true, stagger: _speed/2, intensity: 0, ease: Expo.easeOut, overwrite: true});

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
























