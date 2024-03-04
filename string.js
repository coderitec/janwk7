 const efosa = document.querySelectorAll('ol li')
 const aramide = document.getElementsByTagName('p')[0]

 const letters = aramide.textContent

 const names = ['peter','aramide','paul', 'john', 'marie']

//  alert(letters)
//length property
efosa[0].innerHTML = '<strong>Length property: </strong> '+ letters.length

efosa[1].innerHTML = '<strong>First character: </strong> '+ letters[0]

efosa[2].innerHTML = '<strong>Last character: </strong> '+ letters[letters.length - 1]

efosa[3].innerHTML = '<strong>Index of a particular str : </strong> '+ letters.indexOf('x')

efosa[4].innerHTML = '<strong>Index of a particular str : </strong> '+ letters.indexOf('o', letters.indexOf('dog'))

efosa[5].innerHTML = '<strong>Index of a particular str : </strong> '+ letters.lastIndexOf('o', letters.indexOf('jump'))

efosa[6].innerHTML = '<strong>Index of a str that does not exist : </strong>' + letters.lastIndexOf('O')

efosa[7].innerHTML = '<strong>Uppercase : </strong>' + letters.toUpperCase()

efosa[8].innerHTML = '<strong>Lowercase : </strong>' + letters.toLowerCase()

efosa[9].innerHTML = '<strong>Find character at a particular index : </strong>' + letters.charAt(10)
efosa[10].innerHTML = '<strong>Replace \'jump\' with \'walk\':  </strong>' + letters.replace('jump', 'walk')

efosa[11].innerHTML = '<strong>Replace all \'o\' with \'0\':  </strong>' + letters.replaceAll('o', '0')

efosa[12].innerHTML = '<strong>Converts a str to an array:  </strong>' + letters.split(' ')

efosa[13].innerHTML = '<strong>Cut a part of a str:  </strong>' + letters.slice(letters.lastIndexOf('the'))

efosa[14].innerHTML = '<strong>Cut all str:  </strong>' + letters.slice()

efosa[15].innerHTML = '<strong>Add array names:  </strong>' + ' '.concat(...names)

efosa[16].innerHTML = '<strong>add a name  </strong>' + 'enemuo '.concat('franc')

efosa[17].innerHTML = '<strong>names that starts with \'p\':</strong>  ' + names.filter(name => name.startsWith('p'))

efosa[18].innerHTML = '<strong>names that ends with \'e\':</strong>  ' + names.filter(name => name.endsWith('e'))

efosa[19].innerHTML = '<strong>names that includes with \'r\':</strong>  ' + names.filter(name => name.includes('r'))


console.log(aramide.textContent)

