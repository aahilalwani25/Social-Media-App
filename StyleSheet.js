import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#282726'
    },
    bottomSheetStyle:{
        height:'100%',
        width:'100%',
        position:'absolute',
        top: '100%',
        flex:1,
        borderRadius:20,
        backgroundColor:'white'
    },
    headerTextStyle:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
        padding:10,
        
    },
    headerStyle:{
        alignItems:'center',
        flex:0.2,
    },
    row:{
        flexDirection:'row',
    },
    buttonTextSize:{
        fontSize:20,
    },
    inputBorderStyling:{
        borderColor:'black', borderWidth:2, borderRadius:10, margin:10, padding:4
    },
    pickerBorderStyling:{
        borderColor:'black', borderWidth:2, borderRadius:10, margin:10
    }
});

