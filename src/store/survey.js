import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useSurvey = defineStore('survey-store', () => {
	const surveys = ref([]);

	const selectedSurvey = ref({
		loading: false,
		data: {},
	});

	const questionTypes = ['text', 'select', 'radio', 'checkbox', 'textarea'];

	const saveSurvey = async (survey) => {
		delete survey.image_url;
		let response;
		try {
			if (survey.id) {
				response = await axios
					.put(`/api/survey/${survey.id}`, survey)
					.then((result) => {
						selectedSurvey.value.data = result.data.data;
						return result;
					});
			} else {
				response = await axios.post(`/api/survey`, survey)
				surveys.value = [...surveys.value, response.data.data];
				return response;
			}
			return response;
		} catch (error) {
			console.error(error);
			return error;
		}
	};

	const getSurvey = async (id) => {
		try {
			selectedSurvey.value.loading = true;
			const result = await axios.get(`/api/survey/${id}`);
			selectedSurvey.value.data = await result.data.data;
			selectedSurvey.value.loading = false;
			return result.data.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	};

	const getSurveys = async () => {
		try {
			surveys.value.loading = true;
			const result = await axios.get(`/api/survey`);
			surveys.value.data = await result.data.data;
			surveys.value.loading = false;
			return result.data.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	};

	const deleteSurvey = async (id) => {
		try {
			return axios.delete(`/api/survey/${id}`);
		} catch (error) {
			throw error.response;
		}
	};

	return {
		surveys,
		selectedSurvey,
		questionTypes,
		saveSurvey,
		getSurvey,
		getSurveys,
		deleteSurvey,
	};
});
