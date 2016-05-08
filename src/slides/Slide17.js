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
            <Heading size={1} textColor="white" textAlign="center" margin="25% 0 0 0 ">
                Thank You
            </Heading>
            <Link href="https://github.com/OrfeasZ/react-presentation" textColor="#61dafb">github.com/OrfeasZ/react-presentation</Link>
        </Slide>
    );
};
