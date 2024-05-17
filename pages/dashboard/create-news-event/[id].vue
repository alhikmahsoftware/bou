<template>
     <div class="p-4 sm:ml-64 mt-20" v-if="loading">Data Loading...</div>
    <div v-else class="p-4 sm:ml-64 mt-10" >
        <div class="justify-center items-center w-full">
            <div class=" p-4 w-full max-h-full">
                <!-- Modal content -->
                <div class=" p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <!-- Modal header -->
                    <div
                        class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Edit News & Event
                        </h3>
                    </div>
                    <!-- Modal body -->
                    <form action="#" enctype="multipart/form-data">
                        <div class="grid gap-4 mb-4 sm:grid-cols-2">
                            <div class="sm:col-span-2">
                                <label for="title"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input type="text" name="title" id="title"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type product name" required="" v-model="form.title" />
                            </div>
                            <div class="sm:col-span-2"><label for="description"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label><textarea
                                    id="description" rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Write description here" v-model="form.description"></textarea></div>
                            <div>
                                <label for="category"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select id="category" v-model="form.category"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="" disabled>Select category</option>
                                    <option :value="item.id" v-for="item in data" :key="item.id"
                                        :selected="form.category == item.id">
                                        {{ item.catname }}
                                    </option>


                                </select>
                            </div>
                            <div>
                                <label for="title"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                <input type="date" name="title" id="title"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type product name" required="" v-model="form.date" @input="formatDate" />
                            </div>

                            <div class="sm:col-span-2">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                                <img :src="form.imageUrl" alt="Image Description">
                            </div>

                            <div class="sm:col-span-2">
                                <label for="price"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Change
                                    Image</label>
                                <input type="file" name="price" id="price" @change="handleFileChange"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    required="" accept="image/*" />
                            </div>
                        </div>
                        <div class="flex justify-center">
                            <button type="submit"
                                    class="text-white inline-flex justify-center items-center bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    @click="handleSubmit">
                                <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clip-rule="evenodd" />
                                </svg>
                                Update
                            </button>
                        </div>

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
import { getEventNewsCategory } from "../../data/dashboard/event-news-api/get-event-news-category";
import { getEventNews } from "../../data/dashboard/event-news-api/get-event-news";
import { updateEventNews } from "../../data/dashboard/event-news-api/update-event-news";
import { deleteEventNews } from "../../data/dashboard/event-news-api/delete-event-news";
import { getSingleEventNews } from "../../data/dashboard/event-news-api/get-single-item-event-news-category";
import { vueThreeToast } from '@/utils/services/toast/vueThreeToast';
const showToast = vueThreeToast();


const form = reactive({
    title: "",
    category: "",
    image: null,
    description: "",
    date: "",
    imageUrl: ""
});

//get category
const data = ref([]);
const itemId = ref();
const editData = ref([]);
const loading = ref(true);

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
        let data = await getSingleEventNews(itemId);
        form.title = data.title;
        form.description = data.description;
        form.category = data.catvlog;
        form.date = data.date;
        form.imageUrl = data.image;

        console.log('Item get successfully!', data);
    } catch (error) {
        console.error('Error get item:', error);
    }
    loading.value=false;
};


async function fetchData() {
    try {
        data.value = await getEventNewsCategory();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
    }
}



const formData = new FormData();
//store data
const handleFileChange = (event) => {
    const file = event.target.files[0];

    form.image = file;
};

const handleSubmit = async () => {
    formData.append('title', form.title);
    formData.append('catvlog', form.category);
    formData.append('image', form.image);
    formData.append('description', form.description);
    formData.append('date', form.date);

    event.preventDefault();
    console.log('formData', formData)
    const route = useRoute();
    try {
        const result = await updateEventNews(formData, route.params.id);
        showToast('Update item successful.', 'bg-green-400');
        setTimeout(() => {
            history.back();
        }, 3000);
    } catch (error) {
        showToast('Update item failed.', 'bg-green-400');
    }
};



</script>