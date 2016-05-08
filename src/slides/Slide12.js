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
                React Example
            </Heading>
            <CodeEditor
                style={{ fontSize: '24px' }}
                source={require("raw!../../assets/code/comp2.example")}
                framesrc={require("raw!../../assets/code/basehtml.example")}
                autoHeight={false}
                editorStyle={{ height: '390px' }}
            />
        </Slide>
    );
};
