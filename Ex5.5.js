const abbreviateName = (name) => name
.split(' ')
.map(el => el[0].toUpperCase())
.join('.');
console.log(abbreviateName("Adi Levy"));
console.log(abbreviateName("Adi levy"));