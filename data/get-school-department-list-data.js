import * as constants from '@/utils/configs/constants';
export const sclDepertmentData = async () => {
    try {
      const response = await $fetch(
        constants.baseUel+"/api/school/",
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
  