//Mocking-->Mocking involves creating fake objects or functions that simulate the
// behavior of real objects or functions. This is useful when you want to isolate 
//the code you are testing from external dependencies. Mock objects can be programmed 
//to return specific values or to throw exceptions, and you can use them to verify that 
//your code interacts with them in the expected way.
// Import the module to be tested
import fetchData from './fetchData';
import { getData } from './api';

jest.mock('./api'); // Mock the api module

test('fetchData should return data', async () => {
  // Arrange: Set up the mock to return specific data
  getData.mockResolvedValue({ data: 'mock data' });

  // Act: Call the function under test
  const result = await fetchData();

  // Assert: Verify the result
  expect(result).toEqual('mock data');
  // Verify interaction with the mock
  expect(getData).toHaveBeenCalledTimes(1);
});


//Spying---> Spying involves keeping track of the interactions with real objects 
//or functions without changing their behavior. A spy can record information about how
// a function was called (e.g., the arguments it was called with, how many times it was
// called). Spies are useful when you want to observe the behavior of your code without
// modifying it.
// Import the module to be tested
import fetchData from './fetchData';
import { getData } from './api';

test('fetchData should call getData with correct arguments', async () => {
  // Arrange: Spy on the getData function
  const getDataSpy = jest.spyOn(api, 'getData');

  // Act: Call the function under test
  await fetchData();

  // Assert: Verify the interaction with the spy
  expect(getDataSpy).toHaveBeenCalled();
  expect(getDataSpy).toHaveBeenCalledWith('expected argument');

  // Clean up: Restore the original function
  getDataSpy.mockRestore();
});
