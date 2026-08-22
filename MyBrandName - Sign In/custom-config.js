//console.log('----start----');
function getCurrentConfigs () {
  
  const ENV_CONFIG = {
    "devonlineservice-login.cinfin.com": {
      WEB_CLIENT_ID: "0oa2nhda4p7jfhkN90h8",
      MOBILE_CLIENT_ID: "0oa2g4m1rk4CEznPV0h8",
      HELP_PAGE_LINK: "https://devonlineservice.cinf.net/b2c/SelfService/UIDHelp",
      HELP_PAGE_1_LINK: "https://devwww.cinf.net/phhelp",
      CREATE_ACCOUNT_LINK: "https://devonlineservice.cinf.net/b2c/SelfService/create-account",
      ENV: "development"
    },
    "qatonlineservice-login.cinfin.com": {
      WEB_CLIENT_ID: "0oa2ssofb6lrnDNyK0h8",
      MOBILE_CLIENT_ID: "0oa2sso5w9bYE6l1n0h8",
      HELP_PAGE_LINK: "https://qatonlineservice.cinfin.com/b2c/Account_Self_Service/ContactCustomerSupport.aspx",
      HELP_PAGE_1_LINK: "https://www.cinf.net/phhelp",
      CREATE_ACCOUNT_LINK: "https://onlineservice.cinf.net/b2c/SelfService/create-account",
      ENV: "qat"
    },
    "twdb.demoshailesh.com": {
      WEB_CLIENT_ID: "0oa2ssofb6lrnDNyK0h8",
      MOBILE_CLIENT_ID: "0oa2sso5w9bYE6l1n0h8",
      HELP_PAGE_LINK: "https://qatonlineservice.cinfin.com/b2c/Account_Self_Service/ContactCustomerSupport.aspx",
      HELP_PAGE_1_LINK: "https://www.cinf.net/phhelp",
      CREATE_ACCOUNT_LINK: "https://onlineservice.cinf.net/b2c/SelfService/create-account",
      ENV: "qat"
    }
  };

  // Get current Okta tenant hostname
  const currentHost = window.location.hostname;
  const currentConfig = ENV_CONFIG[currentHost];

  if (!currentConfig) {
    console.error("Unknown Okta environment:", currentHost);
    return;
  }
  console.log("Running in " + currentConfig.env );
  return currentConfig;
};

