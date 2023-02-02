const core = require('@actions/core');
const github = require('@actions/github');

try {
    /*core.debug('Need to enable github debug key before uncommenting.');
    core.warning('Warning message.');
    core.error('Error message.');*/

    //Get input
    const name = core.getInput("who-to-greet");
    console.log(`Hello ${name}`);

    // post output
    const time = new Date();
    core.setOutput('time', time.toTimeString());

    // Check the context of out action.
    core.startGroup('Logging github object');
    console.log(JSON.stringify(github, null, "\t"));
    core.endGroup();

    core.exportVariable('HELLO', 'hello');

} catch (e){
    core.setFailed(e.message);
}