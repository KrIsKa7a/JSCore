//The most simple solution
function sumFirstLast(input) {
    let nums = input
        .map((num) => +num);

    let sum = nums[0] + nums[nums.length - 1];

    console.log(sum);
}

sumFirstLast(['20', '30', '40']);