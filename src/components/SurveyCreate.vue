<template>
	<header class="bg-white shadow">
		<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
			{{ model }}
			<div class="flex justify-between items-center">
				<h1 class="text-3xl font-bold text-gray-900">
					{{ route.params.id ? model.title : 'Create Survey' }}
				</h1>
				<button
					v-if="route.params.id"
					@click="deleteSurvey()"
					class="py-2 px-3 text-white bg-red-500 rounded-md hover:bg-red-500"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5 -mt-1 inline-block"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
							clip-rule="evenodd"
						/>
					</svg>
					Delete Survey
				</button>
			</div>
		</div>
	</header>
	<main>
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<div v-if="loading" class="flex justify-center">Loading...</div>
			<form v-else @submit.prevent="saveSurvey">
				<div class="shadow sm:rounded-md sm:overflow-hidden">
					<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
						<div>
							<label for="" class="block text-sm font-medium text-gray-700">
								Image
							</label>
							<div class="mt-1 flex items-center">
								<img
									v-if="model.image_url"
									:src="model.image_url"
									:alt="model.title"
									class="w-64 h-48 object-cover"
								/>
								<span
									v-else
									class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidden bg-gray-100"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6 text-gray-500"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
								</span>
								<button
									class="relative overflow-hidden ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-grey-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									<input
										type="file"
										@change="onImageChange"
										class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer"
									/>
									Change
								</button>
							</div>
						</div>

						<div>
							<label for="" class="block text-sm font-medium text-gray-700"
								>Title</label
							>
							<input
								type="text"
								name="title"
								v-model="model.title"
								id="title"
								class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							/>
						</div>

						<div>
							<label for="" class="block text-sm font-medium text-gray-700"
								>Description</label
							>
							<div class="mt-1">
								<textarea
									name="description"
									id="description"
									v-model="model.description"
									rows="3"
									class="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
								>
								</textarea>
							</div>
						</div>

						<div>
							<label for="" class="block text-sm font-medium text-gray-700"
								>Expired Date</label
							>
							<input
								type="date"
								name="expired_at"
								v-model="model.expired_at"
								id="expired_at"
								class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
							/>
						</div>

						<div class="flex items-start">
							<div class="flex items-center h-5">
								<input
									type="checkbox"
									name="status"
									v-model="model.status"
									class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
								/>
							</div>
							<div class="ml-3 text-sm">
								<label for="" class="font-medium text-gray-700">Active</label>
							</div>
						</div>

						<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
							<button
								type="submit"
								class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Save
							</button>
						</div>
					</div>

					<div class="px-4 py-5 bg-white space-y-6 sm:p-6">
						<h3
							class="text-2xl font-semibold flex items-center justify-between"
						>
							Questions
							<button
								@click="addQuestion()"
								class="flex items-center text-sm py-1 px-4 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
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
										d="M12 4v16m8-8H4"
									/>
								</svg>
								Add Question
							</button>
						</h3>
						<div
							v-if="!model.questions.length"
							class="text-center text-gray-600"
						>
							You don't have any questions created.
						</div>
						<div v-for="(question, index) in model.questions" :key="index">
							<QuestionEditor
								:question="question"
								:index="index"
								@create="addQuestion"
								@edit="editQuestion"
								@delete="deleteQuestion"
							/>
						</div>
					</div>
				</div>
			</form>
		</div>
	</main>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useSurvey } from '../store/survey';
import { v4 as uuidv4 } from 'uuid';
import QuestionEditor from './QuestionEditor.vue';

const route = useRoute();
const router = useRouter();
const survey = useSurvey();

const model = ref({
	title: '',
	status: false,
	description: null,
	image: null,
	image_url: null,
	expired_at: null,
	questions: [],
});

if (route.params.id) {
	survey.getSurvey(route.params.id);
}

const loading = computed(() => survey.selectedSurvey.loading);

watch(
	() => survey.selectedSurvey.data,
	(newVal, oldVal) => {
		model.value = JSON.parse(JSON.stringify(newVal));
	}
);

const onImageChange = (event) => {
	const file = event.target.files[0];
	const reader = new FileReader();
	reader.onload = () => {
		model.value.image = reader.result;
		model.value.image_url = reader.result;
	};
	reader.readAsDataURL(file);
};

const addQuestion = (index) => {
	const newQuestion = {
		id: uuidv4(),
		type: 'text',
		question: '',
		description: null,
		data: {},
	};

	model.value.questions.splice(index, 0, newQuestion);
};

const editQuestion = (question) => {
	model.value.questions = model.value.questions.map((q) => {
		if (q.id === question.id) {
			return JSON.parse(JSON.stringify(question));
		}
		return q;
	});
};

const deleteQuestion = (question) => {
	model.value.questions = model.value.questions.filter((q) => q !== question);
};

const saveSurvey = async () => {
	const result = await survey.saveSurvey(model.value);
	router.push({
		name: 'SurveyEdit',
		params: { id: result.data.data.id },
	});
	// console.log(result);
};

const deleteSurvey = async () => {
	if (confirm(`Are you want to delete?`)) {
		// console.log('success');
		await survey.deleteSurvey(model.value.id);
		router.push({
			name: 'Survey',
		});
	}
};
</script>

<style scoped></style>
