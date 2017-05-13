<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadFileController extends Controller
{
    public function upload(Request $request) {

		$this->validate($request, [
			'file' => 'required|mimes:pdf| max:64000',
		]);

    	$file = $request->file('file');
    	if ($file) {
    		//$imageName = time().'.'.$request->file->getClientOriginalExtension();
    		$file = $request->file('file');
    		$request->file->move(public_path('uploads'), $file->getClientOriginalName());
    		echo 'Uploaded successfully to uploads directory';
    	}
    }
}
