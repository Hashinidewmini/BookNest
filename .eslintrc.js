// ESLint finds likely bugs and bad patterns in our code.
// '@react-native' is the official React Native rule set. It already includes
// TypeScript rules, React Hooks rules, and Prettier (formatting) as a lint rule.
module.exports = {
  root: true, // don't look for other ESLint configs in parent folders
  extends: '@react-native',
  // Generated or third-party folders: never lint these.
  ignorePatterns: ['node_modules/', 'android/', 'ios/', 'coverage/'],
};
