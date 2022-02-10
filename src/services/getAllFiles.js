const getAllFiles = async function (url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('I wrote this error');
    }
    return response.json();
  } catch (err) {
    console.error(err);
  }
};

export default getAllFiles;
