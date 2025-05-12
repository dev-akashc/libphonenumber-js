import exec from './exec.js'

export default function()
{
    console.log()
    console.log('========================================')
    console.log('=          Committing changes          =')
    console.log('========================================')
    console.log()

    // Stage all changes
    console.log(exec('git add .'))

    // Get current date for a more specific commit message
    const now = new Date();
    const commitDate = now.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    const commitTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    const commitMessage = `Automated commit: Updates on ${commitDate} at ${commitTime}`;

    // Commit changes with the dynamic message
    console.log(exec(`git commit -m "${commitMessage}"`));
}