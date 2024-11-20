export const GetInfoCharacter = async () => {
  const url = "https://thesimpsonsquoteapi.glitch.me/quotes";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Error al obtener los usuarios. Código de estado: ${response.status}`
      );
    }
    const result = await response.json();

    return result;
  } catch (error: any) {
    return `Error: ${error.message}`;
  }
};
