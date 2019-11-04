import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hour: props.hour,
            minute: props.minute,
            seconds: props.seconds
        }
    }

    // componentDidMount() {
    //     this.update = setInterval(() => {

    //         if (this.state.seconds === 0) {
    //             this.setState({seconds: 59})
    //             this.setState({minute: this.state.minute - 1})
    //             if (this.state.minute === 0) {
    //                 this.setState({minute: 59})
    //                 this.setState({hour: this.state.hour - 1})
    //             }
    //         }

    //         this.setState({
    //             seconds: this.state.seconds - 1
    //         })
    //     })
    // }


    componentWillUnmount() {
        clearInterval(this.update)
    }

    render() {
        let { hour, minute, seconds } = this.state
        return (
            <div className='shadow-5 pa4 ma3 br3 bg-light-yellow'>
                <h3>
                    {hour}
                </h3>
                <h3>
                    {minute}
                </h3>
                <h3>
                    {seconds}
                </h3>
            </div>
        )
    }
}

export default Clock