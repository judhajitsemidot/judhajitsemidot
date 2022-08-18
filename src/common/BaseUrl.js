const base_url = {
  test: process.env.NEXT_PUBLIC_TESTING_BASE_URL + "/",
  development: process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL + "/",
  production: process.env.NEXT_PUBLIC_PRODUCTION_BASE_URL + "/",
};
export default base_url;
