<template>
  <div class="mt-4 mb-20">
    <div class="container">
      <div class="tabs">
        <ul class="nav nav-tabs" role="tablist" aria-orientation="horizontal">
          <li
            class="nav-item"
            v-for="(button, index) in buttons"
            :key="index"
            @click="setContent(button, index)"
          >
            <button
              class="nav-link"
              :class="{ active: button.active }"
              @click="setContent(button, index)"
            >
              <span class="me-1">{{ button.routine_title }}</span>
              <span class="me-1">{{ button.routine_week_name }}</span>
              <span class="font-bold">
                ({{ getDayFromDate(button.routine_date) }})
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <div class="tab-pane active show">
          <h2 class="py-2 text-center">Class Routine</h2>
          <div class="table-responsive">
            <table class="table" v-if="responses.length > 0">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Hour</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Program</th>
                  <th scope="col">School</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="(response, index) in responses" :key="index">
                  <td>{{ response.date }}</td>
                  <td>{{ response.hour }}</td>
                  <td>
                    {{
                      getSubjectData.find(
                        (item2) => item2.id === response.subject
                      )
                        ? getSubjectData.find(
                            (item2) => item2.id === response.subject
                          ).Subject_name
                        : ""
                    }}
                  </td>
                  <td>
                    {{
                      getSchoolData.find(
                        (item2) => item2.id === response.school
                      )
                        ? getSchoolData.find(
                            (item2) => item2.id === response.school
                          ).School_name
                        : ""
                    }}
                  </td>
                  <td>{{ response.hour }}</td>
                </tr>
              </tbody>
            </table>
            <div v-else>
              <h4 class="text-center">Today, no class</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { routine } from "../../data/showcase-data";
import { getSchool } from "../../data/dashboard/class-routine-api/get-school";
import { getSubject } from "../../data/dashboard/class-routine-api/get-subject";
import { getDepartment } from "../../data/dashboard/class-routine-api/get-department";

const responses = ref([]);
const buttons = await routine();
const btnStyleIndex = ref(0);
const getSchoolData = ref([]);
const getSubjectData = ref([]);
const getDepartmentData = ref([]);

const setContent = async (buttonInfo, index) => {
  btnStyleIndex.value = index;

  buttons.forEach((btn) => {
    btn.active = false;
  });

  buttons[index].active = true;

  responses.value = buttonInfo.routine_subject;
  console.log("muhit", buttonInfo.routine_subject);

  // try {
  //   const fetchedData = await fetch(
  //     `https://opentv.nvs.la/api/captured-data/?date=${buttonInfo.date}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   if (fetchedData.ok) {
  //     const responseData = await fetchedData.json();
  //     responses.value = responseData;
  //     console.warn("responses", responses);
  //   } else {
  //     console.error("Error fetching data:", fetchedData.statusText);
  //   }
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   throw error;
  // }
};

getSchoolData.value = await getSchool();
getSubjectData.value = await getSubject();
getDepartmentData.value = await getDepartment();

const getDayFromDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  return day;
};
</script>

<style scoped lang="scss">
.overflow-y-auto {
  overflow-y: auto;
}
.max-h-80 {
  max-height: 30rem; /* Adjust as per your need */
}
.tabs {
  .nav-tabs {
    text-align: center;
    border: none;
    justify-content: space-between;
    padding: 15px 20px;
    border-radius: 10px;
    background: #225e9de6;
    margin-bottom: 30px !important;
    .nav-item {
      .nav-link {
        color: #ffffff;
        padding: 10px;
        line-height: 1.3;
        font-weight: 400;
        border: 1px solid #fff;
        transition: 0.6s;
        background-color: transparent;
        position: relative;
        padding: 30px;
        display: inline-grid;
        border: 1px solid #fff;

        &.active {
          font-weight: 500;
          &::before {
            width: 100%;
          }
        }
        &:hover {
          &::before {
            width: 100%;
          }
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          transition: 0.6s;
          height: 2px;
          width: 0;
          background: #ffffff;
        }
      }
    }
  }
}

/* Max width 767px */
@media only screen and (max-width: 767px) {
  .mt-4 {
    margin-top: 1rem;
  }
  .mb-20 {
    margin-bottom: 3rem;
  }
  .rounded-md {
    margin-bottom: 0;
  }
  .tabs {
    .nav-tabs {
      .nav-item {
        .nav-link {
          border: none;
          padding: 15px;
        }
      }
    }
  }
  .nav-item {
    width: 50%;
    border: 1px solid #eee;
  }
  .nav-link {
    display: inline-grid;
  }
  .table {
    width: 540px;
  }
  .table-responsive::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .table-responsive::-webkit-scrollbar:horizontal {
    height: 5px;
  }

  .table-responsive::-webkit-scrollbar-thumb {
    background-color: #225e9de6;
    border-radius: 10px;
  }

  .table-responsive::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #eee;
  }
}
</style>
