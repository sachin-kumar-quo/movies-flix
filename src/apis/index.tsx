const baseUrl = "https://api.tvmaze.com/";


export const fetchAllShows = async () => {
  try {
    const response = await fetch(`${baseUrl}shows`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchShowDetails = async (id:number) => {
  try {
    const response = await fetch(`${baseUrl}shows/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchShowCasts = async (id: number) => {
  try {
    const response = await fetch(`${baseUrl}shows/${id}/cast`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchShowCrew = async (id: number) => {
  try {
    const response = await fetch(`${baseUrl}shows/${id}/crew`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchResults = async (query:string) => {
  try {
    const response = await fetch(`${baseUrl}search/shows?q=${query}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
