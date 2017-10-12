import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

import Images from '../../themes/images'
import { 
    Wrapper,
    Content, 
    Text, 
    Heading, 
    SignUpLink, 
    Image, 
    Arrow } from './Style'

class MainBanner extends React.Component {
    
    pageNavigation = () => {  
        if(this.props.type === 'talent'){
            window.localStorage.getItem('profileId') ? browserHistory.push('/profile/talent') : browserHistory.push('/signup/talent')
        } else {
            browserHistory.push('/signup/employer')
        }
    }

    render() {
        return (
            <Wrapper>
                <Content employer={this.props.type === 'employer'}>
                    { this.props.type === 'talent' ?
                        <Text>Agents are not just for people like Zlatan and Aguilera.<br/>
                        Agentify helps you find the perfect opportunity by assigning you an agent,<br/>
                        who works with you and advises you on career change.<br/>
                        And it’s free. Forever.</Text> : 
                        <Text employer>Agentify helps you lower your CAC (Cost of Acquisition) of finding and hiring great talent.<br/>
                        We multiply your existing resources by 100x, and help you work faster, <br/>
                        smarter and hire better talent. Now.<br/></Text>
                    }
                    <Heading>Get your own agent</Heading>
                    <SignUpLink onClick={() =>this.pageNavigation()}>Go</SignUpLink>
                    <Text smaller><Image src={ Images.clock } />2 min. Sign up - and it's free for talent (forever)</Text>
                </Content>
                    <Arrow><img src={Images.arrowDown} alt="arrow" /></Arrow>
            </Wrapper>
        )
    }
}

// Map state to props
const mapStateToProps = (state) => {
    return {
        type: state.auth.type
    }
}

export default connect(mapStateToProps)(MainBanner)