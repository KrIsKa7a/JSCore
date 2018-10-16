function calcGradsToRadians(grads) {
    let diff = (400 / 360);

    if (grads > 360) {
        grads = (grads % 400) / diff;
    }
    else if (grads < 0) {
        if (grads < -400) {
            grads = grads % 400;
        }
        grads = 360 + grads / diff;
    }
    else {
        grads = grads / diff;
    }
    console.log(grads);
}