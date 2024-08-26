/*
 * @Author: NMTuan
 * @Email: NMTuan@qq.com
 * @Date: 2024-02-08 21:06:56
 * @LastEditTime: 2024-08-20 17:42:44
 * @LastEditors: nmtuan nmtuan@qq.com
 * @Description:
 * @FilePath: \myMemo\server\utils\rs.ts
 */

// 定义消息接口
interface Message {
    code: number
    message: string
}

// 定义响应结果接口
interface Result<T> {
    code: number | string | T
    message: string | T
    data: T
    timestamp: number
}

// 定义状态码枚举
enum StatusCode {
    OK = 200,
    NOT_FOUND = 404,
    // 添加其他状态码...
}

// 定义消息列表
const messages: Record<StatusCode, string> = {
    [StatusCode.OK]: '',
    [StatusCode.NOT_FOUND]: 'Not Found',
    // 添加其他消息...
}

// 定义 rs 函数
export function rs<T>(
    codeOrData: StatusCode | T,
    messageOrData?: string | T,
    data?: T
): Result<T> {
    let code: StatusCode = StatusCode.OK;
    let message: string = '';
    let resultData: T = {} as T;

    if (typeof codeOrData === 'number') {
        code = codeOrData;
        if (typeof messageOrData === 'string') {
            message = messageOrData;
            resultData = data || {} as T;
        } else {
            resultData = messageOrData as T || {} as T;
        }
    } else {
        resultData = codeOrData;
    }

    message = messages[code as StatusCode] ?? message ?? '';

    return {
        code,
        message,
        data: resultData,
        timestamp: Date.now()
    }
}