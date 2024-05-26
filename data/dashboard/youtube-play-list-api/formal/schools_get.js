import * as constants from '@/utils/configs/constants';
export const getSchoolsCategory = async () => {
    try {
      const response = await $fetch(
        constants.baseUel+"/api/v1/sg-5/schools_get_create/",
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
  