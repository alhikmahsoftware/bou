export const aboutdata = async () => {
  try {
    const response = await $fetch(
      "https://opentv.nvs.la/api/v1/sg-5/companyinfo/",
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
