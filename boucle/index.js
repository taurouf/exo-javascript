'use strict'

/**
* Exercice 1
*/
var array = [1,2,3,5,8];

var result = '\n';

for (var i = 0; i < array.length; i++) {
    for (var j = 1; j < 11; j++) {
        result += (array[i]*j) + ' ';
    }
    result += '\n'
}

/**
* Exercice 2
*/

var ul=document.createElement('ul');
for (var i = 1; i <= 10; i++) {
  var li = document.createElement('li')
  li.textContent= i + ' x 5 = ' + (i*5);
  ul.appendChild(li)
}
document.body.appendChild(ul);


/**
* Exercice 3
*/

var plop = 0;
while (true) {
      plop ++
      console.log(5*plop)
      if (plop == 10) {
        break
      } 
}

/**
* Exercice 4
*/

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var table = array.map( x => x * 5);

console.log(table)

/**
* Exercice 5
*/

var obj{
  name: 42;
  age:42;
}
var compute = 1;
for (var keyn obj) {
  compute *= obj[key];
}
console.log(compute)

/**
* Exercice 6
*/

var nbr = [45, 86, 1, 4, -9];
for (var i = 0; i < nbr.length; i++) {
    for (var j = 0; j < nbr.length; j++) {
        if (nbr[i] < nbr[j]) {
            var tmp = nbr[i];
            nbr[i] = nbr[j];
            nbr[j] = tmp;
            j = 0;
        }
    }
}
console.log(nbr);