console.log('----start----');
function getCurrentConfigs () {
  // Map Okta domain hostnames to their App IDs
  const ENV_CONFIG = {
    "baptist.demoshailesh.com": {
      appId: "0oadev1234567890",
      env: "development"
    },
    "twdb.demoshailesh.com": { // or prod-987654.okta.com
      appId: "0oaprod0987654321",
      env: "production"
    }
  };

  // Get current Okta tenant hostname
  const currentHost = window.location.hostname;
  const currentConfig = ENV_CONFIG[currentHost];

  if (!currentConfig) {
    console.error("Unknown Okta environment:", currentHost);
    return;
  }

  // Execute business logic with the dynamic App ID
  console.log("Running in " + currentConfig.env + " with App ID: " + currentConfig.appId);

  // Example logic checking App ID
  //if (currentConfig.appId === "0oadev1234567890") {
    // Perform App-specific logic
  //}
  return currentConfig.appId;
};
console.log('----end----');
