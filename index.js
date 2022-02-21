const github = require('@actions/github');
const core = require('@actions/core');

// This should be a token with access to your repository scoped in as a secret.
// The YML workflow will need to set myToken with the GitHub Secret Token
// githubToken: ${{ secrets.GITHUB_TOKEN }}
// https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret
const ghToken = core.getInput('githubToken');
const bzKey = core.getInput('bugzillaKey');
const bzURL = core.getInput('bugzillaURL');

async function run() {

    const context = github.context;
    const octokit = github.getOctokit(ghToken)
    

    payload = JSON.stringify(context.payload, undefined, 2);
    core.info(`payload: ${payload}`);

    // You can also pass in additional options as a second parameter to getOctokit
    // const octokit = github.getOctokit(myToken, {userAgent: "MyActionVersion1"});

    // const { data: pullRequest } = await octokit.rest.pulls.get({
    //     owner: 'octokit',
    //     repo: 'rest.js',
    //     pull_number: 123,
    //     mediaType: {
    //       format: 'diff'
    //     }
    // });

    // console.log(pullRequest);
}

run();
