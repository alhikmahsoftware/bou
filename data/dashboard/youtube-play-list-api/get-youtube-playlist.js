import * as constants from '@/utils/configs/constants';
export const getYoutubePlaylist = async () => {
    try {
      const response = await $fetch(
        constants.baseUel+"/api/v1/sg-5/create_ytvideo/",
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
  