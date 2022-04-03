<template>
	<header class="bg-white shadow">
		<div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center">
				<h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
				<router-link
					:to="{ name: 'SurveyCreate' }"
					class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-4 w-4 -mt-1 inline-block"
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
					Add Survey
				</router-link>
			</div>
		</div>
	</header>
	<main>
		<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
				<SurveyListItem
					v-for="survey in surveyData"
					:key="survey.id"
					:survey="survey"
					@delete="deleteSurvey(survey.id)"
				/>
			</div>
		</div>
	</main>
</template>

<script setup>
import { computed } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { useSurvey } from '../store/survey';
import SurveyListItem from './SurveyListItem.vue';

const router = useRouter();
const survey = useSurvey();

survey.getSurveys();

const surveyData = computed(() => survey.surveys.data);

const deleteSurvey = async (id) => {
	if (confirm(`Are you want to delete?`)) {
		// console.log('success');
		await survey.deleteSurvey(id);
		survey.getSurveys();
	}
};
</script>

<style scoped></style>
