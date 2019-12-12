// api
const BASE_URL = 'http://localhost:3004/messages';

const ApiAddMessage = (id, message) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'POST',
    body: JSON.stringify(message)
  })
  .then(res => res.json())
  //.catch(err => console.log(err));
}

const ApiUpdateMessage = (id, message) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(message)
  })
  .then(res => res.json())
  //.catch(err => console.log(err));
}

const ApiDeleteMessage = (params) => {
  
  //console.log(params.id)

  return fetch(`${BASE_URL}/${params.id}`, {
      method: 'DELETE'
  })
  .then(res => res.json())
  //.catch(err => console.log(err));
}

const ApiFetchAllMessages = () => {
  
  //console.log(params.id)

  return fetch(`${BASE_URL}/`, {
      method: 'GET'
  })
  .then(res => res.json())
  //.catch(err => console.log(err));
}



// fim api
export {
  ApiAddMessage,
  ApiUpdateMessage,
  ApiDeleteMessage,
  ApiFetchAllMessages
};