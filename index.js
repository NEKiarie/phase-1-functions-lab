const scuberHeadquarters = 42;
function distanceFromHqInBlocks(location){
    return Math.abs(location - scuberHeadquarters);
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location) * 264;
}
   
// function distanceTravelledInFeet(start, final){
//     if (start > final){
//         return (start - final) * 264;
//     }
//     else{
//         return(final - start) * 264;
//     }

// }

function distanceTravelledInFeet(start, final){
    return Math.abs (final- start) * 264;
}

function calculatesFarePrice(start, final){
    let feet = distanceTravelledInFeet(start, final);
    if (feet < 400){
        return 0;
    }
    else if( feet > 400 && feet < 2000){
        return  ((feet - 400) * 2 / 100) ;
    }
    else if (feet > 2000 && feet <=2500){
        return 25;
    }
    else{
        return "cannot travel that far";
    }
}