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
                React Components - JSX
            </Heading>
            <CodePane textSize="24" margin="2% 0 0 0" lang="jsx" source={require("raw!../../assets/code/comp.example")} />
            <Appear>
                <CodePane textSize="24" margin="2% 0 0 0" lang="jsx" source={require("raw!../../assets/code/jsx1.example")} />
            </Appear>
            <Appear>
                <CodePane textSize="24" margin="2% 0 0 0" lang="jsx" source={require("raw!../../assets/code/jsx2.example")} />
            </Appear>
        </Slide>
    );
};
