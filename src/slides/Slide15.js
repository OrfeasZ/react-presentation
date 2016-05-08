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
                Libraries & Tools
            </Heading>

            <List textColor="white">
                <ListItem>React Router (<Link href="https://github.com/reactjs/react-router" textColor="#61dafb">github.com/reactjs/react-router</Link>)</ListItem>
                <ListItem>Redux (<Link href="https://github.com/reactjs/redux" textColor="#61dafb">github.com/reactjs/redux</Link>)</ListItem>
                <ListItem>Material-UI (<Link href="https://github.com/callemall/material-ui" textColor="#61dafb">github.com/callemall/material-ui</Link>)</ListItem>
                <ListItem>Babel (<Link href="https://github.com/babel/babel" textColor="#61dafb">github.com/babel/babel</Link>)</ListItem>
                <ListItem>Webpack (<Link href="https://github.com/webpack/webpack" textColor="#61dafb">github.com/webpack/webpack</Link>)</ListItem>
                <ListItem>React Dev Tools (<Link href="https://github.com/facebook/react-devtools" textColor="#61dafb">github.com/facebook/react-devtools</Link>)</ListItem>
                <ListItem><b>Many More!</b></ListItem>
            </List>
        </Slide>
    );
};