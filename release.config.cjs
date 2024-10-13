module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer", // Analyze commits to determine the version bump (major, minor, patch)
    "@semantic-release/release-notes-generator", // Generate release notes based on the commits
    "@semantic-release/changelog", // Write release notes to the CHANGELOG.md
    "@semantic-release/npm", // Update the version in package.json
    "@semantic-release/github", // Publish a release in GitHub
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
  ],
};
