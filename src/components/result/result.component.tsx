import React from "react";
import { IResult } from "Interfaces";

import "./result.component.sass";

interface IResultProps {
    result: IResult
}

export function ResultComponent ({ result }: IResultProps) {
    const email = result.name + result.extension;
    const text = result.status ? `${email} is a GDC member` : `BOOOH we don't know ${email}`;
    const className = result.status ? 'result--good' : 'result--bad';
    return <div className={`result ${className}`}>
        <p>{text}</p>
    </div>
}