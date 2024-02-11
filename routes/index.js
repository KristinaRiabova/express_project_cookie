const express = require('express');
const router = express.Router();
const { setCookie, getCookie } = require('../helpers/cookie');
const { setHeader, getHeader } = require('../helpers/header');


router.get('/cookie/set', (req, res) => {
  const { cookieName, cookieValue, httpOnly } = req.query;
  setCookie(res, cookieName, cookieValue, httpOnly);
  res.json({ cookieName, cookieValue, httpOnly });
});


router.get('/cookie/get/:cookieName', (req, res) => {
  const { cookieName } = req.params;
  const cookieValue = getCookie(req, cookieName);
  res.json({ [cookieName]: cookieValue });
});


router.get('/header/set', (req, res) => {
  const { headerName, headerValue } = req.query;
  setHeader(res, headerName, headerValue);
  console.log(`Header ${headerName} set to ${headerValue}`);  
  res.json({ headerName, headerValue });
});


router.get('/header/get/:headerName', (req, res) => {
  const { headerName } = req.params;
  const headerValue = getHeader(req, headerName);
  console.log('Headers received:', req.headers); 
  res.json({ [headerName]: headerValue });
});


module.exports = router;
