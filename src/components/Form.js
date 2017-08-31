import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <h1>Url Link Parser</h1>
                <form onSubmit={this.props.handleSubmit}>
                    <input type="text" name="url" onBlur={this.props.getInput} placeholder="Enter a URL to parse for links"/>
                    <br />
                    <input type="submit" value="Submit" disabled={!this.props.setUrl} />
                </form>
            </div>
        )
    }
}
