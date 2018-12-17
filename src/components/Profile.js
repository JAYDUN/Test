import React,{Component} from 'react'
import {View, Text,ScrollView,Image,TextInput} from 'react-native'
import axios from 'axios';

class Profile extends Component {

    state = {
        isLoading:true,
        profile:[],
        search:'',
        searchResult:[],
        invalidInput:false,
    }

    componentDidMount = () => {
        axios.get('http://dummy.restapiexample.com/api/v1/employees')
            .then(response => this.setState({
                isLoading:false,
                profile:response.data
            },()=>{
                console.log(this.state.profile.length)
            }))
    }

    inputHandler = (text) => {
        const {profile} = this.state;
        if(isNaN(text)){
            this.setState({
                invalidInput:true
            })
            return;
        }
        const filterProfile = profile.filter(item => {
            return item.id.includes(text);
        })
        this.setState({
            search:text,
            searchResult:filterProfile,
            invalidInput:false
        },()=>{console.log(this.state)})
    }



    render(){
        const {isLoading,profile,search,searchResult,invalidInput} = this.state;
        const {profile_box,name,center,profile_image,search_input,error} = styles;


        const ProfileList = () => {
            return(
                <ScrollView>
                    {   
                        search
                        ?
                        searchResult.length>0
                        ?
                        searchResult.map(item => {
                            console.log(item)
                            return (
                                <View style={profile_box} key={item.id} >
                                    <Image
                                        style={profile_image}
                                        source={{uri:item.profile_image}}
                                    />
                                    <Text style={name}>{item.employee_name}</Text>
                                    <Text style={center}>is {item.employee_age} years old and makes {item.employee_salary}</Text>
                                </View>
                            )
                            })
                        :
                            <Text style={error}>NO RESULT FOUND</Text>
                        :
                        profile.map(item => {
                            console.log(item)
                            return (
                                <View style={profile_box} key={item.id} >
                                    <Image
                                        style={profile_image}
                                        source={{uri:item.profile_image}}
                                    />
                                    <Text style={name}>{item.employee_name}</Text>
                                    <Text style={center}>is {item.employee_age} years old and makes {item.employee_salary}</Text>
                                </View>
                            )
                            })
                    }
                </ScrollView>
                
            )
            
        }
        return(
            <View>
                <TextInput
                    placeholder={'Please enter ID in here'}
                    style={search_input}
                    onChangeText={this.inputHandler}
                />

                {  
                    
                    invalidInput
                    ?
                    <Text style={error}>Please enter a number</Text>
                    :
                    <ProfileList/>

                }
                
            </View>
        )
    }
}
const styles = {
    profile_box:{
        marginBottom:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name:{
        fontWeight:'bold',
        fontSize:20,
        textAlign:'center'
    },
    center:{
        textAlign:'center'
    },
    profile_image:{
        width:50,
        height:50,
        backgroundColor:'#333',
        borderRadius:50/2,
        
    },
    search_input:{
        height:40,
        width:'auto',
        margin:10,
        borderWidth:1,
        borderColor:'#ccc',
    },
    error:{
        textAlign:'center',
        color:'red'
    }

}

export default Profile;