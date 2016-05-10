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
            <Heading size={4} textColor="white">
                Better Example?
            </Heading>

            <Appear>
                <div>
                    <Heading size={2} textColor="white">
                        This Presentation!
                    </Heading>

                    <CodePane style={{ overflow: 'hidden' }} textSize="24" margin="5% 0 0 0" lang="jsx" source={require("raw!../../assets/code/slide.example")} />
                </div>
            </Appear>
        </Slide>
    );
};
