export enum httpMethods {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
  PATCH = 'patch',
  DEFAULT = 'get',
}

export enum BASE_URL {
  PRODUCTION = 'https://express-node-demo.onrender.com',
  DEV = 'https://express-node-demo.onrender.com',
}

export enum CACHING_TIME {
  INVALIDATE = 0,
  SHORT = 1, // for testing purpose otherwise its 5 minutes
  LONG = 10,
}
