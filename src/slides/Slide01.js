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
        <Slide>
            <Image width="30%" src={images.react_logo}/>
            <Heading size={1} textColor="white">
                React.js
            </Heading>
            <Text textColor="white" margin="4% 0 0 0">
                Αλληλεπίδραση Ανθρώπου Υπολογιστή
            </Text>
            <Text textColor="white" margin="2% 0 0 0">
                Ορφέας - Ιωάννης Ζαφείρης (cs122250)
            </Text>
        </Slide>
    );
};