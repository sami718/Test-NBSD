let URL = 'https://reqres.in/api/users';

export const request = (onResponse) => {
  console.log('inside api call function');
  fetch(URL, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      onResponse.complete();
      onResponse.success(responseJson);
    })
    .catch((error) => {
      console.error(error);
      onResponse.error(error);
      onResponse.complete(error);
    });
};
