import React from "react";
import {Text} from 'react-native';

const IMCmsg = (props)=> {
    if(props.IMC<=17) return <Text style={{fontSize:34,fontWeight:"bold", color: '#F72626'}}>Muito abaixo do peso</Text>
    if(props.IMC>=18 && props.IMC<=19) return <Text style={{fontSize:34,fontWeight:"bold", color: '#F61313'}}>Abaixo do peso</Text>
    if(props.IMC>=20 && props.IMC<=25) return <Text style={{fontSize:34,fontWeight:"bold",color: '#0987B1'}}>Peso Normal</Text>
    if(props.IMC>=26 && props.IMC<=30) return <Text style={{fontSize:34,fontWeight:"bold", color: '#EC0909'}}>Acima do peso</Text>
    if(props.IMC>=31 && props.IMC<=35) return <Text style={{fontSize:34,fontWeight:"bold", color: '#D90808'}}>Obesidade I</Text>
    if(props.IMC>=36 && props.IMC<=39) return <Text style={{fontSize:34,fontWeight:"bold", color: '#C50707'}}>Obesidade II(severa)</Text>
    if(props.IMC>=40) return <Text style={{fontSize:34,fontWeight:"bold", color: '#B10606'}}>Obesidade III(mórbida)</Text>
}

export default IMCmsg;