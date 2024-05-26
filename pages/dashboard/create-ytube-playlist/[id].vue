<template>
    <div class="p-4 sm:ml-64 mt-20">
        <!-- Create modal -->
        <div id="createProductModal" tabindex="-1" aria-hidden="true"
            class="justify-center items-center w-full">
            <div class="p-4 w-full  max-h-full">
                <!-- Modal content -->
                <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <!-- Modal header -->
                    <div
                        class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Edit Youtube Playlist
                        </h3>
                    </div>
                    <!-- Modal body -->
                    <form action="#" enctype="multipart/form-data">
                        <div class="grid gap-4 mb-4 sm:grid-cols-2">
                            <div class="sm:col-span-2">
                                <label for="url"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Url</label>
                                <input type="text" name="url" id="url"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type url" required="" v-model="form.url" />
                            </div>
                            <div class="sm:col-span-2"><label for="title"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label><textarea
                                    id="title" rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Write title here" v-model="form.title"></textarea></div>
                            <div>
                                <label for="category"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select id="category" v-model="form.video_category"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <!-- <option value="" disabled selected>Select category</option> -->
                                    <option :value="item.id" v-for="item in data" :key="item.id"
                                        :selected="selectCategory == item.id">
                                        {{ item.name }}
                                    </option>


                                </select>
                            </div>
                            <div>
                                <label for="video_id"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Video Id</label>
                                <input type="text" name="video_id" id="video_id"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type video_id" required="" v-model="form.video_id" />
                            </div>
                            <div>
                                <label for="embedded_url"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Embed Url</label>
                                <input type="text" name="embedded_url" id="embedded_url"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type embedded_url" required="" v-model="form.embedded_url" />
                            </div>

                            <div class="sm:col-span-2">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thumbnail Url</label>
                                <img :src="form.thumbnail_url" alt="Image Description">
                            </div>

                            <div>
                                <label for="thumbnail_url"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thumbnail Url</label>
                                <input type="text" name="thumbnail_url" id="thumbnail_url"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type thumbnail_url" required="" v-model="form.thumbnail_url" />
                            </div>
                        </div>
                        <button type="submit"
                            class="text-white inline-flex items-center bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            @click="handleSubmit">
                            <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clip-rule="evenodd" />
                            </svg>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "dashboard",
});

import { ref, onMounted } from 'vue';
import { initFlowbite } from "flowbite";
import { getYoutubePlaylistCategory } from "../../data/dashboard/youtube-play-list-api/get-youtube-playlist-category";
import { updateYoutubePlaylist } from "../../data/dashboard/youtube-play-list-api/update-youtube-playlist";
import { getYoutubePlaylist } from "../../data/dashboard/youtube-play-list-api/get-youtube-playlist";
import { getSingleYoutubePlayList } from "../../data/dashboard/youtube-play-list-api/get-single-item-youtube-playlist";
import { vueThreeToast } from '@/utils/services/toast/vueThreeToast';
const showToast = vueThreeToast();

const form = reactive({
    url: "",
    title: "",
    thumbnail_url: "",
    video_id: "",
    embedded_url: "",
    video_category: "",
});

//get category
const data = ref([]);
const selectCategory = ref([]);
const itemId = ref();
const editData = ref([]);

onMounted(() => {
    initFlowbite();
    const route = useRoute();
    fetchData();
    itemId.value = route.params.id;
    confirmEdit(itemId.value);
});

const formatDate = () => {
    const rawDate = form.date;
    const formattedDate = new Date(rawDate).toISOString().slice(0, 10);
    form.date = formattedDate;
};

const confirmEdit = async (itemId) => {
    console.log('params!', itemId);
    try {
        const data = await getSingleYoutubePlayList(itemId);

        if (data) {
            form.url = data.url;
            form.title = data.title;
            form.thumbnail_url = data.thumbnail_url;
            form.video_id = data.video_id;
            form.embedded_url = data.embedded_url;
            form.video_category = data.video_category;

            console.log('Item get successfully!', data);
        } else {
            console.log("No item found with the specified ID.");
        }
    } catch (error) {
        console.error('Error getting item:', error);
    }
};



async function fetchData() {
    try {
        data.value = await getYoutubePlaylistCategory();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
    }
}


//Update data

const handleSubmit = async (event) => {

    event.preventDefault();
    console.log('formData', form)
    const route = useRoute();
    try {
        const result = await updateYoutubePlaylist(form,route.params.id);
        showToast('Update item successful.', 'bg-green-400');
        setTimeout(() => {
            history.back();
        }, 3000);

    } catch (error) {
        showToast('Update item failed.', 'bg-green-400');
    }
};



</script>