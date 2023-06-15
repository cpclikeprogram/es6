import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MarkNav from "markdown-navbar";
import 'github-markdown-css';
import "./index.css"
import { theme } from "antd";
// import md from "../../assets/md/object-methods.md";

import remarkGfm from 'remark-gfm';// 划线、表、任务列表和直接url等的语法扩展
import rehypeRaw from 'rehype-raw'// 解析标签，支持html语法
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter' // 代码高亮
//高亮的主题，还有很多别的主题，可以自行选择
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CControlContext } from "../../controller/CControl";
import React from "react";
import { EVENTS } from "../../controller/Constant";



export const MdParser: React.FC = () => {
    const cControl = React.useContext(CControlContext);
    const {
        token: { colorBgContainer }
    } = theme.useToken();

    const [mdContent, setMdContent] = useState("");

    function updateMDContent() {
        // && /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(cControl.url
        if (cControl.url.length > 0 ) {
            fetch(cControl.url).then(data => data.text()).then(res => {
                setMdContent(res);
            })
        }
    }


    useEffect(() => {
        if (true) {
            fetch("/md/README.md").then(data => data.text()).then(res => {
                setMdContent(res);
            })
        }
        cControl.on("data." + EVENTS.mdChange, updateMDContent)
        return () => {
            cControl.off("data." + EVENTS.mdChange)
        }
    }, [])

    return <>
        <div className="md-cotent">
            <ReactMarkdown
                className="c-markdown"
                children={mdContent}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                            <SyntaxHighlighter
                                {...props}
                                children={String(children).replace(/\n$/, '')}
                                language={match[1]}
                                style={tomorrow}
                                PreTag="div"
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        )
                    }
                }}
            />
        </div>
        <div className="md-nav"
            style={
                {
                    backgroundColor: colorBgContainer,
                }
            }
        >
            <MarkNav
                className="md-menu"
                source={mdContent}
                headingTopOffset={80}
                ordered={true}
            />
        </div>
    </>
}

export default MdParser;