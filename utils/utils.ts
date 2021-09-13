import logUtil from './logUtil'

// 错误码
export enum MsgCode {
  SUCCESS = 200,
  PARAM_ERROR = 10001, // 参数错误
  USER_ACCOUNT_ERROR = 20001, //账号或密码错误
  USER_LOGIN_ERROR = 30001, // 用户未登录
  BUSINESS_ERROR = 40001, //业务请求失败
  AUTH_ERROR = 500001 // 认证失败或TOKEN过期
}

// 分页结构
export interface PageType {
  page: {
    pageNum: number
    pageSize: number
  }
  skipIndex: number
}

// 返回的数据结构
export interface ResponseType<T = any> {
  data: T
  msg: string
  code: MsgCode
}

/**
 * 分页结构封装
 * @param pageNum
 * @param pageSize
 */
export function pager({ pageNum = 1, pageSize = 10 }): PageType {
  pageNum = Number(pageNum)
  pageSize = Number(pageSize)
  const skipIndex = (pageNum - 1) * pageSize
  return {
    page: {
      pageNum,
      pageSize
    },
    skipIndex
  }
}

/**
 * 请求成功
 * @param data
 * @param msg
 * @param code
 */
export function success<T = any>({
  data,
  msg,
  code = MsgCode.SUCCESS
}: ResponseType<T>): ResponseType<T> {
  logUtil.debug<T>(data)
  return {
    code,
    data,
    msg
  }
}

/**
 * 请求失败
 * @param data
 * @param msg
 * @param code
 */
export function fail<T = any>({
  data,
  msg,
  code = MsgCode.BUSINESS_ERROR
}: ResponseType<T>): ResponseType<T> {
  logUtil.debug<T>(data)
  return {
    code,
    data,
    msg
  }
}
