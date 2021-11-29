import React, {Component} from "react";
import {View, Text, TextInput, Button} from 'react-native'
import IMCCalc from './IMCCalc';

export default class IMCApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, click:false};
    }

    clicarBotao = ()=>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({click:true}) 
        }
    }

    renderCalc(){
        if(this.state.click)
        {
            return(
                <IMCCalc altura={this.state.altura} peso={this.state.peso}/>
            )
        }
            
        return null
    }


    render(){
        return(
         <View>
            <TextInput
                style={{height:50, fontSize:26, alignItems: 'center'}}
                placeholder='Informe sua altura'
                onChangeText={(altura)=>this.setState({altura})}
                
            />
            <TextInput
                style={{height:50,fontSize:26, alignItems: 'center'}}
                placeholder='Informe seu peso'
                onChangeText={(peso)=>this.setState({peso})}
            />
            <Button
                title='Calcular IMC'
                onPress={this.clicarBotao}
            
            />
            {this.renderCalc()}
        </View>
        )

    }
}