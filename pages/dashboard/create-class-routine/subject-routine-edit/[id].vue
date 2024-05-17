<template>
    <div class="p-4 sm:ml-64 mt-20">
        <!-- Create modal -->
        <div id="createProductModal" tabindex="-1" aria-hidden="true"
            class="justify-center items-center w-full">
            <div class="p-4 w-full  max-h-full">
                <!-- Modal content -->
                <div class="p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <!-- Modal header -->
                    <div
                        class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Edit Routine Subject
                        </h3>
                    </div>
                    <!-- Modal body -->
                    <form action="#" enctype="multipart/form-data">
                        <div class="grid gap-4 mb-4 sm:grid-cols-2">
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
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hour</label>
                                <input type="text" 
                                    name="title" 
                                    id="title"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type hour (e.g., 10:30)" 
                                    required 
                                    v-model="form.hour" 
                                    @input="restrictInput"
                                    pattern="(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]" 
                                    title="Enter a valid time (HH:MM)" />
                            </div>
                            <div>
                                <label for="category"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                                <select id="category" v-model="form.subject"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="" disabled selected>Select Subject</option>
                                    <option :value="item.id" v-for="item in getSubjectData" :key="item.id">
                                        {{ item.Subject_name }}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label for="category"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">School</label>
                                <select @change="fetchFormalDataDepartment" id="category" v-model="form.school"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="" disabled selected>Select School</option>
                                    <option :value="item.id" v-for="item in getSchoolData" :key="item.id">
                                        {{ item.School_name }}
                                    </option>
                                </select>
                            </div>
                            <div v-if="getDepartmentData && getDepartmentData.length>0">
                                <label for="category"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                <select id="category" v-model="form.department"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option value="" disabled selected>Select Department</option>
                                    <option :value="item.id" v-for="item in getDepartmentData" :key="item.id">
                                        {{ item.Department_name }}
                                    </option>
                                </select>
                            </div>
                            
                        </div>
                        <button type="submit"
                            class="text-white justify-center inline-flex items-center bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
import { getSchool } from "../../data/dashboard/class-routine-api/get-school";
import { getSubject } from "../../data/dashboard/class-routine-api/get-subject";
import { getDepartment } from "../../data/dashboard/class-routine-api/get-department";
import { getClassRoutineSpacific } from "../../data/dashboard/class-routine-api/get-class-routine-spacific";
import { getClassRoutineSpacificSubject } from "../../data/dashboard/class-routine-api/get-class-routine-spacific-subject";
import { updateClassRoutineSpacific } from "../../data/dashboard/class-routine-api/update-class-routine-spacific";
import { updateClassRoutineSpacificSubject } from "../../data/dashboard/class-routine-api/update-class-routine-spacific-subject";
import { getDepartmentsCategory } from "../../data/dashboard/youtube-play-list-api/formal/departments_get";
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
    hour: "",
    subject: "",
    department: "",
    school: "",
    date: ""
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
    let data = await getClassRoutineSpacificSubject(itemId);
    form.hour = data.hour;
    form.subject = data.subject;
    form.department = data.department;
    form.school = data.school;
    form.date = data.date;

    fetchFormalDataDepartment()
};

async function fetchData() {
    try {
        getSchoolData.value = await getSchool();
        getSubjectData.value = await getSubject();
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
    }
}

async function fetchFormalDataDepartment() {
    if(form.school){
        try {
            getDepartmentData.value = await getDepartmentsCategory(form.school);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

const handleSubmit = async () => {
    const route = useRoute();
    event.preventDefault();
    try {
        const result = await updateClassRoutineSpacificSubject(form, itemId.value);
        showToast('Update item successful.', 'bg-green-400');
        setTimeout(() => {
            history.back();
        }, 3000);

    } catch (error) {
        showToast('Update item failed.', 'bg-green-400');
    }
};


const hourInput = ref(''); // Initialize hour input
    
    const restrictInput = (event) => {
      const input = event.target;
      const inputValue = input.value;
      const lastChar = inputValue[inputValue.length - 1];
      
      // Allow digits (0-9) and colon (:)
      if (!/^\d+$/.test(lastChar) && lastChar !== ':') {
        input.value = inputValue.slice(0, -1); 
        showToast('Please Type hour (e.g., 10:30)', 'bg-green-400');
        // Remove the last character
      }
    };

</script>