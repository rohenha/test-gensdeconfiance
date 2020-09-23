import React from "react";

import "./form.component.sass";

interface IFormProps {
    onSubmit : any,
    extension: string
}

interface IFormState {
    value: string
}

export class FormComponent extends React.Component<IFormProps, IFormState> {

    private constructor(props: IFormProps) {
        super(props);
        this.state = {
            value: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    private handleChange (e: any) {
        this.setState({
            value: e.target.value
        });
    }

    private submitForm(e: any): void {
        e.preventDefault();
        this.props.onSubmit(this.state.value, this.props.extension);
        this.setState({
            value: ""
        });
    }

    public render(): React.ReactElement<any> {
        return (
            <form className="form" onSubmit={this.submitForm}>
                <div className="row">
                    <div className="col-8">
                        <div className="form__input">
                            <input type="text" name="email" value={this.state.value} onChange={this.handleChange}/>
                            <label htmlFor="email">{this.props.extension}</label>
                        </div>
                    </div>
                    <div className="col-4">
                        <button className="form__button">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}