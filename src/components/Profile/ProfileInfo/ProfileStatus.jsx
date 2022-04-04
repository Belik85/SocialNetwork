import React from 'react';
import d from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        title: "Yo"
    }


    activateEditMode = () => {
        // alert("hey")
        this.state.editMode = true
    }



    //
    // activateEditMode()  {
    //     this.setState({
    //         editMode: true,
    //     })
    //     // this.state.editMode = true
    //     // this.forceUpdate();
    // }

    deactivateEditMode()  {
        this.setState({
            editMode: false,
        })
        // this.state.editMode = true
        // this.forceUpdate();
    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        {/*<span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>*/}
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                        {/*<span onDoubleClick={() => {alert('hey')}}>{this.props.status}</span>*/}
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;