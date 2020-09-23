import * as React from 'react';

import "./header.component.sass";

export function Header() {
    const date = new Date();
    return (
        <header className="header">
            <nav className="container">
                    <h1>MyName</h1>
                    <p>{date.toLocaleDateString()}</p>
            </nav>
        </header>
    );
};
