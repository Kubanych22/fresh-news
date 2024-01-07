const fetchRequest = async (URL, params, {
  method = 'get',
  callback,
  body,
  headers,
}) => {
  try {
    const options = {
      method,
      headers: {
        'X-Api-Key': 'f97703113431480491f51abd537b4860',
      },
    };

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;
    const response = await fetch(`${URL}${params}`, options);

    if (response.ok) {
      const data = await response.json();
      if (callback) return callback(null, data, params);
      return;
    }

    throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
  } catch (err) {
    return callback(err);
  }
};

export default fetchRequest;
