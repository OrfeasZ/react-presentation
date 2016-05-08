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
                JSX to JavaScript
            </Heading>
            <Appear>
                <div>
                    <Text textSize="24" caps bold margin="2% 0 1% 0" textColor="white" textAlign="left">From</Text>
                    <CodePane textSize="24"lang="jsx" source={require("raw!../../assets/code/jsx3.example")} />
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textSize="24" caps bold margin="2% 0 1% 0" textColor="white" textAlign="left">To</Text>
                    <CodePane textSize="24" lang="jsx" source={require("raw!../../assets/code/jsx4.example")} />
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textSize="24" caps bold margin="4% 0 1% 0" textColor="white" textAlign="left">From</Text>
                    <CodePane textSize="24" lang="jsx" source={require("raw!../../assets/code/jsx5.example")} />
                </div>
            </Appear>
            <Appear>
                <div>
                    <Text textSize="24" caps bold margin="2% 0 1% 0" textColor="white" textAlign="left">To</Text>
                    <CodePane textSize="24" lang="jsx" source={require("raw!../../assets/code/jsx6.example")} />
                </div>
            </Appear>
        </Slide>
    );
};

