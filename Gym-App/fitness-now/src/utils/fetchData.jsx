export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd61d43bd87msh77c855f122ed747p1ae8ecjsnb3f6c257c618',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd61d43bd87msh77c855f122ed747p1ae8ecjsnb3f6c257c618',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }

};

 




export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};