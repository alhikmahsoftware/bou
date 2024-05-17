<template>
    <div class="p-4 sm:ml-64 mt-20">
        <!-- Create modal -->
        <div id="createProductModal" tabindex="-1" aria-hidden="true"
            class="justify-center items-center w-full">
            <div class="p-4 w-full max-h-full">
                <!-- Modal content -->
                <div class="p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <!-- Modal header -->
                    <div
                        class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Edit Routine
                        </h3>
                    </div>
                    <!-- Modal body -->
                    <form action="#" enctype="multipart/form-data">
                        <div class="grid gap-4 mb-4 sm:grid-cols-2">
                            <div class="">
                                <label for="title"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                <input type="text" name="title" id="title"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type title" required="" v-model="form.title" />
                            </div>
                            <div>
                                <label for="title"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                <input type="date" name="title" id="title"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type product name" required="" v-model="form.date"
                                    @input="formatDate" />
                            </div>
                            <div class="">
                                <label for="title"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Week
                                    Name</label>
                                <input type="text" name="title" id="title"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type title" required="" v-model="form.week_name" />
                            </div>
                        </div>
                        <button type="submit"
                            class="text-white justify-center inline-flex items-center bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            @click="handleSubmit(itemId)">
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
import { getSubject } from "../../data/dashboard/class-routine-api/get-subject";
import { updateSubject } from "../../data/dashboard/class-routine-api/update-subject";
import { getClassRoutineSpacific } from "../../data/dashboard/class-routine-api/get-class-routine-spacific";
import { updateClassRoutineSpacific } from "../../data/dashboard/class-routine-api/update-class-routine-spacific";
import { vueThreeToast } from '@/utils/services/toast/vueThreeToast';
const showToast = vueThreeToast();

onMounted(() => {
    initFlowbite();
    fetchData();
    const route = useRoute();
    itemId.value = route.params.id;
    confirmEdit(itemId.value);
});

const form = reactive({
    title: "",
    date: "",
    week_name: "",
});

const getSchoolData = ref([]);
const getSubjectData = ref([]);
const getDepartmentData = ref([]);
const itemId = ref('');
const formData = new FormData();


const formatDate = () => {
    const rawDate = form.date;
    const formattedDate = new Date(rawDate).toISOString().slice(0, 10);
    form.date = formattedDate;
};

const confirmEdit = async (itemId) => {
    let data = await getClassRoutineSpacific(itemId);
    // let foundData = data.find(item => item.id === parseInt(itemId))

    form.title = data.title;
    form.date = data.date;
    form.week_name = data.week_name;
};

async function fetchData() {
    try {
        getSchoolData.value = await getSchool();
        getSubjectData.value = await getSubject();
        getDepartmentData.value = await getDepartment();
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
    }
}

const handleSubmit = async (itemId) => {
    event.preventDefault();
    try {
        const result = await updateClassRoutineSpacific(form, itemId);
        showToast('Update item successful.', 'bg-green-400');
        setTimeout(() => {
            history.back();
        }, 3000);
    } catch (error) {
        showToast('Update item failed.', 'bg-green-400');
    }
};

</script>