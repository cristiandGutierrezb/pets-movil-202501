const API = 'https://apifrontclass.lat/api/v1'

export const getProducts = async () => {

  // const rawData = await fetch(`${API}/products`)

  // const json = await rawData.json()

  // const { data } = json

  // return data

  return await fetch(`${API}/products`, {
    method: 'GET',
    headers: {
      "Authorization": "Bearer tokentosendinservice"
    }
  })
  .then(data => data.json())
}