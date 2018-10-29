$(function () {

	//上传图片
	var $tgaUpload = $('#goodsUpload').diyUpload({
		url: '/uploadFilePath',
		success: function (data) {},
		error: function (err) {},
		buttonText: '',
		accept: {
			title: "Images",
			extensions: 'gif,jpg,jpeg,bmp,png'
		},
		thumb: {
			width: 120,
			height: 120,
			quality: 100,
			allowMagnify: true,
			crop: true,
			type: "image/jpeg",
		},
		fileNumLimit: 1,
	});

	//kind 富文本
	KindEditor.ready(function (K) {
		window.editor = K.create('#editor_id');
	});
	KindEditor.create('#editor_id', {
		// maxWidth: "100%"
		resizeType: 1
	});
})