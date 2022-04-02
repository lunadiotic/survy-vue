import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

export const useSurvey = defineStore('survey-store', () => {
	const surveys = ref([
		{
			id: 100,
			title: 'The survey from idstack',
			slug: 'the-survey-from-idstack',
			status: 'draft',
			image:
				'https://img.freepik.com/free-vector/futuristic-technological-wallpaper_79603-1093.jpg',
			description:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam eius fugiat, ducimus necessitatibus harum illum quisquam possimus velit itaque placeat tenetur modi cumque enim provident nihil in odio laboriosam quasi!',
			expired_at: '2022-03-30 20:00:00',
			created_at: '2022-03-30 20:00:00',
			updated_at: '2022-03-30 20:00:00',
			questions: [
				{
					id: 1,
					type: 'select',
					question: "what's the color of rose?",
					description: null,
					data: {
						options: [
							{
								uuid: '123asdf-123sfal-123asd-123asd-321333',
								text: 'blue',
							},
							{
								uuid: '123asdf-123sfal-123asd-123asd-123121',
								text: 'blue',
							},
						],
					},
				},
			],
		},
	]);

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
				response = await axios.post(`/api/survey`, survey).then((result) => {
					surveys.value = [...surveys.value, result.data.data];
					return result;
				});
			}
			return response;
		} catch (error) {
			console.error(error.response);
			return error.response;
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
			console.log(error.response);
			throw error.response;
		}
	};

	return {
		surveys,
		selectedSurvey,
		questionTypes,
		saveSurvey,
		getSurvey,
	};
});
