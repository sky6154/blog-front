export const getEnv = () => {
  const host = window.location.host;
  if(host ==="localhost:3000" || host ==="localhost:3001")
    return "dev";
  // else if(host === "test.develobeer.blog")
  //   return "test";
  else if(host === "develobeer.blog")
    return "live";
  else
    return null;
};


export const getApiServer = () => {
  let apiServer = "";

  if(getEnv() === "dev"){
    apiServer = 'http://localhost:8080';
  }
  else if(getEnv() === "dq"){
    apiServer = 'https://test.develobeer.blog';
  }
  else if(getEnv() === "live"){
    apiServer = 'https://api.develobeer.blog';
  }

  console.log("api : " + apiServer);

  return apiServer;
};