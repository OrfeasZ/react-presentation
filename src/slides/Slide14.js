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
                Popular Editors
            </Heading>

            <div style={{ display: 'inline-block', verticalAlign: 'top' }} >
                <Image src={images.idea.replace("/", "")} style={{ maxWidth: '30%' }} />
                <Image src={images.webstorm.replace("/", "")} style={{ maxWidth: '20%' }} />
                <Image src={images.phpstorm.replace("/", "")} style={{ maxWidth: '20%' }} />
            </div>

            <div style={{ display: 'inline-block', verticalAlign: 'top' }} >
                <Image src={images.atom.replace("/", "")} style={{ maxWidth: '22%' }} />
                <Image src={images.nuclide.replace("/", "")} style={{ maxWidth: '12%', margin: '0 0 5% 4%' }} />

                <Image src={images.vscode.replace("/", "")} style={{ maxWidth: '12%', margin: '0 0 5% 15%' }} />

                <Image src={images.sublime.replace("/", "")} style={{ maxWidth: '12%', margin: '0 0 5% 4%' }} />
            </div>
        </Slide>
    );
};

