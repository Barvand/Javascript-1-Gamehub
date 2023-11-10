const url = "https://api.noroff.dev/api/v1/gamehub/";

export async function fetchApi() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    const data = details;

    return data;
  } catch (error) {
    console.log(error);
  }
}
