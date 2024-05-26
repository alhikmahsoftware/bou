<template>
    <div class="p-4 sm:ml-64 mt-20">
        <div
            class="mb-5 w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-center md:space-x-3 flex-shrink-0">
            <button type="button" id="createProductModalButton" data-modal-target="createProductModal"
                data-modal-toggle="createProductModal"
                class="flex items-center justify-center text-white bg-primary hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path clip-rule="evenodd" fill-rule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
                Add Class Routine
            </button>
        </div>
        <!-- Index Table -->
        <div>
            <div v-if="loading">Data Loading...</div>
            <div v-else>
                <div class="overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-4 py-4">Id</th>
                                <th scope="col" class="px-4 py-3">Date</th>
                                <th scope="col" class="px-4 py-3">Week Name</th>
                                <th scope="col" class="px-4 py-3">Title</th>
                                <th class="text-center">Subject</th>
                                <th scope="col" class="px-4 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b dark:border-gray-700 table-row-two text-white" v-for="(item, index) in getClassRoutineData"
                                :key="index">
                                <th scope="row"
                                    class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap text-white">{{
                index + 1 }}</th>
                                <td class="px-4 py-3">{{ item.routine_date }}</td>
                                <td class="px-4 py-3">{{ item.routine_week_name }}</td>
                                <td class="px-4 py-3"> {{ item.routine_title }}</td>
                                <td>
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead
                                            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-4 py-3 w-20">Hour</th>
                                                <th scope="col" class="px-4 py-3 w-32">Subject</th>
                                                <th scope="col" class="px-4 py-3 w-36">Department</th>
                                                <th scope="col" class="px-4 py-3 w-32">School</th>
                                                <th scope="col" class="px-4 py-3 w-36">Date</th>
                                                <th scope="col" class="px-4 py-3 w-36">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b dark:border-gray-700 table-row text-white"
                                                v-for="(subject, index2) in item.routine_subject" :key="index2">
                                                <td class="px-4 py-3">{{ subject.hour }}</td>
                                                <td class="px-4 py-3">
                                                    {{
                                                        getSubjectData.find(item2 => item2.id === subject.subject)
                                                            ? getSubjectData.find(item2 => item2.id ===
                                                                subject.subject).Subject_name
                                                            : ''
                                                    }}
                                                                                        </td>
                                                                                        <!-- <td class="px-4 py-3">{{ subject.department }}</td> -->
                                                                                        <td class="px-4 py-3">
                                                                                            {{
                                                            getDepartmentData.find(item2 => item2.id === subject.department)
                                                                ? getDepartmentData.find(item2 => item2.id ===
                                                                    subject.department).Department_name
                                                                : ''
                                                        }}
                                                                                        </td>
                                                                                        <td class="px-4 py-3">
                                                                                            {{
                                                            getSchoolData.find(item2 => item2.id === subject.school)
                                                                ? getSchoolData.find(item2 => item2.id ===
                                                                    subject.school).School_name
                                                                : ''
                                                        }}
                                                </td>
                                                <!-- <td class="px-4 py-3">{{ subject.school }}</td> -->
                                                <td class="px-4 py-3">{{ subject.date }}</td>
                                                <td class="px-4 py-3 flex items-center justify-end">
                                                    <div
                                                        class="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                                        <ul class="py-1 text-sm">
                                                            <li>
                                                                <nuxt-link
                                                                    :to="`/dashboard/create-class-routine/subject-routine-edit/${subject.date}`"
                                                                    class="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                                    <svg class="w-4 h-4 mr-2"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 20 20" fill="currentColor"
                                                                        aria-hidden="true">
                                                                        <path
                                                                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                                                    </svg>
                                                                    Edit
                                                                </nuxt-link>
                                                            </li>
                                                            <li>
                                                                <button type="button"
                                                                    @click="showConfirmDialog(subject.date,'subjectDelete')"
                                                                    class="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500 dark:hover:text-red-400">
                                                                    <svg class="w-4 h-4 mr-2" viewbox="0 0 14 15"
                                                                        fill="none" xmlns="http://www.w3.org/2000/svg"
                                                                        aria-hidden="true">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                                            fill="currentColor"
                                                                            d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z" />
                                                                    </svg>
                                                                    Delete
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                                <!-- <td class="px-4 py-3 max-w-[12rem] truncate">
                                    {{
                                        data.find(item2 => item2.id === item.catvlog)
                                        ? data.find(item2 => item2.id === item.catvlog).catname
                                        : ''
                                    }}
                                </td> -->
                                <td class="px-4 py-3 flex items-center justify-end">
                                    <div
                                        class="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul class="py-1 text-sm">
                                            <li>
                                                <nuxt-link
                                                    :to="`/dashboard/create-class-routine/add-more-class/${item.routine_date}`"
                                                    class="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                    <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path
                                                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                                    </svg>
                                                    Add More Class
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link :to="`/dashboard/create-class-routine/${item.routine_date}`"
                                                    class="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200">
                                                    <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path
                                                            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                                    </svg>
                                                    Edit
                                                </nuxt-link>
                                            </li>
                                            <li>
                                                <button type="button" @click="showConfirmDialog(item.routine_date,'')"
                                                    class="flex w-full items-center py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-500 dark:hover:text-red-400">
                                                    <svg class="w-4 h-4 mr-2" viewbox="0 0 14 15" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            fill="currentColor"
                                                            d="M6.09922 0.300781C5.93212 0.30087 5.76835 0.347476 5.62625 0.435378C5.48414 0.523281 5.36931 0.649009 5.29462 0.798481L4.64302 2.10078H1.59922C1.36052 2.10078 1.13161 2.1956 0.962823 2.36439C0.79404 2.53317 0.699219 2.76209 0.699219 3.00078C0.699219 3.23948 0.79404 3.46839 0.962823 3.63718C1.13161 3.80596 1.36052 3.90078 1.59922 3.90078V12.9008C1.59922 13.3782 1.78886 13.836 2.12643 14.1736C2.46399 14.5111 2.92183 14.7008 3.39922 14.7008H10.5992C11.0766 14.7008 11.5344 14.5111 11.872 14.1736C12.2096 13.836 12.3992 13.3782 12.3992 12.9008V3.90078C12.6379 3.90078 12.8668 3.80596 13.0356 3.63718C13.2044 3.46839 13.2992 3.23948 13.2992 3.00078C13.2992 2.76209 13.2044 2.53317 13.0356 2.36439C12.8668 2.1956 12.6379 2.10078 12.3992 2.10078H9.35542L8.70382 0.798481C8.62913 0.649009 8.5143 0.523281 8.37219 0.435378C8.23009 0.347476 8.06631 0.30087 7.89922 0.300781H6.09922ZM4.29922 5.70078C4.29922 5.46209 4.39404 5.23317 4.56282 5.06439C4.73161 4.8956 4.96052 4.80078 5.19922 4.80078C5.43791 4.80078 5.66683 4.8956 5.83561 5.06439C6.0044 5.23317 6.09922 5.46209 6.09922 5.70078V11.1008C6.09922 11.3395 6.0044 11.5684 5.83561 11.7372C5.66683 11.906 5.43791 12.0008 5.19922 12.0008C4.96052 12.0008 4.73161 11.906 4.56282 11.7372C4.39404 11.5684 4.29922 11.3395 4.29922 11.1008V5.70078ZM8.79922 4.80078C8.56052 4.80078 8.33161 4.8956 8.16282 5.06439C7.99404 5.23317 7.89922 5.46209 7.89922 5.70078V11.1008C7.89922 11.3395 7.99404 11.5684 8.16282 11.7372C8.33161 11.906 8.56052 12.0008 8.79922 12.0008C9.03791 12.0008 9.26683 11.906 9.43561 11.7372C9.6044 11.5684 9.69922 11.3395 9.69922 11.1008V5.70078C9.69922 5.46209 9.6044 5.23317 9.43561 5.06439C9.26683 4.8956 9.03791 4.80078 8.79922 4.80078Z" />
                                                    </svg>
                                                    Delete
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Create modal -->
        <div id="createProductModal" tabindex="-1" aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full  max-h-full">
                <!-- Modal content -->
                <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                    <!-- Modal header -->
                    <div
                        class="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Add Class Routine
                        </h3>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-target="createProductModal" data-modal-toggle="createProductModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
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
                            <div v-for="(field, index) in fields" :key="index">
                                <h1 class="mt-2 mb-2 font-bold underline text-1xl">Add Subject ({{ index+1 }})</h1>
                                <div class="">
                                    <label for="title"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hour</label>
                                         <input type="text" 
                                    name="title" 
                                    id="title"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type hour (e.g., 10:30)" 
                                    required 
                                    v-model="field.hour" 
                                    @input="restrictInput"
                                    pattern="(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]" 
                                    title="Enter a valid time (HH:MM)" />
                                </div>
                                <div>
                                    <label for="category"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
                                    <select id="category" v-model="field.subject"
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
                                    <select @change="fetchFormalDataDepartment(field.school,index)" id="category" v-model="field.school"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option value="" disabled selected>Select School</option>
                                        <option :value="item.id" v-for="item in getSchoolData" :key="item.id">
                                            {{ item.School_name }}
                                        </option>
                                    </select>
                                </div>
                                <div v-if="field.school">
                                    <label for="category"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Department</label>
                                    <select id="category" v-model="field.department"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                        <option value="" disabled selected>Select Department</option>
                                        <option :value="item.id" v-for="item in getDepartmentDataChange[index]" :key="item.id">
                                            {{ item.Department_name }}
                                        </option>
                                    </select>
                                </div>
                                
                                <button @click.prevent="removeField(index)"
                                    class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-2 flex">Remove</button>
                            </div>

                        </div>
                        <button @click.prevent="addField"
                            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-2 mb-1"
                            style="width: 120px; height: 40px;">Add More</button> <br>
                        <!-- <button type="submit"
                            class="text-white justify-center inline-flex items-center bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            @click="handleSubmit">
                            <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewbox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clip-rule="evenodd" />
                            </svg>
                            Create
                        </button> -->
                        <div class="flex justify-center mb-5">
                            <button type="submit"
                                    class="text-white inline-flex justify-center items-center bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    @click="handleSubmit">
                                <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clip-rule="evenodd" />
                                </svg>
                                Create Routine
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <!-- Confirm Delete Popup -->
        <div v-if="showConfirmDialogFlag" class="fixed inset-0 z-50 overflow-auto">
            <div class="flex items-center justify-center min-h-screen">
                <div class="fixed inset-0 bg-black opacity-50"></div>
                <div class="relative bg-white rounded-lg max-w-md p-6 mx-auto">
                    <div class="absolute top-0 right-0 mt-3 mr-3">
                        <button class="text-gray-500 hover:text-gray-700" @click="cancel">
                            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="modal-header">
                        <h2 class="text-lg font-semibold">Confirm Deletion</h2>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete this item?</p>
                    </div>
                    <div class="modal-footer mt-4 flex justify-end space-x-4">
                        <button class="btn btn-primary" @click="confirmDelete">Confirm</button>
                        <button class="btn btn-secondary" @click="cancel">Cancel</button>
                    </div>
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
import { getClassRoutine } from "../../data/dashboard/class-routine-api/get-class-routine";
import { storeClassRoutine } from "../../data/dashboard/class-routine-api/store-class-routine";
import { storeClassSchedule } from "../../data/dashboard/class-routine-api/store-class-schedule";
import { deleteClassRoutineSubject } from "../../data/dashboard/class-routine-api/delete-class-routine-subject";
import { deleteClassRoutine } from "../../data/dashboard/class-routine-api/delete-class-routine";
import { getDepartmentsCategory } from "../../data/dashboard/youtube-play-list-api/formal/departments_get";
import { vueThreeToast } from '@/utils/services/toast/vueThreeToast';
const showToast = vueThreeToast();

const form = reactive({
    title: "",
    date: ""
});

const form2 = reactive({
    hour: "",
    subject: "",
    department: "",
    school: "",
    date: ""
});

const fields = reactive([form2]);

const addField = () => {
    //   fields.push(reactive({ ...form2 }));
    const emptyField = {
        hour: "",
        subject: "",
        department: "",
        school: "",
        date: ""
    };
    fields.splice(1, 0, { ...emptyField  });
};

const removeField = (index) => {
    fields.splice(index, 1);
};

const formatDate = () => {
    const rawDate = form.date;
    const formattedDate = new Date(rawDate).toISOString().slice(0, 10);
    form.date = formattedDate;
};


const confirmDelete = async () => {
    if(subjectDelete.value=='subjectDelete')
    { const itemId = itemIdToDelete.value;
        try {
            await deleteClassRoutineSubject(itemId)
            showToast('Subject Item deleted successfully!', 'bg-green-400');
            fetchData();
        } catch (error) {
            showToast('Subject Item deleted failed!', 'bg-red-400');
        }
    }
    else
    {
        const itemId = itemIdToDelete.value;
        if (itemId) {
            try {
                await deleteClassRoutine(itemId);
                showToast('Item deleted successfully!', 'bg-green-400');
                fetchData();
            } catch (error) {
                showToast('Item deleted failed!', 'bg-red-400');
            }
        } else {
            showToast('Item deleted failed!', 'bg-red-400');
        }
    }
    showConfirmDialogFlag.value = false;
};

const formData = new FormData();
const getSchoolData = ref([]);
const getSubjectData = ref([]);
const getDepartmentData = ref([]);
const getDepartmentDataChange = ref([]);
getDepartmentDataChange.value.push([]);
const getClassRoutineData = ref([]);
const loading = ref(true);
const showConfirmDialogFlag = ref(false);
const itemIdToDelete = ref(null);
const subjectDelete = ref(null);

const showConfirmDialog = (itemId,typeDelete) => {
    itemIdToDelete.value = itemId;
    showConfirmDialogFlag.value = true;
    subjectDelete.value=typeDelete;
};

const cancel = () => {
    showToast('Item deleted cancel!', 'bg-green-400');
    showConfirmDialogFlag.value = false;
};



async function fetchData() {
    try {
        loading.value = true;
        getSchoolData.value = await getSchool();
        getSubjectData.value = await getSubject();
        getDepartmentData.value = await getDepartment();
        getClassRoutineData.value = await getClassRoutine();
    } catch (error) {
        console.error("Error fetching data:", error);
    } finally {
        loading.value = false;
    }
}

async function fetchFormalDataDepartment(school,index) {
    if (school) {
        try {
            loading.value = true;
            getDepartmentDataChange.value[index]= await getDepartmentsCategory(school);
            console.log('data',getDepartmentDataChange)
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            loading.value = false;
        }
    }
}


fetchData();


onMounted(() => {
    initFlowbite();

});



const handleSubmit = async () => {
    event.preventDefault();
    try {
        const result = await storeClassRoutine(form);
        showToast('Add item successful.', 'bg-green-400');

        // form2.date = result.date;
        // await storeClassSchedule(form2);
        for (let i = 0; i < fields.length; i++) {
            fields[i].date =result.date;
            await storeClassSchedule(fields[i]);
        }
        location.reload();
    } catch (error) {
        showToast('Add item failed.', 'bg-green-400');
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

<style scoped>
.table-row {
    background-color: #343434; /* Light background color for even rows */
  }
.table-row-two {
    background-color: #9a9999; /* Light background color for even rows */
  }
</style>
