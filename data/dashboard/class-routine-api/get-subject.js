export const getSubject = async () => {
    try {
      const response = await $fetch(
        "https://mapproject.nvs.la/api/v1/sg-5/subjects_get_create/",
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
  