export const getEventNews = async () => {
  try {
    const response = await $fetch(
      "https://mapproject.nvs.la/api/v1/sg-5/create_newseven/",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
