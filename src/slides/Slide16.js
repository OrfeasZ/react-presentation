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
                Conclusion
            </Heading>

            <Appear>
                <div>
                    <Heading size={6} textColor="white" textAlign="left">
                        React:
                    </Heading>

                    <List textColor="white" margin="2% 0">
                        <ListItem>Makes it easy & performant to build Dynamic UIs</ListItem>
                        <ListItem>Has a relatively small learning curve</ListItem>
                        <ListItem>Is integrated with lots of Tools</ListItem>
                        <ListItem>Has huge community following</ListItem>
                    </List>
                </div>
            </Appear>

            <Appear>
                <div>
                    <Heading size={6} textColor="white" textAlign="left">
                        However, React:
                    </Heading>

                    <List textColor="white" margin="2% 0">
                        <ListItem>Isn't an MVC Framework</ListItem>
                        <ListItem>Doesn't support browsers below IE8</ListItem>
                        <ListItem>Doesn't provide built-in Components</ListItem>
                        <ListItem>Can be tricky at first</ListItem>
                    </List>
                </div>
            </Appear>
        </Slide>
    );
};
