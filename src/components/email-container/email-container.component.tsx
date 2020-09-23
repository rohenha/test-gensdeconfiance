import React from "react";
import { IResult } from "Interfaces";
import { getApiContent } from "Services";

import "./email-container.component.sass";
import { ResultComponent } from "../result/result.component";
import { FormComponent } from "../form/form.component";

interface IEmailContainerProps {
}

interface IEmailContainerState {
    results: IResult[]
}

export class EmailContainer extends React.Component<IEmailContainerProps, IEmailContainerState> {

    private constructor(props: IEmailContainerProps) {
        super(props);
        this.state = {
            results: []
        };
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    private onSubmitForm(value: string, extension: string): void {
        getApiContent(value + extension).then((response: any ) => {
            this.setState((state: IEmailContainerState) => {
                return { results: [...state.results, { name: value, extension, status: response.exists}] };
            } );
        });
    }

    public render(): React.ReactElement<any>  {
        return (
            <main className="emailContainer">
                <div className="container">
                    <div className="row">
                        <div className="emailContainer__section col-md-6">
                            <h2>Enter your email address</h2>
                            <FormComponent onSubmit={this.onSubmitForm} extension="@gmail.com" />
                            <div className="emailContainer__separator"><p>or</p></div>
                            <FormComponent onSubmit={this.onSubmitForm} extension="@gensdeconfiance.com" />
                        </div>
                        <div className="emailContainer__section emailContainer__result offset-md-1 col-md-5">
                            <h2>Results</h2>
                            <ul>
                                {this.state.results.map((result: IResult, index: number) => (
                                    <li key={index}><ResultComponent result={result} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}