export const newsAndEventsData = async (page) => {
  try {
    const response = await $fetch(
      `https://mapproject.nvs.la/api/v1/sg-4/unlimit/vlogdata/NEWS%20&%20EVENTS/?page=${page}`,
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

export const noticeboardData = async (page) => {
  try {
    const response = await $fetch(
      `https://mapproject.nvs.la/api/v1/sg-4/unlimit/vlogdata/NOTICE%20BOARD/?page=${page}`,
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
