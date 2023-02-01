const core = require('@actions/core');
const github = require('@actions/github');

try {
    //Get input
    const name = core.getInput('who-to-greet');
    console.log('Hello ${name}')

    // post output
    const time = new Date();
    core.setOutput('time', time.toTimeString());

    // Check the context of out action.
    console.log(JSON.stringify(github, null, '/t'));
} catch (e){
    core.setFailed(e.message);
}