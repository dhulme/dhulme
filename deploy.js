const exec = require('child_process').exec;

async function execPromise(command, options) {
	return new Promise((resolve, reject) => {
		exec(command, options, (error, stdout, stderr) => {
			if (error) {
				reject(stdout);
			}
			resolve();
		});
	});
}

(async () => {
	const cwd = './dist';
	await execPromise('npm run build');
	await execPromise('git init', { cwd });
	await execPromise('git add -A', { cwd });
	await execPromise('git commit -m "Deploy"', { cwd });
	await execPromise('git push -f https://github.com/dhulme/dhulme.github.io.git master', { cwd });
})();
