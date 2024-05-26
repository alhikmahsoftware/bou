import * as constants from '@/utils/configs/constants';
export const storeYoutubePlaylist = async (video_type, formData) => {
  try {
    let url = '';
    if (video_type === 'formal') {
      url = constants.baseUel+"/api/v1/sg-5/create_yt_formalvideo/";
    } else if (video_type === 'non_formal') {
      url = constants.baseUel+"/api/v1/sg-5/create_ytvideo/";
    }

    const response = await fetch(
      url,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(formData), 
      }
    );

    // Assuming the server responds with JSON, you can parse it here
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
