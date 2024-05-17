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
                            Edit Department
                        </h3>
                    </div>
                    <!-- Modal body -->
                    <form action="#" enctype="multipart/form-data">
                        <div class="grid gap-4 mb-4 sm:grid-cols-2">
                            
                            <div class="">
                                <label for="name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                <input type="text" name="name" id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type name" required="" v-model="form.name" />
                            </div>
                            <div class="">
                                <label for="designation"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Designation</label>
                                <input type="text" name="designation" id="designation"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type designation" required="" v-model="form.designation" />
                            </div>
                            <div class="">
                                <label for="phone"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                                <input type="text" name="Phone" id="Phone"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type Phone" required="" v-model="form.phone" />
                            </div>
                            <div class="">
                                <label for="fax"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fax</label>
                                <input type="text" name="fax" id="fax"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type fax" required="" v-model="form.fax" />
                            </div>
                            <div class="">
                                <label for="email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="text" name="email" id="email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type email" required="" v-model="form.email" />
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
import { getContactUS } from "../../data/dashboard/contact-us-api/get";
import { updateContactUS } from "../../data/dashboard/contact-us-api/update";
import { vueThreeToast } from '@/utils/services/toast/vueThreeToast';
const showToast = vueThreeToast();

onMounted(() => {
    initFlowbite();
    const route = useRoute();
    itemId.value = route.params.id;
    confirmEdit(itemId.value);
});

const form = reactive({
    name: "",
    designation:"",
    phone:"",
    fax:"",
    email:"",
});


const itemId = ref('');
const formData = new FormData();

const formatDate = () => {
    const rawDate = form.date;
    const formattedDate = new Date(rawDate).toISOString().slice(0, 10);
    form.date = formattedDate;
};


const confirmEdit = async (itemId) => {
    let data = await getContactUS();
    let foundData = data.find(item => item.id === parseInt(itemId))
    form.name = foundData.name;
    form.designation = foundData.designation;
    form.phone = foundData.phone;
    form.fax = foundData.fax;
    form.email = foundData.email;
};



const handleSubmit = async () => {
    event.preventDefault();

    // formData.append('Subject_name', form.Subject_name);

    try {
        const route = useRoute();
        const result = await updateContactUS(form, route.params.id);
        showToast('Update item successful.', 'bg-green-400');
        setTimeout(() => {
            history.back();
        }, 3000);

    } catch (error) {
        showToast('Update item failed.', 'bg-green-400');
    }
};

</script>