class UploadFormController {
	constructor($scope, $auth, ToastService, FileUploader) {
		'ngInject';

		this.$auth = $auth;
		this.ToastService = ToastService;
		var tokenHeader = 'Bearer ' + $auth.getToken();
		$scope.uploader = new FileUploader({
			url: 'api/upload',
			headers: { "Authorization": tokenHeader }
		});
	}


}

export const UploadFormComponent = {
	templateUrl: './views/app/components/upload-form/upload-form.component.html',
	controller: UploadFormController,
	controllerAs: 'vm',
	bindings: {}
}

