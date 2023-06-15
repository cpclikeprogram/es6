import React from "react";
import { CEventHandler, CEventItem, IHitokoto } from "./Type";
import { Chapter } from "../menu/Type";
import { getChapter, getHitokoto } from "../util/net/api";
import { LinkedList } from "../structure/LinkList";

export class CControl {

    /**一言
     * 
     * 
     * @private
     * @type {(IHitokoto | null)}
     * @memberOf CControl
     */
    private _hitokoto: IHitokoto | null = null;
    /**计数器
     * 
     * 
     * @private
     * @type {number}
     * @memberOf CControl
     */
    private _counter: number = 0;
    /**章节目录
     * 
     * 
     * @private
     * @type {(Chapter[] | null)}
     * @memberOf CControl
     */
    private _chapters: Chapter[] | null = null;


    /**
     * 事件处理器集合
     * 
     * @private
     * @type {Map<string, CEventItem[]>}
     * @memberOf CControl
     */
    private _eventsMap: Map<string, CEventItem[]> = new Map();

    private _content: React.ReactNode = React.createElement("div", {}, "C");


    private _linkList: LinkedList = new LinkedList();


    public get linkList(): LinkedList {
        return this._linkList;
    }
    public set linkList(value: LinkedList) {
        this._linkList = value;
    }


    /**
     * 当前目录指示的md Url
     * 
     * @private
     * @type {string}
     * @memberOf CControl
     */
    private _url: string = "";

    public get url(): string {
        return this._url;
    }
    public set url(value: string) {
        this._url = value;
    }


    public get content(): React.ReactNode {
        return this._content;
    }
    public set content(value: React.ReactNode) {
        this._content = value;
    }



    public get eventsMap(): Map<string, CEventItem[]> {
        return this._eventsMap;
    }
    public set eventsMap(value: Map<string, CEventItem[]>) {
        this._eventsMap = value;
    }


    public get chapters(): Chapter[] | null {
        return this._chapters;
    }
    public set chapters(value: Chapter[] | null) {
        this._chapters = value;
    }



    public get counter(): number {
        return this._counter;
    }
    public set counter(value: number) {
        this._counter = value;
    }


    public get hitokoto(): IHitokoto | null {
        return this._hitokoto;
    }
    public set hitokoto(value: IHitokoto | null) {
        this._hitokoto = value;
    }


    //#region  事件处理机制

    //#endregion


    loadChapter(): void {
        getChapter().then(data => {
            this._chapters = [...data]
        })
    }

    updateHitokoto(): void {
        getHitokoto().then((data: IHitokoto) => {
            this._hitokoto = data
        }
        )
    }


    read(key: string) {
        let chapter = this.findChapterByGuid(key);
        if (chapter) {
            this.url = chapter.url;
        }
    }


    findChapterByGuid(guid: string) {
        return this._chapters?.find((v) => v.GUID === guid);
    }


    /**
     * 事件注册
     * @example
     * ```ts
     * manager.on("attrChange",()=>{})
     * 
     * manager.on("attrChange.display,()=>{}")
     * ```
     * 
     * @param {string} evtStr 
     * @param {CEventHandler} handler 
     * 
     * @memberOf CControl
     */
    on(evtStr: string, handler: CEventHandler) {
        if (evtStr.length > 0) {
            let parts = evtStr.split('.');
            let baseEvent = parts[0];
            let name = parts[1] || '';
            let listenners = this._eventsMap.get(baseEvent);
            if (typeof listenners !== "undefined") {
                listenners.push({
                    name,
                    handler
                });
            } else {
                this._eventsMap.set(baseEvent, [
                    {
                        name,
                        handler
                    }
                ])
            }
        }
    }

    /**
     * 移除事件监听
     * 
     * @param {string} evtStr 
     * 
     * @memberOf CControl
     * @example
     * ```ts
     * // 正确示例
     * manager.off("attrChange");
     * // 错误示例
     * manager.off("attrChange.display");
     * ```
     */
    off(evtStr: string) {
        if (evtStr.length > 0) {
            let parts = evtStr.split('.');
            let baseEvent = parts[0];
            let name = parts[1] || "";
            if (name.length === 0) {
                this._eventsMap.delete(baseEvent);
            } else {
                this._off(baseEvent, name);
            }
        }
    }


    /**构建事件和名称移除对应的事件监听
      *
      *
      * @param {string} baseEvent 要移除的事件
      * @param {string} name 指定的名称
      * @memberof CControl
      * @example
      * ```
      * // 移除 attrChange 事件的所有名称为 display 的监听回调函数
      * manager._off("attrChange", "display");
      * ```
      */
    _off(baseEvent: string, name: string) {
        let listens = this._eventsMap.get(baseEvent);
        if (typeof listens !== "undefined") {
            let i = listens.findIndex((v) => v.name === name);
            while (i >= 0) {
                listens.splice(i, 1);
                i = listens.findIndex(v => v.name === name);
            }
        }
    }

    /**触发事件    
     * 当回调函数中包含参数时，需传入回调函数所需参数，否则可能导致回调函数报错。
     *
     * @param {string} evtStr
     * @param {...any} args
     * @memberof MainManager
     * @example
     * 1. 触发 attrChange 事件的所有回调函数
     * ```ts
     * manager.fire("attrChange");
     * ```
     * 2. 触发 attrChange 事件且name为 display 的所有回调函数
     * ```ts
     * // 事件为： attrChange 
     * // 名称为： display
     * manager.fire("attrChange.display");
     * ```
     */
    fire(evtStr: string, ...args: any) {
        if (evtStr.length > 0) {
            let parts = evtStr.split(".");
            let baseEvent = parts[0];
            let name = parts[1];
            let listens = this._eventsMap.get(baseEvent);
            if (typeof listens !== "undefined") {
                if (name.length === 0) {
                    for (const listen of listens) {
                        listen.handler(...args);
                    }
                } else {
                    for (const listen of listens) {
                        if (listen.name === name) {
                            listen.handler(...args);
                        }
                    }
                }
            }
        }
    }



}


export const cControl: CControl = new CControl();


export const CControlContext: React.Context<CControl> = React.createContext(cControl);