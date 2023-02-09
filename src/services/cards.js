const apiURL = "https://hero-cards-production.up.railway.app";

export const getAllCards = async () => {
  try {
    const response = await fetch(`${apiURL}/api/herocards`);
    const cards = await response.json();
    return cards;
  } catch (e) {
    // enviar el error a un servicio de reporte de errores
    return [];
  }
};

export const getCardById = async (cardId) => {
  try {
    const response = await fetch(`${apiURL}/api/herocards/${cardId}`);
    const card = await response.json();
    return card;
  } catch (e) {
    // enviar el error a un servicio de reporte de errores
    return [];
  }
};

export const getCardByName = async (name) => {
  try {
    const response = await fetch(`${apiURL}/api/herocards/${name}`);
    const card = await response.json();
    return card;
  } catch (e) {
    // enviar el error a un servicio de reporte de errores
    return [];
  }
};
