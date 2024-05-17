export const getlogo = async () => {
    try {
      const response = await $fetch(
        "https://opentv.nvs.la/api/v1/sg-5/weblogo/",
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
  