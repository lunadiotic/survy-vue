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

	const questionTypes = ['text', 'select', 'radio', 'checkbox', 'textarea'];

	return {
		surveys,
		questionTypes,
	};
});
