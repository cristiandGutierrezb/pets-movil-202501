const API = 'https://apifrontclass.lat/api/v1'

export const getProducts = async () => {
  return await fetch(`${API}/products`, {
    method: 'GET',
    headers: {
      "Authorization": "Bearer tokentosendinservice"
    }
  })
  .then(data => data.json())
}