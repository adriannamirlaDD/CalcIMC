import React from "react";
import {View, Text} from 'react-native';
import IMCmsg from './IMCMsg';

const IMCCalc = (props)=>{
    const imc = props.peso / (props.altura * props.altura)
    
    if (props.altura != null && props.peso != null)
        return (
            <View>
                <Text style={{fontSize:34, fontWeight:"bold"}}>
                    IMC:{imc}
                </Text>

                <IMCmsg IMC={imc}/>
            </View>
        )
    return null


}

export default IMCCalc;