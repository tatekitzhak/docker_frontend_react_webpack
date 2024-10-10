const _env = {
    NODE_ENV_: JSON.stringify(process.env.REACT_APP_NODE_ENV),
    PORT_ENV_: JSON.stringify(process.env.REACT_APP_PORT),
    TRANSCRIBE_API: {
      BASE_URL: JSON.stringify('http://convertotext.com'), // http://18.117.15.244
      PORT: JSON.stringify('9000')
    },
    YOUTUBE_TRANSCRIPT_API: JSON.stringify('http://0.0.0.0'),
    CONVERTIBLE_RESOURCE: JSON.stringify('http://18.117.72.179'),
    LOCALHOST: JSON.stringify('http://localhost:8000')
  };

  module.exports = { _env }