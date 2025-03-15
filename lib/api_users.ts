const apiUrl = 'https://apifrontclass.lat/api/v1'

export const validateInfoUser = async (token: string) => {
  console.log('token on service', token);
  
  return await fetch(`${apiUrl}/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}` 
    }
  })
  .then(data => data.json)
}