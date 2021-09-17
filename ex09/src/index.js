function main()
{
    var firstNum = 6;
    var secoundNum = 25;
    var thirdNum = 5.2;

    firstNum *= 9;
    secoundNum /= 5;
    thirdNum *=10;

    return{firstNum, secoundNum, thirdNum};
}

console.log(main())

module.exports = main;