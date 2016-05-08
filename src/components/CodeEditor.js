import React, { Component, PropTypes } from "react";
import { isUndefined } from "lodash";

var Babel = require('babel-standalone');

export default class CodeEditor extends Component
{
    constructor(props)
    {
        super(props);

        this.updateTimer = null;
    }

    render()
    {
        return (
            <pre className={this.props.className} style={this.props.style}>
                <textarea ref="editor" className="code-editor" defaultValue={this.props.source} style={this.props.editorStyle} onChange={this.onCodeChange.bind(this)} />
                <h1 style={{ textAlign: 'left', fontSize: '28px', color: '#FFF' }}>Result</h1>
                <iframe ref="frame" className="code-frame" style={{ display: 'none' }}></iframe>
            </pre>
        );
    }

    componentDidMount()
    {
        this.updateFrame();

        if (!this.props.autoHeight)
            return;

        this.refs.editor.style.height = this.refs.editor.scrollHeight + 'px';
    }

    onCodeChange(e)
    {
        if (this.updateTimer !== null)
            clearTimeout(this.updateTimer);

        this.updateTimer = setTimeout(() =>
        {
            this.updateTimer = null;
            this.updateFrame();
        }, 500);
    }

    updateFrame()
    {
        let transformedCode = '';

        try
        {
            transformedCode = Babel.transform(this.refs.editor.value, { presets: [ 'es2015', 'stage-0', 'react' ] }).code;
        }
        catch (ex)
        {
            return;
        }

        let finalCode = this.props.framesrc.replace('$$code$$', transformedCode);

        this.refs.frame.src = "data:text/html;charset=UTF-8," + encodeURIComponent(finalCode);
        this.refs.frame.style.display = 'block';
    }
}

CodeEditor.propTypes = {
    source: PropTypes.string,
    style: PropTypes.object,
    editorStyle: PropTypes.object,
    children: PropTypes.node,
    className: PropTypes.string,
    autoHeight: PropTypes.bool
};

CodeEditor.defaultProps = {
    lang: "markup",
    source: "",
    framesrc: '<!doctype html><html lang="en"><head></head><body><script type="text/javascript">$$code$$</script></body></html>',
    style: {},
    editorStyle: {},
    autoHeight: true
};