export const deleteContactUS = async (id) => {
    try {
      const response = await $fetch(
        "https://mapproject.nvs.la/api/v1/sg-5/contacts/"+id,
        {
          method: "DELETE",
        }
      );
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  