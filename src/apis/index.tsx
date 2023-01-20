const baseUrl = "https://api.tvmaze.com/";


export const fetchAllShows = async () => {
  try {
    const response = await fetch(`${baseUrl}shows`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchShowDetails = async () => {
  try {
    const response = await fetch(`${baseUrl}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const fetchSearchResults = async () => {
  try {
    const response = await fetch(`${baseUrl}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
