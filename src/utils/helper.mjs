export default {
  sendFetch: async function(path, options = {}) {
    const response = await fetch(path, options);

    if (response.ok) {
      const { data } = await response.json();
      return data;
    } else {
      throw new Error('Fetch is failed!');
    }
  }
}