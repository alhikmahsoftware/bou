import * as constants from '@/utils/configs/constants';
export const getYoutubePlaylistCategory = async () => {
    try {
      const response = await $fetch(
        constants.baseUel+"/api/v1/sg-5/create_ytvideo_cat/",
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
  