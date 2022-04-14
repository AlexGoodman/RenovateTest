// https://docs.renovatebot.com/self-hosted-configuration/
module.exports = {
    // endpoint: 'https://self-hosted.gitlab/api/v4/',
    token: 'personal_access_token',
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