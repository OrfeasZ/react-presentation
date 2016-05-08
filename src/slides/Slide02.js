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
                What?
            </Heading>
            <List textColor="white">
                <Appear><ListItem>JavaScript Library</ListItem></Appear>
                <Appear><ListItem>Developed by and for <u>Facebook</u></ListItem></Appear>
                <Appear><ListItem>Supports all Major <u>Desktop</u> & <u>Mobile</u> Browsers</ListItem></Appear>
                <Appear><ListItem>Built for the <u>Dynamic Web</u></ListItem></Appear>
                <Appear><ListItem>Used for creating <u>Reactive</u> and <u>Dynamic</u> Websites</ListItem></Appear>
                <Appear><ListItem>Puts the <b>V</b> in <u>MVC</u></ListItem></Appear>
                <Appear><ListItem>Offers <u>High Performance</u></ListItem></Appear>
                <Appear><ListItem><u>Simple</u>, but allows for great <u>Complexity</u></ListItem></Appear>
                <Appear><ListItem>Greatly simplifies <u>Maintenance</u></ListItem></Appear>
                <Appear><ListItem>Fully <u>Open Source</u> with huge <u>Community</u></ListItem></Appear>
            </List>
        </Slide>
    );
};
