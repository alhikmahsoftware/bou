export const storeEventNews = async (formData) => {
  try {
    const response = await $fetch(
      "https://mapproject.nvs.la/api/v1/sg-5/create_newseven/",
      {
        method: "POST",
        body: formData,
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
