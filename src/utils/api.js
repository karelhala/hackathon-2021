export const authFetch = async (url, config, ...props) => (await fetch(`${
  url.includes('https://') ? '' : 'https://cloud.redhat.com'
}${url}`, {
  ...props,
  method: props?.method || 'GET',
  headers: {
    ...props?.headers,
    'Authorization': `Bearer ${config.token}`
  }
})).json();
