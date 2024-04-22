import { exec } from 'child_process';

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
  console.log('Building...');
  await execPromise('npm run build');
  console.log('Preparing deployment...');
  await execPromise('git init', { cwd });
  await execPromise('git add -A', { cwd });
  await execPromise('git commit -m "Deploy"', { cwd });
  console.log('Deploying...');
  await execPromise(
    'git push -f https://github.com/dhulme/dhulme.github.io.git master',
    { cwd }
  );
  console.log('Done!');
})();
