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

export default function(images) {
    return (
        <Slide align="center top">
            <Heading size={4} textColor="white" textAlign="left">
                Reactive - How?
            </Heading>
            <Appear>
                <Heading size={5} textColor="white" textAlign="left" margin="5% 0 0 0 ">
                    React Components!
                </Heading>
            </Appear>
            <Appear>
                <List textColor="white">
                    <ListItem>Defined in simple JavaScript</ListItem>
                    <ListItem>Take input data and return what to display</ListItem>
                    <ListItem>Maintain their own state</ListItem>
                    <ListItem>Can be combined with other Components</ListItem>
                </List>
            </Appear>
            <Appear>
                <CodePane textSize="24" lang="jsx" source={require("raw!../../assets/code/comp.example")} />
            </Appear>
        </Slide>
    );
};