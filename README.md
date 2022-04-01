Describe: inputNumber()

Test: It should return an array of numbers from 0 to the user's inputted number
Code: inputNumber(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: It should return an array of numbers from 0 to the user's inputted number as a string
Code: inputNumber(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Describe: replaceNumber()

Test: It should replace 1 with "beep"
Code: replaceNumber(1);
Expected Output: ["beep"]

Test: It should replace 2 with "boop"
Code: replaceNumber(2);
Expected Output: ["boop"]

Test: It should replace 3 with "won't you be my neibor"
Code: replaceNumber(3)
Expected Output: ["boop"]

Test: It should NOT alter numbers without 1/2/3
Code: replaceNumber(4)
Expected Output: ["4"]