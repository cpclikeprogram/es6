export type IHitokoto = {
  hitokoto: string
  uuid: string
  type: string
  from: string
  from_who: null
  creator: string
  creator_uid: number
  reviewer: number
  commit_from: string
  created_at: string
  status: string
}
/**
 * 事件处理函数
 */
export type CEventHandler = (...args:any)=>void;

/**
 * 自定义事件
 * 
 * @export
 * @interface CEventItem
 */
export interface CEventItem {

  /**
   * 事件名称。可以是任何简单的字符串
   * @type {string}
   * @memberOf CEventItem
   */
  name: string;

  /**
   * 事件处理函数。可以是任何有意义的实数值或函数
   * 
   * @type {CEventHandler}
   * @memberOf CEventItem
   */
  handler: CEventHandler;
}