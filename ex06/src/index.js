function main(numOne, numTwo)
{
    if(numTwo===0)
        {
            myQuotient = 'Divide by 0. Cannot divide by zero.'
        }
    else 
        {
            myQuotient = numOne / numTwo;
        }

        return myQuotient;
}

console.log(main(5.0, 2.0));
console.log(main(16.5, 5.5));
console.log(main(102.0, 25.5));

module.exports = main;