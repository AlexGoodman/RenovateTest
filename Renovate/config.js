var secrets = require('./custom_secrets');

// https://docs.renovatebot.com/self-hosted-configuration/
module.exports = {
    // endpoint: 'https://self-hosted.gitlab/api/v4/',
    token: secrets.token, // personal access token for github,
    platform: 'github',
    onboardingConfig: {
        extends: ['config:base'],
    },
    repositories: [
        'AlexGoodman/RenovateTest',
    ],
    requireConfig: false, // Set to false if it is optional for repositories to contain a config.
    onboarding: false, // Require a Configuration PR first.
};