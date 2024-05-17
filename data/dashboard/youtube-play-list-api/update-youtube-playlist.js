import * as constants from '@/utils/configs/constants';
export const updateYoutubePlaylist = async (formData,id) => {
    try {
      const response = await $fetch(
        constants.baseUel+"/api/v1/sg-5/create_ytvideo/"+id+"/",
        {
          method: "PUT",
          body: formData,
        }
      );
      return response;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };
  