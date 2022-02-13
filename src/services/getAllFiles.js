function sleep(action) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(action), 600);
  });
}

export const getAllFiles = async function (url) {
  try {
    return await sleep(
      fetch(url).then(function (response) {
        if (!response.ok) {
          throw new Error('Oops, there is an error');
        }
        return response.json();
      })
    );
  } catch (err) {
    console.error(err);
  }
};

export const deleteFile = async function (url) {
  try {
    return await sleep(
      fetch(url, { method: 'DELETE' }).then(function (response) {
        console.log(response);
        if (!response.ok) {
          throw new Error('Oops, there is an error');
        }
        return response.json();
      })
    );
  } catch (err) {
    console.error(err);
  }
};
