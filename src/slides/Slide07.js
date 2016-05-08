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
            <Heading size={4} textColor="white" textAlign="center">
                High Performance - How?
            </Heading>
            <Appear>
                <Heading size={1} textColor="white" textAlign="center" margin="15% 0 0 0 ">
                    Virtual DOM!
                </Heading>
            </Appear>
        </Slide>
    );
};
