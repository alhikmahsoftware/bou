import * as constants from '@/utils/configs/constants';
export const getSingleYoutubePlayList = async (id) => {
    try {
      const response = await $fetch(
        constants.baseUel+"/api/v1/sg-5/update_del_youtube/"+id,
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
  