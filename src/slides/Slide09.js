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
                Virtual DOM
            </Heading>
            <List textColor="white">
                <ListItem>Abstract representation of real DOM</ListItem>
                <ListItem>Tree of rendered React Components</ListItem>
                <ListItem>Lives in JavaScript - single implementation</ListItem>
                <ListItem>Very fast changes</ListItem>
                <ListItem>Maps to real DOM</ListItem>
                <ListItem>Server-side Rendering</ListItem>
            </List>
        </Slide>
    );
};
