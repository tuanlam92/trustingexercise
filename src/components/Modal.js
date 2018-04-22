import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ModalComponent extends React.Component {
    constructor(props){  
        super(props);
        this.state = {
            isClose: true,
        }
        this.closePopup = this.closePopup.bind(this);
    }  

    componentWillUpdate(nextProps, nextState){
        console.log(nextProps,nextState);
        if (nextProps.open === true && nextState.isClose===true) {
            this.openPopup();
        } else if(nextProps.open === false && nextState.isClose===false){
            this.closePopup();
        }
    }

    openPopup(){
        this.setState({
            isClose: false
        })
    }

    closePopup(){
        this.setState({
            isClose: true
        })        
    }

    render() {
        const modalClass = (this.state.isClose) ? 'modal-wrap close' : 'modal-wrap';
        return (            
            <div className={modalClass}>
                <div className="cover"></div>
                <div className="modal">
                    <div className="modal-title">
                        <h3>{this.props.title}</h3>
                        <button onClick={this.props.handlingClose} className="btn default close">
                            X
                        </button>
                    </div>
                    <div className="modal-content">
                        {this.props.content}
                    </div>
                    <div className="modal-action">
                        {this.props.actions}
                    </div>
                </div>
            </div>            
        );
    }
}

ModalComponent.propTypes = {};

export default ModalComponent;
