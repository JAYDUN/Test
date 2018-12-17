import React,{Component} from 'react';
import {Text,View,ScrollView} from 'react-native';
import axios from 'axios';
import { bold } from 'ansi-colors';

class Feed extends Component{

    state = {
        feed:[]
    }

    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => this.setState({
                feed:response.data.slice(0,15)
            },()=>{
                console.log(this.state.feed)
            }))
    }

    render(){
        const {feed} = this.state;
        const {post,email,center} = styles;
        const FeedList = () => {
            return(
                <ScrollView>
                    {
                        feed.map(item => {
                            return (
                                <View style={post} key={item.id} >
                                    <Text style={email}>{item.email}</Text>
                                    <Text style={center}>Posted</Text>
                                    <Text> {item.body}</Text>
                                </View>
                            )
                            })
                    }
                </ScrollView>
                
            )
            
        }
        return(
            <View>
                <FeedList/>
            </View>
        )
    }
}

const styles = {
    post:{
        marginBottom:20,
    },
    email:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },
    center:{
        textAlign:'center'
    }
}

export default Feed;