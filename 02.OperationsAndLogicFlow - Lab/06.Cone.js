function calcConeVolumeAndArea(r, h) {
    let s = Math.sqrt(Math.pow(+r, 2) + Math.pow(+h, 2));

    let lateralSurfaceArea = Math.PI * +r * s;
    let baseSurfaceArea = Math.PI * r * r;

    let coneVolume = (Math.PI * +r * +r * +h) / 3;
    let coneArea = lateralSurfaceArea + baseSurfaceArea;

    console.log("volume = " + coneVolume);
    console.log("area = " + coneArea);
}

calcConeVolumeAndArea(3, 5);