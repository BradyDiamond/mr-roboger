_Mr. Roboger's Neighborhood_

#### By _**Brady Diamond**_

#### _A site to let Mr. Roboger send you a list of returned numbers_

## Technologies Used

* _HTML_
* _Javascript_

## Description

_Enter a number and the site will modify and return it_

## Setup/Installation Requirements

_this webite is availible through my profile located at https://github.com/BradyDiamond_

_Using "git clone" add this repository to your desktop_
_In the cloned folder open "index.html"_
_select your answers and press proceed to see your language__

## Known Bugs

* _site is currently not functional_

## License
_licensed under the [MIT License] (LICENSE)_

_Copyright (c) _2022_ _Brady Diamond_ 

































Describe: inputNumber()

Test: It should return an array of numbers from 0 to the user's inputted number
Code: inputNumber(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: It should return an array of numbers from 0 to the user's inputted number as a string
Code: inputNumber(5);
Expected Output: ['0', '1', '2', '3', '4', '5']

Describe: replaceNumber()

Test: It should replace 1 with "beep"
Code: replaceNumber(1);
Expected Output: ['beep']

Test: It should replace 2 with "boop"
Code: replaceNumber(2);
Expected Output: ['boop']

Test: It should replace 3 with "won't you be my neibor"
Code: replaceNumber(3)
Expected Output: ['boop']

Test: It should NOT alter numbers without 1/2/3
Code: replaceNumber(4)
Expected Output: ['4']