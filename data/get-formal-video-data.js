import * as constants from '@/utils/configs/constants';
export const formalVideo = async (department,school) => {
    try {
      const response = await $fetch(
        constants.baseUel+`/api/get/formal_video/?Department_formal__id=${department}&School_formal__id=${school}`,
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
  