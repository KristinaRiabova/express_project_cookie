const setCookie = (res, cookieName, cookieValue, httpOnly) => {
    res.cookie(cookieName, cookieValue, { httpOnly });
  };
  
  const getCookie = (req, cookieName) => {
    return req.cookies[cookieName] || 'cookie not found';
  };
  
  module.exports = { setCookie, getCookie };