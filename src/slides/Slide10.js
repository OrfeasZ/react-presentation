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
                Virtual DOM Rendering
            </Heading>
            <List textColor="white">
                <Appear><ListItem>Change happens in a Component</ListItem></Appear>
                <Appear><ListItem>React renders all Components into new vDOM</ListItem></Appear>
                <Appear><ListItem>Diffs new vDOM with old vDOM</ListItem></Appear>
                <Appear><ListItem>Computes minimal set of changes</ListItem></Appear>
                <Appear><ListItem>Applies them to real DOM</ListItem></Appear>
                <Appear><ListItem><b>FAST!</b></ListItem></Appear>
            </List>
        </Slide>
    );
};
