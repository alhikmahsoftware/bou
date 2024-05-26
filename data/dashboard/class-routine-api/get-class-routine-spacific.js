export const getClassRoutineSpacific = async (id) => {
  try {
    const response = await $fetch(
      "https://mapproject.nvs.la/api/v1/sg-5/get_routindata/"+id,
      {
        method: "GET"
      }
    );
    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
