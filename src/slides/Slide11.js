import React from 'react';

import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from 'spectacle'

import CodeEditor from '../components/CodeEditor'

export default function(images) {
    return (
        <Slide align="center top">
            <Heading size={4} textColor="white" textAlign="left">
                Traditional Example
            </Heading>
            <CodePane textSize="24" margin="2% 0 0 0" lang="html" source={require("raw!../../assets/code/jq1.example")} />
            <CodePane textSize="24" margin="2% 0 0 0" lang="jsx" source={require("raw!../../assets/code/jq2.example")} />
            <CodeEditor
                style={{ fontSize: '24px' }}
                source={require("raw!../../assets/code/jq2.example")}
                framesrc={require("raw!../../assets/code/jqhtml.example")}
                autoHeight={false}
                editorStyle={{ display: 'none' }}
            />
        </Slide>
    );
};