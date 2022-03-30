<template>
  <div class="flex items-center justify-between">
    <h3 class="text-lg font-bold">{{ index + 1 }}. {{ model.question }}</h3>

    <div class="flex items-center">
      <button
        class="flex items-center text-xs py-1 px-3 mr-2 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
        </svg>
        Add
      </button>

      <button
        class="flex items-center text-xs py-1 px-3 rounded-sm text-red-500 hover:border-red-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        Delete
      </button>
    </div>
  </div>

  <div class="gird gap-3 grid-cols-12">
    <div class="mt-3 col-span-9">
      <label
        :for="'question_text_' + model.data"
        class="block text-sm font-medium text-gray-700"
      >
        Question Text
      </label>
      <input
        type="text"
        :id="'question_text_' + model.data"
        :name="'question_text_' + model.data"
        v-model="model.question"
        @change="dataChange"
        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
    <div class="mt-3 col-span-9">
      <label class="block text-sm font-medium text-gray-700">
        Select Question Type
      </label>
      <select
        type="text"
        id="question_type"
        name="question_type"
        v-model="model.type"
        @change="typeChange"
        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-sm shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option v-for="type in questionTypes" :key="type" :value="type">
          {{ upperCaseFirst(type) }}
        </option>
      </select>
    </div>
  </div>

  <div class="mt-3 col-span-9">
    <label
      :for="'question_description_' + model.id"
      class="block text-sm font-medium text-gray-700"
    >
      Description
    </label>
    <textarea
      type="text"
      :id="'question_description_' + model.id"
      :name="'question_description_' + model.id"
      v-model="model.description"
      @change="dataChange"
      class="mt-1 block w-full rounded-md shadow-sm sm:text-sm border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
  <hr class="my-4" />
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  question: Object,
  index: Number,
});

const emit = defineEmits(["create", "edit", "delete"]);

const model = ref(JSON.parse(JSON.stringify(props.question)));
</script>

<style></style>
