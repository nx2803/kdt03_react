// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app){
//   app.use(
//     // 브라우저에서 '/api' 경로로 요청하면 이 프록시가 작동합니다.
//     createProxyMiddleware('/api', {
//       // 실제 공공 데이터 API의 호스트 주소
//       target: 'https://apis.data.go.kr',
//       // API 호출 시 '/api' 부분을 제거하고 요청을 보냅니다.
//       pathRewrite: {
//         '^/api':''
//       },
//       // CORS를 우회하기 위해 요청의 Origin을 target으로 변경합니다. (필수)
//       changeOrigin: true
//     })
//   );
// };
