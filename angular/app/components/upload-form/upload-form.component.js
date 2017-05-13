class UploadFormController {
	constructor($auth, ToastService) {
		'ngInject';

		this.$auth = $auth;
		this.ToastService = ToastService;
	}

    $onInit(){
        this.email = '';
        this.password = '';
    }

	upload() {
		let user = {
			email: this.email,
			password: this.password
		};

		this.$auth.login(user)
			.then((response) => {
				this.$auth.setToken(response.data);

				this.ToastService.show('Logged in successfully.');
			})
			.catch(this.failedLogin.bind(this));
	}

	failedUpload(response) {
		if (response.status === 422) {
			for (let error in response.data.errors) {
				return this.ToastService.error(response.data.errors[error][0]);
			}
		}
		this.ToastService.error(response.statusText);
	}
}

export const UploadFormComponent = {
	templateUrl: './views/app/components/upload-form/upload-form.component.html',
	controller: UploadFormController,
	controllerAs: 'vm',
	bindings: {}
}

