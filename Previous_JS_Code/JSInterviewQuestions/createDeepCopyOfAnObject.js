function deepCopy(obj) {
    // Check if the input is an object or an array, otherwise return the value directly
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Create a new object or array depending on the input type
    const copy = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            // Recursively copy each property
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
}
const obj = {
    fName: 'Jaya',
    lName: 'Shukla',
    address: {
        city: {
            cityName: 'xyz',
            placeToVisit: ['abc', 'def']
        }
    }
};

const deepCopiedObj = deepCopy(obj);

// Modifying the deep copy to show that it's indeed a deep copy
deepCopiedObj.address.city.cityName = 'newCity';
deepCopiedObj.address.city.placeToVisit.push('ghi');

// Original object remains unchanged
console.log(obj.address.city.cityName); // Output: 'xyz'
console.log(obj.address.city.placeToVisit); // Output: ['abc', 'def']

// Deep copied object reflects the changes
console.log(deepCopiedObj.address.city.cityName); // Output: 'newCity'
console.log(deepCopiedObj.address.city.placeToVisit); // Output: ['abc', 'def', 'ghi']



//2nd Method==>
    const original = {
        a: 1,
        b: {
          c: 2,
          d: [3, 4]
        }
      };
      
      const deepCopy = JSON.parse(JSON.stringify(original));
      deepCopy.b.c = 3;
      console.log(original.b.c); // Output: 2
      console.log(deepCopy.b.c); // Output: 3
      
