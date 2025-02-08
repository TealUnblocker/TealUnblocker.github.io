function LaunchBlob() {
	const currentSiteUrl = window.location.href + '?redirect=true';

	const htmlContent = `
		<html>
			<head>
				<title>Space</title>
				<style>
					body, html {
						margin: 0;
						padding: 0;
						width: 100%;
						height: 100%;
						overflow: hidden;
					}
					iframe {
						position: fixed;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						border: none;
					}
				</style>
			</head>
			<body>
				<iframe src="${currentSiteUrl}"></iframe>
			<script>
    let CLF_config = {
        app_id: "163a312a-7cde-41ab-a80c-cb4cf281efdf",
        data: {
            user_id: '123456', // required
            user_email: 'user@email.com', // required
            user_name: 'User Name', // optional
            custom_data: {
                'JobRole': 'CEO', // optional
                'Plan': 'Pro', // optional
                'teamMates': '4', // optional
                'MonthlySpend': '50 USD' // optional
            }
        }
    };
</script>
<script async src="https://widget.changelogfy.com/index.js"></script>
</body>
		</html>
	`;

	const blob = new Blob([htmlContent], {
		type: 'text/html'
	});

	const blobUrl = URL.createObjectURL(blob);

	let newWindow = window.open(blobUrl);
	if (newWindow) {
		newWindow.onload = () => {
			newWindow.document.title = 'Teal';
		};
	}
}