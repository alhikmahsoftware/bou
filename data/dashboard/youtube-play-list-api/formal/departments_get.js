import * as constants from '@/utils/configs/constants';
export const getDepartmentsCategory = async (id) => {
    try {
      const response = await $fetch(
        constants.baseUel+`/api/v1/sg-5/departments_get/?schoolname=${id}`,
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
  