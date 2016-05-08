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
                DOM
            </Heading>
            <List textColor="white">
                <ListItem>Document Object Model</ListItem>
                <ListItem>Represents a Structured Document via Objects</ListItem>
                <ListItem>Documents can be HTML, XHTML, XML</ListItem>
                <ListItem>Implementation specific</ListItem>
                <ListItem>JavaScript & CSS can interact with it</ListItem>
                <ListItem>Access & Changes to it are <b>VERY SLOW</b></ListItem>
                <ListItem>Can become very hard to manage</ListItem>
            </List>
        </Slide>
    );
};
